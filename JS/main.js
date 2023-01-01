// Create the choices
let letters = "abcdefghijklmnopqrstuvwxyz";
const lettersArray = Array.from(letters);

let lettersContainer = document.querySelector(".letters");

lettersArray.forEach((letter) => {
  let spanLetter = document.createElement("span");
  let myText = document.createTextNode(letter);
  spanLetter.appendChild(myText);
  spanLetter.className = "letter-mini-box";
  lettersContainer.appendChild(spanLetter);
});

// Create random words
const words = {
  programming: ["php", "javascript", "python", "csharp", "mysql", "fortran"],
  movies: [
    "nightcrawler",
    "demolition",
    "clubhouse",
    "crazy taxi",
    "interstellar",
    "fight club",
  ],
  people: [
    "Alexander Arnold",
    "lionel messi",
    "ronaldo",
    "rihanna",
    "steve carel",
  ],
  countries: ["Egypt", "Morocco", "Tunisia", "USA", "Germany", "UAE"],
};

// Choose random word
let allKeys = Object.keys(words);

let randomKey = Math.floor(Math.random() * allKeys.length);
let randomKeyName = allKeys[randomKey];
let randomPropArrayValue = words[randomKeyName];
let randomPropNumber = Math.floor(Math.random() * randomPropArrayValue.length);
let randomValueName = randomPropArrayValue[randomPropNumber];
console.log(randomValueName);

// Specify the category name
document.querySelector(".game-info .category span").innerHTML = randomKeyName;

// Create the letter guess section

let lettersGuess = document.querySelector(".letters-guess");
let lettersArrayAtGuess = Array.from(randomValueName);

// Create the guess box span
lettersArrayAtGuess.forEach((letter) => {
  let letterSpan = document.createElement("span");

  if (letter === " ") {
    letterSpan.className = "Space-Word";
  }

  lettersGuess.appendChild(letterSpan);
});

// Set Wrong Attempts and drawing
let wrongAttempts = 0;
let draw = 0;

// Handel the clicked letters

let mySpans = document.querySelectorAll(".letters-guess span");

document.addEventListener("click", (e) => {
  let Status = false;

  if (e.target.className === "letter-mini-box") {
    e.target.classList.add("clicked");

    let theClickedLetter = e.target.innerHTML.toLowerCase();

    lettersArrayAtGuess.forEach((letter, letterIndex) => {
      if (letter == theClickedLetter) {
        Status = true;
        console.log(`found at index number ${letterIndex}`);

        mySpans.forEach((ele, spanIndex) => {
          if (letterIndex === spanIndex) {
            ele.innerHTML = theClickedLetter;
          }
        });
      }
    });
    if (Status === false) {
      wrongAttempts++;

      let theDraw = document.querySelector(".hangman-draw");
      theDraw.classList.add(`Wrong-${wrongAttempts}`);

      if (wrongAttempts === 8) {
        document.querySelector(".letters").classList.add("finished");
        endGame();
      }
    }
  }
});

function endGame() {
  let div = document.createElement("div");
  let divText = document.createTextNode(
    `Game Over, The Word Is ${randomValueName}`
  );
  div.appendChild(divText);
  div.className = "popup";
  document.body.appendChild(div);
}
