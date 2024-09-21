import React from 'react'
import '../styles/work.css'
import secimg from '../images/security_image.png'
function Work() {
    return (
        <div className='workContainer' id='work'>
            <div className="work_heading">
                <p>Work</p>
            </div>
            <div className="workgrid">
                <div className='work-grid-item g2'>
                    <div>
                        <p className='work-heading'>Security Agency Landing Page</p>
                    </div>
                    <div className="imgcontent">
                        <img src={secimg} alt="security_image" />
                    </div>
                    <div className="btncont">
                        <div className='button'>
                            <span>Explore</span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25"><path d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z" data-name="Right" /></svg>
                        </div>
                    </div>
                </div>
                <div className='work-grid-item g3'>
                    <div>
                        <p className='work-heading'>Security Agency Admin Dashboard</p>
                    </div>
                    <div className="imgcontent">
                        <img src={secimg} alt="security_image" />
                    </div>
                    <div className="btncont">
                        <div className='button'>
                            <span>Explore</span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25"><path d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z" data-name="Right" /></svg>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Work
