// arrow function
// ----------------------------------------------------------------
// No arguements
// No `this`
// ----------------------------------------------------------------

// Q1 :

// const counter = {
//     count : 0,
//     startIncrease() {
//         setInterval(function(){   // why wrong?
//             this.count++;
//             console.log(this.count);
//         },1000)
//     }
// }

// counter.startIncrease();


 for (var i = 0; i < 1009199902; i++) {
    j = i
 }

 setTimeout(() => {
    console.log("1")
 }, 10);
 