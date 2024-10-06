import React, { useRef, useEffect, useState } from "react";
import Spline from "@splinetool/react-spline";

export default function SpaceJourney({ isAccelerating }) {
    const splineRef = useRef(null);
    const [speed, setSpeed] = useState(0.1); // Velocidade inicial da câmera

    useEffect(() => {
        let interval;
        if (isAccelerating && splineRef.current) {
            interval = setInterval(() => {
                const spline = splineRef.current;
                const camera = spline?.scene?.activeCamera; // Verifica se a câmera está acessível

                if (camera) {
                    setSpeed((prevSpeed) => prevSpeed + 0.05); // Aumenta a velocidade progressivamente
                    camera.position.z -= speed; // Move a câmera no eixo Z
                }
            }, 100); // A cada 100ms aumenta a velocidade
        }

        return () => clearInterval(interval); // Limpa o intervalo quando o componente desmonta
    }, [isAccelerating, speed]);

    return <Spline ref={splineRef} scene="https://prod.spline.design/jDUymZsrc-XQlBuO/scene.splinecode" />;
}
