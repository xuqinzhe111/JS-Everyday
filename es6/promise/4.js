async function m() {
  const n = await (() => {
    console.log(1);
    console.log(2);
  })();
  console.log(3);
}

m();

console.log(4);

// try {
//     const n = await 1;
//     console.log(n);
// } catch (e) {
//     console.error(e);
// }
