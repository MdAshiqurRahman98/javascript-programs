// Finding 3rd Lowest Number in an Array using Array Method

const findThirdLowestNumber = (arr) => {
    if (arr.length < 3) {
        return null;   // Not enough elements in the array
    }

    // Remove duplicates and sort the array in ascending order
    const sortedArray = [...new Set(arr)].sort((a, b) => a - b);

    return sortedArray.length > 1 ? sortedArray[2] : null;
}

const numbers = [5, 11, 7, 9, 21, 3, 1, 5, 13];
const thirdLowestNumber = findThirdLowestNumber(numbers);
console.log("Third lowest number:", thirdLowestNumber);