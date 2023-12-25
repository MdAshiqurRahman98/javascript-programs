// Higher Order Function (HOF)

function myHigherOrderFunction(myRandomFunction) {
    return myRandomFunction;
}

function add(number1, number2) {
    return number1 + number2;
}

console.log(myHigherOrderFunction(add(1, 3)));