"use strict"

// 3. Write a program to find whether a given number is special number or

// not-
// If the sum of the factorial of digits of a number (N) is equal to the

// number itself, the number (N) is called a special number.
// eg- 145 is a special number
// Logic- 1! + 4! + 5!= 1+24+120 i.e 145

let number=3;
let sum=0;
let temp=number;

function fact(n){
    let fact=1;
    for(let i=n;i>=1;i--)
        fact*=i
    return fact 
}

while(temp > 0){
    let remainder=temp%10;
    sum+=fact(remainder)
    temp=parseInt(temp/10)
}

if(sum === number)
    console.log(`The ${number} is a special number`)
else   
    console.log(`The ${number} is not a special number`)