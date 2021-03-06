import React, { useEffect, useRef } from 'react';
import { mountHomeApp } from 'home/HomeApp';


const HomePage = () => {
    const ref = useRef(null);
    console.log('container', mountHomeApp);

    useEffect(() => {
        if (ref.current) {
            mountHomeApp(ref.current!);
        }
    }, []);

    return (
        <div ref={ref}></div>
    );
};

export default HomePage;