import React from 'react';
import {
    Button
} from '@material-ui/core';

const baseStyles = {
    button:{
        opacity:'.5',
        position: 'absolute',
        bottom: '1rem',
        left: '5rem',
    },
}

export default function button(){
    return(
        <Button style={baseStyles.button} variant="contained">Fancy</Button>
    )
}