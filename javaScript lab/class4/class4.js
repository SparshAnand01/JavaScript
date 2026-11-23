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
 

})