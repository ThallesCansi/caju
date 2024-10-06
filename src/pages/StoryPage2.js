import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import DialogueBox from "../components/DialogueBox";
import ContinueButton from "../components/ContinueButton";
import PlanetAnimation from "../components/PlanetAnimation";
import BackButton from "../components/BackButton";
import "./StoryPage2.css";

export default function StoryPage2() {
    const navigate = useNavigate();
    const location = useLocation();

    // Recupera o nickname do estado da navegação ou do localStorage
    const nickname = location.state?.nickname || localStorage.getItem("nickname") || "Caju";

    const handleNavigation = () => {
        navigate("/caju/story3");
    };

    const handleBack = () => {
        navigate("/caju/story1");
    };

    return (
        <div className="story-container2">
            <DialogueBox
                text={
                    <p>
                        Welcome to the crew, {nickname}! <br />
                        It's great to have you here! <br /> My name is Juca, an <br /> intergalactic astronaut.
                    </p>
                }
                left="15%"
                top="7%"
            />
            <ContinueButton onClick={handleNavigation} />
            <BackButton onClick={handleBack} />
        </div>
    );
}
