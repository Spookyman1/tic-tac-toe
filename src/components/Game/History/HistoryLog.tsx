import * as React from 'react';

import { BoardState } from '../GameState/GameState';
import { HistoryState } from '../HistoryStateV';

export type HistoryLogProps = {
    history: HistoryState;
    jumpTo: (step: number) => void;
};
const HistoryLog = ({ history, jumpTo }: HistoryLogProps) => {
    return (
        <ol>
            {history.states.map((history, index) => {
                return (
                    index !== 0 && <li key={index}>
                        <button onClick={() => jumpTo(index)}>
                            Go to {index === 1 ? 'start' : `move #${index - 1}`}
                        </button>
                    </li>
                );
            })
            }
        </ol>
    )
}
export default HistoryLog;