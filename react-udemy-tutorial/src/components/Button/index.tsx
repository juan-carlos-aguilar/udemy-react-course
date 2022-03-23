import React from 'react'
import { ButtonProps } from './interface';

export const Button = React.memo<ButtonProps>(({ onClick }) => {
    console.log('rerender');
    
    return (
        <button onClick={onClick}>Add Value</button>
    );
});
