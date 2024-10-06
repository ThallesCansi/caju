import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import DialogueBox from "../components/DialogueBox";
import ContinueButton from "../components/ContinueButton";
import PlanetAnimation from "../components/PlanetAnimation";
import BackButton from "../components/BackButton";
import "./StoryPage5.css";

export default function StoryPage2() {
    const navigate = useNavigate();
    const location = useLocation();
    const { nickname } = location.state || { nickname: "Caju" };

    const handleNavigation = () => {
        navigate("/caju/story6");
    };

    const handleBack = () => {
        navigate("/caju/story4");
    };

    return (
        <div className="story-container5">
            <DialogueBox
                text={
                    <p>
                        ANIMAÇÃO DO CAIO
                    </p>
                }
                left="35%"
                top="28%"
            />
            <ContinueButton onClick={handleNavigation} />
            <BackButton onClick={handleBack} />
        </div>
    );
}
