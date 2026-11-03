
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