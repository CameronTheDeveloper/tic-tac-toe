const player = (symbol) => {
    let name = prompt("Enter player " + symbol + "'s name: ");
    return {
        symbol,
        name
    };
};


// const eraseBoard = (boardAr) => {
//     for (i = 0; i < boardAr.length; i++) {
//         boardAr[i] = '';
//     }
// };


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
                const square = document.createElement('div');
                square.classList.add('square');
                boardSquares.appendChild(square);
            }
        }
    };

    const renderBoard = (boardAr, square) => {
        for (i = 0; i < boardAr.length; i++) {
            square[i].innerHTML = boardAr[i];
        }
    };


    const markBoard = (boardAr, index, playerSymbol) => {
        //boardAr[] == player.symbol

        if (playerSymbol == 'X') {
            return 'O';
        } else {
            return 'X';
        }
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

    return { createBoard, boardAr, renderBoard, checkWin };
})();

const playGame = (function () {
    board.createBoard();
    const boardAr = board.boardAr;
    const square = document.querySelectorAll('.square');   //
    const player1 = player('X');        //Also input player names
    const player2 = player('O');
    let win = board.checkWin(boardAr);
    let turnCount = 0;
    //while/if win == false


    //let square = document.querySelectorAll('.square');
    boardAr.forEach(function (square) {
        square.addEventListener('click', () => {
            if (square.innerHTML == '' && win == false) {
                console.log("Click");
                playerTurn = markBoard(boardAr, square,); //Mark board Array
                board.renderBoard(boardAr, square);         //Render board after mark
                win = board.checkWin(boardAr);
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
})();
