import React from 'react';
import './Home.css';
import Page from '../../components/Page';

const Home: React.FC = () => {
    return (
        <Page page={'home'}>
            <h1 className='page-title'>Ethan Logue</h1>
        </Page>
    );
};

export default Home;
