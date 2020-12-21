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
    xIsNext
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
                <Reset/>
            </div>
        </div>
        );
    }
export default Game;