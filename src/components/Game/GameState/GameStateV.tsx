import { useState } from 'react';
import { Playable, State } from '../HistoryStateV'
export enum Value {
    X = 'X',
    O = 'O',
    TIE = 'TIE',
    EMPTY = 'empty',
};
export enum NowPlaying {
    X = 'X',
    O = 'O',
};
export type BoardState = {
    currentState: State;
    isPlayable: Playable;
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

const checkGameStatus = (boardState: BoardState, nowPlaying: NowPlaying) => {
    const isWon = (element: Array<number>) => boardState.currentState[element[0]] !== Value.EMPTY
        && boardState.currentState[element[0]] === boardState.currentState[element[1]]
        && boardState.currentState[element[0]] === boardState.currentState[element[2]];
    if (winningCombinations.some(isWon)) {
        return nowPlaying === NowPlaying.O ? Value.X : Value.O;
    }
    const isEmpty = (element: Value) => element === Value.EMPTY;
    if (boardState.currentState.some(isEmpty))
        return Value.EMPTY;
    return Value.TIE;
}

export const useGameState = () => {
    const [gameState, setGameState] = useState<BoardState>({
        currentState: initBoard(),
        isPlayable: Playable.playable,
    })
    const findNextPlayer = () => {
        let numOfMoves = 0;
        for (let i = 0; i < gameState.currentState.length; i++) {
            if (gameState.currentState[i] !== Value.EMPTY) numOfMoves++;
        }
        return numOfMoves % 2 === 0;
    }
    const nextPlayer = findNextPlayer() ? NowPlaying.X : NowPlaying.O;
    const gameStatus = checkGameStatus(gameState, nextPlayer);
    const handleClick = (square: number) => {
        if (gameStatus !== Value.EMPTY
            || gameState.currentState[square] !== Value.EMPTY
            || gameState.isPlayable === Playable.unplayable) {
            return;
        }
        const newBoardState = gameState.currentState.slice();
        newBoardState[square] = (nextPlayer === NowPlaying.X) ? Value.X : Value.O;
        console.log(newBoardState);
        setGameState({
            currentState: newBoardState,
            isPlayable: gameState.isPlayable,
        });
        console.log("sent: " + gameState.currentState);
    }
    const resetBoard = () => {
        setGameState({
            currentState: initBoard(),
            isPlayable: Playable.playable,
        });
    }
    return {
        handleClick,
        gameStatus,
        nextPlayer,
        resetBoard,
        gameState,
    };
}