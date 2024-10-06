import React from "react";
import "./BackButton.css";

export default function BackButton({ onClick }) {
    return (
        <button className="back-button" onClick={onClick}>
            Return
        </button>
    );
}
