import React from 'react'
import '../styles/work.css'
function Work() {
    return (
        <div className='workContainer'>
            <div className="heading">
                <h1>Work</h1>
            </div>
            <div className="workgrid">
                <div className='work-grid-item g1'></div>
                <div className='work-grid-item g2'>
                    <div>
                        <p className='work-heading'>Security Agency Landing Page</p>
                    </div>
                    <div className="btncont">
                        <div className='button'>
                            <span>Explore</span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25"><path d="M18 12.5 7.707 23 7 22.293l9.586-9.793L7 2.707 7.707 2 18 12.5z" /></svg>
                        </div>
                    </div>
                </div>
                <div className='work-grid-item g3'>
                    <div>
                        <p className='work-heading'>Security Agency Admin Dashboard</p>
                    </div>
                    <div className="btncont">
                        <div className='button'>
                            <span>Explore</span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25"><path d="M18 12.5 7.707 23 7 22.293l9.586-9.793L7 2.707 7.707 2 18 12.5z" /></svg>
                        </div>
                    </div>
                </div>
                <div className='work-grid-item g4'></div>
            </div>
        </div >
    )
}

export default Work
