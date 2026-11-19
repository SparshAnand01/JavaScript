let addElem = document.getElementById("add");
let subElem = document.getElementById("sub");
let mulElem = document.getElementById("mul");
let divElem = document.getElementById("div");

let inputOneElem = document.getElementById("inputOne");
let inputTwoElem = document.getElementById("inputTwo");

let calculate = document.getElementById("Calculator");

let outputElem = document.getElementById("Output");
outputElem.textContent = 0;

let selectedOperator = '';



addElem.addEventListener('click', function () {
    selectedOperator = addElem.textContent;
    addElem.style.backgroundColor="blue";
    addElem.style.color="white";
})

subElem.addEventListener('click', function () {
    selectedOperator = subElem.textContent;
    subElem.style.backgroundColor="blue";
    subElem.style.color="white";
})

mulElem.addEventListener('click', function () {
    selectedOperator = mulElem.textContent;
    mulElem.style.backgroundColor="blue";
    mulElem.style.color="white";
})

divElem.addEventListener('click', function () {
    selectedOperator = divElem.textContent;
    divElem.style.backgroundColor="blue";
    divElem.style.color="white";
})