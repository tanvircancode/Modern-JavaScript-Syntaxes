
const user = {
    id: 339,
    age: 35,
    name: "Sakib",
    // education: {
    //     degree : "MAsters",
    // }
};

// find name property using loop
// for (prop in user) {
//     if (prop == "name") {
//         var x = user[prop];
//         break;
//     }
// }

// console.log(user['name']);

const {education:{degree: x} = {} } = user;
console.log(x);