import React from 'react'
import memoji from '../images/memoji.png'
import '../styles/homecontent.css'
function Homecontent() {
    return (
        <div className='homeGrid'>
            <div className="nameDesig">
                <h1 className='name'>Ritvik Chunamari</h1>
                <div className='designation'>Creative Designer and Tech Enthusiast with Cerebral Palsy, specializing in UX and Graphic Design. Also an avid Options Trader, constantly learning and innovating in the tech world.</div>
            </div>
            <div className="memoji">
                <img src={memoji} alt="memoji" />
            </div>
        </div>
    )
}

export default Homecontent
