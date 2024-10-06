import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import DialogueBox from "../components/DialogueBox";
import BackButton from "../components/BackButton";
import "./StoryPage6.css";
import SelectPlanet from "../components/SelectPlanet";

export default function StoryPage2() {
    const navigate = useNavigate();
    const location = useLocation();
    const { nickname } = location.state || { nickname: "Caju" };

    const handleBack = () => {
        navigate("/caju/story5");
    };

    return (
        <div className="story-container6">
            <div className="select-planet"></div>
            <div className="select-planet"></div>
            <div className="button-return"></div>
            <DialogueBox text={<p>Select a Planet:</p>} left="8.5%" top="12.5%" fontSize="36px" />
            <BackButton onClick={handleBack} />
            <SelectPlanet />
        </div>
    );
}
