// 数据存储和传递
// 数据的作用域
// 全局对象
// 构造函数
// 原型

// primitive type // object type

// scope hoist

// 浏览器： window /node 环境 global

// constructor
function Person(name) {
    this.name = name;
    this.sayName = function () {
        console.log(this.name);
    }
}



var jason = new Person('jason');


var obj = {
    a:1,
    b:2,
    c: {
        eat: function(){
            console.log(this);
        }, 
    }
    
}

var a = obj.c.eat;
console.log(a);

