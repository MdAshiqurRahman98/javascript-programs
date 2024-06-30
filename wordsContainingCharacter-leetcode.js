// Finding Words Containing Character

function findWordsContainingCharacter(words, x) {
    if (words.length === 0) {
        return null;
    }

    let ans = [];

    for (let i = 0; i < words.length; i++) {
        if (words[i].includes(x)) {
            ans.push(i);
        }
    }

    return ans;
}

const words = ["leet", "code"];
const x = "e";
console.log(findWordsContainingCharacter(words, x));