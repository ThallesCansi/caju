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
        window.location.href = "/story1"; // Navega para a primeira página da história
    };

    return (
        <Router>
            <Routes>
                {/* Rota para a HomePage */}
                <Route path="/" element={<HomePage onStartJourney={handleStartJourney} />} />

                {/* Rota para a primeira página da história (depois da jornada) */}
                <Route path="/story1" element={<StoryPage1 />} />
                <Route path="/story2" element={<StoryPage2 />} />

                {/* Exemplo: Se ainda precisar da ScratchPage */}
                <Route path="/scratch" element={<ScratchPage />} />
            </Routes>
        </Router>
    );
}

export default App;
