// Related concepts: Reference vs. Value

// Source: Bytedance interview
// Q: What't the output?

var foo = { bar:1 };
var arr1 = [1,2,foo];
var arr2 = arr1.slice(1);
arr2[0]++;
arr2[1].bar++;
foo.bar++;
arr1[2].bar++;
console.log(arr1[1] === arr2[0]);
console.log(arr1[2] === arr2[1]);
console.log(foo.bar);


// Solution:
// Step 1:
// var arr2 = arr1.slice(1); =>s
// arr2 = [2,foo];

// Step2:
// arr2[0]++; =>
// arr2 = [3,foo];

// Step 3:
// arr2[1].bar++; =>
// foo = {bar:2};

// Step 4:
// foo.bar++; =>
// foo = {bar:3};

// Step 5:
// arr1[2].bar++; =>
// foo = {bar:4};

// foo = {bar:4};
// arr1 = [1,2,{bar:4}];
// arr2 = [3,{bar:4}];
