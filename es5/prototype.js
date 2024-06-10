// prototype and `__proto__` of 'Function' is  ->
// Instance's prototype === Constructor's prototype


var a = 1;
function Person(name) {
    this.name = name;
}

Person.prototype.getName = function() {
    a += 1;
    console.log(a)
    return this.name;
}

var p1 = new Person('p1');
console.log(p1.getName == Person.prototype.getName);

p1.getName()
Person.prototype.getName()

console.log(Person.prototype)