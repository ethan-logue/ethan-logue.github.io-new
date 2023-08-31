import React, { ReactElement } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export interface SkillProps {
    skill: string;
    logo: ReactElement;
    d?: number;
}

const Skill: React.FC<SkillProps> = ({ skill, logo, d }) => {

    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.2
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
            className='skill-item'
            ref={ref}
            initial='hidden'
            animate={inView ? 'visible' : 'hidden'}
            variants={motionSkill}
        >
            {logo}
            <p className='skill-title'>{skill}</p>
        </motion.div>
    );
};

export default Skill;
