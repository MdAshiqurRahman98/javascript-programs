// Checking Validity of Bracket using Stack

function isBracketValid(s) {
    if (s.length === 0) {
        return null;
    }

    let matchingPairs = {
        ')' : '(',
        '}' : '{',
        ']' : '['
    };

    let stack = [];

    for (let char of s) {
        if (matchingPairs[char]) {
            const topElement = stack.length === 0 ? '#' : stack.pop();

            if (topElement !== matchingPairs[char]) {
                return false;
            }
        }
        else {
            stack.push(char);
        }
    }

    return stack.length === 0;
}

const s = "()";
console.log(isBracketValid(s));