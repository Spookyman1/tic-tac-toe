import * as React from 'react';
import Square from './Square';
import './RowDesign.css';
const Row = () => {
    return (
        <div className = 'row'>
            <Square/>
            <Square/>
            <Square/>
        </div>
    )
}
export default Row;