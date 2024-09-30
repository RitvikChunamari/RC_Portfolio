import React, { useEffect } from 'react'
import '../../styles/Explore/landing.css'

function Landing() {
    useEffect(() => {
        const applyTorchEffect = (container) => {
            const torch = container.querySelector('.torch');
            const borderHighlights = ['top', 'right', 'bottom', 'left'].map(side => {
                const highlight = document.createElement('div');
                highlight.className = `border-highlight border-highlight-${side}`;
                container.appendChild(highlight);
                return highlight;
            });

            const handleMouseMove = (e) => {
                const rect = container.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                torch.style.left = `${x - 500}px`;
                torch.style.top = `${y - 500}px`;
                torch.style.opacity = '1';

                const highlightSize = 150;
                const detectionDistance = 80;

                borderHighlights.forEach((highlight, index) => {
                    let distance, gradientIntensity;
                    switch (index) {
                        case 0: // Top
                            distance = y;
                            highlight.style.width = `${Math.min(highlightSize, rect.width)}px`;
                            highlight.style.left = `${Math.max(0, x - highlightSize / 2)}px`;
                            break;
                        case 1: // Right
                            distance = rect.width - x;
                            highlight.style.height = `${Math.min(highlightSize, rect.height)}px`;
                            highlight.style.top = `${Math.max(0, y - highlightSize / 2)}px`;
                            break;
                        case 2: // Bottom
                            distance = rect.height - y;
                            highlight.style.width = `${Math.min(highlightSize, rect.width)}px`;
                            highlight.style.left = `${Math.max(0, x - highlightSize / 2)}px`;
                            break;
                        case 3: // Left
                            distance = x;
                            highlight.style.height = `${Math.min(highlightSize, rect.height)}px`;
                            highlight.style.top = `${Math.max(0, y - highlightSize / 2)}px`;
                            break;
                    }

                    gradientIntensity = Math.max(0, 1 - (distance / detectionDistance));
                    highlight.style.background = `radial-gradient(circle, rgba(255, 255, 255, ${gradientIntensity}) 0%, rgba(255, 255, 255, 0) 70%)`;
                    highlight.style.opacity = gradientIntensity > 0 ? '1' : '0';
                });
            };

            const handleMouseLeave = () => {
                torch.style.opacity = '0';
                borderHighlights.forEach(highlight => highlight.style.opacity = '0');
            };

            container.addEventListener('mousemove', handleMouseMove);
            container.addEventListener('mouseleave', handleMouseLeave);

            return () => {
                container.removeEventListener('mousemove', handleMouseMove);
                container.removeEventListener('mouseleave', handleMouseLeave);
                borderHighlights.forEach(highlight => container.removeChild(highlight));
            };
        };

        const objContent = document.querySelector('.secLandingItem.objContent');
        const summaryContent = document.querySelector('.secLandingItem.summaryContent');

        if (objContent) applyTorchEffect(objContent);
        if (summaryContent) applyTorchEffect(summaryContent);

    }, []);
    return (
        <div className="landingContainer">
            <div className="landing_heading">
                <p>Security Agency Landing Page</p>
            </div>
            <div className='landing'>
                <div className="secLandingItem summary">
                    <div className='landButton'>
                        <span>Summary</span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25"><path d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z" data-name="Right" /></svg>
                    </div>
                </div>
                <div className="secLandingItem summaryContent">
                    <p>This UX project focused on designing a high-performing landing page for a security agency. The primary goal was to not only clearly communicate the agency's services but also cultivate trust and encourage visitors to take action, whether it's requesting a quote or contacting them directly.</p>
                    <div className="torch-container">
                        <div className="torch"></div>
                    </div>
                </div>
                <div className="secLandingItem objContent">
                    <ul>
                        <li><strong>Clarity </strong>: Clearly communicate the agency's security services and their benefits.</li>
                        <li><strong>Engagement</strong> : Capture visitor attention and keep them interested in the page content.</li>
                        <li><strong>Conversion</strong> : Encourage users to take desired actions (e.g., request quote, contact agency).</li>
                        <li><strong>Accessibility</strong> : Ensure the landing page is user-friendly and accessible</li>
                    </ul>
                    <div className="torch-container">
                        <div className="torch"></div>
                    </div>
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