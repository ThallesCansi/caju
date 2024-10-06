import React, { useState, useRef } from "react";
import SpaceJourney from "../components/SpaceJourney"; // Importa o SpaceJourney
import { FaVolumeUp, FaVolumeMute } from "react-icons/fa"; // Ícones para som ativado/desativado
import Button from "../components/Button"; // Mantém o botão estilizado

export default function HomePage({ onStartJourney }) {
    const [isAccelerating, setIsAccelerating] = useState(false); // Controla a aceleração da jornada
    const [isMuted, setIsMuted] = useState(false); // Estado para controlar o mute
    const audioRef = useRef(null);

    // Tocar a música assim que o usuário interage com a página
    const startMusic = () => {
        if (audioRef.current) {
            audioRef.current.play().catch((error) => {
                console.error("Erro ao tocar a música: ", error);
            });
        }
    };

    // Função que inicia a jornada e troca de música
    const accelerate = () => {
        setIsAccelerating(true); // Inicia a aceleração da jornada espacial
        if (audioRef.current && !isMuted) {
            audioRef.current.src = `${process.env.PUBLIC_URL}/media/travelling.mp3`; // Alterar para a segunda música
            audioRef.current.play().catch((error) => {
                console.error("Erro ao tocar a nova música: ", error);
            });
        }

        // Após 5 segundos, chamar a função de troca de página
        setTimeout(() => {
            onStartJourney(); // Chama a função recebida via props
        }, 5000);
    };

    // Função para alternar entre mute e unmute
    const toggleMute = () => {
        if (audioRef.current) {
            audioRef.current.muted = !isMuted; // Muta ou desmuta diretamente o elemento de áudio
            setIsMuted(!isMuted); // Alterna o estado de mute
        }
    };

    return (
        <div className="App" onClick={startMusic}>
            {/* Inicia a música na primeira interação */}
            <SpaceJourney isAccelerating={isAccelerating} /> {/* Agora controlado pela HomePage */}
            <button className="mute-button" onClick={toggleMute}>
                {isMuted ? <FaVolumeMute /> : <FaVolumeUp />} {/* Alterna entre os ícones */}
            </button>
            <div className="overlay">
                <Button label="Start your journey in space" onClick={accelerate} />
            </div>
            <audio ref={audioRef} src={`${process.env.PUBLIC_URL}/media/space.mp3`} loop />
        </div>
    );
}
