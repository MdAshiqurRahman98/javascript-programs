// Finding match between two strings

const matchFinder = (string1, string2) => {
    if (typeof string1 !== 'string' || typeof string2 !== 'string') {
        return 'Please provide strings.';
    }

    let result = string1.includes(string2);
    return result;
}

const output = matchFinder('JavaScript', 'Code');
console.log(output);