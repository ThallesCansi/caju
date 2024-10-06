import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import DialogueBox from "../components/DialogueBox";
import ContinueButton from "../components/ContinueButton";
import BackButton from "../components/BackButton";
import "./StoryAqua3.css";

export default function StoryAqua1() {
    const navigate = useNavigate();
    const location = useLocation();
    const { nickname } = location.state || { nickname: "Caju" };

    const handleNavigation = () => {
        navigate("/caju/storyaqua4");
    };

    const handleBack = () => {
        navigate("/caju/storyaqua2");
    };

    return (
        <div className="story-aqua-container3">
            <ContinueButton onClick={handleNavigation} />
            <BackButton onClick={handleBack} />
        </div>
    );
}
