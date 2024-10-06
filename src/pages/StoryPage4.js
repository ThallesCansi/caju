import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import DialogueBox from "../components/DialogueBox";
import ContinueButton from "../components/ContinueButton";
import PlanetAnimation from "../components/PlanetAnimation";
import BackButton from "../components/BackButton";
import "./StoryPage4.css";

export default function StoryPage4() {
    const navigate = useNavigate();
    const location = useLocation();
    const nickname = location.state?.nickname || localStorage.getItem("nickname") || "Caju";

    const handleNavigation = () => {
        navigate("/caju/story5");
    };

    const handleBack = () => {
        navigate("/caju/story3");
    };

    return (
        <div className="story-container4">
            <DialogueBox
                text={
                    <p>
                        Great! Let's Get to it!
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
