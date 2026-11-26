// ============================================================================
// ParkEase Partner — Owner & Guard Operations Console
// ============================================================================

let state = {
  theme: "light",
  ownerLotFull: false,
  quotas: {
    "2W": { total: 10, occupied: 4 },
    "4W": { total: 6, occupied: 3 },
    "SUV": { total: 3, occupied: 1 },
    "EV": { total: 2, occupied: 1 }
  },
  ledger: {
    gross: 18450,
    commissionRate: 0.15,
    gstRate: 0.18
  },
  passes: {
    "PE-HR-4821": { vehicleType: "4W", vehicleNumber: "HR26 EQ 9012", status: "CONFIRMED", fee: 55 },
    "PE-DL-7390": { vehicleType: "SUV", vehicleNumber: "DL8C AX 7741", status: "CHECKED_IN", fee: 120 }
  },
  gateLogs: [
    { time: "10:14 PM", vehicle: "DL8C AX 7741 (SUV)", code: "PE-DL-7390", action: "CHECKED_IN" },
    { time: "09:42 PM", vehicle: "HR51 EV 1104 (EV)", code: "PE-HR-3319", action: "COMPLETED" }
  ],
  mySpaces: [
    { title: "Shanti Niketan RWA Basement B1", state: "HR", stateName: "Haryana", type: "RWA Spare Slot", hourly: 50, slots: 21, status: "LIVE" },
    { title: "DLF Phase-3 U-Block Stilt Bay", state: "HR", stateName: "Haryana", type: "Builder Floor Stilt", hourly: 45, slots: 4, status: "LIVE" }
  ]
};

document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  bindEvents();
  renderAll();
});

function initTheme() {
  const saved = localStorage.getItem("parkease-theme");
  const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  applyTheme(saved || (prefersDark ? "dark" : "light"), false);

  document.getElementById("themeToggle").addEventListener("click", () => {
    applyTheme(state.theme === "dark" ? "light" : "dark", true);
  });
}

function applyTheme(theme, persist = true) {
  state.theme = theme;
  document.documentElement.setAttribute("data-theme", theme);
  document.getElementById("themeToggle").setAttribute("aria-checked", theme === "dark" ? "true" : "false");
  if (persist) localStorage.setItem("parkease-theme", theme);
}

function bindEvents() {
  document.getElementById("emergencyFullToggle").addEventListener("change", (e) => {
    state.ownerLotFull = e.target.checked;
    renderQuotas();
    showToast(state.ownerLotFull ? "Lot marked FULL across NCR Driver App" : "Lot reopened for bookings");
  });

  document.getElementById("openOnboardModalBtn").addEventListener("click", () => {
    document.getElementById("onboardModal").classList.remove("hidden");
  });

  document.querySelectorAll("[data-close]").forEach(el => {
    el.addEventListener("click", () => document.getElementById(el.dataset.close).classList.add("hidden"));
  });

  document.querySelectorAll("[data-sample]").forEach(btn => {
    btn.addEventListener("click", () => {
      document.getElementById("manualCodeInput").value = btn.dataset.sample;
    });
  });

  document.getElementById("verifyCheckInBtn").addEventListener("click", handleGuardScan);

  document.getElementById("onboardForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const st = document.getElementById("newState").value;
    const stName = st === "DL" ? "New Delhi" : "Haryana";
    state.mySpaces.unshift({
      title: document.getElementById("newTitle").value,
      state: st,
      stateName: stName,
      type: document.getElementById("newType").value,
      hourly: Number(document.getElementById("newHourlyRate").value),
      slots: Number(document.getElementById("newSlots").value),
      status: "PENDING_KYC"
    });
    document.getElementById("onboardModal").classList.add("hidden");
    e.target.reset();
    renderMySpaces();
    showToast(`Submitted "${state.mySpaces[0].title}" for Trust & Ops KYC review`);
  });
}

function renderAll() {
  renderKPIs();
  renderQuotas();
  renderGateLogs();
  renderMySpaces();
}

function renderKPIs() {
  const gross = state.ledger.gross;
  const comm = Math.round(gross * state.ledger.commissionRate);
  const gst = Math.round(comm * state.ledger.gstRate);
  const net = gross - comm - gst;

  document.getElementById("ownerGrossKpi").textContent = `₹${gross.toLocaleString("en-IN")}`;
  document.getElementById("ownerCommKpi").textContent = `- ₹${comm.toLocaleString("en-IN")}`;
  document.getElementById("ownerGstKpi").textContent = `- ₹${gst.toLocaleString("en-IN")}`;
  document.getElementById("ownerNetKpi").textContent = `₹${net.toLocaleString("en-IN")}`;
}

