// Finding 2nd Largest Number in an Array using Function and without using Array Method

function findLowest(arr) {
    if (arr.length < 2) {
        return undefined;   // Not enough elements in the array
    }

    let largest = Math.max(arr[0], arr[1]);
    let secondLargest = Math.min(arr[0], arr[1]);

    for (let i = 2; i < arr.length; i++) {
        const currentItem = arr[i];

        if (currentItem > largest) {
            secondLargest = largest;
            largest = currentItem;
        }
        else if (currentItem > secondLargest && currentItem !== largest) {
            secondLargest = currentItem;
        }
    }

    return secondLargest;
}

const numbers = [5, 11, 7, 9, 21, 3, 1, 5, 13];
console.log(findLowest(numbers));