let userName= prompt("Enter the userName");
let userRoll=Number(prompt("enter the userRoll"));
let userClass=prompt("enter the userClass");



let user={
    userName,
    userRoll,
    userClass,
    assignValue:function (userName,userRoll,userClass) {
        this.userName=userName,
        this.userRoll=userRoll,
        this.userClass=userClass
        
    },
    greet:function(){
        console.log(this.userName,this.userRoll,this.userClass)
    }
} 
user.assignValue(userName,userRoll,userClass);
user.greet();