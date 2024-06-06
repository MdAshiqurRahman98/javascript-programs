// Finding 3rd Largest and 3rd Lowest Number in an Array using Array Method

const findThirdLargestAndLowestNumber = (arr) => {
    if (arr.length < 3) {
        return {thirdLargestNumber: null, thirdLowestNumber: null};   // Not enough elements in the array
    }

    // Remove duplicates and sort the array in ascending order
    const sortedArray = [...new Set(arr)].sort((a, b) => a - b);

    const thirdLowestNumber = sortedArray.length > 2 ? sortedArray[2] : null;
    const thirdLargestNumber = sortedArray.length > 2 ? sortedArray[sortedArray.length - 3] : null;

    return {thirdLargestNumber, thirdLowestNumber};
}

const numbers = [5, 11, 7, 9, 21, 3, 1, 5, 13];
const result = findThirdLargestAndLowestNumber(numbers);
console.log("Third largest number:", result.thirdLargestNumber);
console.log("Third lowest number:", result.thirdLowestNumber);