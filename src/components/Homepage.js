import React, { useEffect } from 'react'
import Navbar from './Navbar'
import Homecontent from './Homecontent'
import Hoverpage from './Hoverpage'
import '../styles/homepage.css'
import About from './About'
import Work from './Work'
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
            <Navbar></Navbar>
            <div className="homepage" style={{ position: 'relative', top: '5.6rem', overflow: 'hidden' }}>
                <Homecontent></Homecontent>
                <div>
                    <h1 className='hint'>Hint: move your cursor</h1>
                    <div className="light">
                        <Hoverpage></Hoverpage>
                    </div>
                </div>
                <About></About>
                <Work></Work>
            </div>
        </div>

    )
}

export default Homepage
