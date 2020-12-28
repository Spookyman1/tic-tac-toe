import { useEffect, useState } from 'react';
import { BoardState } from './GameState/GameStateV';
import { Value } from './GameState/GameStateV';
export enum Playable {
    playable = '1',
    unplayable = '0',
}
export type State = Value[];
export type HistoryState = {
    states: State[],
    step: number,

};
const initBoard = () => Array<Value>(9).fill(Value.EMPTY);
export const useHistoryState = (gameState: BoardState) => {
    const [history, setHistoryState] = useState<HistoryState>({
        states: [initBoard()],
        step: 0,
    })
    useEffect(() => {
        if (gameState.isPlayable === Playable.playable) {
            const currStates = history.states.slice();
            currStates.push(gameState.currentState);
            setHistoryState({
                states: currStates,
                step: history.states.length - 1,
            });
        }
    }, [gameState.currentState])
    const jumpTo = (step: number) => {
        gameState.isPlayable = step
            === history.states.length - 1
            ? Playable.playable : Playable.unplayable;
        setHistoryState({
            states: history.states,
            step,
        });

        gameState.currentState = history.states[step];
    };
    const ResetHistory = () => {
        gameState.isPlayable = Playable.playable;
        setHistoryState({
            states: [initBoard()],
            step: 0,
        });
    };
    return {
        jumpTo,
        history,
        ResetHistory,
    };
}