// Bubble Sort Algorithm with taking User Input

function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap arr[j] and arr[j + 1]
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}

// Take user input for an array
const inputArray = prompt("Enter numbers separated by commas: ");
const arrayToSort = inputArray.split(",").map(Number);

// Call bubbleSort function to sort the array
bubbleSort(arrayToSort);

// Display the sorted array
console.log("Sorted array:", arrayToSort);