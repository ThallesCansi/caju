import React, { useState, useEffect } from "react";
import "./ParallaxBackground.css";

const ParallaxBackground = ({ playbackRate }) => {
    const [offset, setOffset] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            const x = (window.innerWidth / 2 - e.pageX) / 100;
            const y = (window.innerHeight / 2 - e.pageY) / 100;
            setOffset({ x, y });
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <div className="parallax-container">
            <video
                className="background-video"
                src="media/space.mp4"
                autoPlay
                loop
                muted
                style={{
                    transform: `translate(${offset.x}px, ${offset.y}px)`,
                    playbackRate: playbackRate,
                }}
            />
        </div>
    );
};

export default ParallaxBackground;
