//Game values
let min = 1, max = 10, winningNum = getRandNum(min,max), guessesLeft = 3;

// UI elements
const game = document.querySelector('#game'),
minNum = document.querySelector('.min-num'),
maxNum = document.querySelector('.max-num'),
guessBtn = document.querySelector('#guess-btn'),
guessInput = document.querySelector('#guess-input'),
message = document.querySelector('.message');

// Assign 

minNum.textContent = min;
maxNum.textContent = max;

game.addEventListener('mousedown',(e)=>{
  if (e.target.className === 'play-again') window.location.reload();
});

guessBtn.addEventListener('click',()=>{
  let guess = parseInt(guessInput.value);
  console.log(guess);
  
  if(isNaN(guess)|| guess < min || guess > max){
    setMessage(`Please enter a number between ${min} and ${max}`,'red');
  }

  if(guess === winningNum){
    gameOver(true,`${winningNum} is correct, You WIN!`)
  } else {
    guessesLeft -= 1;
    if (guessesLeft === 0){
      gameOver(false,`Game over, you lost. The correct number was ${winningNum}`);
    } else {
      guessInput.style.borderColor = 'red';
      //Game continues - answer wrong
      guessInput.value = '';
      setMessage(`${guess} is not correct, ${guessesLeft} guesses left`,'red')
    }
  }
})

function gameOver(won,msg){
  let color;
  won === true ? color = 'green' : color = 'red';
  guessInput.disabled = true;
  guessInput.style.borderColor = color;

  setMessage(msg,color)

  guessBtn.value = "Play Again";
  guessBtn.className += 'play-again';
}

function getRandNum(min,max){
  //console.log(Math.floor(Math.random()*(max-min+1)+min);
  return Math.floor(Math.random()*(max-min+1)+min);
}

function setMessage(msg,color){
  message.style.color = color;
  message.textContent = msg;
}