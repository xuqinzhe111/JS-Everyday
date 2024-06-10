// defineProperty

// Q: Print 'Reading ...' and 'Writing ...' when accessing/modifying an object.

let user = {
    name: 'John',
    age: 30,
    sex: 'male',
};

// Wrong solution
// Object.keys(user).forEach(key => {
//     Object.defineProperty(user, key,{
//         get(){
//             console.log(`Reading ${key}`);
//             return this[key]; // this callback the the property
//         },
//         set(value){
//             console.log(`Writing ${key} to ${value}`);
//             this[key] = value; // this callback the the property
//         }
//     })
// })


// Solution

Object.entries(user).forEach(([key, value]) => {
    Object.defineProperty(user, key, {
        enumerable: true,
        configurable: true,
        get() {
            console.log(`Reading ${key} : ${value}`);
            return value;
        },
        set(val) {
            console.log(`Writing ${key} to ${val}`);
            value = val;
        }
    });
});

user.age += 1; // Writing age to 31
console.log(user.age); // Reading age : 31
console.log(user); // { name: 'John', age: 31, sex: 'male' }