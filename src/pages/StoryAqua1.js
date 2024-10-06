import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import DialogueBox from "../components/DialogueBox";
import ContinueButton from "../components/ContinueButton";
import BackButton from "../components/BackButton";
import "./StoryAqua1.css";

export default function StoryAqua1() {
    const navigate = useNavigate();
    const location = useLocation();
    const { nickname } = location.state || { nickname: "Caju" };

    const handleNavigation = () => {
        navigate("/caju/storyaqua2");
    };

    const handleBack = () => {
        navigate("/caju/menuaqua1");
    };

    return (
        <div className="story-aqua-container1">
            <DialogueBox
                text={
                    <p>
                        Oh, hello! I'm Kai, <br /> guardian of the waters here on Planet AQUA. <br /> It's a pleasure to meet someone <br /> willing to help restore balance.

                    </p>
                }
                left="4%"
                top="15%"
            />
            <ContinueButton onClick={handleNavigation} />
            <BackButton onClick={handleBack} />
        </div>
    );
}
