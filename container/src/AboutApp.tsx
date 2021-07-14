import React, { useEffect, useRef } from 'react';
import { mountAboutApp } from 'about/AboutApp';


const AboutApp = () => {
    const ref = useRef(null);
    console.log('container', mountAboutApp);

    useEffect(() => {
        if (ref.current) {
          mountAboutApp(ref.current!);
        }
    }, []);

    return (
        <div ref={ref}></div>
    );
};

export default AboutApp;