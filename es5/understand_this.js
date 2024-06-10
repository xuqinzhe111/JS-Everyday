// `this` refers to the object that called the function
// Q1: 

var person = {
    name: 'John',
    sayName: function() {
        // TODO: print 'John'
    }
}

// Why use `this` instead of `person`? Security reason: person can be changed.
// =>
// var p2 = person;
// person = 1;
// p2.sayName()

// Solution:
// var person = {
//     name: 'John',
//     sayName: function() {
//         console.log(this.name);
//     }
// }



// Q2: create a method for all objs to print their key value pairs. We have more than 2 examples below.
//

var obj1 = {
    a:1,
    B:2
}

var obj2 = {
    a:3,
    B:4
}

// Solution:

Object.prototype.print = function(){
    for (var key in this) {
        console.log(key, this[key]);
    }
}