function renderQuotas() {
  const container = document.getElementById("ownerInventoryControls");
  container.innerHTML = "";

  Object.entries(state.quotas).forEach(([vType, data]) => {
    const free = state.ownerLotFull ? 0 : Math.max(0, data.total - data.occupied);
    const row = document.createElement("div");
    row.className = "quota-row";
    row.innerHTML = `
      <div>
        <strong>${vType} Pool</strong>
        <p class="card-sub">${state.ownerLotFull ? data.total : data.occupied} of ${data.total} occupied</p>
      </div>
      <div class="stepper">
        <button class="step-btn" onclick="adjustSlot('${vType}', -1)">-</button>
        <strong>${free} free</strong>
        <button class="step-btn" onclick="adjustSlot('${vType}', 1)">+</button>
      </div>
    `;
    container.appendChild(row);
  });
}

window.adjustSlot = function(vType, delta) {
  if (state.ownerLotFull) {
    showToast("Disable Emergency FULL toggle before adjusting individual slots.");
    return;
  }
  const q = state.quotas[vType];
  // The stepper controls FREE slots: + adds availability, - removes availability.
  q.occupied = Math.min(q.total, Math.max(0, q.occupied - delta));
  renderQuotas();
};

function handleGuardScan() {
  const code = document.getElementById("manualCodeInput").value.trim().toUpperCase();
  const logBox = document.getElementById("scanResultLog");
  const pass = state.passes[code];

  if (!pass) {
    logBox.innerHTML = `<span style="color:var(--danger); font-weight:600;">Invalid or expired pass code. Try PE-HR-4821 or PE-DL-7390.</span>`;
    return;
  }

  const now = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

  if (pass.status === "CONFIRMED") {
    pass.status = "CHECKED_IN";
    state.quotas[pass.vehicleType].occupied = Math.min(
      state.quotas[pass.vehicleType].total,
      state.quotas[pass.vehicleType].occupied + 1
    );
    state.gateLogs.unshift({ time: now, vehicle: `${pass.vehicleNumber} (${pass.vehicleType})`, code, action: "CHECKED_IN" });
    logBox.innerHTML = `<span style="color:var(--success); font-weight:600;">✔ Entry Verified: ${pass.vehicleNumber} checked in offline.</span>`;
    showToast("Driver checked in offline");
  } else if (pass.status === "CHECKED_IN") {
    pass.status = "COMPLETED";
    state.quotas[pass.vehicleType].occupied = Math.max(0, state.quotas[pass.vehicleType].occupied - 1);
    state.ledger.gross += pass.fee;
    state.gateLogs.unshift({ time: now, vehicle: `${pass.vehicleNumber} (${pass.vehicleType})`, code, action: "COMPLETED" });
    logBox.innerHTML = `<span style="color:var(--brand-dark); font-weight:600;">✔ Exit Logged: ${pass.vehicleNumber} checked out & slot released.</span>`;
    showToast("Exit logged & T+2 payout updated");
  } else {
    logBox.innerHTML = `<span style="color:var(--text-secondary); font-weight:600;">Pass ${code} has already completed its session.</span>`;
  }

  renderAll();
}

function renderGateLogs() {
  document.getElementById("gateLogList").innerHTML = state.gateLogs.map(item => `
    <div class="queue-card">
      <div>
        <strong>${item.vehicle}</strong>
        <p class="card-sub">Code: <code>${item.code}</code> • ${item.time}</p>
      </div>
      <span class="status-badge ${item.action === "CHECKED_IN" ? "success" : ""}">${item.action}</span>
    </div>
  `).join("");
}

function renderMySpaces() {
  document.getElementById("mySpacesList").innerHTML = state.mySpaces.map(sp => `
    <div class="queue-card">
      <div>
        <span class="state-tag ${sp.state.toLowerCase()}">${sp.stateName.toUpperCase()}</span>
        <strong>${sp.title}</strong>
        <p class="card-sub">${sp.type} • ₹${sp.hourly}/hr • ${sp.slots} slots</p>
      </div>
      <span class="status-badge ${sp.status === "LIVE" ? "success" : "warning"}">${sp.status}</span>
    </div>
  `).join("");
}

function showToast(msg) {
  const toast = document.getElementById("toast");
  toast.textContent = msg;
  toast.classList.remove("hidden");
  clearTimeout(window._toastTimer);
  window._toastTimer = setTimeout(() => toast.classList.add("hidden"), 3000);
}
