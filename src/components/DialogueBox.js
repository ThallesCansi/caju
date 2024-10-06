import React from "react";
import "./DialogueBox.css";

export default function DialogueBox({ text, left, top, fontSize, color }) {
    return (
        <div className="dialogue-box" style={{ left: left, top: top || "10%", fontSize: fontSize || "40px", color: color || "black" }}>
            {text}
        </div>
    );
}
