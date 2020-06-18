document.addEventListener("DOMContentLoaded", () => {
    const squares = document.querySelectorAll(".grid div")
    const playerDisplay = document.querySelector("#player")
    let currentPlayer = "playerX"

    squares.forEach(square => {
        square.addEventListener("click", clickOutcome)
    })

    function clickOutcome(event) {
        const squareArray = Array.from(squares)
        const indexPosition = squareArray.indexOf(event.target)
        console.log(indexPosition)
        playerDisplay.innerHTML = currentPlayer

        if(currentPlayer === "playerX") {
            currentPlayer = "player0"
        } else {
            currentPlayer = "playerX"
        }
    }
})