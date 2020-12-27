import { useState } from 'react';
import { GameState } from '../../GameState/GameState';
export const useHistoryState = (liveState: GameState) => {
    const [stateChanger, setHistoryState] = useState<GameState>({
        history: liveState.history,
        step: liveState.step,
    })
    const jumpTo = (step: number) => {
        setHistoryState({
            history: stateChanger.history,
            step,
        });
        liveState.step = step;
    };
    return jumpTo;
}