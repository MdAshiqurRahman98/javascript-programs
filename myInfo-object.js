// myInfo Object

function information(info) {
    const sentence = 'My name is '+info.name+'. My address is '+info.address+'. My age is '+info.age+'.';
    console.log(sentence);
}

const myInfo = {
    name: 'Md Ashiqur Rahman',
    age: 24,
    address: 'Keraniganj'
}
information(myInfo);