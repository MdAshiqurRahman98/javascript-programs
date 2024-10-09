// Keeping Multiplying Found Values by Two

function findFinalValue(nums, original) {
    while (nums.includes(original)) {
        original = original * 2;
    }

    return original;
}

const nums = [5, 3, 6, 1, 12];
const original = 3;
console.log(findFinalValue(nums, original));