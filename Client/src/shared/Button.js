import React from 'react';

import "bootstrap/dist/css/bootstrap.css";
import "./styles/Button.css";

const Button = props => {
    return (
        <button type="button" className={`${props.className}`} onClick={props.onClick}>
            {props.children}
        </button>
    );
}

export default Button;
