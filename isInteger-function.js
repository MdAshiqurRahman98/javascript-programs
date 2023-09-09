// isInteger Function

function isInteger(number) {
    if(typeof number !== 'number') {
        return 'Please provide a number.';
    }

    else {
        if(number % 1 === 0) {
            return true;
        }
        return false;
    }
}

const integer = isInteger(3);
console.log(integer);