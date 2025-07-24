import { GuessBookLoacation, Score } from "./guessLocation.js";
let rendomBook; // stores the random number from the getRandomBook() method. 
const score = new Score();
const bookGame = new GuessBookLoacation();

document.querySelector('.js-get-book-button').addEventListener('click', () => { 
  rendomBook = bookGame.getRandomBook();
});

document.querySelectorAll('.js-bookButtons').forEach((button) => {
  button.addEventListener('click', () => {
    if (bookGame.guessBook(rendomBook, bookGame.getLocation(button.id))){
      score.addRight()
    }else{
      score.addWrong();
    }
    document.querySelector('.js-output-book-code-resulet').innerHTML = `
    Riktig: ${score.right} - Feil.${score.wrong}
  `;
  });
});
 