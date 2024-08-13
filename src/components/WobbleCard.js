import React, { useState } from "react";
import { motion } from "framer-motion";

// Utility function to replace cn
const classNames = (...classes) => {
    return classes.filter(Boolean).join(' ');
};

const WobbleCard = ({ children, containerClassName, className }) => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseMove = (event) => {
        const { clientX, clientY } = event;
        const rect = event.currentTarget.getBoundingClientRect();
        const x = (clientX - (rect.left + rect.width / 2)) / 20;
        const y = (clientY - (rect.top + rect.height / 2)) / 20;
        setMousePosition({ x, y });
    };

    return (
        <motion.section
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => {
                setIsHovering(false);
                setMousePosition({ x: 0, y: 0 });
            }}
            style={{
                transform: isHovering
                    ? `translate3d(${mousePosition.x}px, ${mousePosition.y}px, 0) scale3d(1, 1, 1)`
                    : "translate3d(0px, 0px, 0) scale3d(1, 1, 1)",
                transition: "transform 0.1s ease-out",
            }}
            className={classNames(
                "mx-auto w-full bg-indigo-800 relative rounded-2xl overflow-hidden",
                containerClassName
            )}
        >
            <div
                className="relative h-full sm:mx-0 sm:rounded-2xl overflow-hidden"
                style={{
                    backgroundImage: "radial-gradient(88% 100% at top, rgba(255,255,255,0.5), rgba(255,255,255,0))",
                    boxShadow:
                        "0 10px 32px rgba(34, 42, 53, 0.12), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.05), 0 4px 6px rgba(34, 42, 53, 0.08), 0 24px 108px rgba(47, 48, 55, 0.10)",
                }}
            >
                <motion.div
                    style={{
                        transform: isHovering
                            ? `translate3d(${-mousePosition.x}px, ${-mousePosition.y}px, 0) scale3d(1.03, 1.03, 1)`
                            : "translate3d(0px, 0px, 0) scale3d(1, 1, 1)",
                        transition: "transform 0.1s ease-out",
                    }}
                    className={classNames("h-full px-4 py-20 sm:px-10", className)}
                >
                    <Noise />
                    {children}
                </motion.div>
            </div>
        </motion.section>
    );
};

const Noise = () => {
    return (
        <div
            className="absolute inset-0 w-full h-full scale-[1.2] transform opacity-10"
            style={{
                backgroundImage: "url(../images/noise.webp)",
                backgroundSize: "30%",
                maskImage: "radial-gradient(#fff, transparent, 75%)",
            }}
        ></div>
    );
};

export default WobbleCard;