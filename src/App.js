import React, { useState } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import StoryPage1 from "./pages/StoryPage1"; // Nova página da história
import StoryPage2 from "./pages/StoryPage2"; // Nova página da história
import StoryPage3 from "./pages/StoryPage3"; // Nova página da história
import StoryPage4 from "./pages/StoryPage4"; // Nova página da história
import StoryPage5 from "./pages/StoryPage5"; // Nova página da história
import StoryPage6 from "./pages/StoryPage6"; // Nova página da história
import MenuFire1 from "./pages/MenuFire1"; // Nova página da história
import MenuAqua1 from "./pages/MenuAqua1"; // Nova página da história
import MenuGround1 from "./pages/MenuGround1"; // Nova página da história
import MenuWind1 from "./pages/MenuWind1"; // Nova página da história
import StoryAqua1 from "./pages/StoryAqua1"; // Nova página da história
import StoryAqua2 from "./pages/StoryAqua2"; // Nova página da história
import StoryAqua3 from "./pages/StoryAqua3"; // Nova página da história
import StoryAqua4 from "./pages/StoryAqua4"; // Nova página da história
import StoryAqua5 from "./pages/StoryAqua5"; // Nova página da história
import StoryAqua6 from "./pages/StoryAqua6"; // Nova página da história
import StoryAqua7 from "./pages/StoryAqua7"; // Nova página da história
import StoryAqua8 from "./pages/StoryAqua8"; // Nova página da história
import StoryAqua9 from "./pages/StoryAqua9"; // Nova página da história
import StoryAqua10 from "./pages/StoryAqua10"; // Nova página da história
import StoryAqua11 from "./pages/StoryAqua11"; // Nova página da história
import StoryAqua12 from "./pages/StoryAqua12"; // Nova página da história

import ScratchAqua from "./pages/ScratchAqua"; // Se necessário
import "./App.css";

function App() {
    const [isJourneyCompleted, setIsJourneyCompleted] = useState(false);

    // Função para iniciar a jornada e alterar a página
    const handleStartJourney = () => {
        setIsJourneyCompleted(true); // Define que a jornada foi completada
        window.location.href = "/#/caju/story1"; // Navega para a primeira página da história
    };

    return (
        <Router>
            <Routes>
                {/* Rota para a HomePage */}
                <Route path="/" element={<HomePage onStartJourney={handleStartJourney} />} />

                {/* Rota para a primeira página da história (depois da jornada) */}
                <Route path="/caju/story1" element={<StoryPage1 />} />
                <Route path="/caju/story2" element={<StoryPage2 />} />
                <Route path="/caju/story3" element={<StoryPage3 />} />
                <Route path="/caju/story4" element={<StoryPage4 />} />
                <Route path="/caju/story5" element={<StoryPage5 />} />
                <Route path="/caju/story6" element={<StoryPage6 />} />
                <Route path="/caju/menufire1" element={<MenuFire1 />} />
                <Route path="/caju/menuaqua1" element={<MenuAqua1 />} />
                <Route path="/caju/menuground1" element={<MenuGround1 />} />
                <Route path="/caju/menuwind1" element={<MenuWind1 />} />
                <Route path="/caju/storyaqua1" element={<StoryAqua1 />} />
                <Route path="/caju/storyaqua2" element={<StoryAqua2 />} />
                <Route path="/caju/storyaqua3" element={<StoryAqua3 />} />
                <Route path="/caju/storyaqua4" element={<StoryAqua4 />} />
                <Route path="/caju/storyaqua5" element={<StoryAqua5 />} />
                <Route path="/caju/storyaqua6" element={<StoryAqua6 />} />
                <Route path="/caju/storyaqua7" element={<StoryAqua7 />} />
                <Route path="/caju/storyaqua8" element={<StoryAqua8 />} />
                <Route path="/caju/storyaqua9" element={<StoryAqua9 />} />
                <Route path="/caju/storyaqua10" element={<StoryAqua10 />} />
                <Route path="/caju/storyaqua11" element={<StoryAqua11 />} />
                <Route path="/caju/storyaqua12" element={<StoryAqua12 />} />

                {/* Exemplo: Se ainda precisar da ScratchPage */}
                <Route path="/caju/scratchaqua" element={<ScratchAqua />} />
            </Routes>
        </Router>
    );
}

export default App;
