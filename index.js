
let  readlineSync  =  require('readline-sync');

function userChoiceFunction() {
var userName = readlineSync.question('May I have your name? ');
console.log('Welcome ' + userName);

const choices = ["Sword", "Arrow", "Magic"]
let userChoiceIndex = null
let userChoices = null
counter = 0

function randomNumber(array) {
  const length = array.length;
  return Math.floor(Math.random() * length);
}
userChoices = readlineSync
.question('Choose your weapon: (Sword, Arrow, or Magic)')

userChoices = userChoices.toLowerCase().split('');
userChoices[0] = userChoices[0].toUpperCase();
userChoices = userChoices.join('');
console.log(userChoices);

while (choices.indexOf(userChoices) === -1) {
  console.log("That is not a valid choice");
  userChoices = readlineSync
  .question('Choose your weapon: (Sword, Arrow, or Magic)')
}

console.log(`Choice index: ${userChoiceIndex}
  Loop count: ${counter}
  user choice: ${userChoices};
  `);

console.log(' You have chosen ' + choices + '!');
return userChoices;
}

let randomNumFrom0to2 = Math.random() * 3;

let userChoices = userChoiceFunction();
let computerChoice = computerChoiceFunction();

determineWinner(computerChoice, userChoices, {})

function computerChoiceFunction() {

let randomIndex = Math.floor(randomNumFrom0to2);

let computerChoice = ['Sword', 'Magic', 'Arrow'][randomIndex];

console.log("Computer chose",computerChoice);

return computerChoice

};

function determineWinner(computerChoice, userChoices, score) {

	if(computerChoice.toLowerCase() === userChoices.toLowerCase()) {

		console.log('Draw!')

		console.log(score);

	}  else if((computerChoice === 'Sword' && userChoices === 'Magic') || (computerChoice === 'Magic' && userChoices === 'Arrow') || (computerChoice === 'Arrow' && userChoices === 'Sword')) {

		score.computer++;

		console.log('You lose!')

		console.log(`Computer choice: ${computerChoice} User choice: ${userChoices}`);

		console.log(score);

	} else {

		// score.user++;

		console.log('You win!');

		console.log(`Computer choice: ${computerChoice} User choice: ${userChoices}`);

		// console.log(score);

	}
}
