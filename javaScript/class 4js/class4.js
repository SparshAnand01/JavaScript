let user={
    firstname:"Jasbir",
    lastname:"Singh",
    campus:"Sushant University",
    email:"abc@gmail.com",
    age: 29,
    mobile: 12344556576,
    hobbies: ["Reading","sports","music"],
    isadult:true
}
//print 
console.log("obj",user);


//access a key
console.log("firstname",user.firstname);
console.log("age",user.age);
console.log("hobbies",user.hobbies[1]);

//taking input from user
let userinput=prompt("enter username");
let a =userinput;







let cap={
firstName: "Steve",
lastName:"Rogers",
 address:{
    country:"US",
    state:"New York",
    city:"Manhatten",

 },
enemies:["Hydra","Iron Man","Thanos","Ultron"],
greet:function(){
    console.log("cap says Hi");
 }
}

//access nested bojects
console.log("city",cap.address.city);
//access nested array value
console.log("last enemy",cap.enemies[cap.enemies.length-2]);

cap.greet();