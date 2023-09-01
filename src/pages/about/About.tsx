import React from 'react';
import './About.css';
import Page from '../../components/Page';
import SkillStack from './SkillStack';

const About: React.FC = () => {
    return (
        <Page page={'about'} pageContainer={'about-container'} >
            <h1 className='page-title'>About Me</h1>
            <p className='about-bio'>Hello there! I'm a third-year web and mobile undergraduate at RIT. My passion lies in front-end web development with CSS, React, and Typescript being my strongest tools</p>

            <SkillStack />
        </Page>
    );
};

export default About;
