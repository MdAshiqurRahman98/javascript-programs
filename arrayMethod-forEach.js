// Array Method - forEach()
// Example: Logging each element of an array to the console

function logArrayElements(arr) {
    arr.forEach(element => {
        console.log(element);
    });
}

const fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];
console.log("Fruits in the array:");
logArrayElements(fruits);