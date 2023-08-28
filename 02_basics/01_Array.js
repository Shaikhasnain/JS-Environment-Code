const myArr = [0, 1, 2, 3, 4, 5, 6];
const myArr_two = ["Hello", "World"];
// console.log(myArr);

myArr.push(9)
// console.log(myArr);

myArr.pop(9)
// console.log(myArr);

myArr.shift(9)
// console.log(myArr);

const newArr = myArr.join();
// console.log(typeof newArr);
// console.log(myArr.includes(9)); // False
// console.log(myArr.indexOf(3)); // 2


// slice, splice

console.log("A ", myArr);

const mySlice = myArr.slice(1, 3);
console.log(mySlice);
console.log("B ", myArr);


const mySplice = myArr.splice(1, 3)
console.log("C ", mySplice);
console.log(myArr);
