// Removing Duplicate Elements in an Array

function removeDuplicateElements(nums) {
    if (nums.length === 0) {
        return null;
    }

    let k = 1;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) {
            nums[k] = nums[i];
            k++;
        }
    }

    return k;
}

const nums = [1, 3, 3, 3, 5, 7, 9];
const k = removeDuplicateElements(nums);
console.log(k);
console.log(nums.slice(0, k));