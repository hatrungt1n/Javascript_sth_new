// Object.groupBy
// import pkg from "core-js/actual/array/group-by.js";
// const { groupBy } = pkg;

// const array = [
//   [
//     { name: "asparagus", type: "vegetables", quantity: 5 },
//     { name: "bananas", type: "fruit", quantity: 0 },
//     { name: "goat", type: "meat", quantity: 23 },
//     { name: "cherries", type: "fruit", quantity: 5 },
//     { name: "fish", type: "meat", quantity: 22 },
//   ],
// ];
// console.log("array", array);

// // flat an [[]] in to an []
// const flattenArray = array.flat(1);
// console.log("flattenArray", flattenArray);

// // callback
// function callback({ type }) {
//   if (type === "meat") {
//     return "meat";
//   } else if (type === "fruit") {
//     return "fruit";
//   } else {
//     return "others";
//   }
// }

// const result = Array.groupBy(array, callback);
// console.log("result", result);

// Array.toSliced(), Array.toSorted(), and Array.toReversed()
console.log(
  "===== Array.toSliced(), Array.toSorted(), and Array.toReversed() ===== \n"
);
const numbers = [3, 4, 1, 5, 2];

const toSplicedNumbers = numbers.toSpliced(1, 1);
const toSortedNumbers = numbers.toSorted();
const toReversedNumbers = numbers.toReversed();

console.log("toSplicedNumbers", toSplicedNumbers);
console.log("toSortedNumbers", toSortedNumbers);
console.log("toReversedNumbers", toReversedNumbers);
console.log("\n");

const spliceNumbers = numbers.splice(1, 1);
const sortNumbers = numbers.sort();
const reverseNumbers = numbers.reverse();

console.log("spliceNumbers", spliceNumbers);
console.log("sortNumbers", sortNumbers);
console.log("reverseNumbers", reverseNumbers);
console.log("\n");

console.log(
  "With 3 methods toSpliced(), toSorted(), and toReversed(), it will create a new array with the pre-condition\n"
);
console.log(
  "With 3 methods splice(), sort(), and reverse(), it will modify the array with the pre-condition\n"
);

// Array.indexOf() and Array.lastIndexOf()
console.log("===== Array.indexOf() and Array.lastIndexOf() ===== \n");
const numbers1 = [3, 2, 4, 1, 5, 1, 6, 3, 1, 2];
console.log("numbers1", numbers1);
console.log("\n");

const findFirstIndexOf2 = numbers1.indexOf(2);
const findLastIndexOf2 = numbers1.lastIndexOf(2);

console.log("findFirstIndexOf2", findFirstIndexOf2);
console.log("findLastIndexOf2", findLastIndexOf2);
console.log("\n");
