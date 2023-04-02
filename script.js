const playGame = () => {
    board.createBoard();

    const player1 = player('X');        //Also input player names
    const player2 = player('O');
    //renderBoard(boardAr);


    //return;
};


const renderBoard = (boardAr) => {

    const square = document.querySelectorAll('.col');
    for (i = 0; i < boardAr.length; i++) {
        square[i].innerHTML = boardAr[i];
        console.log("Work");
    }
};

const player = (symbol) => {
    //let name = 
    return {
        symbol
    };
};

//let result = 'play';
const checkWin = (boardAr) => {
    //Check by row
    for (let i = 0; i < 9; i += 3) {
        if (boardAr[i] !== '' && boardAr[i] === boardAr[i + 1] && boardAr[i + 1] === boardAr[i + 2]) {
            return true;
        }
    }
    //Check by column
    for (let j = 0; j < 3; j++) {
        if (boardAr[j] !== '' && boardAr[j] === boardAr[j + 3] && boardAr[j + 3] === boardAr[j + 6]) {
            return true;
        }
    }
    console.log("check");
    if (boardAr[0] !== '' && boardAr[0] === boardAr[4] && boardAr[4] === boardAr[8]) {
        console.log("win");
        return true;
    }

    if (boardAr[2] !== '' && boardAr[2] === boardAr[4] && boardAr[4] === boardAr[6]) {
        console.log("win");
        return true;
    }
    return false;
};


const board = (function () {
    const boardAr = [];
    const boardSquares = document.querySelector('#board-squares');
    const boardTitle = document.querySelector('#board-title');      // Board title will display winner
    let playerTurn = 'O';
    let win = false;        //For check win
    let turnCount = 0;
    //addSquareClickEvents(boardAr); //
    const createBoard = () => {
        for (let i = 1; i <= 3; i++) {
            for (let j = 1; j <= 3; j++) {
                const col = document.createElement('div');
                col.classList.add('col');
                boardSquares.appendChild(col);
                boardAr.push(col);    //Add column to array     -- Change this to add X or O to array. Also mark board function changes

                // const markBoard = (col, playerTurn) => {
                //     if (playerTurn == 'X' || playerTurn == null) {
                //         playerTurn = 'O';
                //     } else {
                //         playerTurn = 'X';
                //     }

                //     col.innerHTML = playerTurn;         //X or O
                //     return playerTurn;
                // };
            }
        }
    };

    const hover = () => {   //
        console.log("Happened");
    };

    const addSquareClickEvents = (boardAr) => {
        let square = document.querySelectorAll('.col');
        console.log("Click");
        boardAr.forEach(function (square) {
            square.addEventListener('click', () => {
                if (square.innerHTML == '' && win == false) {
                    playerTurn = markBoard(square, playerTurn);
                    win = checkWin(boardAr);
                    turnCount++;
                }
                if (win) {        //If a player wins
                    boardTitle.innerHTML = "Player " + "'" + playerTurn + "'" + ' Wins!';
                    boardTitle.style.color = "#22008b";
                    boardTitle.style.fontWeight = "700";
                }
                else if (turnCount >= 9) {
                    boardTitle.innerHTML = 'Draw!';
                }
            });

        });
    };


    return { createBoard, boardAr };
})();


//playGame(player1, player2);
playGame();

