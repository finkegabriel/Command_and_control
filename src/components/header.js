import React from 'react';

const baseStyles = {
    box: {
        boxShadow: '0 0 3pt 2pt #30D5C8',
        width:'90%'
    },
}

export default function Header(){
    return(
    <div style={baseStyles.box} class="square">
            <h4>status</h4>
    </div>
    )
}