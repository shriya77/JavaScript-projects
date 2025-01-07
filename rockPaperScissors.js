let userChoice = 'rock';
let compChoice = Math.round(Math.random() * 2 + 1);
let compMovee;

let compMove = compChoice => {switch(compChoice) {
  case 1:
    compMovee = 'rock';
    break;
  case 2:
    compMovee = 'paper';
    break;
  case 3:
    compMovee = 'scissors';
    break;
}
return compMovee
}
console.log('The computer\'s move was: ' + compMove(compChoice));

if (compMove(compChoice) === userChoice) {
  console.log("Its a tie!");
} else if (compMove(compChoice) === 'rock' && userChoice === 'scissors') {
  console.log('You lost!!');
} else if (compMove(compChoice) === 'paper' && userChoice === 'rock') {
  console.log('You lost');
} else if (compMove(compChoice) === 'scissors' && userChoice === 'paper') {
  console.log('You lost!!!');
} else {
  console.log('You won!!!!');
}


