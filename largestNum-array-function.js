// Finding Largest Number in an Array using Function

function findLargest(numbers) {
    let largest = numbers[0];
    for(let i = 1; i < numbers.length; i++) {
        const currentItem = numbers[i];
        if(currentItem > largest) {
            largest = currentItem;
        }
    }
    return largest;
}

const arr = [5, 11, 7, 9, 21, 3, 1, 5, 13];
console.log(findLargest(arr));