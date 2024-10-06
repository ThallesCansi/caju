import React from "react";
import "./DialogueBox.css";

export default function DialogueBox({ text, left }) {
    return (
        <div className="dialogue-box" style={{ left: left }}>
            {text}
        </div>
    );
}
