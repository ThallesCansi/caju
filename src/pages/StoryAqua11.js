import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import ContinueButton from "../components/ContinueButton";
import DialogueBox from "../components/DialogueBox";
import BackButton from "../components/BackButton";
import "./StoryAqua11.css";

export default function StoryAqua1() {
    const navigate = useNavigate();
    const location = useLocation();
    const { nickname } = location.state || { nickname: "Caju" };

    const handleNavigation = () => {
        navigate("/caju/storyaqua12");
    };

    const handleBack = () => {
        navigate("/caju/scratchaqua");
    };

    return (
        <div className="story-aqua-container11">
            <ContinueButton onClick={handleNavigation} />
            <BackButton onClick={handleBack} />
        </div>
    );
}
