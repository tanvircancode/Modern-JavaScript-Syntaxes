var numbers1 = [1, 2, 3];
var numbers2 = [4,5,6];

// var numbers = [...numbers1, ...numbers2]; //concat
// var newNumbers = [...numbers, 4, 5, 6]; // adding elements
// console.log(newNumbers);


//checking reference
var numbers = [1, 2, 3];
var a = [...numbers];
numbers.push(4);
console.log(numbers);
console.log(a);
//end reference

//object spreading
// var myObj1 = {
//     a: 1,
//     b: 2
// };
// var myObj2 = {
//     x: 1,
//     y: 2,
// };
// var obj = {...myObj1, ...myObj2};  //object concat
// console.log(obj);