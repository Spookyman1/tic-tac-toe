import { useState } from 'react';

export enum Value {
    X = 'X',
    O = 'O',
    TIE = 'TIE',
    EMPTY = 'empty',
};
export enum nowPlaying {
    X = 'X',
    O = 'O',
};
export type BoardState = Value[];
export type GameState = {
    history: BoardState[],
    step: number,
}
const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const initBoard = () => Array<Value>(9).fill(Value.EMPTY);

const checkGameStatus = (boardState: BoardState) => {
    const isWon = (element: Array<number>) => boardState[element[0]]
        && boardState[element[0]] === boardState[element[1]]
        && boardState[element[0]] === boardState[element[2]];
    const winningCombo = winningCombinations.find(isWon);
    if (winningCombo !== undefined) 
        return boardState[winningCombo[0]];
    const isEmpty = (element: Value) => element === Value.EMPTY;
    if (boardState.some(isEmpty))
        return Value.EMPTY;
    return Value.TIE;
}

export const useGameState = () => {
    const [gameState, setGameState] = useState<GameState>({
        history: [initBoard()],
        step: 0,
    })
    const current = gameState.history[gameState.step];
    const nextPlayer = ((gameState.history.length - 1) % 2)
        === 0 ? nowPlaying.X : nowPlaying.O;
    const gameStatus = checkGameStatus(current);

    const handleClick = (square: number) => {
        const history = gameState.history.slice(0, gameState.step + 1);
        const currState = history[history.length - 1];
        if (checkGameStatus(currState) !== Value.EMPTY
            || currState[square] !== Value.EMPTY
            || gameState.step !== gameState.history.length - 1) {
            return;
        }
        const newBoardState = currState.slice();
        newBoardState[square] = (gameState.step % 2) === 0 ? Value.X : Value.O;
        history.push(newBoardState);
        setGameState({
            history: history,
            step: history.length - 1,
        });
    }

    const resetBoard = () => {
        const history = [initBoard()];
        setGameState({
            history: history,
            step: 0,
        });
    }

    return {
        handleClick,
        current,
        gameStatus,
        nextPlayer,
        resetBoard,
        gameState,
    };
}
