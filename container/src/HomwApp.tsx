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
        <div>
            <h1>Hello From remote Home App</h1>
            <div ref={ref} style={{'border': '2px solid red', height:'200px'}}></div>
        </div>
    );
};

export default HomePage;