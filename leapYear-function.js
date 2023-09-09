// Finding Leap Year using Function

function leapYear(year) {
    if(year % 4 === 0) {
        return true;
    }
    return false;
}

const theYear = leapYear(2023);
console.log(theYear);