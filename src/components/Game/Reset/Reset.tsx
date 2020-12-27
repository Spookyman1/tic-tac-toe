import * as React from 'react';
import Button from '@material-ui/core/Button';
import { useStyles } from './ResetStyles';
type ResetProps = {
    onClick: () => void;
};
const Reset = ({ onClick }: ResetProps) => {
    const classes = useStyles({});
    return (
        <Button className={classes.reset} onClick={onClick} variant='contained'
            color='primary'>Reset</Button>
    )
}
export default Reset;