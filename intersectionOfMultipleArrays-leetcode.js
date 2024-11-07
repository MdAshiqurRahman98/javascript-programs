// Intersection of Multiple Arrays

function intersectionOfMultipleArrays(nums) {
    let commonElements = nums.reduce((acc, curr) => {
        return acc.filter((x) => curr.includes(x));
    });

    return commonElements.sort((a, b) => a - b);
}

const nums = [[3, 1, 2, 4, 5], [1, 2, 3, 4], [3, 4, 5, 6]];
console.log(intersectionOfMultipleArrays(nums));