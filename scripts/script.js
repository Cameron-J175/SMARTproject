const wordDisplay = document.querySelector(".word-display");
const guessesText = document.querySelector(".guesses-text b");
const keyboardDiv = document.querySelector(".keyboard");
const hangmanImage = document.querySelector(".hangman-box img");
const gameModal = document.querySelector(".game-modal");
const playAgainBtn = gameModal.querySelector("button");

// Initializing game variables
let currentWord, correctLetters, wrongGuessCount;
const maxGuesses = 6;

let count = 0

function endGame() {  
    count = count += 1
    if(count == 1) {
        alert("You can't end it.")
    } else if (count == 2) {
        alert("Was I not clear?")
    } else if(count == 3) {
        alert("You really want to end it all?")
    } else if (count == 4) {
        alert("Well too bad.")
    } else if(count == 5) {
        alert("Your stuck here with me.")
    } else if (count == 6) {
        alert("Since your so desperate, I will give you a piece of advice.")
    } else if(count == 7) {
        alert("Try learning calculus")
    } else if (count == 8) {
        alert("It will help you a lot.")
    } else if(count == 9) {
        alert("Well that's all I have for you.")
    } else if(count == 10) {
        alert("See you around.")
    } else if(count == 100) {
        alert("Are you that desperate?")
    } else if(count == 101) {
        alert("Fine, click the button one more time and I'll get you out of here")
    } else if(count == 102) {
        window.close()
        window.open("https://www.youtube.com/watch?v=RtWBlDC2-ss")
    } else if(11 < count < 99) {
        alert("...")
    }
}



function startGame() {
    
    let para = document.getElementById("game");
    para.classList.toggle("game");
    let button = document.getElementById("button");
    button.classList.toggle("buttonAlt");
}
    
    const resetGame = () => {
        // Ressetting game variables and UI elements
        correctLetters = [];
        wrongGuessCount = 3;
        hangmanImage.src = "images/hangman-0.svg";
        guessesText.innerText = `${wrongGuessCount} / ${maxGuesses}`;
        wordDisplay.innerHTML = currentWord.split("").map(() => `<li class="letter"></li>`).join("");
        keyboardDiv.querySelectorAll("button").forEach(btn => btn.disabled = false);
        gameModal.classList.remove("show");
    }
    
    const getRandomWord = () => {
        // Selecting a random word and hint from the wordList
        const { word, hint } = wordList[Math.floor(Math.random() * wordList.length)];
        currentWord = word.toUpperCase(); // Making currentWord as random word
        document.querySelector(".hint-text b").innerText = hint;
        resetGame();
    }
    
    const gameOver = (isVictory) => {
        // After game complete.. showing modal with relevant details
        const modalText = isVictory ? `You found the word:` : 'The correct word was:';
        gameModal.querySelector("img").src = `images/${isVictory ? 'victory' : 'lost'}.gif`;
        gameModal.querySelector("h4").innerText = isVictory ? 'Congrats!' : 'Game Over!';
        gameModal.querySelector("p").innerHTML = `${modalText} <b>${currentWord}</b>`;
        gameModal.classList.add("show");
    }
    
    const initGame = (button, clickedLetter) => {
        // Checking if clickedLetter is exist on the currentWord
        if(currentWord.includes(clickedLetter)) {
            // Showing all correct letters on the word display
            [...currentWord].forEach((letter, index) => {
                if(letter === clickedLetter) {
                    correctLetters.push(letter);
                    wordDisplay.querySelectorAll("li")[index].innerText = letter;
                    wordDisplay.querySelectorAll("li")[index].classList.add("guessed");
                }
            });
        }  else {
            // If clicked letter doesn't exist then update the wrongGuessCount and hangman image
            wrongGuessCount++;
            hangmanImage.src = `images/hangman-${wrongGuessCount}.svg`;
        }
        button.disabled = true; // Disabling the clicked button so user can't click again
        guessesText.innerText = `${wrongGuessCount} / ${maxGuesses}`;
    
        // Calling gameOver function if any of these condition meets
        if(wrongGuessCount === maxGuesses) return gameOver(false);
        if(correctLetters.length === currentWord.length) return gameOver(true);

        
    }
    
    // Creating keyboard buttons and adding event listeners
    for (let i = 32; i <= 96; i++) {
        const button = document.createElement("button");
        button.innerText = String.fromCharCode(i);
        keyboardDiv.appendChild(button);
        button.addEventListener("click", (e) => initGame(e.target, String.fromCharCode(i)));
    }
    
    getRandomWord();
    
    playAgainBtn.addEventListener("click", getRandomWord);






   