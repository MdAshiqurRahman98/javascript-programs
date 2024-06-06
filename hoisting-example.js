// Hoisting Example

x = 9;
console.log("Value of x:", x);
var x;

if(true) {
    y = 7;
    console.log("Value of y:", y);
    var y;
}