// Array Method - find()
// Example: Finding the first even number in an array

function findFirstEvenNumber(arr) {
    return arr.find(num => num % 2 === 0);
}

const numbers = [1, 3, 5, 6, 7, 8];
const firstEven = findFirstEvenNumber(numbers);
console.log("First even number:", firstEven);