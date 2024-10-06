import React from "react";
import "./ContinueButton.css";

export default function ContinueButton({ text, onClick, fontSize, width, left }) {
    return (
        <button className="continue-button" style={{width: width, left: left || "89%"}}onClick={onClick}>
            <p style={{fontSize: fontSize || "40px"}}>{text || "Continue"}</p>
        </button>
    );
}
