// Finding 2nd Largest Number in an Array using Function

function findLowest(numbers) {
    if (numbers.length < 2) {
        return undefined; // Handle the case where there are not enough elements
    }

    let largest = Math.max(numbers[0], numbers[1]);
    let secondLargest = Math.min(numbers[0], numbers[1]);

    for (let i = 2; i < numbers.length; i++) {
        const currentItem = numbers[i];

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

const arr = [5, 11, 7, 9, 21, 3, 1, 5, 13];
console.log(findLowest(arr));