import React from 'react';
import { InlineButton, RegularButton } from './Button.css';

const Button = ({ type, children, ...props }) => {
    const Component = (() => {
        switch(type) {
            case 'inline':
                return InlineButton
            
            case 'regular':
                return RegularButton
    
            default:
                return RegularButton;
        }
    })();

    console.log(Component)
    return (
        <div>
            <Component {...props}>
                {children}
            </Component>
        </div>
    )
}

export default Button;