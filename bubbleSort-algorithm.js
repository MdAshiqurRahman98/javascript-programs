// Bubble Sort Algorithm

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

var arrayToSort = [65, 35, 25, 13, 23, 11, 91];
bubbleSort(arrayToSort);
console.log("Sorted array:", arrayToSort);