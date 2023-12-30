// Bubble Sort Algorithm using User Input

function bubbleSort(arr) {
    var n = arr.length;
    for (var i = 0; i < n; i++) {
        for (var j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap arr[j] and arr[j + 1]
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}

// Take user input for an array
var inputArray = prompt("Enter numbers separated by commas: ");
var arrayToSort = inputArray.split(",").map(Number);

// Call bubbleSort function to sort the array
bubbleSort(arrayToSort);

// Display the sorted array
console.log("Sorted array:", arrayToSort);