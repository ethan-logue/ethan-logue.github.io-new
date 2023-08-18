import React from 'react';
import './Home.css';

const Home: React.FC = () => {
    return (
        <div className='page home'>
            <div className='page-container'>
                <h1 className='page-title'>Ethan Logue</h1>
                <img className='profile-photo' src="https://placehold.jp/300x300.png" alt="Ethan Logue" />
            </div>
        </div>
    );
};

export default Home;
