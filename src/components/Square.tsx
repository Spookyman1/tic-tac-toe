import * as React from 'react';
import { Value } from './GameState';
import emptySlot from './states/empty.jpg';
import X from './states/X.jpg';
import O from './states/O.jpg';
const states = [emptySlot,X,O];
export type SquareProps = {
    value : Value;
    onClick: ()=> void;
    position : Number;
};

const Square = (props : SquareProps) => {
    return (
        <div>   
            <img src = {states[0]} alt='' onClick = {props.onClick} />
        </div>
    )
}
export default Square;