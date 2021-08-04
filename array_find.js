// Array.prototype.find()

var numbers = [1, 2, 3, 4, 5, 6, 9, 10];

const res = numbers.find(function (currentValue) {
    return currentValue > 6;
});

console.log(res);