console.log("Hello World")

function getel(id) {
    return document.getElementById(id);
}

var startButton = getel("startGame")
var gamePlay = getel("gamePlay")

var playButtons = document.getElementsByClassName("playbutton");

var rock = getel("rock")
var paper = getel("paper")
var scissor = getel("scissor")

var buttongroup = getel("buttongroup")

var choices = ["rock", "scissor", "paper"]

var status = getel("choice");
var playerSc = getel("playerSC");
var computeSc = getel("computerSC");
var compChooses = getel("compChooses");
var compChoosesParent = getel("compChoosesParent");

var wins = {
    "rock": "paper",
    "scissor": "rock",
    "paper": "scissor",
}

startButton.addEventListener("click", startGame);



Array.from(playButtons).forEach(btn => {
    btn.addEventListener("click", buttonClicked);
});

function startGame() {
    hidecompChooses();
    showButtons();
    hideStartButtons();
    showGamePlay();
}

var playerScore = 0;
var computScore = 0;

function playChoice(playerChoice) {
    var computChoice = choices[Math.floor(Math.random() * choices.length)];
    displayComputerChoice(computChoice);
    console.log(wins[playerChoice], "player:", playerChoice, "computer:", computChoice)
    if (wins[playerChoice] == computChoice) {
        console.log("Computer won")
        computScore++
    } else if (computChoice == playerChoice) {
        console.log("Same")
    } else {
        console.log("Player won")
        playerScore++
    }
    updateScore();
}

function displayComputerChoice(ch) {
    showcompChooses();
    console.log("ch", ch)
    var cmpch = "";
    switch (ch) {
        case "paper":
            cmpch = "🖐";
            break;
        case "rock":
            cmpch = "👊";
            break;
        case "scissor":
            cmpch = "✌";
            break;
    }
    compChooses.innerHTML = cmpch;
    // status.innerHTML = "Computer choose" + ch;
}

function updateScore() {
    playerSc.innerHTML = playerScore
    computeSc.innerHTML = computScore
}

function buttonClicked(e) {
    var btnChoice = e.target.id;
    console.log(e.target.id);
    playChoice(btnChoice);
}

function showButtons() {
    if (buttongroup.classList.contains("hidden")) {
        buttongroup.classList.remove("hidden")
    }
}

function hideButtons() {
    if (!buttongroup.classList.contains("hidden")) {
        buttongroup.classList.add("hidden")
    }
}

function hideStartButtons() {
    if (!startButton.classList.contains("hidden")) {
        startButton.classList.add("hidden")
    }
}

function showStartButtons() {
    if (startButton.classList.contains("hidden")) {
        startButton.classList.remove("hidden")
    }
}

function hideGamePlay() {
    if (!gamePlay.classList.contains("hidden")) {
        gamePlay.classList.add("hidden")
    }
}

function showGamePlay() {
    if (gamePlay.classList.contains("hidden")) {
        gamePlay.classList.remove("hidden")
    }
}

function hidecompChooses() {
    if (!compChoosesParent.classList.contains("hidden")) {
        compChoosesParent.classList.add("hidden")
    }
}

function showcompChooses() {
    if (compChoosesParent.classList.contains("hidden")) {
        compChoosesParent.classList.remove("hidden")
    }
}
// https://www.facebook.com/embed/instantgames/2579609432294008/player?game_url=https://localhost:8080