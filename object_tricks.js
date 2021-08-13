const myObj = {
    name: "JavaScript",
    estd: "1995",
    founder: "Brendan Eich",
};

// var keys = Object.keys(myObj);
// var values = Object.values(myObj);
var entries = Object.entries(myObj);
for (x of entries) {
    // for (x in entries){

    // }
    console.log(x[0] +':'+ x[1]);
}

// console.log(entries);