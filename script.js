function computerChoice() {
    const choices = [1, 2, 3, 4, 5, 6]
    const randomChoice = Math.floor(Math.random() * 6 )
    return choices[randomChoice]
}

let playerChoice, computer

const die1 = document.querySelector('.element:nth-child(1)')
const die2 = document.querySelector('.element:nth-child(2)')
const die3 = document.querySelector('.element:nth-child(3)')
const die4 = document.querySelector('.element:nth-child(4)')
const die5 = document.querySelector('.element:nth-child(5)')
const die6 = document.querySelector('.element:nth-child(6)')

die1.addEventListener('click', () => {
    playRound(1)
})

die2.addEventListener('click', () => {
    playRound(2)
})

die3.addEventListener('click', () => {
    playRound(3)
})

die4.addEventListener('click', () => {
    playRound(4)
})

die5.addEventListener('click', () => {
    playRound(5)
})

die6.addEventListener('click', () => {
    playRound(6)
})

function updateResult(result, playerChoice, computer) {
    const resultElement = document.querySelector(".result p");
    const resultDiv = document.querySelector(".result");
    resultDiv.style.display = "block";
    resultElement.textContent = result

    if (playerChoice > computer)
        resultElement.style.color = "#cdd6f4"
    else if (playerChoice < computer)
        resultElement.style.color = "#f38ba8"
    else if (playerChoice == computer)
        resultElement.style.color = "#f9e2af"
}

function updateSelectionImages(playerChoice, computer) {
    const playerImg = document.querySelector(".player-selection img")
    const computerImg = document.querySelector(".computer-selection img")

    playerImg.setAttribute("src", `images/die${playerChoice}.svg`)
    computerImg.setAttribute("src", `images/die${computer}.svg`)
}

function playRound(playerChoice) {
    playerChoice = playerChoice
    computer = computerChoice()

    if (playerChoice > computer) {
        updateResult(`You win! ${playerChoice} is greater than ${computer}.`, playerChoice, computer)
    } else if (playerChoice < computer) {
        updateResult(`You lose! ${playerChoice} is less than ${computer}.`, playerChoice, computer)
    } else {
        updateResult(`It's a tie!`, playerChoice, computer)
    }

    updateSelectionImages(playerChoice, computer)
    updateHistory(playerChoice, computer)
}

function updateHistory(playerChoice, computer) {
    const playerHistory = document.querySelector('.player-history')
    const computerHistory = document.querySelector('.computer-history')
    const winner = document.querySelector('.winner')
    let playerSpanTags = ""
    let computerSpanTags = ""

    for (let i = 1; i <= playerChoice; i++) {
        playerSpanTags += "<span></span>"
    }

    for (let j = 1; j <= computer; j++) {
        computerSpanTags += "<span></span>"
    }

    const createPlayerDiv = document.createElement('div')
    createPlayerDiv.innerHTML = playerSpanTags
    playerHistory.insertBefore(createPlayerDiv, playerHistory.children[1])

    const createComputerDiv = document.createElement('div')
    createComputerDiv.innerHTML = computerSpanTags
    computerHistory.insertBefore(createComputerDiv, computerHistory.children[1])

    let winnerMsg = ""
    if (playerChoice > computer) {
        winnerMsg = "You"
    } else if (playerChoice < computer) {
        winnerMsg = "Computer"
    } else {
        winnerMsg = "Tie"
    }
    const createWinnerP = document.createElement('p')
    createWinnerP.innerHTML = winnerMsg
    winner.insertBefore(createWinnerP, winner.children[1])
}