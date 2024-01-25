// this is a java comment
/* this is a longer comment*/

console.log('Javascript is running');

let score = 100;
console.log(score);
score = 200;
console.log(score);


const playerName = 'Randy';
console.log(playerName);
// playerName = 'Bob';
console.log(playerName);

const buy = document.querySelector('#buyButton');
const controlButtons = document.querySelectorAll('#player button');
console.log(buy);
console.log(controlButtons);


function showPlayerScore() {
    console.log('Name: ' + playerName +', Score: ' + score);
}

function addNumbers(num1, num2) {
    let total = num1 + num2;

    return total;

}

function buyProduct() {
    console.log('user clicked bought button');
}

function logMyId() {
    console.log(this.id);
}

showPlayerScore();

console.log(addNumbers(5, 10));

buy.addEventListener('click', buyProduct);
controlButtons.forEach(function (button){
    button.addEventListener('click', logMyId);
})

// controlButtons.forEach(button => button.addEventListener('click', logMyId));