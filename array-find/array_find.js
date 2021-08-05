// Array.prototype.find()

var numbers = [1, 2, 3, 4, 5, 6, 9, 10];

const res = numbers.find(function (currentValue,currentIndex,arr) {
// console.log(currentIndex);

    return currentValue > 7;
});

console.log(res);
// console.log(numbers);