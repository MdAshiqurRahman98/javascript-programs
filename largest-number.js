// Printing Largest Number using if-else

var number1 = 13;
var number2 = 79;
var number3 = 45;

if(number1 >= number2 && number1 >= number3) {
    console.log('Largest number is ' +number1);
}
else if(number2 >= number3 && number2 >= number1) {
    console.log('Largest number is ' +number2);
}
else {
    console.log('Largest number is ' +number3);
}