// Finding Lowest Number in an Array without using Built-in Method

function findLowestNumber(numbers) {
    let lowestNumber = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] < lowestNumber) {
            lowestNumber = numbers[i];
        }
    }

    return lowestNumber;
}

const numbers = [1, 3, 5, 7, 9];
console.log(findLowestNumber(numbers));