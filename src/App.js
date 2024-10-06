import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import StoryPage1 from "./pages/StoryPage1"; // Nova página da história
import StoryPage2 from "./pages/StoryPage2"; // Nova página da história
import ScratchPage from "./components/ScratchPage"; // Se necessário
import "./App.css";

function App() {
    const [isJourneyCompleted, setIsJourneyCompleted] = useState(false);

    // Função para iniciar a jornada e alterar a página
    const handleStartJourney = () => {
        setIsJourneyCompleted(true); // Define que a jornada foi completada
        window.location.href = "/caju/story1"; // Navega para a primeira página da história
    };

    return (
        <Router>
            <Routes>
                {/* Rota para a HomePage */}
                <Route path="/caju/" element={<HomePage onStartJourney={handleStartJourney} />} />

                {/* Rota para a primeira página da história (depois da jornada) */}
                <Route path="/caju/story1" element={<StoryPage1 />} />
                <Route path="/caju/story2" element={<StoryPage2 />} />

                {/* Exemplo: Se ainda precisar da ScratchPage */}
                <Route path="/caju/scratch" element={<ScratchPage />} />
            </Routes>
        </Router>
    );
}

export default App;
