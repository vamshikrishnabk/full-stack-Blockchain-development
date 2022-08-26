"use strict"

// 4. Write a program to find the factorial of all prime numbers between a
// given range . Range will be passed as 2 values in the function
// parameters. eg- if it is needed to find the values for numbers 1-100, then
// function declaration can look like - function prime(1,100).

let start_number=1
let end_number=100

function prime(start_number,end_number){
    for (let i=start_number;i<=end_number;i++){
        let count_divisors=0
        for(let j=2;j<=i;j++){
            if (i%j === 0){
                count_divisors+=1
            }
        }
        if (count_divisors == 1){
            let fact=1;
            for(let p=i;p>=1;p--)
            fact*=p
            console.log(`The factorial of ${i} is ${fact}`)
        }
    }
}
if (start_number>0 && end_number >0)
    if (start_number == 1)
        prime(start_number+1,end_number)
    else
        prime(start_number,end_number)