const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
    return userInput;
  } else {
    return 'Invalid input';
  }
}

const getComputerChoice = () => {
  const compRandom = Math.floor(Math.random() * 3);
  //console.log(compRandom);
  switch (compRandom) {
    case 0:
      return 'rock';
      break;
    case 1:
      return 'paper';
      break;
    case 2:
      return 'scissors';
      break;
  }
}


const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return 'Game was a tie';
  } 
  
  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'Sorry, computer won!!';
    } else {
      return "Congrats, you won!!";
    }
  }
  
  if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'Sorry, computer won!!';
    } else {
      return "Congrats, you won!!";
    }
  }

  if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'Sorry, computer won!!';
    } else {
      return "Congrats, you won!!";
    }
  }
}

//console.log(getUserChoice('Scissors'));
//console.log(getComputerChoice());
//console.log(determineWinner('scissors', 'rock'));

const playGame = () => {
  var userChoice = getUserChoice('paper');
  var computerChoice = getComputerChoice();
  console.log('User input: ' + userChoice);
  console.log('Computer input: ' + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
}

playGame();