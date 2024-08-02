// src/ButtonGrid.js
import React, { useState } from 'react';
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

    return (
        <div className='container' id='about'>
            <div className='box about'>
                <h2>About</h2>
                <div className="content abt ">
                    <p>
                        I'm <span><strong>Ritvik Chunamari</strong></span>, a Hubli, India-based Computer Science Engineer driven by a passion for UX design. Despite having Cerebral Palsy disability, I've embraced challenges and developed my skills in various design disciplines such as UX Design, Figma, Photoshop, Video Editing  to bring fresh perspectives and innovative solutions to the table.
                    </p>
                </div>
            </div>
            <div className="col2">
                <div className='box skills'>
                    <h2>Skills</h2>
                    {/* <div className="carouselCont">
                        <div className="skillcarousel">
                            <Skillbtn btnName={"UX Design"} className={"grid-item"}></Skillbtn>
                            <Skillbtn btnName={"Figma"} className={"grid-item"}></Skillbtn>
                            <Skillbtn btnName={"Figma"} className={"grid-item"}></Skillbtn>
                        </div>
                    </div> */}
                    <div className="content">
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
                </div>
                <div className='box cert'>
                    <h2>Certifications</h2>
                    <div className="content">
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
