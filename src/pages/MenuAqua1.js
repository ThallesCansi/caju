import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import DialogueBox from "../components/DialogueBox";
import ContinueButton from "../components/ContinueButton";
import BackButton from "../components/BackButton";
import "./MenuAqua1.css";
import SelectFire1 from "../components/SelectFire1";

export default function StoryPage2() {
    const navigate = useNavigate();
    const location = useLocation();
    const { nickname } = location.state || { nickname: "Caju" };

    const handleNavigation = () => {
        navigate("/caju/storyaqua1");
    };

    const handleBack = () => {
        navigate("/caju/story5");
    };

    return (
        <div className="menu-aqua-container">
            <div className="menu-aqua1"></div>
            <div className="button-return-aqua1"></div>
            <div className="button-continue-aqua1"></div>
            <DialogueBox text={<p>Aqua Planet</p>} left="33%" top="14.5%" fontSize="36px" color="white" />
            <DialogueBox text={<p>Difficulty</p>} left="13.5%" top="27.5%" fontSize="24px" color="white" />
            <DialogueBox text={<p>Impact</p>} left="15.5%" top="37.5%" fontSize="24px" color="white" />
            <DialogueBox text={<p>Chatisse</p>} left="14%" top="47.5%" fontSize="24px" color="white" />
            <DialogueBox
                text={
                    <p>
                        Once a paradise of clear oceans, flowing <br /> rivers, and vibrant coral reefs, Planet <br /> Water now faces a crisis. The waters <br /> have grown dark, and life beneath the <br /> waves is fading out. Will you help bring <br /> clarity back to the seas?
                    </p>
                }
                left="28.5%"
                top="59%"
                fontSize="21px"
                color="white"
            />
            <div className="planet-aqua-gif1"></div>
            <div className="planet-aqua-gif2"></div>
            <ContinueButton text="Travel" onClick={handleNavigation} />
            <BackButton onClick={handleBack} />
            <SelectFire1 />
        </div>
    );
}
