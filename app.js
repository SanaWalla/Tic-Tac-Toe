//create player
const getPlayer = (sign) => {
    return { sign };
};

// gamboard object
const gameboard = (() => {
    const board = document.querySelector('.board');





})();

const displayController = (() => {
    const playerX = getPlayer('X');
    const playerO = getPlayer('O');
    let circleTurn;
    const boxes = document.querySelectorAll(".board div");

    boxes.forEach(box => {
        box.addEventListener('click', handleClick, { once: true })
    })

    function handleClick(e) {
        const box = e.target;
        const turn = circleTurn ? playerO.sign : playerX.sign;
        e.target.innerText = turn;
        circleTurn = !circleTurn;
        checkWin();
    }



    return { playerX, playerO, boxes }
})();

function checkWin() {
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

    function allChecked(indexes) {
        return indexes.every(
            function (index) {
                return displayController.boxes[index].textContent === 'X'
            }
        )
    }

    if (winningCombos.some(allChecked)) {
        console.log('win')
    }

}

