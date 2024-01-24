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

function showPlayerScore() {
    console.log('Name: ' + playerName +', Score: ' + score);
}

function addNumbers(num1, num2) {
    let total = num1 + num2;

    return total;

}

showPlayerScore();

console.log(addNumbers(5, 10));