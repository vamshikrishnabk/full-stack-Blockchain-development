"use strict"

// 3) Write a JavaScript program which accept a number as input in the
// function parameter and insert dashes (-) between each two even
// numbers.
// For example if you accept 025468 as the output should be 0-254-6-8.
// computeDash(025468) -> 0-254-6-8.

let result=[];
function computeDash(num){
    result.push(num[0])
    for(let i=1;i<num.length;i++){
        if((num[i-1]%2 === 0) && (num[i]%2 === 0))
            result.push('-',num[i])
        else
            result.push(num[i]);
    }
}
computeDash("025468355868646");
console.log(result.join(''),"This is  resulttttttt")