//create player
const getPlayer = (sign) => {
    return { sign };
};



// gamboard object

const gameboard = (() => {
    //check win
    //check draw




})();

const displayController = (() => {
    //get sign
    //place sign
    //switch turns
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
    }
})();