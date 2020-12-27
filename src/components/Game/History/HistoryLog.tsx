import * as React from 'react';
import Button from '@material-ui/core/Button';
import { BoardState } from '../GameState/GameState';
export type HistoryLogProps = {
    history: BoardState[];
    jumpTo: (step: number) => void;
};
const HistoryLog = ({ history, jumpTo }: HistoryLogProps) => {
    return (
        <ol>
            {history.map((step, index) => {
                return (
                    <li key={index}>
                        <button onClick={() => jumpTo(index)}>
                            Go to {index === 0 ? 'start' : `move #${index}`}
                        </button>
                    </li>
                );
            })
            }
        </ol>
    )
}
export default HistoryLog;