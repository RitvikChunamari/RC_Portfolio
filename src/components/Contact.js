import React from 'react'
import '../styles/contact.css'
import { animateScroll as scroll } from 'react-scroll';
import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
function Contact() {
    // const options = {

    //     duration: 50,
    //     smooth: true,
    // };
    const container = useRef(null);
    const box = useRef(null)
    useLayoutEffect(() => {
        const context = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: container.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true,
                }
            })
            // tl.to(box.current, { y: -300 }, 0)
        })
        return () => context.revert();
    }, [])
    return (
        <div ref={container} className='contactCont' id='contact'>
            <div className="contact_heading">
                <h1>Contact</h1>
            </div>
            <div className="contactGrid">
                <div ref={box} className='contactGridItem cg1'>
                    <p className='contactContent'>I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.</p>
                </div>

                <div className='contactGridItem cg2'>
                    <h1>Get In Touch</h1>
                    <div className="formGrid">
                        <div className="touchGridItem fname">
                            <input type="text" name="text" class="input" placeholder="First Name" />
                        </div>
                        <div className="touchGridItem lname">
                            <input type="text" name="text" class="input" placeholder="Last Name" />
                        </div>
                        <div className="touchGridItem email">
                            <input type="email" name="text" class="input" placeholder='Email' />
                        </div>
                        <div className="touchGridItem phone">
                            <input type="number" name="text" class="input" placeholder='Phone' />
                        </div>
                        <div className="touchGridItem message">
                            <textarea name="text" id="" cols="30" rows="5" class="input" placeholder='Message'></textarea>
                        </div>
                        <div className="touchGridItem submit">
                            <button class="btn-12"><span>Submit</span></button>
                        </div>
                    </div>
                </div>
            </div>
            {/* <button onClick={() => scroll.scrollToTop(options)}>
                Go to top
            </button> */}
        </div>
    )
}

export default Contact
