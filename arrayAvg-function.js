// Calculating Average of Array Elements using Function

function make_arrayAvg(array) {
    let sum = 0;
    for(let i = 0; i < array.length; i++) {
        sum += array[i];
    }

    let avg = sum / array.length;
    return avg;
}

let numbers = [1, 3, 5, 7, 9];
const arrayAvg = make_arrayAvg(numbers);
console.log('Average of Array Elements:', arrayAvg);