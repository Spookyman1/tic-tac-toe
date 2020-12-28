import * as React from 'react';

import Board from './Board/Board';
import Reset from './Reset/Reset';
import HistoryLog from './History/HistoryLog';

//import { useGameState, } from './GameState/GameState';
import { useGameState, } from './GameState/GameStateV';
import { useStyles } from './GameStyles'
//import { useHistoryState } from './History/HistoryState/HistoryState;
import { useHistoryState } from './HistoryStateV';
//import { Value } from './GameState/GameState';
import { Value, BoardState } from './GameState/GameStateV'
const Game = () => {
    const classes = useStyles({});
    const {
        handleClick,
        gameStatus,
        nextPlayer,
        resetBoard,
        gameState,
    } = useGameState();
    const { jumpTo, history, ResetHistory } = useHistoryState(gameState);
    return (
        <div className={classes.container}>
            <div className={classes.component}>
                <h2>its {nextPlayer} turn!</h2>
            </div>
            <div className={classes.component}>
                <Board board={gameState}
                    boardUpdate={handleClick}
                />
            </div>
            <div className={classes.component}>
                {gameStatus === Value.TIE ? <h3>its a tie!</h3> :
                    gameStatus !== Value.EMPTY &&
                    <h3> the winner is {gameStatus}! </h3>}

            </div>
            <div className={classes.component}>
                <Reset onClick={resetBoard} ResetHistory={ResetHistory} />
            </div>
            <div className={classes.component}>
                {<HistoryLog jumpTo={jumpTo} history={history} />}
            </div>
        </div>
    );
}
export default Game;