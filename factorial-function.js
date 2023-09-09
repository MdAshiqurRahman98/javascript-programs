// Calculating Factorial using Function

function factorial(number) {
    if(number === 0 || number === 1) {
        return 1;
    }

    let result = 1;

    for(let i = number; i >= 1; i--) {
        result = result * i;
    }

    return result;
}

console.log(factorial(5));
console.log(factorial(0));
console.log(factorial(3));