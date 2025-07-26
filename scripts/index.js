import { GuessBookLoacation, Score, ButtonColor} from "./guessLocation.js";
let rendomBook; 
const score = new Score();
const bookGame = new GuessBookLoacation();
const buttonColor = new ButtonColor();

document.querySelector('.js-get-book-button').addEventListener('click', () => { 
  rendomBook = bookGame.getRandomBook();
  document.querySelectorAll('.js-bookButtons').forEach((buttons) => {
    buttonColor.resetColor(buttons.id);
  });
});

document.querySelectorAll('.js-bookButtons').forEach((button) => {
  button.addEventListener('click', () => {
    let answer = bookGame.guessBook(rendomBook, bookGame.getLocation(button.id));
    if (answer){
      score.addRight();
      buttonColor.addColor(button.id, answer);
    }else{
      score.addWrong();
      buttonColor.addColor(button.id, answer);
    }
    score.displayHTML();
  });
});

   