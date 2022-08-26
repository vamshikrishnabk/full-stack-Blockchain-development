"use strict"

// 1. Using for loops, write a Javascript program to output the following
// pattern -
// 1
// 2 3
// 4 5 6
// 7 8 9 10


let number=0
let number_of_rows=4
for(let row=1;row<=number_of_rows;row++){
    let str=""
    for(let col=1;col<=row;col++){
        str+=`${++number} `
    }
    console.log(str)        
}