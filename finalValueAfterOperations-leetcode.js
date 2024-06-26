// Final Value of Variable After Performing Operations

function finalValueAfterOperations(operations) {
    if (operations.length === 0) {
        return null;
    }

    let X = 0;

    for (let i = 0; i < operations.length; i++) {
        if (operations[i] === '++X' || operations[i] === 'X++') {
            X++;
        }
        else if (operations[i] === '--X' || operations[i] === 'X--') {
            X--;
        }
    }

    return X;
}

const operations = ["--X", "X++", "X++"];
console.log(finalValueAfterOperations(operations));