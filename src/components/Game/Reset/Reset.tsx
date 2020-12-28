import * as React from 'react';

import Button from '@material-ui/core/Button';

import { useStyles } from './ResetStyles';

type ResetProps = {
    onClick: () => void;
    ResetHistory: () => void;
};
const Reset = ({ onClick, ResetHistory }: ResetProps) => {
    const classes = useStyles({});
    return (
        <Button className={classes.reset} onClick={() => { onClick(); ResetHistory(); }}
            variant='contained' color='primary'>Reset</Button>
    )
}
export default Reset;