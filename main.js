// 1. Create 2 objects - parent and child. Attach methods to parent and use those methods in child object using parents prototype 

// class  Parent{
//     constructor() {
//         this.company = "Tesla"
//     }
// }
// class Child extends Parent {
//     constructor(name) {
//         super()
//         this.name = name
//     }
// }
// let name = new Child("Narayana")
// console.log( name.company );

// 2. Write code to explain prototype chaining
    // const o = {
    //     a: 1,
    //     b: 2,
    //     // __proto__ sets the [[Prototype]]. It's specified here
    //     // as another object literal.
    // };
    // o.__proto__ = {
    //     d : 24
    // }
    // console.log(o.d);

// 3.Add a method to calculate sum of all elements in Array in array's protype, use that method to calculate sum for multiple arrays
// let arr = [1,2,3,4,5,6];
// const arraySum = {
//     addAll : function (arr) {
//         let sum = 0;
//         for(let i = 0; i < arr.length; i++ ) {
//             sum = sum + arr[i]
//         }
//         console.log(sum);
//     }
// }
// Array.__proto__ = arraySum;
// Array.addAll(arr)


// Write a JavaScript function to retrieve all the names of object's own and inherited properties.
// class A {
//     constructor() {
//         name = "virat" 
//     }
// }
// A.prototype.a = "Kohli";
// let an =  A.prototype.a
// console.log(an);

