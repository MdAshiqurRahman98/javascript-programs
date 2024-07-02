// Shuffle the Array

function shuffle(nums, n) {
    if (nums.length === 0) {
        return null;
    }

    let ans = new Array(2 * n);
    
    for (let i = 0; i < n; i++) {
        ans[i * 2] = nums[i];
        ans[(i * 2) + 1] = nums[i + n];
    }

    return ans;
}

const nums = [2, 5, 1, 3, 4, 7];
const n = 3;
console.log(shuffle(nums, n));