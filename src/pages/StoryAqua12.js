import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import ContinueButton from "../components/ContinueButton";
import DialogueBox from "../components/DialogueBox";
import BackButton from "../components/BackButton";
import "./StoryAqua12.css";

export default function StoryAqua1() {
    const navigate = useNavigate();
    const location = useLocation();
    const { nickname } = location.state || { nickname: "Caju" };

    const handleNavigation = () => {
        navigate("/caju/story6");
    };

    const handleBack = () => {
        navigate("/caju/storyaqua11");
    };

    return (
        <div className="story-aqua-container12">
            <DialogueBox
                text={
                    <p>
                        And your work here hasn't just helped Planet <br /> Water. Every improvement ripples through <br /> the entire Gaia system, and even back to Earth. <br /> Small actions can have a big impact, {nickname}. <br /> You're on the right track.
                    </p>
                }
                top="13%"
                left="12%"
                fontSize="36px"
            />
            <ContinueButton text="Back to Menu" fontSize="40px" width="300px" left="87%" onClick={handleNavigation} />
            <BackButton onClick={handleBack} />
        </div>
    );
}
