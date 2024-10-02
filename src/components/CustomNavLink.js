import React from 'react';
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';
import { Link as ScrollLink, scroller } from 'react-scroll';

const CustomNavLink = ({ to, spy, smooth, offset, duration, className, children }) => {
    const location = useLocation();
    const navigate = useNavigate();
    const isHomePage = location.pathname === '/';

    const handleClick = (event) => {
        if (!isHomePage) {
            event.preventDefault();
            navigate('/');
            // Wait for navigation to complete before scrolling
            setTimeout(() => {
                scroller.scrollTo(to, {
                    spy: spy,
                    smooth: smooth,
                    offset: offset,
                    duration: duration
                });
            }, 100);
        }
    };

    if (isHomePage) {
        return (
            <ScrollLink
                to={to}
                spy={spy}
                smooth={smooth}
                offset={offset}
                duration={duration}
                className={className}
            >
                {children}
            </ScrollLink>
        );
    } else {
        return (
            <RouterLink
                to="/"
                className={className}
                onClick={handleClick}
            >
                {children}
            </RouterLink>
        );
    }
};

export default CustomNavLink;