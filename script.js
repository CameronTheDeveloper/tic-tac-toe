const player = (name, symbol) => {

    return {
        name,
        symbol
    };
};

const board = (function () {
    let boardAr = ['', '', '', '', '', '', '', '', ''];
    const boardSquares = document.querySelector('#board-squares');
    const boardTitle = document.querySelector('#board-title');

    const createBoard = () => {
        for (let i = 0; i < 9; i++) {
            const square = document.createElement('div');
            square.classList.add('square');
            square.setAttribute('index', i);
            boardSquares.appendChild(square);
        }

    };

    const eraseBoard = (boardAr) => {
        for (i = 0; i < boardAr.length; i++) {
            boardAr[i] = '';
        }
        return boardAr;
    };

    const markBoardAr = (boardAr, index, playerSymbol) => {
        boardAr[index] = playerSymbol;
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
            return true;
        }

        if (boardAr[2] !== '' && boardAr[2] === boardAr[4] && boardAr[4] === boardAr[6]) {
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

    const boardTitleChange = (winner, condition) => {
        if (condition == 0) {   // Reset board title
            boardTitle.innerHTML = winner;
        }
        else if (condition == 1) {  // If someone wins
            boardTitle.innerHTML = winner + ' Wins!';
            boardTitle.style.color = "#22008b";
            boardTitle.style.fontWeight = "700";
        }
        else if (condition == 2) {   // Draw
            boardTitle.innerHTML = winner;
        }
    };

    return { createBoard, boardAr, renderBoard, checkWin, markBoardAr, changeTurn, getWinner, eraseBoard, boardTitleChange };
})();

const playGame = (function () {
    board.createBoard();
    const playAgainButton = document.querySelector('#play-again-button');
    const playerForm = document.querySelector("#player-form");
    let boardAr = board.boardAr;
    const square = document.querySelectorAll('.square');
    const player1 = player('X', 'X');
    const player2 = player('O', 'O');
    let win = false;
    let turnCount = 0;
    let symbol = player2.symbol;
    let winner = '';
    board.renderBoard(boardAr, square);
    square.forEach((element) => {
        element.addEventListener('click', () => {
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
                board.boardTitleChange(winner, 1);
                playAgainButton.style.display = "block";
                turnCount = 0;
            }
            else if (turnCount >= 9) {
                board.boardTitleChange('Draw!', 2);
                playAgainButton.style.display = "block";
                turnCount = 0;
            }
        });
    });

    playerForm.addEventListener('submit', (event) => {
        event.preventDefault();
        player1.name = document.getElementById('playerX-name').value;
        player2.name = document.getElementById('playerO-name').value;
        event.target.reset();
    });

    playAgainButton.addEventListener('click', () => {
        boardAr = board.eraseBoard(boardAr);
        board.renderBoard(boardAr, square);
        playAgainButton.style.display = "none";
        board.boardTitleChange('Tic-Tac-Toe', 0);
        win = false;
    });
})();
