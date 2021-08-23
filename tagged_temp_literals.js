

function modifier(strings, ...values) {
    // console.log(strings);
    // console.log(values);
    var m = strings.reduce(function (prevValue, currentValue) {
        return prevValue + currentValue + (values.length ? "Mr. " + values.shift() : "");
    }, "");
    return m;

}


var player1 = "Sakib";
var player2 = "Tamim";

// console.log(modifier`We have ${player1} and ${player2} in our cricket team`);
con