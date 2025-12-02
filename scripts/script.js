const choices = ["rock", "paper", "scissors"]
const playerDisplay = document.querySelector(".playerDisplay")
const computerDisplay = document.querySelector(".computerDisplay")
const result = document.querySelector(".result")
const score = document.querySelector(".score")

let playButton = document.querySelector(".play-game")
let choiceButtons = document.querySelectorAll(".choice")
const replayButton = document.querySelector(".replay")



let playerScore = 0
let computerScore = 0
let scoreToWin = 5


playButton.addEventListener("click", () => {
  document.querySelector(".choices").classList.add("show")
  document.querySelector(".play-game").classList.add("hide")
  document.querySelector(".wrapper").classList.add("show")

})

choiceButtons.forEach((choice, index) => {
  choice.addEventListener("click", () => {
    const playerChoice = choices[index]
    playGame(playerChoice)
  })
})


const playGame = (playerChoice) => {

  let computerChoice = choices[Math.floor(Math.random() * 3)]

  playerDisplay.textContent = `Player: ${playerChoice}`
  computerDisplay.textContent = `Computer: ${computerChoice}`

  if (playerChoice === computerChoice) {
    result.textContent = "It's a tie!"
  } else if (playerChoice === "rock" && computerChoice === "scissors" || playerChoice === "scissors" && computerChoice === "paper" || playerChoice === "paper" && computerChoice === "rock") {
    result.textContent = "A point for you!"
    playerScore++;
  } else {
    result.textContent = "You lost, a point for the computer!"
    computerScore++;
  }
  score.textContent = `Player: ${playerScore} Computer: ${computerScore}`


  if (playerScore === scoreToWin) {
    document.querySelector(".choices").classList.remove("show")
    document.querySelector(".replay").classList.add("show")
    result.textContent = "YOU WON!"
  } else if (computerScore === scoreToWin) {
    document.querySelector(".choices").classList.remove("show")
    document.querySelector(".replay").classList.add("show")
    result.textContent = "Computer won the game!"
  }
}

replayButton.addEventListener("click", () => {
  playerScore = 0
  computerScore = 0
  score.textContent = `Player: ${playerScore} Computer: ${computerScore}`
  document.querySelector(".choices").classList.add("show")
  replayButton.classList.remove("show")
})