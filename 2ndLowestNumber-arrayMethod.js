// Finding 2nd Lowest Number in an Array using Array Method

const findSecondLowestNumber = (arr) => {
    if (arr.length < 2) {
        return null;   // Not enough elements in the array
    }

    // Remove duplicates and sort the array in ascending order
    const sortedArray = [...new Set(arr)].sort((a, b) => a - b);

    return sortedArray.length > 1 ? sortedArray[1] : null;
}

const numbers = [5, 11, 7, 9, 21, 3, 1, 5, 13];
const secondLowestNumber = findSecondLowestNumber(numbers);
console.log("Second lowest number:", secondLowestNumber);