import React, { ReactElement } from 'react';
import { motion } from 'framer-motion';

export interface SkillProps {
    skill: string;
    logo: ReactElement;
}

const Skill: React.FC<SkillProps> = ({ skill, logo }) => {

    const motionSkill = {
        hidden: {
            opacity: 0,
            y: 100,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.2,
            },
        },
    };

    return (
        <motion.div
            className='skill-item'
            initial='hidden'
            animate='visible'
            variants={motionSkill}
        >
            {logo}
            <p className='skill-title'>{skill}</p>
        </motion.div>
    );
};

export default Skill;
