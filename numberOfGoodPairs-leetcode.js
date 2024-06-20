// Number of Good Pairs

function findNumberOfGoodPairs(nums) {
    if (nums.length === 0) {
        return null;
    }

    let numberOfGoodPairs = 0;

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] === nums[i]) {
                numberOfGoodPairs++;
            }
        }
    }

    return numberOfGoodPairs;
}

const nums = [1, 2, 3, 1, 1, 3];
console.log(findNumberOfGoodPairs(nums));