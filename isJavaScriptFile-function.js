// isJavaScriptFile Function

function isJavaScriptFile(fileName) {
    if(typeof fileName !== 'string') {
        return 'Please provide a valid file name (string).';
    }
    else {
        /* if(fileName.toLowerCase().endsWith('.js')) {
            return true;
        }
        return false; */
        return fileName.toLowerCase().endsWith('.js');   // t or f
    }
}

const file = isJavaScriptFile('index.js');
console.log(file);