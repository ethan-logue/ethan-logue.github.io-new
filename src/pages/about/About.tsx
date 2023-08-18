import React from 'react';
import './About.css';
import Page from '../../components/Page';

const About: React.FC = () => {
    return (
        <Page page={'about'} pageContainer={'about-container'} >
            <h1 className='page-title'>About Me</h1>
            <p className='about-bio'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore accusamus quam error! Maiores quas ipsam corrupti, nisi aut eligendi blanditiis molestias iusto quasi quod officiis ad iste earum animi nostrum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam cumque, itaque, voluptatibus est nemo ipsa ab repellat, officia asperiores debitis sint culpa accusantium repudiandae. Modi consectetur odio vero natus unde?</p>
        </Page>
    );
};

export default About;
