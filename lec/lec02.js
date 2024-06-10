function Person(name) {
    this.name = name; 
}

var jack = new Person('jack');
var sophia = new Person('sophia');

// prototype 是一个原型对象
Person.prototype.sayName = function () {
    console.log(this.name);
};

console.log(jack.sayName === sophia.sayName);
console.log(Person.prototype === Function.prototype);
console.log(Person.__proto__ === Function.prototype);
console.log(Person.__proto__ === Function.__proto__);
console.log(jack.__proto__ === sophia.__proto__);
console.log(jack.__proto__ === Person.__proto__);
console.log(Function.__proto__ === Object.__proto__);
console.log(Function.prototype.__proto__ === Object.prototype.__proto__);

console.log(Function instanceof Object);