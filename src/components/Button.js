import React from "react";
import "./Button.css";

export default function Button({ onClick, label }) {
    return (
        <button className="accelerate-button" onClick={onClick}>
            {label}
        </button>
    );
}
