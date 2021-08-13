
// for loop
// for (let i = 0; i < 4; i++) {
//     console.log(i);
// }
// console.log(i);

// for of and for in
const myObj = {
    name: "JavaScript",
    estd: "1995",
    founder: "Brendan Eich",
};

// var myArr = [1, 2, 3, 4, 5];
// var myString = "I love Bangladesh";

for (property in myObj) {
    console.log(property);
}