// Code your solutions in this file
/*
const names = ["Guadalupe", "Ollie", "Aki"];
function writeCards(names, occasion) {
    for (let i = 0; i < names.length; i++) {
        console.log(`Thank you, ${names[i]}, for the wonderful ${occasion} gift!`);
    }
    return names;
}
*/
function writeCards(names = ["Guadalupe", "Ollie", "Aki"], occasion) {
    const messages = [];
    for (let i = 0; i < names.length; i++) {
        messages.push(`Thank you, ${names[i]}, for the wonderful ${occasion} gift!`);
    }
    return messages;
}

function countDown() {
    let countDown = 10
    while (countDown >= 0){
        console.log(countDown);
        countDown--;
    }
}

