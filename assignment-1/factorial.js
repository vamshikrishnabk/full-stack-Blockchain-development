"use strict"

let user_input=4;
let fact=1;

if (user_input > 0){
    for (let i=user_input;i>=1;i--)
        fact=fact*i
    console.log(`${user_input} factorial is ${fact}`)
}
else
    console.log("Factorial doesn't exist for negative numbers")





