import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../styles/work.css'
import secimg from '../images/security_image.png'
function Work() {
    useEffect(() => {
        const applyTorchEffect = (container) => {
            const torch = document.createElement('div');
            torch.className = 'torch';
            const torchContainer = document.createElement('div');
            torchContainer.className = 'torch-container';
            torchContainer.appendChild(torch);
            container.appendChild(torchContainer);

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
                torch.style.opacity = '0.2';

                const highlightSize = 200;
                const detectionDistance = 200;

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
                container.removeChild(torchContainer);
                borderHighlights.forEach(highlight => container.removeChild(highlight));
            };
        };

        const workItems = document.querySelectorAll('.work-grid-item');
        workItems.forEach(item => applyTorchEffect(item));

    }, []);

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
                        <Link to="/landingpage" className='button'>
                            <span>Explore</span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25"><path d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z" data-name="Right" /></svg>
                        </Link>
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
                        <Link to="/landingpage" className='button'>
                            <span>Explore</span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25"><path d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z" data-name="Right" /></svg>
                        </Link>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Work
