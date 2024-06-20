// Finding 2nd Largest Number in an Array using Function and without using Array Method

function findSecondLargestNumber(arr) {
    // Edge case handling
    if (arr.length < 2) {
        return null;   // Not enough elements in the array
    }

    let largest = Math.max(arr[0], arr[1]);
    let secondLargest = Math.min(arr[0], arr[1]);

    for (let i = 2; i < arr.length; i++) {
        if (arr[i] > largest) {
            secondLargest = largest;
            largest = arr[i];
        }
        else if (arr[i] > secondLargest && arr[i] !== largest) {
            secondLargest = arr[i];
        }
    }

    return secondLargest;
}

const numbers = [5, 11, 7, 9, 21, 3, 1, 5, 13];
console.log(findSecondLargestNumber(numbers));