import React from "react";
import "./ContinueButton.css";

export default function ContinueButton({ onClick }) {
    return (
        <button className="continue-button" onClick={onClick}>
            Continue
        </button>
    );
}
