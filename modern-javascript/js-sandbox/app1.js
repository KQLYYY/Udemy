// Destructuring Assignment

// let a, b;
// Rest pattern
// [a, b, ...rest] = [100, 200, 300, 400, 500];


// ({ a, b } = {a: 100, b: 200, c: 300, d: 400, e: 500});
// ({ a, b, ...rest } = {a: 100, b: 200, c: 300, d: 400, e: 500});

// // Array Destructuring

// const people = ['John', 'Betch', 'Mike'];

// function getPeople() {
//   return ['John', 'Betch', 'Mike']
// }

// let p1, p2, p3;
// [p1, p2, p3] = getPeople();

// console.log(p1, p2, p3)


// Object Destructuring

// const person = {
//   name: 'John Doe',
//   age: 12,
//   city: 'Vasylkiv',
//   gender: 'male',
//   sayHello: () => {
//     console.log("HELLO");
//   }
// }

// // New ES6 Destructuring

// const { name, age, city, sayHello } = person;

// console.log(name, age, city)

// sayHello();

// MAPS = key-value pairs - can use ANY type as a key or value

// const map1 = new Map();

// Set Keys
// const key1 = 'some string',
//       key2 = {},
//       key3 = function(){};

// // Set map values by key
// map1.set(key1, 'Value of key1');
// map1.set(key2, 'Value of key2');
// map1.set(key3, 'Value of key3');

// // Get values by key
// console.log(map1.get(key1), map1.get(key2), map1.get(key3));

// // Count values
// console.log(map1.size);

// Iteraring maps

// Loop using for..of to get keys and values
// for(let [key, value] of map1){
//   console.log(`${key} = ${value}`)
// }

// Iterate keys only
// for(let value of map1.values()){
//   console.log(value)
// }

// map1.forEach((value, key) => {
//   console.log(key,' ',value)
// });

// console.log(map1)

// Convert to arrays

// const ValArr = Array.from(map1.values());

// console.log(ValArr)

// SETS - store unique values of any type

// const set1 = new Set();

// Add values to set

// set1.add(100);
// set1.add('A string');
// set1.add({name: 'John'});
// set1.add(true)
// set1.add(100)

// console.log(set1.has(100)) // !!!!!!!!!!!!
// console.log(set1.has({name: 'John'})); // !!

// set1.delete(100);

// set1.forEach((item) => {
//   console.log(item)
// });

// for(let item of set1.values()){
//   console.log(item)
// }


const randomIntFrom1to10 = () => Math.floor(Math.random() * 10)+1;
let head = [0, 1, 2, 3, 4, 5, 6, 7];
const intArrayWithRandomLength = () => head.map((i) => i + 1)

const id = 5
const ke2= intArrayWithRandomLength().map(i =>
  Object.assign({}, ...head.map(key => ({ [key]: `${key}row${i}id${id}` }))))

console.log(intArrayWithRandomLength(),ke2);