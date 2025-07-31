// Checking Vowel or Consonant

function checkVowelOrConsonant(letter) {
    if (letter == 'a' || letter == 'e' || letter == 'i' || letter == 'o' || letter == 'u' || letter == 'A' || letter == 'E' || letter == 'I' || letter == 'O' || letter == 'U') {
        return 'Vowel';
    }

    else {
        return 'Consonant';
    }
}

const singleLetter = 'A';
console.log(singleLetter + ' is a ' + checkVowelOrConsonant(singleLetter));