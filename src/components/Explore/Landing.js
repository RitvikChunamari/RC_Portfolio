import React from 'react'
import '../../styles/Explore/landing.css'
function Landing() {
    return (
        <div className="landingContainer">
            <div className='landing'>
                <div className="secLandingItem summary">
                    <div className='landButton'>
                        <span>Summary</span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25"><path d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z" data-name="Right" /></svg>
                    </div>
                </div>
                <div className="secLandingItem summaryContent">
                    <p>This UX project focused on designing a high-performing landing page for a security agency. The primary goal was to not only clearly communicate the agency's services but also cultivate trust and encourage visitors to take action, whether it's requesting a quote or contacting them directly.</p>
                </div>
                <div className="secLandingItem objContent">
                    <ul>
                        <li>Clarity: Clearly communicate the agency's security services and their benefits.</li>
                        <li>Engagement:  Capture visitor attention and keep them interested in the page content.</li>
                        <li>Conversion:  Encourage users to take desired actions (e.g., request quote, contact agency).</li>
                        <li>Accessibility: Ensure the landing page is user-friendly and accessible</li>
                    </ul>
                </div>
                <div className="secLandingItem obj">
                    <div className='landButton'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25"><path d="M24 12.001H2.914l5.294-5.295-.707-.707L1 12.501l6.5 6.5.707-.707-5.293-5.293H24v-1z" data-name="Left" /></svg>
                        <span>Objectives</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Landing
