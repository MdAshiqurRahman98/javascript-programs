// Array Method - map()

function double(x) {
    return x * 2;
}

const numbers = [1, 2, 3, 4, 5];
const result = numbers.map(number => double(number));
console.log(result);