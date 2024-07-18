import React from 'react'
import '../styles/about.css'
function Skillbtn({ btnName, certbtn }) {
    return (
        <div className='btngrid'>
            <button className="skillbtn">{btnName}</button>
        </div>
    )
}

export default Skillbtn
