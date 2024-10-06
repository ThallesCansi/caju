import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import ContinueButton from "../components/ContinueButton";
import BackButton from "../components/BackButton";
import "./ScratchAqua.css";

export default function ScratchPage() {
    const navigate = useNavigate();
    const location = useLocation();
    const { nickname } = location.state || { nickname: "Caju" };

    const handleNavigation = () => {
        navigate("/caju/storyaqua11");
    };

    const handleBack = () => {
        navigate("/caju/storyaqua10");
    };

    return (
        <div className="scratch-aqua-container">
            <div className="button-continue-scratch1"></div>
            <div className="button-return-scratch1"></div>
            <iframe src="https://scratch.mit.edu/projects/1077402576/embed" allowtransparency="true" width="485" height="402" frameBorder="0" scrolling="no" allowFullScreen></iframe>
            <ContinueButton onClick={handleNavigation} />
            <BackButton onClick={handleBack} />
        </div>
    );
}
