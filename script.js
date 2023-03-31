
const playGame = (boardAr) => {
    const player1 = player('X');
    const player2 = player('O');
    const playerTurn = true;




};

//let result = 'play';
const checkWin = (boardAr) => {
    //Check by row
    for (let i = 0; i < 9; i += 3) {
        if (boardAr[i].innerHTML !== '' && boardAr[i].innerHTML === boardAr[i + 1].innerHTML && boardAr[i + 1].innerHTML === boardAr[i + 2].innerHTML) {
            return true;
        }
    }
    //Check by column
    for (let j = 0; j < 3; j++) {
        if (boardAr[j].innerHTML !== '' && boardAr[j].innerHTML === boardAr[j + 3].innerHTML && boardAr[j + 3].innerHTML === boardAr[j + 6].innerHTML) {
            return true;
        }
    }
    console.log("check");
    if (boardAr[0].innerHTML !== '' && boardAr[0].innerHTML === boardAr[4].innerHTML && boardAr[4].innerHTML === boardAr[8].innerHTML) {
        console.log("win");
        return true;
    }

    if (boardAr[2].innerHTML !== '' && boardAr[2].innerHTML === boardAr[4].innerHTML && boardAr[4].innerHTML === boardAr[6].innerHTML) {
        console.log("win");
        return true;
    }
    return false;
};

const board = (function () {
    const boardAr = [];
    const boardSquares = document.querySelector('#board-squares');
    let playerTurn = 'O';
    let win = false;        //For check win
    const createBoard = () => {
        for (let i = 1; i <= 3; i++) {
            for (let j = 1; j <= 3; j++) {
                const col = document.createElement('div');
                col.classList.add('col');
                boardSquares.appendChild(col);
                boardAr.push(col);    //Add column to array
                col.addEventListener('click', () => {
                    if (col.innerHTML == '' && win == false) {
                        playerTurn = markBoard(col, playerTurn);
                        win = checkWin(boardAr);
                    }

                    //Check win
                    //
                });
                const markBoard = (col, playerTurn) => {
                    if (playerTurn == 'X' || playerTurn == null) {
                        playerTurn = 'O';
                    } else {
                        playerTurn = 'X';
                    }

                    col.innerHTML = playerTurn;         //X or O
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

