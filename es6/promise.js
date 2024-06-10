// promise

const a = new Promise((resolve, reject) => {
  reject();
})
 
  .then((res) => {
    console.log(3);
  })

setTimeout(() => {
    console.log(a);
}, 2000);

//   m3 m2 m1
// micro 
// marcro
