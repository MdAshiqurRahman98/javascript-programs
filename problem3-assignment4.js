// Sorting an array

const sortMaker = (array) => {
    for (let i = 0; i < array.length; i++) {
        if (array[0] < 0 || array[1] < 0) {
            return 'Invalid Input';
        }
        else {
            if (array[0] !== array[1]) {
                let newArray = [];
                if (array[0] < array[1]) {
                    newArray = [array[1], array[0]];
                }
                else {
                    newArray = [array[0], array[1]];
                }

                return newArray;
            }
            else {
                if (array[0] === array[1]) {
                    return 'equal';
                }
            }
        }
    }
}

const numbers = [1, 3];
const output = sortMaker(numbers);
console.log(output);