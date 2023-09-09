// Traffic signal using switch

let signal = 'yellow';

switch(signal) {
    case 'red':
        console.log('If you try to cross the road, you may be in danger.');
        break;
    case 'yellow':
        console.log('You should stop.');
        break;
    case 'green':
        console.log('You should cross the road.');
        break;
    default:
        console.log('Invalid Signal!');
}