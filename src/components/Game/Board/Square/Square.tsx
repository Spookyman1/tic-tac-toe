import { makeStyles } from '@material-ui/core';
import { Value } from '../../GameState/GameState';
import { useStyles } from './SquareStyles';
export type SquareProps = {
    value: Value;
    onClick: () => void;
    position: Number;
};
// remember to set as getState()
const X = process.env.PUBLIC_URL + '/Assets/X.jpg';
const O = process.env.PUBLIC_URL + '/Assets/O.jpg';
const empty = process.env.PUBLIC_URL + '/Assets/empty.jpg';
const Square = (props: SquareProps) => {
    const classes = useStyles({});
    const getState = () => {
        if (props.value === Value.X) { return X; }
        if (props.value === Value.O) { return O; }
        if (props.value === Value.EMPTY) { return empty; }
    }
    return (
        <img src={getState()} onClick={props.onClick} className={classes.image} />
    )
}
export default Square;