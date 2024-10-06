import React from "react";
import Spline from "@splinetool/react-spline";

export default function SplineBackground() {
    return (
        <div style={{ position: "absolute", top: 0, left: 0, width: "100vw", height: "100vh" }}>
            <Spline scene="https://prod.spline.design/jDUymZsrc-XQlBuO/scene.splinecode" />
        </div>
    );
}
