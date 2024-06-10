async function f4() {
    try {
      const z = await Promise.resolve(30);
      console.log(1)
    } catch (e) {
      console.error(e); // 30
    }
  }
  
  f4();
  