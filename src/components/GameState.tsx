import {useState} from 'react';
export type Value = 'X' | 'O' | null | 'TIE';
export type BoardState = Value[];
const initBoard = () => Array<Value>(9).fill(null);

const checkWinner = (boardState: BoardState) => {
    const winningCombinations = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];
    for(let i = 0; i < winningCombinations.length; i++) {
        const[a,b,c] = winningCombinations[i];
        if(boardState[a] 
        && boardState[a] === boardState[b] 
        && boardState[a] === boardState[c]) {
            return boardState[a];
        }
    }
    for(let i = 0; i < boardState.length; i++) {
        if(boardState[i] === null) {
            return null;
        }
    }
    return 'TIE';
}
export type GameState = {
  history: BoardState[],
  step: number,
}
export const useGameState = () => {
    const [gameState,setGameState] = useState<GameState>({
       history: [initBoard()],
       step : 0, 
    })
    const current = gameState.history[gameState.step];
    const xIsNext = (gameState.step % 2) === 0;
    const winner = checkWinner(current);
    const handleClick = (square: number) => {
        const history = gameState.history.slice(0,gameState.step + 1);
        const currState = history[history.length - 1];
        if(checkWinner(currState) || currState[square]) {
            return;
        }
        currState[square] = (gameState.step % 2)  === 0 ? 'X' : 'O';
        history.push(currState);
        setGameState({
            history: history,
            step : history.length - 1,
        });
    }
    return {
        handleClick,
        current,
        winner,
        xIsNext,
    };
}
 