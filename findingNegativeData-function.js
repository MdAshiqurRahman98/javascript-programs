// findingNegativeData Function

function findingNegativeData(numbers) {
    if(!Array.isArray(numbers)) {
        return 'Please provide an array of numbers.';
    }
    else {
        let negativeData = 0;
        /* for(let i = 0; i < numbers.length; i++) {
            if(typeof numbers[i] !== 'number') {
                return 'Please provide an array of numbers.';
            }
            else {
                if(numbers[i] < 0) {
                    negativeData++;
                }
            }
        } */
        for(let item of numbers) {
            if(typeof item !== 'number') {
                return 'Please provide an array of numbers.';
            }
            else {
                if(item < 0) {
                    negativeData++;
                }
            }
        }
        return negativeData;
    }
}

const array = [3, -5, 1, -7, -13];
const negativeData = findingNegativeData(array);
console.log(negativeData);