import React from 'react';
import './home.css';

const HomePage = () => {
    return <div className='app-wrapper'>
        <div className="page-grid">
            <header className='header'>
                <nav>
                    <a href="#">Dummy1</a>
                    <a href="#">Dummy2</a>
                    <a href="#">Dummy3</a>
                </nav>
            </header>
            <aside className='sidebar'>
                <nav>
                    <a href="#">Dummy4</a>
                    <a href="#">Dummy5</a>
                    <a href="#">Dummy6</a>
                </nav>
            </aside>
            <main className='content' id="shell">Main Page</main>
        </div>
    </div>
}

export default {
    component: HomePage
};