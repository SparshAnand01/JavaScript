let arr=[1,2,3,4,5];
arr.push(10);
console.log("length of arr",arr.length);
console.log("value in arr",arr);
arr.pop();
console.log("length of the arr",arr.length);
console.log("value in arr",arr);
arr.unshift(6);
console.log("vaule of arr",arr);
arr.shift();
console.log("vale of arr",arr);




let a;
console.log("a is ",a);

a=10;
console.log("a is",a);
console.log("number division",5/2);



let str="double quote string ";
let str1='single quote string';
console.log("str",str);
console.log("str",str1);



let mat=[10,20,30,40,50];

console.log("2 element",mat[1]);

console.log("6 element",mat[5]);




let value=null;
console.log("value",value);




function myFN(){
    console.log("I am a reusable block of code");
}
console.log("Before function");

myFN()
console.log("after function");



function fnWithPara(var1,var2){
    console.log("var1",var1,"var2",var2);

}
console.log("before");
fnWithPara(10,20);
console.log("After");








let userinput = prompt("Enter your input");
let brr=[];


for (let i = 1; i <= userinput; i++) {
    let str = "";

    for (let j = 1; j <= i; j++) {
        str += j + " ";
    }

    brr.push(str);
}
for(let i=0;i<brr.length;i++){
    console.log(arr[i]);
}