import * as React from 'react';
import Square from './Square';
import './BoardDesign.css';
import {BoardState} from './GameState';
import {SquareProps} from './Square';

type BoardProps = {
  board: BoardState;
  onClick: (square: number) => void;
};
 
const Board = ({board,onClick} : BoardProps) => {
    const createProps = (square: number): SquareProps => {
    return {
      value: board[square],
      onClick: () => onClick(square),
      position: square
    };
};
    return (
        <div className = 'board'>
            <div className = 'row'>
            {[0,1,2].map(index=><Square {...createProps(index)}/>)}
            </div>
            <div className = 'row'>
            {[3,4,5].map(index=><Square {...createProps(index)}/>)}
            </div>
            <div className = 'row'>
            {[6,7,8].map(index=><Square {...createProps(index)}/>)}
            </div>
        </div>
    )
}
export default Board;