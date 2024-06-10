// scope && var

var a = 1;
b = 2;

function fn1() {
    console.log(a);
    var a = 3;
    function fn2() {
        console.log(a,b);
    }
    fn2();
}

fn1();







// Solution:

// Step 1:
// Var a is hoioted to the top of the 'fn1' function without initialization.
// function fn1() {
//     var a;
//     console.log(a);
//     ...
// =>
// console.log(a); = undefined

// Step 2:
// 'console.log(a,b);' is in fn2 scope but declared a,b is out of fn2 scope.
// 'a' is referenced to the 'a' in the fn1 scope which equals to 3.
// 'b' is referenced to the 'b' in the global scope which equals to 2;

