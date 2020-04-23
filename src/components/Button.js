import React from "react";
import "../App.css";

const Button = (props) => {
    return (
        <button
            className={props.className}
            onClick={props.score}
        >
            {props.text}
        </button>
    );
};

export default Button;
