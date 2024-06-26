// Concatenation of Two Arrays

function arrayConcatenation(nums) {
    let n = nums.length;

    if (n === 0) {
        return null;
    }
    
    let ans = new Array(2 * n);

    for (let i = 0; i < n; i++) {
        ans[i] = nums[i];
        ans[i + n] = nums[i];
    }

    return ans;
}

const nums = [1, 2, 1];
console.log(arrayConcatenation(nums));