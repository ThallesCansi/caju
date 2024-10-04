import React, { useState } from "react";
import "./App.css";
import ParallaxBackground from "./components/ParallaxBackground";

function App() {
    const [playbackRate, setPlaybackRate] = useState(1);

    const accelerate = () => {
        setPlaybackRate(playbackRate + 0.5);
    };

    return (
        <div className="App">
            <ParallaxBackground playbackRate={playbackRate} />
            <div className="overlay">
                <button onClick={accelerate}>Acelerar Viagem</button>
            </div>
        </div>
    );
}

export default App;
