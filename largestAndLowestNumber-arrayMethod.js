// Finding Largest and Lowest Number in an Array using Array Method

const findLargestAndLowestNumber = (arr) => {
    if (arr.length === 0) {
        return { largestNumber: null, lowestNumber: null };   // Empty array case
    }

    // Find the lowest and largest number using array methods
    const lowestNumber = Math.min(...arr);
    const largestNumber = Math.max(...arr);

    return { largestNumber, lowestNumber };
}

const numbers = [5, 11, 7, 9, 21, 3, 1, 5, 13];
const result = findLargestAndLowestNumber(numbers);
console.log("Largest number:", result.largestNumber);
console.log("Lowest number:", result.lowestNumber);