import React from 'react'
// import memoji from '../images/memoji.png'
import '../styles/homecontent.css'
function Homecontent() {
    return (
        <div className='homeGrid' id='home'>
            <div className="nameDesig">
                <div className='name'>
                    <h1>Ritvik </h1>
                    <h1>Chunamari</h1>
                </div>
                <div className='designation'>Cerebral Palsy <strong >&middot;</strong> Creative Designer <strong>&middot;</strong> Options Trader <strong >&middot;</strong> Tech Enthusiast  </div>
            </div>
            <div className="memoji">
                {/* <img src={memoji} alt="memoji" /> */}
            </div>
        </div>
    )
}

export default Homecontent
