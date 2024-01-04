// Finding address

const findAddress = (obj) => {
    if (Object.keys(obj).length === 2) {
        let street = obj.street;
        let house = '__';
        let society = obj.society;

        const result = street + ',' + house + ',' + society;
        return result;
    }
    else if (Object.keys(obj).length === 1) {
        let street = obj.street;
        let house = '__';
        let society = '__';

        const result = street + ',' + house + ',' + society;
        return result;
    }
    else {
        let street = obj.street;
        let house = obj.house;
        let society = obj.society;

        const result = street + ',' + house + ',' + society;
        return result;
    }
}

const address = {
    street: '10',
    house:'15A',
    society: 'Earth Perfect'
}

const output = findAddress(address);
console.log(output);