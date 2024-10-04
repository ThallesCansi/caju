import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import ParallaxBackground from "./components/ParallaxBackground";

function App() {
    const [playbackRate, setPlaybackRate] = useState(1);
    const [hasAccelerated, setHasAccelerated] = useState(false);
    const [showNewScreen, setShowNewScreen] = useState(false);
    const [fadeOut, setFadeOut] = useState(false);

    const audioRef = useRef(null); // Usamos ref para controlar a músi

    const accelerate = () => {
        if (!hasAccelerated) {
            setPlaybackRate(3); // Aumenta a velocidade para 3x
            setHasAccelerated(true);
            setFadeOut(true); // Ativa o fade out para branco

            // Trocar a música ao apertar o botão
            if (audioRef.current) {
                audioRef.current.src = `${process.env.PUBLIC_URL}/media/travelling.mp3`; // Altera para a segunda música
                audioRef.current.play(); // Toca a nova música
            }

            // Após 5 segundos, muda para a nova "tela"
            setTimeout(() => {
                setShowNewScreen(true);
            }, 13000);
        }
    };

    // Toca a música inicial assim que a página carrega
    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.play(); // Toca a música inicial
        }
    }, []);

    return (
        <div className="App">
            {!showNewScreen ? (
                <>
                    <ParallaxBackground playbackRate={playbackRate} />
                    <div className="overlay">
                        {!hasAccelerated && (
                            <button className="accelerate-button" onClick={accelerate}>
                                Acelerar Viagem
                            </button>
                        )}
                    </div>
                    {fadeOut && <div className="transition-layer"></div>} {/* Nova camada de transição */}
                    {/* Adicionando o controle da música */}
                    <audio ref={audioRef} src={`${process.env.PUBLIC_URL}/media/space.mp3`} loop />
                </>
            ) : (
                <div className="new-screen">
                    <img style={{ width: "1000px", height: "1000px" }} src={`${process.env.PUBLIC_URL}/media/caju.png`} alt="Caju Thacaral" />
                </div>
            )}
        </div>
    );
}

export default App;
