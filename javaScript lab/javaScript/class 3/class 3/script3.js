
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
    console.log(brr[i]);
}



//Strings..................................................


let str="hello i am a string";
let str1='hello i am a string';
console.log("str->",str);
console.log("str->",str1);



//String concatination


let mystr=1+" "+2+" "+3;
console.log(mystr);


//template literals
let template =`it is also a string 
it should have something`;
console.log("template",template);


//concatnating in template strings
let varname="Jasbir";
let templatestr=`hello my name is :${varname}`;
console.log(templatestr);


//methods

let mnstr="hello";
let trimmedstr=mnstr.trim();


//CharAt

let outputchar=trimmedstr.charAt(2);
console.log("outputchar",outputchar);


//split and join
let query="find places near sushantlok";
console.log("q",query)
let trimmedquery=query.trim();
console.log("q",trimmedquery);

let wordsarr=trimmedquery.split(" ");
console.log("wordsarr",wordsarr);


let outcome=wordsarr.join("+");
console.log("outcome",outcome);

let str2 = prompt("enter the string");
let str3 = str2.trim();
let str4 = str3.split(" ");
let str5 = " ";
for(let  i=0;i<str4.length;i++){
    str5 += str4[i].charAt(0).toUpperCase() + str4[i].slice(1) + " ";
}
console.log(str5.trim());