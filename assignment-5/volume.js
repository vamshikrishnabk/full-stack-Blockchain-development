"use strict"

// 1) Write a JavaScript program to get the volume of a Cylinder, Sphere and
// Cone with four decimal places using objects and classes.
// Create classes for volumes for each geometric shape which returns the
// output using the getVolume() method.

// eg- to get volume of cylinder-
// let obj= new Cylinder(radius,height);

// obj.getVolume();

// Formulas for volumes of the shapes-
// 1) Cylinder- Volume = πr2h

// where r is the radius and h is the height of the cylinder.
// 2)Sphere- Volume= 4/3πr3
// where r is the radius
// 3) Cone- Volume= πr2h/3

// where r is the radius and h is the height of the cone.


class Cylinder{
    constructor(radius,height){
        this.radius=radius;
        this.height=height;
    }

    getVolume(){
        let volume=(22/7)*(this.radius*this.radius)*(this.height)
        console.log(`Volume of Cylinder with ${this.radius} radius and ${this.height} height is ${volume.toFixed(4)}`)
    }
}


class Sphere{
    constructor(radius){
        this.radius=radius;
    }

    getVolume(){
        let volume=(4/3)*(22/7)*(this.radius*this.radius*this.radius)
        console.log(`Volume of Sphere with ${this.radius} radius is ${volume.toFixed(4)}`)
    }
}

class Cone{
    constructor(radius,height){
        this.radius=radius;
        this.height=height;
    }

    getVolume(){
        let volume=((22/7)*(this.radius*this.radius)*(this.height))/3
        console.log(`Volume of Cone with ${this.radius} radius and ${this.height} height is ${volume.toFixed(4)}`)
    }
}

let obj1=new Cylinder(1,2);
obj1.getVolume()

let obj2=new Sphere(1);
obj2.getVolume()

let obj3=new Cone(1,2);
obj3.getVolume()
