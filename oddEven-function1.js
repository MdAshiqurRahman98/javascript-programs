// Odd or Even Number using Function with return keyword

function odd_even(num) {
    if((num % 2) != 0) {
        return num + ' is odd number.';
    }
    else {
        return num + ' is even number.';
    }
}

let integer = odd_even(3);
console.log(integer);