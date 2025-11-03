const score = {
  wins: 0,
  loss: 0,
  ties: 0
};

// document.querySelector('.js-Score')
// .innerHTML=`wins :${score.wins} losses ${score.loss} ties ${score.ties}`
updatescore()// writenn avobe code is same as writeen in function
let isAutoPlay = false;
let intervalId;

function autoPlay() {
  if (!isAutoPlay) {
    intervalId = setInterval(function () {
      const playerMove = pickComputerMove();
      playGame(playerMove);
    }, 1000)
    isAutoPlay = true;
  }
  else {
    clearInterval(intervalId);
    isAutoPlay = false;
  }
}

function playGame(playerMove) {
  const computerMove = pickComputerMove();
  console.log(computerMove);
  let result = '';

  if (playerMove === 'scissor') {
    if (computerMove === 'rock') {
      result = 'you lose';
    } else if (computerMove === 'paper') {
      result = 'you win';
    } else if (computerMove === 'scissor') {
      result = 'Tie';
    }
  }

  else if (playerMove === 'paper') {
    if (computerMove === 'rock') {
      result = 'you win';
    } else if (computerMove === 'paper') {
      result = 'Tie';
    } else if (computerMove === 'scissor') {
      result = 'you lose';
    }
  }

  else {
    if (computerMove === 'rock') {
      result = 'Tie';
    } else if (computerMove === 'paper') {
      result = 'you lose';
    } else if (computerMove === 'scissor') {
      result = 'you win';
    }
  }

  if (result === 'you win') {
    score.wins += 1;
  }
  else if (result === 'you lose') {
    score.loss += 1;
  }
  else if (result === 'Tie') {
    score.ties += 1;
  }

  //   document.querySelector('.js-Score')
  // .innerHTML=`wins :${score.wins} losses ${score.loss} ties ${score.ties}`

  updatescore()// we are using function for reuse the code
  document.querySelector('.js-result').innerHTML = result;

  document.querySelector('.js-moves').innerHTML = `you picked ${playerMove} ,computer picked ${computerMove}`
  /* alert(` you picked ${playerMove} ,computer picked ${computerMove}. ${result} 
wins :${score.wins} losses ${score.loss} ties ${score.ties}`);*/

}
function result() {
  document.querySelector('.js-result')
    .innerHTML = result;
}

function updatescore() {
  document.querySelector('.js-Score')
    .innerHTML = `wins :${score.wins} losses ${score.loss} ties ${score.ties}`

}

function pickComputerMove() {
  const randomNumber = Math.random();
  let computerMove = '';
  if (randomNumber >= 0 && randomNumber < 1 / 3) {// logical operator has lower proitiy than mathematical operator
    computerMove = 'rock';
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = 'paper';
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = 'scissor';
  }
  return computerMove;
}