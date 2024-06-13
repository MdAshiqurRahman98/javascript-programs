// First Occurrence of String Matching using indexOf Method

function strStr(string1, string2) {
    return string1.indexOf(string2);
}

const string1 = "sadbutsad";
const string2 = "sad";
console.log(strStr(string1, string2));