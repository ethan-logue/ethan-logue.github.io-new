import React from 'react';
import './Home.css';

const Home: React.FC = () => {
    return (
        <div className='page home'>
            <div className='page-container'>
                <h1 className='page-title'>Ethan Logue</h1>
                <div className='bottom-circle'></div>
                <div className='bottom-outline'></div>
            </div>
        </div>
    );
};

export default Home;
