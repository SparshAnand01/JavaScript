let titleElem = document.getElementById("title");
let descriptionElem = document.getElementById("description");
let dateElem = document.getElementById("date");
let addTodoBtnElem = document.getElementById("addTodo");

let todoList = [];
addTodoBtnElem.addEventListener('click',function(){
    let title = titleElem.value ;
    let discription = descriptionElem.value;
    let date = dateElem.value;

    if(!title||!discription || !date){
        alert("Enter all values");
        return;
    }
    todoList.push({
        title,
        discription,
        date
    });
    titleElem.value="";
    descriptionElem.value="";
    dateElem.value="";
    renderElem();
});


let listtodoElem = document.getElementById("listTodo");
let listFragmentElem = document.createDocumentFragment();
function renderElem(){
    listtodoElem.innerHTML="";
for(let i=0; i<todoList.length ; i++){      
    let displayTitle = todoList[i].title;
    let displayDescription = todoList[i].discription;
    let displayDate = todoList[i].date;

    
    let divElem = document.createElement("div");
    let titleparaElem = document.createElement("p");
    let descriptionparaElem = document.createElement("p");
    let dateparaElem = document.createElement("p");


    titleparaElem.textContent = displayTitle;
    descriptionparaElem.textContent = displayDescription;
    dateparaElem.textContent = displayDate;


 let removeBtnElem = document.createElement("button");
    removeBtnElem.textContent = "Remove";
    removeBtnElem.addEventListener('click',function(){
        divElem.remove();
    })


    divElem.append(titleparaElem, descriptionparaElem , dateparaElem,removeBtnElem);
    listFragmentElem.appendChild(divElem);
}
listtodoElem.appendChild(listFragmentElem);
}