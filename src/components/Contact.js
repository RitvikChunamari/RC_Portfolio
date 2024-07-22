import React from 'react'
import '../styles/contact.css'
import { animateScroll as scroll } from 'react-scroll';
function Contact() {
    const options = {
        // your options here, for example:
        duration: 50,
        smooth: true,
    };
    return (
        <div className='contactCont' id='contact'>
            <div className="contactGrid">
                <div className='contactGridItem cg1'>
                    <p className='contactContent'>I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.</p>
                </div>
                <div className='contactGridItem cg2'>Form</div>
            </div>
            {/* <button onClick={() => scroll.scrollToTop(options)}>
                Go to top
            </button> */}
        </div>
    )
}

export default Contact
