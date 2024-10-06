import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import DialogueBox from "../components/DialogueBox";
import ContinueButton from "../components/ContinueButton";
import BackButton from "../components/BackButton";
import "./MenuWind1.css";
import SelectFire1 from "../components/SelectFire1";

export default function StoryPage2() {
    const navigate = useNavigate();
    const location = useLocation();
    const { nickname } = location.state || { nickname: "Caju" };

    const handleNavigation = () => {
        navigate("/caju/story6");
    };

    const handleBack = () => {
        navigate("/caju/story5");
    };

    return (
        <div className="menu-wind-container">
            <div className="menu-wind1"></div>
            <div className="button-return-wind1"></div>
            <div className="button-continue-wind1"></div>
            <DialogueBox text={<p>Wind Planet</p>} left="33%" top="14.5%" fontSize="36px" color="white" />
            <DialogueBox text={<p>Difficulty</p>} left="13.5%" top="27.5%" fontSize="24px" color="white" />
            <DialogueBox text={<p>Impact</p>} left="15.5%" top="37.5%" fontSize="24px" color="white" />
            <DialogueBox text={<p>Chatisse</p>} left="14%" top="47.5%" fontSize="24px" color="white" />
            <DialogueBox
                text={
                    <p>
                        The skies of Planet WIND were once filled <br /> with clean winds and drifting clouds. Now, <br /> pollution and toxic storms sweep <br /> through, choking the atmosphere. Can you <br /> clear the air and bring back the calm <br /> breezes?
                    </p>
                }
                left="28.5%"
                top="59%"
                fontSize="21px"
                color="white"
            />
            <div className="planet-wind-gif1"></div>
            <div className="planet-wind-gif2"></div>
            <ContinueButton text="Travel" onClick={handleNavigation} />
            <BackButton onClick={handleBack} />
            <SelectFire1 />
        </div>
    );
}
