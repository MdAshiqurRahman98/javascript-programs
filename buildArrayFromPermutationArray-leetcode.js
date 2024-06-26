// Building an Array from Permutation Array

function buildArrayFromPermutationArray(nums) {
    if (nums.length === 0) {
        return null;
    }

    let ans = new Array(nums.length);

    for (let i = 0; i < nums.length; i++) {
        ans[i] = nums[nums[i]];
    }

    return ans;
}

const nums = [0, 2, 1, 5, 3, 4];
console.log(buildArrayFromPermutationArray(nums));