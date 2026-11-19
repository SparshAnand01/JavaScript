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

let selectedElem = null;



addElem.addEventListener('click', function () {
    if(selectedElem){
        selectedElem.style.backgroundColor = "";
        selectedElem.style.color = "";
        selectedElem = addElem;
        selectedOperator = addElem.textContent;
        addElem.style.backgroundColor="blue";
        addElem.style.color="white";
    }
    else{
        selectedElem = addElem;
        selectedOperator = addElem.textContent;
        addElem.style.backgroundColor="blue";
        addElem.style.color="white";
    }
})

subElem.addEventListener('click', function () {
    if(selectedElem){
        selectedElem.style.backgroundColor = "";
        selectedElem.style.color = "";
        selectedElem = subElem;
        selectedOperator = subElem.textContent;
        subElem.style.backgroundColor="blue";
        subElem.style.color="white";
    }
    else{
        selectedElem = subElem;
        selectedOperator = subElem.textContent;
        subElem.style.backgroundColor="blue";
        subElem.style.color="white";
    }
})

mulElem.addEventListener('click', function () {
    if(selectedElem){
        selectedElem.style.backgroundColor = "";
        selectedElem.style.color = "";
        selectedElem = mulElem;
        selectedOperator = mulElem.textContent;
        mulElem.style.backgroundColor="blue";
        mulElem.style.color="white";
    }
    else{
        selectedElem = mulElem;
        selectedOperator = mulElem.textContent;
        mulElem.style.backgroundColor="blue";
        mulElem.style.color="white";
    }
})

divElem.addEventListener('click', function () {
    if(selectedElem){
        selectedElem.style.backgroundColor = "";
        selectedElem.style.color = "";
        selectedElem = divElem;
        selectedOperator = divElem.textContent;
        divElem.style.backgroundColor="blue";
        divElem.style.color="white";
    }
    else{
        selectedElem = divElem;
        selectedOperator = divElem.textContent;
        divElem.style.backgroundColor="blue";
        divElem.style.color="white";
    }
})

    
    
