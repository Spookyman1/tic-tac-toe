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
// remember to set as getState()
const Square = (props : SquareProps) => {
    const getState = () => {
        if(props.value === 'X') {return X;}
        if(props.value === 'O') {return O;}
        if(props.value === null) {return emptySlot;}
}
    return (
        <div>   
            <img src = {getState()} alt='' onClick = {props.onClick} />
        </div>
    )
}
export default Square;