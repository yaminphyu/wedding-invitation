import React, { useState } from 'react'

export default function useWindowDimension() {
    const [windowDimensions, setWindowDimensions] = useState({ 
        width: '', 
        height: ''
    });

    React.useEffect(() => {
        function handleResize() {
            setWindowDimensions({ width: window.innerWidth, height: window.innerHeight })
        }

        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return windowDimensions
}
