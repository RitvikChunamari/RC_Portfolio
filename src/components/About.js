
import React, { useEffect, useState } from 'react';
import Skillbtn from '../components/Skillbtn';
import '../styles/about.css';

const About = () => {
    const [hoveredButton, setHoveredButton] = useState(null);

    const buttons = [
        { name: 'UX Design', content: 'Designing intuitive user interfaces and improving user experience' },
        { name: 'Figma', content: 'Collaborative interface design tool for team projects' },
        { name: 'Photoshop', content: ' a software application for image editing, graphic design, and digital art' },
        { name: 'Stock Trading', content: 'Buying and selling stocks in the financial markets' },
        { name: 'Video Editing', content: 'Creating and editing video content for various purposes' },
        { name: 'Team work', content: 'Collaborating effectively with team members' },
        { name: 'Design Thinking', content: 'Innovative problem-solving through creative design' },
        { name: 'Problem Solving', content: 'Analyzing and resolving complex issues' },
        { name: 'Analytical', content: 'A Process of identifying and solving problems in many different contexts' }
    ];
    const certificatebtn = [
        { name: 'Cert1', content: 'Designing intuitive user interfaces and improving user experience' },
        { name: 'cert2', content: 'Collaborative interface design tool for team projects' },
        { name: 'cert3', content: ' A software application for image editing, graphic design, and digital art' },
    ];
    const handleMouseEnter = (index) => {
        setHoveredButton(index);
    };

    const handleMouseLeave = () => {
        setHoveredButton(null);
    };

    useEffect(() => {
        const applyTorchEffect = (container) => {
            const torch = document.createElement('div');
            torch.className = 'torch';
            const torchContainer = document.createElement('div');
            torchContainer.className = 'torch-container';
            torchContainer.appendChild(torch);
            container.appendChild(torchContainer);

            const borderHighlights = ['top', 'right', 'bottom', 'left'].map(side => {
                const highlight = document.createElement('div');
                highlight.className = `border-highlight border-highlight-${side}`;
                container.appendChild(highlight);
                return highlight;
            });

            const handleMouseMove = (e) => {
                const rect = container.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                torch.style.left = `${x - 500}px`;
                torch.style.top = `${y - 500}px`;
                torch.style.opacity = '0.3';

                const highlightSize = 200;
                const detectionDistance = 200;

                borderHighlights.forEach((highlight, index) => {
                    let distance, gradientIntensity;
                    switch (index) {
                        case 0: // Top
                            distance = y;
                            highlight.style.width = `${Math.min(highlightSize, rect.width)}px`;
                            highlight.style.left = `${Math.max(0, x - highlightSize / 2)}px`;
                            break;
                        case 1: // Right
                            distance = rect.width - x;
                            highlight.style.height = `${Math.min(highlightSize, rect.height)}px`;
                            highlight.style.top = `${Math.max(0, y - highlightSize / 2)}px`;
                            break;
                        case 2: // Bottom
                            distance = rect.height - y;
                            highlight.style.width = `${Math.min(highlightSize, rect.width)}px`;
                            highlight.style.left = `${Math.max(0, x - highlightSize / 2)}px`;
                            break;
                        case 3: // Left
                            distance = x;
                            highlight.style.height = `${Math.min(highlightSize, rect.height)}px`;
                            highlight.style.top = `${Math.max(0, y - highlightSize / 2)}px`;
                            break;
                    }

                    gradientIntensity = Math.max(0, 1 - (distance / detectionDistance));
                    highlight.style.background = `radial-gradient(circle, rgba(255, 255, 255, ${gradientIntensity}) 0%, rgba(255, 255, 255, 0) 70%)`;
                    highlight.style.opacity = gradientIntensity > 0 ? '1' : '0';
                });
            };

            const handleMouseLeave = () => {
                torch.style.opacity = '0';
                borderHighlights.forEach(highlight => highlight.style.opacity = '0');
            };

            container.addEventListener('mousemove', handleMouseMove);
            container.addEventListener('mouseleave', handleMouseLeave);

            return () => {
                container.removeEventListener('mousemove', handleMouseMove);
                container.removeEventListener('mouseleave', handleMouseLeave);
                container.removeChild(torchContainer);
                borderHighlights.forEach(highlight => container.removeChild(highlight));
            };
        };

        const aboutBox = document.querySelector('.box.about');
        const skillsBox = document.querySelector('.box.skills');
        const certBox = document.querySelector('.box.cert');

        if (aboutBox) applyTorchEffect(aboutBox);
        if (skillsBox) applyTorchEffect(skillsBox);
        if (certBox) applyTorchEffect(certBox);

    }, []);

    return (
        <div className="maincont">
            <div className='container' id='about'>
                <div className='box about'>
                    <p className='abt_heading'>About</p>
                    <div className="content abt">
                        <p>
                            I'm <span><strong>Ritvik Chunamari</strong></span>, a Hubli, India-based Computer Science Engineer driven by a passion for UX design. Despite having Cerebral Palsy disability, I've embraced challenges and developed my skills in various design disciplines such as UX Design, Figma, Photoshop, Video Editing  to bring fresh perspectives and innovative solutions to the table.
                        </p>
                    </div>
                </div>
                {/* <div className="carouselCont">
                        <div className="skillcarousel">
                            <Skillbtn btnName={"UX Design"} className={"grid-item"}></Skillbtn>
                            <Skillbtn btnName={"Figma"} className={"grid-item"}></Skillbtn>
                            <Skillbtn btnName={"Figma"} className={"grid-item"}></Skillbtn>
                        </div>
                    </div> */}
                <div className="col2">
                    <div className='box skills'>
                        <p className='abt_heading'>Skills</p>

                        <div className="skillCont">
                            <div className="grid">
                                {buttons.map((button, index) => (
                                    <div
                                        key={index}
                                        className="button-container"
                                        onMouseEnter={() => handleMouseEnter(index)}
                                        onMouseLeave={handleMouseLeave}
                                    >
                                        <Skillbtn className="grid-button" btnName={button.name} />
                                    </div>
                                ))}
                                <div className={`overlay ${hoveredButton !== null ? 'visible' : ''}`} style={{
                                    transformOrigin: hoveredButton !== null ? `${hoveredButton % 3 * 33.33 + 16.66}% ${Math.floor(hoveredButton / 3) * 33.33 + 16.66}%` : 'center center',
                                }}>
                                    {hoveredButton !== null && (
                                        <div className="overlaymain">
                                            <div className="heading">
                                                {buttons[hoveredButton].name}
                                            </div>
                                            <div className="overlayContent">
                                                {buttons[hoveredButton].content.split('\n').map((line, index) => (
                                                    <div key={index}>{line}</div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='box cert'>
                        <p className='abt_heading'>Certifications</p>
                        <div className="certCont">
                            <div className='certgrid '>
                                <Skillbtn btnName={"UX Design"} certclass={"certbtn"}></Skillbtn>
                                <Skillbtn btnName={"Figma"} certclass={"certbtn"}></Skillbtn>
                                <Skillbtn btnName={"Photoshop"} certclass={"certbtn"}></Skillbtn>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};



export default About;
