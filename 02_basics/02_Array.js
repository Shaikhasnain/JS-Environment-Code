const myHeros = ["New1", "New2", "New3"];
const myZero = ["Zero1", "Zero2", "Zero3"];

// const spreadOpr = [...myHeros, ...myZero]; // ["New1", "New2", "New3", "Zero1", "Zero2", "Zero3"]
// console.log(spreadOpr);

// const concatOpr = myHeros.concat(myZero); // ["New1", "New2", "New3", "Zero1", "Zero2", "Zero3"]
// console.log(concatOpr);

// myHeros.push(myZero);
// console.log(myHeros); // ["New1", "New2", "New3", ["Zero1", "Zero2", "Zero3"]]

const newFlat = [1, 2, 3, 4, [4, 5, 6], 8, 78, [2, 23]];
const newFlat_infi = newFlat.flat(Infinity);
console.log(newFlat_infi);

const myArr2 = new Array(1, 2, 3, 4);
console.log(myArr2);

const checkArray = Array.isArray("Hello World");
console.log(checkArray);

const checkFrom = Array.from("Hello World");
console.log(checkFrom);

const num1 = 100;
const num2 = 200;
const num3 = 300;
console.log(Array.of(num1, num2, num3));
