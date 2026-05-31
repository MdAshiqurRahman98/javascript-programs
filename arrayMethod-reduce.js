// Array Method - reduce()
// Example: Summing all numbers in an array

function sumArray(arr) {
    return arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

const numbers = [1, 2, 3, 4, 5];
const totalSum = sumArray(numbers);
console.log("Total sum:", totalSum);