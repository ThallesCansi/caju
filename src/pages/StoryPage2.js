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
    const { nickname } = location.state || { nickname: "Caju" };

    const handleNavigation = () => {
        navigate("/story3");
    };

    const handleBack = () => {
        navigate("/story1");
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
            />
            <ContinueButton onClick={handleNavigation} />
            <BackButton onClick={handleBack} />
        </div>
    );
}
