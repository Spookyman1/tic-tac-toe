import * as React from 'react';
import Board from './Board';
import {Value} from './GameState';
const temp = Array<Value>(9).fill(null);
const something = () => {
    console.log("literally nothing");
}
const Game = () => {
    return (
        <div>
            <Board board = {temp} onClick = {something}/>
         </div>   
        );
}
export default Game;