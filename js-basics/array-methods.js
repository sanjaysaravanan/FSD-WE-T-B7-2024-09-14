const arr = [1, 2, 3, 4, 5, 6];

// push
arr.push(7); // 7

arr.push(10, 11, 23, 45, 34, 67, 89);

console.log(arr); // [1, 2, 3, 4, 5, 6, 7, 10, 11, 23, 45, 34, 67, 89]

// pop
arr.pop(); // 89

console.log(arr); // [1, 2, 3, 4, 5, 6, 7, 10, 11, 23, 45, 34, 67]

// slice
arr.slice(0, 4); // [1,2,3,4]

arr.slice(3, 7); // [4,5,6,7]

arr.slice(1, -4); // [1, 2, 3, 4, 5, 6, 7, 10, 11]

// splice
arr.splice(0, 4); // removes [1,2,3,4]

arr.splice(0, 4, 99, 88, 77); // removes first 4 element then adds three element 99, 88, 77 in place of the four elements

const arr2 = [1, 2, 3, 4, 5, 6, 7, 10, 11, 23, 45, 34, 67];

arr2.join(","); // 1,2,3,4,5,...,34,67

arr2.join("-"); // 1-2-3-4-5-...-34-67

arr2.shift(); // removes the first element

arr2.unshift(0.1, 0.2, 0.3); // addes element to the first of array

arr2.concat([102, 203, 304, 405], [99, 88, 77]); // combines a new array into an existing array

// callback function
// a function which is passed as an argument to other function is called as callback func

function doOperation(operation, op1, op2) {
  return operation(op1, op2); // operation should be a function
}
// below two statements are same
// const sum = (a, b) => a + b;
/* const sum = (a, b) => {
  return a + b;
}; */

/* function sum(a, b) {
  return a + b;
} */

// variable function expression
var sum = function (a, b) {
  return a + b;
};

function sub(a, b) {
  return a - b;
}

function mul(a, b) {
  return a * b;
}
console.log(doOperation(sum, 100, 101)); // 201
console.log(doOperation(sub, 100, 101)); // -1
console.log(doOperation(mul, 100, 101)); // 10100

// Array Methods with callback functions
const arr3 = [99, 88, 77, 66, 55];

// forEach
arr3.forEach();

// map - creating a new array from the return values of the callback fn
arr3.map(function (val, index, array) {
  console.log(index);
  console.log(val);
  console.log(array);
}); // [undefined, undefined, undefined, undefined, undefined]

arr3.map(function (val, index, array) {
  console.log(index);
  console.log(val);
  console.log(array);
  return val * 2;
});

const newArr = arr3.map(function (val, index, array) {
  return val * 2;
});

// newArr contains the returned values on each callback

// given an array [9, 8, 7, 6, 5]

// return the array squares of elements in the above array
// I/P - [9, 8, 7, 6, 5]
// O/P - [81, 64, 49, 36, 25]
var arr4 = [9, 8, 7, 6, 5];

// this is same as below function
/* const squares = arr4.map(function (val) {
  return val * val;
}); */

// same as above function but using arrow syntax
const squares = arr4.map((val) => {
  return val * val;
});
console.log(squares);

var arr5 = [91, 92, 93, 94, 95, 96, 97, 98, 99];

// Filter
// to filter out certain elements in the array

// filter out all the elements which are divisible by 3

// predicate --> a function which return truthy / falsy value
/* var filteredArray = arr5.filter((val) => {
  return !(val % 3); // return
});
 */

// filters all the elements which return true value from predicate func
var filteredArray = arr5.filter((val) => {
  return val % 3 === 0; // return
});

// reduce
// to accumulate values of an array
// find the sum of all elements in the array
var arr6 = [91, 92, 93, 94, 95, 96, 97, 98, 99];

/* var sumOfAll = arr6.reduce((x, y) => {
  return x + y; // 183 + 93 = 276 + 94 = 370
});
 */

var sumOfAll = arr6.reduce((x, y) => {
  return x + y; // 0 + 91 = 91 + 92 = 183 + 93 = 276 + 94 = 370
}, 0);

console.log(sumOfAll); // 855

var sumOfAll = arr6.reduce((x, y) => {
  return x + y; // 0 + 91 = 91 + 92 = 183 + 93 = 276 + 94 = 370
}, 100);

console.log(sumOfAll); // 955
