document.addEventListener("DOMContentLoaded", () => {
    const squares = document.querySelectorAll(".grid div")
    const playerDisplay = document.querySelector("#player")
    let currentPlayer = "playerMike"

    squares.forEach(square => {
        square.addEventListener("click", clickOutcome)
    })

    function clickOutcome(event) {
        const squareArray = Array.from(squares)
        const index = squareArray.indexOf(event.target)
        playerDisplay.innerHTML = currentPlayer

        if(currentPlayer === "playerMike") {
            squares[index].classList.add("playerMike")
            currentPlayer = "playerBruce"
        } else {
            squares[index].classList.add("playerBruce")
            currentPlayer = "playerMike"
        }
    }
})