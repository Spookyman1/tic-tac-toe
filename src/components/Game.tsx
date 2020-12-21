import * as React from 'react';
import Board from './Board';
import {useGameState, Value} from './GameState';

const Game = () => {
    const {
    handleClick,
    current,
    winner,
    xIsNext
} = useGameState();
    return (
        <div>
            <Board board = {current} onClick = {handleClick}/>
            {winner !== null &&
            winner !== 'TIE' && 
            <h3> the winner is {winner}! </h3>}
            {winner === 'TIE' && <h3>its a tie!</h3>}
         </div>
             
        );
}
export default Game;