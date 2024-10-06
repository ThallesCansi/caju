import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import DialogueBox from "../components/DialogueBox";
import ContinueButton from "../components/ContinueButton";
import PlanetAnimation from "../components/PlanetAnimation";
import BackButton from "../components/BackButton";
import "./StoryPage3.css";

export default function StoryPage3() {
    const navigate = useNavigate();
    const location = useLocation();
    const { nickname } = location.state || { nickname: "Caju" };

    const handleNavigation = () => {
        navigate("/caju/story4");
    };

    const handleBack = () => {
        navigate("/caju/story2");
    };

    return (
        <div className="story-container3">
            <DialogueBox
                text={
                    <p>
                        I'm currently in a new mission in the <br /> Gaia System, 
                        trying to solve interplanetary <br /> issues. Would you like to join <br /> me in this journey?
                    </p>
                }
                left="4%"
                top="7%"
            />
            <ContinueButton text={"Sure!"} onClick={handleNavigation} />
            <BackButton onClick={handleBack} />
        </div>
    );
}
