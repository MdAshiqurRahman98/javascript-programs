// Binary Search

function binarySearch(nums, target) {
    if (nums.length === 0) {
        return "Please provide array of elements.";
    }

    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) {
            return mid;
        }
        else if (nums[mid] < target) {
            left = mid + 1;
        }
        else {
            right = mid - 1;
        }
    }

    return left;
}

const nums = [1, 3, 5, 7];
const target = 5;
console.log("Index of target value:", binarySearch(nums, target));