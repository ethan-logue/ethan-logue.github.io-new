import React from 'react';
import './Home.css';
import Page from '../../components/Page';
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'

const Home: React.FC = () => {
    return (
        <Page page={'home'} pageContainer={'home-container'}>
            <h1 className='page-title'>Ethan Logue</h1>
            <div className='social-list'>
                <a className='social-link' target='_blank' href='https://github.com/ethan-logue'> <FaGithub /> </a>
                <a className='social-link' target='_blank' href='https://www.linkedin.com/in/ethan-logue-53b90320b'> <FaLinkedin /> </a>
                <a className='social-link' target='_blank' href='mailto:eml8469@rit.edu'> <SiGmail /> </a>
            </div>
        </Page>
    );
};

export default Home;
