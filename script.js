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
    const boardAr = ['', '', '', '', '', '', '', '', ''];
    const boardSquares = document.querySelector('#board-squares');

    const createBoard = () => {
        for (let i = 0; i < 9; i++) {
            const square = document.createElement('div');
            square.classList.add('square');
            square.setAttribute('index', i);
            boardSquares.appendChild(square);
        }

    };


    const markBoardAr = (boardAr, index, playerSymbol) => {
        boardAr[index] = playerSymbol;
        console.log(boardAr[index]);
        console.log(index);
        return boardAr;
    };

    const renderBoard = (boardAr, square) => {
        for (i = 0; i < boardAr.length && i < square.length; i++) {
            square[i].innerHTML = boardAr[i];
        }
        return square;
    };

    const changeTurn = (player1, player2, symbol) => {
        if (player1.symbol == symbol) {
            return player2.symbol;
        }
        else {
            return player1.symbol;
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

    const getWinner = (player1, player2, symbol) => {
        if (player1.symbol == symbol) {
            return player1.name;
        }
        else {
            return player2.name;
        }
    };


    return { createBoard, boardAr, renderBoard, checkWin, markBoardAr, changeTurn, getWinner };
})();

const playGame = (function () {
    board.createBoard();
    let boardAr = board.boardAr;
    const boardTitle = document.querySelector('#board-title');      // Board title will display winner
    const square = document.querySelectorAll('.square');
    const player1 = player('X');
    const player2 = player('O');
    let win = false;
    let turnCount = 0;
    let symbol = player2.symbol;
    let winner = '';
    board.renderBoard(boardAr, square);
    square.forEach((element) => {
        element.addEventListener('click', () => {
            console.log(element);
            let index = element.getAttribute('index');
            if (element.innerHTML == '' && win == false) {
                symbol = board.changeTurn(player1, player2, symbol);
                boardAr = board.markBoardAr(boardAr, index, symbol); //Mark board Array
                board.renderBoard(boardAr, square);                  //Render board after mark
                win = board.checkWin(boardAr);
                turnCount++;
            }
            if (win) {
                winner = board.getWinner(player1, player2, symbol);
                boardTitle.innerHTML = winner + ' Wins!';
                boardTitle.style.color = "#22008b";
                boardTitle.style.fontWeight = "700";
            }
            else if (turnCount >= 9) {
                boardTitle.innerHTML = 'Draw!';
            }
        });

    });
})();
