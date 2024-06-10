const promise1 = new Promise(function(resolve, reject) {
    setTimeout(() => {
        resolve();
        console.log('22')
    }, 1000);
});

const promise2 = promise1.then(() => {
    console.log(1)
    
});

console.log(promise1)
console.log(promise2)

setTimeout(() => {
    console.log(promise1)
    console.log(promise2)
}, 1000);

