// Finding Leap Year in an Array using Function

function findLeapYear(years) {
    let leapYear = [];
    for(let i = 0; i < years.length; i++) {
        let element = years[i];
        // console.log(i, element);
        if(element % 4 === 0) {
            leapYear.push(element);
        }
    }
    return leapYear;
}

const arr = [2023, 2024, 2025, 2028, 2030];
const leapYears = findLeapYear(arr);
console.log(leapYears);