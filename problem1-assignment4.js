// Printing cube of a number

const cubeNumber = (number) => {
    if (typeof number !== 'number') {
        return 'Please provide a number.';
    }
    else {
        let result = Math.pow(number, 3);
        return result;
    }
}

const output = cubeNumber(3);
console.log(output);