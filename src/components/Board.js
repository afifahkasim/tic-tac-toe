import React, { useState } from 'react';
import Square from './Square';

function Board() {

    // Initial state is an array of 9 null squares, later used to fill X or O
    const [square, setSquare] = useState(Array(9).fill(null));
    const [X, setX] = useState(true)

    const winner = calculateWinner(square);
    const status = winner
        ? winner === 'D'
            ? 'Draw'
            : 'Player ' + (winner === 'X' ? '1' : '2') + ' wins!'
        : 'PLAYER ' + (X ? '1' : '2') + '\'S TURN';


    const renderSquare = (i) => {
        return (
            <Square value={square[i]} onClick={() => handleClick(i)} />
        )
    }

    const handleClick = (i) => {
        // Copy array
        const squares = square.slice()

        if (winner) {
            alert("This round has already finished.")
            refreshPage()
        }
        // Update array with new X or O
        else if (squares[i] === null) {
            squares[i] = X ? 'X' : 'O';
            setSquare(squares)
            setX(!X)
        } else {
            alert("This box already has either 'X' or 'O'.")
        }
    }

    function refreshPage() {
        window.location.reload(false);
    }

    function calculateWinner(squares) {
        // an array of 8 ways to win the game
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        let isDraw = true;
        for (let i = 0; i < lines.length; i++) {
            // Check every way of winning the game
            const [a, b, c] = lines[i]

            // Check if value of square is not null, and if all three values are the same
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }

            // Check if any of the co
            if (!squares[a] || !squares[b] || !squares[c]) {
                isDraw = false;
            }
        }
        if (isDraw) return 'D';

        return null;
    }

    return (
        <div className="board">
            {/* Every square needs to be assigned with a position*/}
            <div className="board-row">
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>

            <div className="board-row">
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>

            <div className="board-row">
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>

            <div className="board-row">
                <div className="status">
                    {status}
                </div>
            </div>

        </div>
    )
}

export default Board;