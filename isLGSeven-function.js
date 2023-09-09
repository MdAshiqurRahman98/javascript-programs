// isLGSeven Function

function isLGSeven(number) {
    if(typeof number !== 'number') {
        return 'Please provide a number.';
    }
    else {
        let diff = number - 7;
        if(diff < 7) {
            return diff;
        }
        return number * 2;
    }
}

const output = isLGSeven(15);
console.log(output);