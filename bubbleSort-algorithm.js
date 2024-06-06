// Bubble Sort Algorithm without taking User Input

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

const arrayToSort = [65, 35, 25, 13, 23, 11, 91];
bubbleSort(arrayToSort);
console.log("Sorted array:", arrayToSort);