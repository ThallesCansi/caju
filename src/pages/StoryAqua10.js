import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import ContinueButton from "../components/ContinueButton";
import DialogueBox from "../components/DialogueBox";
import BackButton from "../components/BackButton";
import "./StoryAqua10.css";

export default function StoryAqua1() {
    const navigate = useNavigate();
    const location = useLocation();
    const { nickname } = location.state || { nickname: "Caju" };

    const handleNavigation = () => {
        navigate("/caju/scratchaqua");
    };

    const handleBack = () => {
        navigate("/caju/storyaqua9");
    };

    return (
        <div className="story-aqua-container10">
            <DialogueBox
                text={
                    <p>
                        And that's why you're here, {nickname}! <br /> With your help, we can begin to heal this <br /> planet. Are you ready to join me and help <br /> restore balance to the waters?{" "}
                    </p>
                }
                top="18%"
                left="24%"
                fontSize="38px"
            />
            <ContinueButton onClick={handleNavigation} />
            <BackButton onClick={handleBack} />
        </div>
    );
}
