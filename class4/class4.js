let titleElement = document.getElementById("title");
let descriptionElement = document.getElementById("description");
let dateElement = document.getElementById("date");

let addTodoBtnElement = document.getElementById("addTodo");

let todolist=[];

addTodoBtnElement.addEventListener('click',function(){
 let title=titleElement.value;
 let description=descriptionElement.value;
 let date=dateElement.value;

 if(!title||!description||!date){
    alert("Enter all values!");
    return;
 }
 todolist.push({
    title,
    description,
    date
 });

 titleElement.value="";
 descriptionElement.value="";
 dateElement.value="";

});

let listTodoElement= document.getElementById("listTodo");
let listFragmentElement=document.createDocumentFragment();
function renderElement(){
for(let i=0;i<todolist.length;i++){
    let displayTitle=todolist[i].title;
    let displayDescription = todolist[i].description;
    let displayDate=todolist[i].date;

    let divElement = document.createElement("div");
    let titleParaElement=document.createElement("p");
    let descriptionParaElement=document.createElement("p");
    let dateParaElement=document.createElement("p");


    titleParaElement.textContent=displayTitle;
    descriptionParaElement.textContent=displayDescription;
    dateParaElement.textContent=displayDate;

  let removeBtnElement= document.createElement("button");
  removeBtnElement.addEventListener('click',function(){

  });
  divElement.append(titleParaElement,descriptionParaElement,dateParaElement,removeBtnElement);
  listFragmentElement.appendChild(divElement);
}
listTodoElement.appendChild();
}
