// Finding 2nd Lowest Number in an Array using Function and without using Array Method

function findSecondLowestNumber(arr) {
    // Edge case handling
    if (arr.length < 2) {
        return null;   // Not enough elements in the array
    }

    let lowest = Math.min(arr[0], arr[1]);
    let secondLowest = Math.max(arr[0], arr[1]);

    for (let i = 2; i < arr.length; i++) {
        if (arr[i] < lowest) {
            secondLowest = lowest;
            lowest = arr[i];
        }
        else if (arr[i] < secondLowest && arr[i] !== lowest) {
            secondLowest = arr[i];
        }
    }

    return secondLowest;
}

const numbers = [5, 11, 7, 9, 21, 3, 1, 5, 13];
console.log(findSecondLowestNumber(numbers));