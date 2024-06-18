// Finding the Length of Last Word of a String

function lengthOfLastWord(s) {
    if (s.length === 0) {
        return null;
    }

    s = s.trim();
    let length = 0;

    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] !== ' ') {
            length++;
        }
        else {
            break;
        }
    }

    return length;
}

const s = "Bangladesh is a beautiful country";
console.log(lengthOfLastWord(s));