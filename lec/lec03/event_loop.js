// thead process

// 渲染主线程： 解析htlm， 执行js。。。无数任务
// 一开始 渲染主线程是一个无限循环
// 每次循环检查消息队列有没有任务，有的话按顺序取出任务执行
// queue: message queue 

// 异步
// 代码执行过程中，有些无法立即执行的任务 比如计时器会放到消息队列里，等主线程去执行

// 如何理解js的异步

// Micro queue* priority highest
// delay queue
// interaction queue

function a() {
    console.log(1);
    Promise.resolve().then(function(){
        console.log(2)
    })
}
setTimeout(function(){
    console.log(3)
},100)

Promise.resolve().then(a)

console.log(5)
