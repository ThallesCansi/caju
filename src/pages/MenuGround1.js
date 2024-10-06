import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import DialogueBox from "../components/DialogueBox";
import ContinueButton from "../components/ContinueButton";
import BackButton from "../components/BackButton";
import "./MenuGround1.css";
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
        <div className="menu-ground-container">
            <div className="menu-ground1"></div>
            <div className="button-return-ground1"></div>
            <div className="button-continue-ground1"></div>
            <DialogueBox text={<p>Ground Planet</p>} left="31.4%" top="14.5%" fontSize="36px" color="white" />
            <DialogueBox text={<p>Difficulty</p>} left="13.5%" top="27.5%" fontSize="24px" color="white" />
            <DialogueBox text={<p>Impact</p>} left="15.5%" top="37.5%" fontSize="24px" color="white" />
            <DialogueBox text={<p>Chatisse</p>} left="14%" top="47.5%" fontSize="24px" color="white" />
            <DialogueBox
                text={
                    <p>
                        This is where all life began in the Gaia <br /> system. A lush world of forests, fields, <br /> and creatures, Planet Earth thrives <br /> when in harmony. But now, its landscapes <br /> are changing, and the balance of life is <br /> at risk. Can you restore the beauty it <br /> once had?
                    </p>
                }
                left="28.5%"
                top="57%"
                fontSize="21px"
                color="white"
            />
            <div className="planet-ground-gif1"></div>
            <div className="planet-ground-gif2"></div>
            <ContinueButton text="Travel" onClick={handleNavigation} />
            <BackButton onClick={handleBack} />
            <SelectFire1 />
        </div>
    );
}
