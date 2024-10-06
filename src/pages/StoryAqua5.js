import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import ContinueButton from "../components/ContinueButton";
import BackButton from "../components/BackButton";
import "./StoryAqua5.css";

export default function StoryAqua1() {
    const navigate = useNavigate();
    const location = useLocation();
    const { nickname } = location.state || { nickname: "Caju" };

    const handleNavigation = () => {
        navigate("/caju/storyaqua6");
    };

    const handleBack = () => {
        navigate("/caju/storyaqua4");
    };

    return (
        <div className="story-aqua-container5">
            <ContinueButton onClick={handleNavigation} />
            <BackButton onClick={handleBack} />
        </div>
    );
}
