let endgame = false;

//create player
const getPlayer = (sign) => {
    return { sign };
};

const gameboard = (() => {
    const game = ["", "", "", "", "", "", "", "", ""]

    return { game };
})();

const displayController = (() => {
    const winMessage = document.querySelector('.winMessage div');
    const resetButton = document.querySelector('.resetButton');
    const playerX = getPlayer('X');
    const playerO = getPlayer('O');
    let circleTurn;
    const boxes = document.querySelectorAll(".board div");

    boxes.forEach(box => {
        box.addEventListener('click', handleClick, { once: true })
    })

    function handleClick(e) {

        if (endgame) { return }
        const box = e.target;
        const turn = circleTurn ? playerO.sign : playerX.sign;
        e.target.innerText = turn;
        const index = [...displayController.boxes].indexOf(box);
        gameboard.game[index] = turn;
        circleTurn = !circleTurn;
        winConditions();
    }

    resetButton.addEventListener('click', () => {
        window.location.reload();
    })

    return { playerX, playerO, boxes, winMessage }
})();


function checkWin(sign) {
    winningCombos = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

    return winningCombos.some(combination => {
        return combination.every(index => {
            return displayController.boxes[index].textContent === sign
        })
    })
}

function checkDraw() {
    if (!gameboard.game.includes("")) return true;
}


const winConditions = (() => {
    if (checkWin('X')) {
        displayController.winMessage.textContent = "Player X wins!"
        endgame = true;
    }
    if (checkWin('O')) {
        displayController.winMessage.textContent = "Player X wins!"
        endgame = true;
    }
    if (checkDraw()) {
        displayController.winMessage.textContent = "It's a draw"
        endgame = true;
    }
});