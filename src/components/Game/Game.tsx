import * as React from 'react';
import Board from './Board/Board';
import { useGameState, } from './GameState/GameState';
import Reset from './Reset/Reset';
import { useStyles } from './GameStyles'
import HistoryLog from './History/HistoryLog';
import { useHistoryState } from './History/HistoryState/HistoryState';
import { Value, nowPlaying } from './GameState/GameState';
const Game = () => {
    const classes = useStyles({});
    const {
        handleClick,
        current,
        gameStatus,
        nextPlayer,
        resetBoard,
        gameState,
    } = useGameState();
    const jumpTo = useHistoryState(gameState);
    return (
        <div className={classes.container}>
            <div className={classes.component}>
                <h2>its {nextPlayer} turn!</h2>
            </div>
            <div className={classes.component}>
                <Board board={current} onClick={handleClick} />
            </div>
            <div className={classes.component}>
                {gameStatus === Value.TIE ? <h3>its a tie!</h3> :
                    gameStatus !== Value.EMPTY &&
                    <h3> the winner is {gameStatus}! </h3>}

            </div>
            <div className={classes.component}>
                <Reset onClick={resetBoard} />
            </div>
            <div className={classes.component}>
                <HistoryLog jumpTo={jumpTo} history={gameState.history} />
            </div>
        </div>
    );
}
export default Game;