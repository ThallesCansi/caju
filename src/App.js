import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import Spline from "@splinetool/react-spline"; // Importando o Spline

function App() {
    const [playbackRate, setPlaybackRate] = useState(1);
    const [hasAccelerated, setHasAccelerated] = useState(false);
    const [showNewScreen, setShowNewScreen] = useState(false);
    const [fadeOut, setFadeOut] = useState(false);

    const audioRef = useRef(null); // Ref para controlar a música

    const startMusic = () => {
        if (audioRef.current) {
            audioRef.current.play().catch((error) => {
                console.error("Erro ao tocar a música: ", error);
            });
        }
    };

    const accelerate = () => {
        if (!hasAccelerated) {
            setPlaybackRate(3); // Aumenta a velocidade para 3x
            setHasAccelerated(true);
            setFadeOut(true); // Ativa o fade out para branco

            // Trocar a música ao apertar o botão
            if (audioRef.current) {
                audioRef.current.src = `${process.env.PUBLIC_URL}/media/second-song.mp3`; // Altera para a segunda música
                audioRef.current.play().catch((error) => {
                    console.error("Erro ao tocar a nova música: ", error);
                });
            }

            // Após 5 segundos, muda para a nova "tela"
            setTimeout(() => {
                setShowNewScreen(true);
            }, 5000);
        }
    };

    return (
        <div className="App" onClick={startMusic}>
            {" "}
            {/* Inicia a música na primeira interação */}
            {!showNewScreen ? (
                <>
                    {/* Substituindo o componente de vídeo pelo Spline */}
                    <Spline scene="https://prod.spline.design/jDUymZsrc-XQlBuO/scene.splinecode" />
                    <div className="overlay">
                        {!hasAccelerated && (
                            <button className="accelerate-button" onClick={accelerate}>
                                Start your journey in the space
                            </button>
                        )}
                    </div>
                    {fadeOut && <div className="transition-layer"></div>} {/* Nova camada de transição */}
                    {/* Adicionando o controle da música */}
                    <audio ref={audioRef} src={`${process.env.PUBLIC_URL}/media/first-song.mp3`} loop />
                </>
            ) : (
                <iframe src="https://scratch.mit.edu/projects/1077276956/embed" allowtransparency="true" width="485" height="402" frameborder="0" scrolling="no" allowfullscreen></iframe>
            )}
        </div>
    );
}

export default App;
