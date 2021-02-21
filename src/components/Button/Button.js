import React from 'react';
import { InlineButton, RegularButton } from './Button.css';

const Button = ({ type }) => {
    const Component = (() => {
        switch(type) {
            case 'inline':
                return 'InlineButton'
            
            case 'regular':
                return 'RegularButton'
    
            default:
                return 'RegularButton';
        }
    })();

    console.log(Component)
    return (
        <div></div>
    )
}

export default Button;