const phones = [
    {name: 'Samsung', storage: '32 GB', price: 36000, color: 'W'},
    {name: 'Walton', storage: '32 GB', price: 22000, color: 'W'},
    {name: 'iPhone', storage: '32 GB', price: 82000, color: 'W'},
    {name: 'Xaomi', storage: '32 GB', price: 52000, color: 'W'},
    {name: 'Oppo', storage: '32 GB', price: 20000, color: 'W'},
    {name: 'Nokia', storage: '32 GB', price: 44000, color: 'W'},
    {name: 'HTC', storage: '32 GB', price: 62000, color: 'W'}
];

function cheapestPhone(phones) {
    let cheapest = phones[0];
    for(let i = 0; i < phones.length; i++) {
        const phone = phones[i];
        if(phone.price < cheapest.price) {
            cheapest = phone;
        }
    }
    return cheapest;
}

const selection = cheapestPhone(phones);
console.log(selection);