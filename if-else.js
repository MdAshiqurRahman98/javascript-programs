// Traffic signal using if-else

let signal = 'green';
if(signal === 'red') {
    console.log('If you try to cross the road, you may be in danger.');
}
else if(signal === 'yellow') {
    console.log('You should stop.');
}
else if(signal === 'green') {
    console.log('You should cross the road.');
}
else {
    console.log('Invalid Signal!');
}