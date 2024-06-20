// Two Indices of Sum in an Array

function twoIndicesOfSum(nums, target) {
    if (nums.length === 0) {
        return null;
    }

    for (let i = 0; i < nums.length; i++) {
        for (let j = 1; j < nums.length; j++) {
            if (nums[j] === target - nums[i]) {
                return [i, j];
            }
        }
    }

    return false;
}

const nums = [1, 3, 5, 7];
const target = 6;
console.log(twoIndicesOfSum(nums, target));