// Finding Lowest Number in an Array using Function

function findLowest(numbers) {
    let lowest = numbers[0];
    for(let i = 1; i < numbers.length; i++) {
        const currentItem = numbers[i];
        if(currentItem < lowest) {
            lowest = currentItem;
        }
    }
    return lowest;
}

const arr = [5, 11, 7, 9, 21, 3, 1, 5, 13];
console.log(findLowest(arr));