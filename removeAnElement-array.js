// Removing a Specific Element in an Array

function removeAnElement(nums, val) {
    if (nums.length === 0) {
        return null;
    }

    let k = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[k] = nums[i];
            k++;
        }
    }

    return k;
}

const nums = [1, 3, 5, 7];
const val = 5;
const k = removeAnElement(nums, val);
console.log(k);
console.log(nums.slice(0, k));