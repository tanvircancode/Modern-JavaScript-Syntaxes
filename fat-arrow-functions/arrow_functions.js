//ES6 fat arrow functions
// function number(){
//     return 10;
// }

// let number = (val) => "Hello " + val;
// console.log(number(2));

var javascript = {
    name: "JavaScript",
    libraries: ["React", "Vue", "Angular"],
    printLibraries: function () {
        this.libraries.forEach((a) =>  console.log(`${this.name} loves ${a}`));

    }};

javascript.printLibraries();