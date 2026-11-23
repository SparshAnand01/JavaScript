let titlelem = document.getElementById("title");
let descriptionelem = document.getElementById("description");
let dateelem = document.getElementById("date");
let addtodobtelem = document.getElementById("addTodo");

let todolist = [];

addtodobtelem.addEventListener('click', function () {

    let title = titlelem.value;
    let description = descriptionelem.value;
    let date = dateelem.value;

    if (!title || !description || !date) {
        alert("Enter all values");
        return;
    }

    todolist.push({
        title,
        description,
        date
    });

    titlelem.value = "";
    descriptionelem.value = "";
    dateelem.value = "";

    renderelement();
});

let listtodoelem = document.getElementById("listtodo");

function renderelement() {

    listtodoelem.innerHTML = "";

    for (let i = 0; i < todolist.length; i++) {

        let displaytitle = todolist[i].title;
        let displaydescription = todolist[i].description;
        let displaydate = todolist[i].date;

        let divElem = document.createElement("div");
        divElem.classList.add("todo-card");

        let titleparaelem = document.createElement("h3");
        let descriptionparaelem = document.createElement("p");
        let dateparaelem = document.createElement("p");

        titleparaelem.textContent = displaytitle;
        descriptionparaelem.textContent = displaydescription;
        dateparaelem.textContent = "Date: " + displaydate;

        let removebtnelem = document.createElement("button");

        removebtnelem.textContent = "Remove";
        removebtnelem.classList.add("remove-btn");

        removebtnelem.addEventListener("click", function () {

            todolist.splice(i, 1);

            renderelement();

        });

        divElem.append(
            titleparaelem,
            descriptionparaelem,
            dateparaelem,
            removebtnelem
        );

        listtodoelem.appendChild(divElem);
    }
}