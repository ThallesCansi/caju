import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import DialogueBox from "../components/DialogueBox";
import ContinueButton from "../components/ContinueButton";
import BackButton from "../components/BackButton";
import "./MenuFire1.css";
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
        <div className="menu-fire-container">
            <div className="menu-fire1"></div>
            <div className="button-return-fire1"></div>
            <div className="button-continue-fire1"></div>
            <DialogueBox text={<p>PYRO Planet</p>} left="33%" top="14.5%" fontSize="36px" color="white" />
            <DialogueBox text={<p>Difficulty</p>} left="13.5%" top="27.5%" fontSize="24px" color="white" />
            <DialogueBox text={<p>Impact</p>} left="15.5%" top="37.5%" fontSize="24px" color="white" />
            <DialogueBox text={<p>Chatisse</p>} left="14%" top="47.5%" fontSize="24px" color="white" />
            <DialogueBox
                text={
                    <p>
                        A land of scorching deserts and glowing <br />
                        magma, Planet Fire is the heart of energy <br /> in the Gaia system. But now, wildfires and <br /> intense heat threaten its very core. Can <br /> you tame the flames and stabilize the <br /> energy?
                    </p>
                }
                left="28.5%"
                top="59%"
                fontSize="21px"
                color="white"
            />
            <div className="planet-fire-gif1"></div>
            <div className="planet-fire-gif2"></div>
            <ContinueButton text="Travel" onClick={handleNavigation} />
            <BackButton onClick={handleBack} />
            <SelectFire1 />
        </div>
    );
}
