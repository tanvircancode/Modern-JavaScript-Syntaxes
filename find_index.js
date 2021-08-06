var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let res = numbers.findIndex(function (currentValue) {
    return (currentValue > 12);
});
console.log(res);