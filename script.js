
const playGame = () => {
    const player1 = player('X');
    const player2 = player('O');
    const playerTurn = true;

};

const board = (function () {
    const boardAr = [];
    const boardSquares = document.querySelector('#board-squares');
    const createBoard = () => {
        for (let i = 1; i <= 3; i++) {
            for (let j = 1; j <= 3; j++) {
                const col = document.createElement('div');
                col.classList.add('col');
                boardSquares.appendChild(col);
                boardAr.push(col);    //Add column to array
                col.addEventListener('click', () => {
                    markBoard(col);
                });
            }
        }

        const markBoard = (col) => {
            col.innerHTML = 'X';
        };
    };
    return { createBoard };
})();

const player = (symbol) => {
    return {
        symbol
    };
};

//playGame();
board.createBoard();
