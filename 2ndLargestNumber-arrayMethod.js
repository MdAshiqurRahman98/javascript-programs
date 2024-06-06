// Finding 2nd Largest Number in an Array using Array Method

function findSecondLargestNumber(arr) {
    if (arr.length < 2) {
        return null;   // Not enough elements in the array
    }

    // Remove duplicates and sort the array in descending order
    const sortedArray = [...new Set(arr)].sort((a, b) => b - a);

    return sortedArray.length > 1 ? sortedArray[1] : null;
}

const numbers = [5, 11, 7, 9, 21, 3, 1, 5, 13];
const secondLargestNumber = findSecondLargestNumber(numbers);
console.log("Second largest number:", secondLargestNumber);