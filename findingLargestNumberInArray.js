// Finding Largest Number in an Array

function findLargestNumberInArray(arr) {
    let largest = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }

    return largest;

    // arr.sort((a, b) => b - a);
    // return arr[0];
}

const array = [1, 3, 5, 7, 9];
console.log(findLargestNumberInArray(array));