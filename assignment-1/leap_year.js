"use strict"


let year=2005;

if (year % 100 === 0)
    if (year%400 === 0)
        console.log(`${year} is leap year`);
    else
        console.log(`${year} is not a leap year`);

else
    if (year % 4 == 0)
        console.log(`${year} is leap year`);
    else
        console.log(`${year} is not a leap year`);