import React from 'react';
import {ReactComponent as Close} from './close.svg';

function CloseButton({callback}) {
    return (
        <label className='close'>
            <Close width='24px' height='24px' />
            <input className='hidden' type='button' value='Close' onClick={() => callback()} />
        </label>
    )
}

export default CloseButton;