// Finding Lowest Number in Three Numbers using Function

function lowestNum(num1, num2, num3) {
    let lowest = Math.min(num1, num2, num3);
    return lowest;
}

const lowestNumber = lowestNum(3, 9, 13);
console.log('The Lowest Number is', lowestNumber);