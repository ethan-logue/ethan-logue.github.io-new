import React from 'react';
import './Home.css';
import Page from '../../components/Page';
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'
import BlobBackg from '../../components/BlobBackg';
import SocialLink from './SocialLink';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Home: React.FC = () => {

    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.2
    });

    const title = {
        hidden: {
            opacity: 0,
            scale: 0,
        },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 1,
                type: 'spring',
                bounce: 0.3,
            },
        },
    };

    return (
        <Page page={'home'} pageContainer={'home-container'}>
            <motion.h1
                className='page-title'
                ref={ref}
                initial='hidden'
                animate={inView ? 'visible' : 'hidden'}
                variants={title}
            >
                Ethan Logue
            </motion.h1>
            <div className='social-list'>
                <SocialLink link='https://github.com/ethan-logue' icon={<FaGithub />} d={.4} />
                <SocialLink link='https://www.linkedin.com/in/ethan-logue-53b90320b' icon={<FaLinkedin />} d={.5} />
                <SocialLink link='mailto:eml8469@rit.edu' icon={<SiGmail />} d={.6} />
            </div>
        </Page>
    );
};

export default Home;
