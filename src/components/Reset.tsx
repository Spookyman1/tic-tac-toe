import * as React from 'react';
import Button from '@material-ui/core/Button';
import './ResetDesign.css';
type ResetProps = {
    onClick: () => void;
};
const Reset = ({ onClick }: ResetProps) => {
    const createProps = (): ResetProps => {
        return {
            onClick: () => onClick()
        };
    }
    return (
        <div className='reset'>
            <Button {...createProps()} variant='contained'
                color='primary'>Reset</Button>
        </div>
    )
}
export default Reset;