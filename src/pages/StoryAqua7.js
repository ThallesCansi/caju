import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import DialogueBox from "../components/DialogueBox";
import ContinueButton from "../components/ContinueButton";
import BackButton from "../components/BackButton";
import "./StoryAqua7.css";

export default function StoryAqua1() {
    const navigate = useNavigate();
    const location = useLocation();
    const { nickname } = location.state || { nickname: "Caju" };

    const handleNavigation = () => {
        navigate("/caju/storyaqua8");
    };

    const handleBack = () => {
        navigate("/caju/storyaqua6");
    };

    return (
        <div className="video-fundo-storyaqua7">
            <video autoPlay loop muted playsInline className="video-background">
                <source src={`${process.env.PUBLIC_URL}/images/StoryAqua7.mp4`} type="video/mp4" /> {/* Corrigido o caminho da fonte */}
                Your browser does not support the video tag.
            </video>
            <ContinueButton onClick={handleNavigation} />
            <BackButton onClick={handleBack} />
        </div>
    );
}
