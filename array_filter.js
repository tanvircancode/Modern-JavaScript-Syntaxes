var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let res = numbers.filter( (currentValue, index, arr) => {
    return currentValue > 4;
});

console.log(res);
console.log(numbers);
