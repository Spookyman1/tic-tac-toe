import * as React from 'react';
import Board from './Board';
import {useGameState, Value} from './GameState';
import Reset from './Reset';
import './GameDesign.css';
const Game = () => {
    const {
    handleClick,
    current,
    winner,
    xIsNext,
    resetBoard  ,  
} = useGameState();
    return (
        <div className = 'container'>
            <div className = 'component'>
                <Board board = {current} onClick = {handleClick}/>
            </div>
            <div className = 'component'>
                {winner !== null &&
                winner !== 'TIE' && 
                <h3> the winner is {winner}! </h3>}
                {winner === 'TIE' && <h3>its a tie!</h3>}
            </div>
            <div className = 'component'>
                <Reset onClick={resetBoard}/>
            </div>
        </div>
        );
    }
export default Game;