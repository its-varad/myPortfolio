import React, { useState, useEffect } from 'react';

const ScrollProgressBar = () => {
    const [scrollPercentage, setScrollPercentage] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrollPercent = (scrollTop / scrollHeight) * 100;
            setScrollPercentage(scrollPercent);
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div style={styles.progressBarContainer}>
            <div style={{ ...styles.progress, width: `${scrollPercentage}%` }}></div>
        </div>
    );
};

const styles = {
    progressBarContainer: {
        position: 'fixed',
        bottom: '0',
        left: '0',
        zIndex:'20',
        width: '100%',
        height: '10px',
        backgroundColor: 'rgba(255, 255, 255, 0.2)', // light background
    },
    progress: {
        zIndex: '20',
        height: '10px',
        backgroundImage: `repeating-linear-gradient(
      45deg,
      #171717,
      #171717 2px,
      transparent 2px,
      transparent 6px
    )`,
        backgroundColor: '#ffffff', // White color filling up as scroll progresses
        transition: 'width 0.2s ease-out',
    },
};

export default ScrollProgressBar;
