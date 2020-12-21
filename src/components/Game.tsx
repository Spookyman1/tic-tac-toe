import * as React from 'react';
import Board from './Board';
import {useGameState, Value} from './GameState';

const Game = () => {
    const {
    handleClick,
    current,
} = useGameState();
    return (
        <div>
            <Board board = {current} onClick = {handleClick}/>
         </div>   
        );
}
export default Game;