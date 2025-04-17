let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScoreEl = document.querySelector("#user-score");
const compScoreEl = document.querySelector("#comp-score");

// Function to generate computer choice
const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    return options[Math.floor(Math.random() * 3)];
};

// Function to handle a draw
const drawGame = () => {
    console.log("Game was a draw.");
    msg.innerText = "It's a Draw!";
    msg.style.backgroundColor = "gray"; // Optional styling
};

// Function to show the winner and update scores
const showWinner = (userWin) => {
    if (userWin) {
        userScore++; // Increment user score
        userScoreEl.innerText = userScore;
        msg.innerText = "You Win! 🎉";
        msg.style.backgroundColor = "green"; // Optional styling
    } else {
        compScore++; // Increment computer score
        compScoreEl.innerText = compScore;
        msg.innerText = "You Lose! 😞";
        msg.style.backgroundColor = "red"; // Optional styling
    }
};

// Function to play the game
const playGame = (userChoice) => {
    console.log("User Choice =", userChoice);

    // Generate computer choice
    const compChoice = genCompChoice();
    console.log("Comp Choice =", compChoice);

    // Check for a draw
    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;

        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }

        showWinner(userWin);
    }
};

// Add event listeners to all choices
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
