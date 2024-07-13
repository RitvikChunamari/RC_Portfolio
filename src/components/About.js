import React from 'react'
import Skillbtn from './Skillbtn'
import '../styles/about.css'
function About() {
    return (
        <div className='container'>
            <div className='box about'>
                <h2>About</h2>
                <div className="content abt ">
                    I'm <span><strong>Ritvik Chunamari</strong></span>, a Hubli, India-based Computer Science Engineer driven by a passion for UX design. Despite having Cerebral Palsy disability, I've embraced challenges and developed my skills in various design disciplines such as UX Design, Figma, Photoshop, Video Editing  to bring fresh perspectives and innovative solutions to the table.
                </div>
            </div>
            <div className="col2">
                <div className='box skills'>
                    <h2>Skills</h2>
                    <div className="content">
                        <div className="gridbg">
                            <div className='skillgrid '>
                                <Skillbtn btnName={"UX Design"} className={"grid-item"}></Skillbtn>
                                <Skillbtn btnName={"Figma"} className={"grid-item"}></Skillbtn>
                                <Skillbtn btnName={"Photoshop"} className={"grid-item"}></Skillbtn>
                                <Skillbtn btnName={"Stock Trading"} className={"grid-item"}></Skillbtn>
                                <Skillbtn btnName={"Video Editing"} className={"grid-item"}></Skillbtn>
                                <Skillbtn btnName={"Team Work"} className={"grid-item"}></Skillbtn>
                                <Skillbtn btnName={"Design Thinking"} className={"grid-item"}></Skillbtn>
                                <Skillbtn btnName={"Problem Solving"} className={"grid-item"}></Skillbtn>
                                <Skillbtn btnName={"Analytical"} className={"grid-item"}></Skillbtn>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='box cert'>
                    <h2>Certifications</h2>
                    <div className="content">
                        <div className='certgrid '>
                            <Skillbtn btnName={"UX Design"} certclass={"certbtn"}></Skillbtn>
                            <Skillbtn btnName={"Figma"} certclass={"certbtn"}></Skillbtn>
                            <Skillbtn btnName={"Photoshop"} certclass={"certbtn"}></Skillbtn>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
