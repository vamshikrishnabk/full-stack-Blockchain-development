"use strict"


// 1. Write a Javascript function to check whether a triangle is equilateral,
// isosceles or scalene



let side1=6;
let side2=6;
let side3=6;

if (side1 > 0 && side2 >0 && side3 > 0)
    if (side1 === side2 && side2 === side3)
        console.log("Equilateral Triangle");
    else if (side1 === side2 || side2 === side3 || side3 === side1)
        console.log("Isosceles Triangle");
    else
        console.log("Scalene Triangle");
else
    console.log("side length wouldn't be negative");
