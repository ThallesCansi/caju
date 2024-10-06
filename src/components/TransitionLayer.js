import React from "react";
import "./TransitionLayer.css";

export default function TransitionLayer({ fadeOut }) {
    return fadeOut ? <div className="transition-layer"></div> : null;
}
