import React from 'react';
import './Home.css';
import Page from '../../components/Page';
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'
import BlobBackg from '../../components/BlobBackg';
import SocialLink from './SocialLink';

const Home: React.FC = () => {
    return (
        <Page page={'home'} pageContainer={'home-container'}>
            <h1 className='page-title'>Ethan Logue</h1>
            <div className='social-list'>
                <SocialLink link='https://github.com/ethan-logue' icon={<FaGithub />} d={.1} />
                <SocialLink link='https://www.linkedin.com/in/ethan-logue-53b90320b' icon={<FaLinkedin />} d={.2} />
                <SocialLink link='mailto:eml8469@rit.edu' icon={<SiGmail />} d={.3} />
            </div>
        </Page>
    );
};

export default Home;
