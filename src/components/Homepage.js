import React, { useEffect } from "react";
// import Navbar from './Navbar'
import Homecontent from "./Homecontent";
import Hoverpage from "./Hoverpage";
import About from "./About";
import Work from "./Work";
import "../styles/homepage.css";
import Contact from "./Contact";
import Shader from "./Shader";
function Homepage() {
    useEffect(() => {
        const lightElement = document.querySelector(".light");

        if (lightElement) {
            const handleMouseMove = (e) => {
                document.documentElement.style.setProperty("--x", e.clientX + "px");
                document.documentElement.style.setProperty("--y", e.clientY + "px");
            };

            const handleTouchMove = (e) => {
                const touch = e.touches[0];
                document.documentElement.style.setProperty("--x", touch.clientX + "px");
                document.documentElement.style.setProperty("--y", touch.clientY + "px");
            };

            lightElement.addEventListener("mousemove", handleMouseMove);
            lightElement.addEventListener("touchmove", handleTouchMove);

            return () => {
                lightElement.removeEventListener("mousemove", handleMouseMove);
                lightElement.removeEventListener("touchmove", handleTouchMove);
            };
        }
    }, []);
    return (
        <div>
            <Shader></Shader>
            <Homecontent></Homecontent>
            <div>
                {/* <h1 className='hint'>Hint: move your cursor</h1> */}
                <div className="light">
                    <Hoverpage></Hoverpage>
                </div>
            </div>
            <About></About>
            <Work></Work>
            <Contact></Contact>
        </div>
    );
}

export default Homepage;
