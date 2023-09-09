// Calculating Average of an Array Elements using Function

function calcAvg(numbers) {
    let sum = 0;
    for(let i = 0; i < numbers.length; i++) {
        let element = numbers[i];
        sum = sum + element;
    }
    let average = sum / numbers.length;
    return average;
}

const number = [1, 3, 5, 7, 9];
const avg = calcAvg(number);
console.log('Average:', avg);