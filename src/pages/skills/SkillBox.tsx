import React from 'react';
import './Skills.css';
import { delay, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface SkillBoxProps {
    skill: string;
    logo: string;
    d?: number;
}

const SkillBox: React.FC<SkillBoxProps> = ({ skill, logo, d }) => {

    const [ref, inView] = useInView({
        triggerOnce: true, // Trigger animation only once
        threshold: 0.2, // Adjust the threshold value as per your requirement
    });

    const motionSkill = {
        hidden: {
          opacity: 0,
          y: 100,
        },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            delay: d,
            duration: 0.6,
          },
        },
    };

    return (
        <motion.div
            className={`skill-box ${skill}`}
            ref={ref}
            initial='hidden'
            animate={inView ? 'visible' : 'hidden'}
            variants={motionSkill}
        >
            <h3 className='skill-title'>.{skill}</h3>
            <img className='skill-logo' src={`./images/${logo}`} alt={`${skill} logo`} />
        </motion.div>
    );
};

export default SkillBox;
