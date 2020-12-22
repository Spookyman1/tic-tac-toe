import * as React from 'react';
import Square from './Square';
import './BoardDesign.css';
import { BoardState } from './GameState';
import { SquareProps } from './Square';

type BoardProps = {
  board: BoardState;
  onClick: (square: number) => void;
};

const Board = ({ board, onClick }: BoardProps) => {
  const createProps = (square: number): SquareProps => {
    return {
      value: board[square],
      onClick: () => onClick(square),
      position: square
    };
  };
  return (
    <div className='board'>
      {[0, 1, 2].map(row_index =>
        <div className='row'>
          {[0, 1, 2].map(column_index => 
          <Square {...createProps(row_index * 3 + column_index)} />)}
        </div>)}
    </div>
  )
}
export default Board;