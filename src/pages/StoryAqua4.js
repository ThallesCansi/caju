import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import DialogueBox from "../components/DialogueBox";
import ContinueButton from "../components/ContinueButton";
import BackButton from "../components/BackButton";
import "./StoryAqua4.css";

export default function StoryAqua4() {
    const navigate = useNavigate();
    const location = useLocation();
    const { nickname } = location.state || { nickname: "Caju" };

    // Estado para controlar qual diálogo está sendo exibido
    const [currentDialogue, setCurrentDialogue] = useState(1);

    // Função para avançar o diálogo
    const handleContinue = () => {
        if (currentDialogue < 2) {
            setCurrentDialogue(currentDialogue + 1);
        } else {
            navigate("/caju/storyaqua5"); // Navega para a próxima página após o último diálogo
        }
    };

    // Função para voltar o diálogo
    const handleBack = () => {
        if (currentDialogue > 1) {
            setCurrentDialogue(currentDialogue - 1);
        } else {
            navigate("/caju/storyaqua3"); // Navega para a página anterior se estiver no primeiro diálogo
        }
    };

    // Diálogos que serão exibidos
    const dialogues = [
        {
            text: (
                <p>
                    The waters are polluted, and life is disappearing. As Planet Fire <br /> heated up, melting ice disrupted our currents, overwhelming the <br /> oceans. Now, the imbalance is spreading across the Gaia system, <br /> causing droughts on Planet Earth and storms on Planet WIND.
                </p>
            ),
            fontSize: "36px",
            left: "8%",
            top: "4%",
        },
        {
            text: (
                <p>
                    The image shifts to the present. The waters are murky and <br /> polluted. The rivers are dry, the coral reefs have bleached, <br /> and marine life is struggling to survive. Storms gather on <br /> the horizon, and debris floats across the surface.
                </p>
            ),
            fontSize: "36px",
            left: "8%",
            top: "4%",
        },
    ];

    return (
        <div className="video-fundo-storyaqua4">
            {/* Vídeo de fundo continua rodando sem interrupção */}
            <video autoPlay loop muted playsInline className="video-background">
                <source src={`${process.env.PUBLIC_URL}/images/StoryAqua4.mp4`} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Exibe o diálogo correspondente ao estado atual */}
            <DialogueBox text={dialogues[currentDialogue - 1].text} fontSize={dialogues[currentDialogue - 1].fontSize} left={dialogues[currentDialogue - 1].left} top={dialogues[currentDialogue - 1].top} />

            {/* Botão "Continue" para avançar o diálogo */}
            <ContinueButton onClick={handleContinue} />

            {/* Botão "Back" para voltar o diálogo */}
            <BackButton onClick={handleBack} />
        </div>
    );
}
