// Finding 2nd Largest and 2nd Lowest Number in an Array using Array Method

const findSecondLargestAndLowestNumber = (arr) => {
    if (arr.length < 2) {
        return {secondLargestNumber: null, secondLowestNumber: null};   // Not enough elements in the array
    }

    // Remove duplicates and sort the array in ascending order
    const sortedArray = [...new Set(arr)].sort((a, b) => a - b);

    const secondLowestNumber = sortedArray.length > 1 ? sortedArray[1] : null;
    const secondLargestNumber = sortedArray.length > 1 ? sortedArray[sortedArray.length - 2] : null;

    return {secondLargestNumber, secondLowestNumber};
}

const numbers = [5, 11, 7, 9, 21, 3, 1, 5, 13];
const result = findSecondLargestAndLowestNumber(numbers);
console.log("Second largest number:", result.secondLargestNumber);
console.log("Second lowest number:", result.secondLowestNumber);