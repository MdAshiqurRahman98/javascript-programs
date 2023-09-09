// Calculating Triangle Area using Function

function triangleArea(base, height) {
    if(base < 0 || height < 0) {
        return 'Invalid Input!';
    }

    let area = 0.5 * base * height;
    return area;
}

const triArea = triangleArea(5, 7);
console.log('The triangle area is:', triArea);