// Finding Largest Number in an Array without using Built-in Method

function findLargestNumber(numbers) {
    let largestNumber = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > largestNumber) {
            largestNumber = numbers[i];
        }
    }

    return largestNumber;
}

const numbers = [1, 3, 5, 7, 9];
console.log(findLargestNumber(numbers));