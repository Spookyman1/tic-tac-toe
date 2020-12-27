import * as React from 'react';

import Square from './Square/Square';
import { useStyles } from './BoardStyles';
import { BoardState } from '../GameState/GameState';
import { SquareProps } from './Square/Square';

type BoardProps = {
  board: BoardState;
  onClick: (square: number) => void;
};

const Board = ({ board, onClick }: BoardProps) => {
  const classes = useStyles({});
  const row = [0, 1, 2];
  const column = [0, 1, 2];
  return (
    <div className={classes.board}>
      {row.map(row_index =>
        <div className={classes.row}>
          {column.map(column_index =>
            <Square
              position={row_index * row.length + column_index}
              value={board[row_index * row.length + column_index]}
              onClick={() => onClick(row_index * row.length + column_index)} />)}

        </div>)}
    </div>
  )
}
export default Board;