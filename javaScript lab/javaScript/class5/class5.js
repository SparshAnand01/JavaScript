let user={
    name:"aarav",
    age:20,
    course:"B.Tech CSE",
    subjects:["DSA","WEB DEV","MATH"],
    isenrolled:true
}
console.log("obj",user);
console.log("name",user.name);
console.log("age",user.age);
console.log("sub",user.subjects[1]);

let varkey="course";
console.log(user[varkey]);

user.graduationyear=2026;
console.log("obj",user);

delete user.name;
console.log("obj",user);


user.age=30;
console.log("obj",user);
user.isenrolled="false";

console.log("obj",user);


let contact= [
    {
        firstname: "Harry",
        number:"0994"
    },
    {
        firstname: "Sherlock",
        number:"0487"
    }
];

let search = "Harry";
let found = false;

for (let i = 0; i < contact.length; i++) {

    if (contact[i].firstname == search) {
        console.log(contact[i].number);
        found = true;
        break;
    }
}
if (found ==false) {
    console.log("No such contact");
}
