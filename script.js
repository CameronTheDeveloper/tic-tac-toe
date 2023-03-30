let board = (function () {
    const boardAr = [];
    const boardSquares = document.querySelector('#board-squares');
    const createBoard = () => {
        for (let i = 1; i <= 3; i++) {
            for (let j = 1; j <= 3; j++) {
                const col = document.createElement('div');
                col.classList.add('row' + i, 'col' + j);
                boardSquares.appendChild(col);
                boardAr.push(col);
            }
        }
    };
    return { createBoard };
})();

board.createBoard();

