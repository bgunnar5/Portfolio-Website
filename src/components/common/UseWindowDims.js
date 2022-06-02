import { useEffect, useState } from "react";

const getWindowDims = () => {
    const {innerWidth: width, innerHeight: height} = window;
    return {width, height};
}

const UseWindowDims = () => {
    const [windowDims, setWindowDims] = useState(getWindowDims());

    useEffect(() => {
        const handleResize = () => {
            setWindowDims(getWindowDims());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [])

    return windowDims
}

export default UseWindowDims;