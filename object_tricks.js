var x = 4;
var y = 5;
var z = x * y;

const myObj = {
    name: "JavaScript",
    estd: "1995",
    founder: "Brendan Eich",
    z,
    x,
    y,

};

// var keys = Object.keys(myObj);
// var values = Object.values(myObj);
var entries = Object.entries(myObj);
// for (x of entries) {
//     console.log(x[0] +' : '+ x[1]);
// }

console.log(entries);