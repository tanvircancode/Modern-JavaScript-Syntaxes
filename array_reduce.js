var numbers = [1, 2, 3, 4, 5, 6, 7];

var sum = numbers.reduce(function (prevValue, currentValue, currentIndex,arr) {
    return prevValue + currentValue;
    // console.log(prevValue);
});
console.log(numbers);

console.log(sum);