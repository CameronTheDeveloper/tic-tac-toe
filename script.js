
const playGame = (boardAr) => {
    const player1 = player('X');
    const player2 = player('O');
    const playerTurn = true;

    //let result = 'play';
    const checkWin = () => {

    };


};

const board = (function () {
    const boardAr = [];
    const boardSquares = document.querySelector('#board-squares');
    let playerTurn = 'O';
    const createBoard = () => {
        for (let i = 1; i <= 3; i++) {
            for (let j = 1; j <= 3; j++) {
                const col = document.createElement('div');
                col.classList.add('col');
                boardSquares.appendChild(col);
                boardAr.push(col);    //Add column to array
                col.addEventListener('click', () => {
                    if (col.innerHTML == '')
                        playerTurn = markBoard(col, playerTurn);
                    //Check win
                    //
                });
                const markBoard = (col, playerTurn) => {
                    if (playerTurn == 'X' || playerTurn == null) {
                        playerTurn = 'O';
                    } else {
                        playerTurn = 'X';
                    }

                    col.innerHTML = playerTurn;
                    return playerTurn;
                };
            }
        }
    };
    return { boardAr, createBoard };
})();

const player = (symbol) => {
    return {
        symbol
    };
};

//playGame();

//playGame(board.boardAr);
board.createBoard();
