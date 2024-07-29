import React, { useEffect } from 'react'
// import Navbar from './Navbar'
import Homecontent from './Homecontent'
import Hoverpage from './Hoverpage'
import About from './About'
import Work from './Work'
import '../styles/homepage.css'
import Contact from './Contact'
import Shader from './Shader'
import Landing from './Explore/Landing'
import Userpersonas from './Explore/Userpersonas'
function Homepage() {
    useEffect(() => {
        const lightElement = document.querySelector('.light');

        if (lightElement) {
            const handleMouseMove = (e) => {
                document.documentElement.style.setProperty('--x', e.clientX + 'px');
                document.documentElement.style.setProperty('--y', e.clientY + 'px');
            };

            lightElement.addEventListener('mousemove', handleMouseMove);

            return () => {
                lightElement.removeEventListener('mousemove', handleMouseMove);
            };
        }
    }, []);
    return (
        <div>
            <Homecontent></Homecontent>
            <div>
                <h1 className='hint'>Hint: move your cursor</h1>
                <div className="light">
                    <Hoverpage></Hoverpage>
                </div>
            </div>
            <About></About>
            <Work></Work>
            <Contact></Contact>
            <Landing></Landing>
            <Userpersonas></Userpersonas>
        </div>
    )
}

export default Homepage
