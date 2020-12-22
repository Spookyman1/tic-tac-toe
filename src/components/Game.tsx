import * as React from 'react';
import Board from './Board';
import { useGameState, Value } from './GameState';
import Reset from './Reset';
import './GameDesign.css';
import HistoryLog from './HistoryLog';
const Game = () => {
    const {
        handleClick,
        current,
        winner,
        xIsNext,
        resetBoard,
        jumpTo,
        gameState,
    } = useGameState();
    return (
        <div className='container'>
            <div className='component'>
                {xIsNext && <h2>X Turn!</h2>}
                {!xIsNext && <h2>O Turn!</h2>}
            </div>
            <div className='component'>
                <Board board={current} onClick={handleClick} />
            </div>
            <div className='component'>
                {winner !== null &&
                    winner !== 'TIE' &&
                    <h3> the winner is {winner}! </h3>}
                {winner === 'TIE' && <h3>its a tie!</h3>}
            </div>
            <div className='component'>
                <Reset onClick={resetBoard} />
            </div>
            <div className='component'>
                <HistoryLog jumpTo={jumpTo} history={gameState.history} />
            </div>
        </div>
    );
}
export default Game;