
const user = {
    id: 339,
    age: 35,
    name: "Sakib",
    education: {
        degree: "Masters",
    }
};

// find name property using loop
// for (prop in user) {
//     if (prop == "name") {
//         var x = user[prop];
//         break;
//     }
// }

// console.log(user['name']);

var { education:{degree }, } = user;
console.log(degree);