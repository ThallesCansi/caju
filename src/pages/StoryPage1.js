import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DialogueBox from "../components/DialogueBox";
import ContinueButton from "../components/ContinueButton";
import PlanetAnimation from "../components/PlanetAnimation";
import "./StoryPage1.css";

export default function StoryPage1() {
    const [nickname, setNickname] = useState("");
    const navigate = useNavigate();

    const handleNavigation = () => {
        const name = nickname || "Caju";
        navigate("/story2", { state: { nickname: name } });
    };

    return (
        <div className="story-container1">
            <DialogueBox
                text={
                    <p>
                        Oh, hello, traveller! <br />I didn't expect to meet someone out here. <br />
                        What's your name?
                    </p>
                }
                left="7%"
            />
            <div className="enter-nickname1">
                <p>Enter your nickname:</p>
            </div>
            <div className="input-container1">
                <input maxLength={20} type="text" placeholder="Your nickname" value={nickname} onChange={(e) => setNickname(e.target.value)} />
            </div>
            <ContinueButton onClick={handleNavigation} />
        </div>
    );
}
