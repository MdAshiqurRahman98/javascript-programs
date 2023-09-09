// Continue Statement in while Loop

var bookPrice = [100, 150, 170, 270, 300, 350, 370];

var i = 0;
while(i < bookPrice.length) {

    if(bookPrice[i] > 190){
        i++;
        continue;
    }
    console.log(bookPrice[i]);
    i++;
}