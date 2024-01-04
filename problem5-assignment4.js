// Determining can pay total due

function canPay(changeArray, totalDue) {
    if (changeArray.length === 0) {
        return 'Please provide an array with elements.';
    }
    else {
        let sum = 0;
        for (let i = 0; i < changeArray.length; i++) {
            let element = changeArray[i];
            sum = sum + element;
        }

        if (sum >= totalDue) {
            return true;
        }
        return false;
    }
}

const array = [1, 5, 5];
const output = canPay(array, 10);
console.log(output);