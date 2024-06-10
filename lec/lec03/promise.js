// Promise object: stage: settled, unsettled
// state : pending, fulfilled, rejected

// const pro = new Promise( (resolve, reject) =>{
//     console.log(2)
//     reject(1)
// })
// .then((data)=>{
//     console.log(data)
//     return 4
    
// })
// .catch((err)=>{
//     console.log(err)
//     return 5
// })
// .then((data)=>{
//     console.log(data)
// })

// setTimeout(()=>{
//     console.log(pro)
// },1000)



const promise1 = new Promise( (resolve, reject) =>
    setTimeout(()=>{
        reject()
    },1000)
)

const promise2 = promise1.catch((err)=>{
    return 2;
});

console.log(promise1)
console.log(promise2)

setTimeout(()=>{
    console.log(promise1)
    console.log(promise2)
},2000)
