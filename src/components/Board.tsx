import * as React from 'react';
import Row from './Row';
import './BoardDesign.css'
const Board = () => {
    return (
        <div className = "board">
            <Row/>
            <Row/>
            <Row/>
        </div>
    )
}
export default Board;