// Truncate Sentence

function truncateSentence(s, k) {
    return s.split(' ').slice(0, k).join(' ');
}

const s = "Hello how are you Contestant";
const k = 4;
console.log(truncateSentence(s, k));