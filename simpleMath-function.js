// simpleMath Function

function simpleMath(number) {
    if(number <= 0 || typeof number !== 'number') {
        return 'Please provide a positive number.';
    }

    else {
        const result = (((number * 3) + 10) / 2) - 5;
        return result;
    }
}

const output = simpleMath(5);
console.log(output);