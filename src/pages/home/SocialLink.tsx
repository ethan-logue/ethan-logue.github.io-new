import React, { ReactElement } from 'react';
import './Home.css';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface SocialLinkProps {
    link: string;
    icon: ReactElement;
    d?: number;
}

const SocialLink: React.FC<SocialLinkProps> = ({ link, icon, d }) => {

    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.2
    });

    const socialLink = {
        hidden: {
            opacity: 0,
            y: 50,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: 'spring',
                bounce: 0.3,
                delay: d,
            },
        },
    };

    return (
        <motion.a
            className='social-link'
            ref={ref}
            initial='hidden'
            animate={inView ? 'visible' : 'hidden'}
            variants={socialLink}
            target='_blank'
            href={link}
        > 
            {icon} 
        </motion.a>
    );
};

export default SocialLink;
