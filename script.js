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

    return { createBoard, boardAr, renderBoard, checkWin, markBoardAr };
})();

const playGame = (function () {
    board.createBoard();
    let boardAr = board.boardAr;
    const boardTitle = document.querySelector('#board-title');      // Board title will display winner
    const square = document.querySelectorAll('.square');
    const player1 = player('X');        //Also input player names
    const player2 = player('O');
    let win = false;
    let turnCount = 0;

    board.renderBoard(boardAr, square);
    square.forEach((element) => {
        element.addEventListener('click', () => {
            console.log(element);
            let index = element.getAttribute('index');
            //the markboard 2nd parameter needs to be the boardAr index matching with the square index of the element
            if (element.innerHTML == '' && win == false) {
                boardAr = board.markBoardAr(boardAr, index, player1.symbol); //Mark board Array
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
