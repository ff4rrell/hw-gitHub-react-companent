import React from 'react';



const Button = (props) => (
    <button className={props.className}>
        {props.buttonName}
    </button>
);

export default Button;