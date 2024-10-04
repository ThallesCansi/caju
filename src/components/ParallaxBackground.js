import React, { useState, useEffect } from "react";

const ParallaxBackground = ({ playbackRate }) => {
    const [offset, setOffset] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            const x = (window.innerWidth / 2 - e.pageX) / 20; // Aumenta a intensidade do parallax
            const y = (window.innerHeight / 2 - e.pageY) / 20;
            setOffset({ x, y });
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    useEffect(() => {
        const video = document.querySelector(".background-video");
        if (video) {
            video.playbackRate = playbackRate; // Aplica a aceleração do vídeo
        }
    }, [playbackRate]);

    return (
        <div className="parallax-container">
            <video
                className="background-video"
                autoPlay
                loop
                muted
                style={{
                    transform: `translate(${offset.x}px, ${offset.y}px)`,
                    playbackRate: playbackRate,
                }}
            >
                <source src={`${process.env.PUBLIC_URL}/media/space.mp4`} type="video/mp4" />
            </video>
        </div>
    );
};

export default ParallaxBackground;
