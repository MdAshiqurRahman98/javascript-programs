// Finding 3rd Largest Number in an Array using Array Method

function findThirdLargestNumber(arr) {
    if (arr.length < 3) {
        return null;   // Not enough elements in the array
    }

    // Remove duplicates and sort the array in descending order
    const sortedArray = [...new Set(arr)].sort((a, b) => b - a);

    return sortedArray.length > 1 ? sortedArray[2] : null;
}

const numbers = [5, 11, 7, 9, 21, 3, 1, 5, 13];
const thirdLargestNumber = findThirdLargestNumber(numbers);
console.log("Third largest number:", thirdLargestNumber);