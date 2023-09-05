import React from 'react';
import Skill, { SkillProps } from './Skill';
import { SiAdobeillustrator, SiAdobephotoshop, SiAdobepremierepro, SiCss3, SiFilezilla, SiGit, SiHtml5, SiJavascript, SiMysql, SiPhp, SiPython, SiTypescript, SiVisualstudiocode } from 'react-icons/si';
import { FaFigma, FaJava, FaReact } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const SkillStack: React.FC = () => {

    const skills: SkillProps[] = [
        {
            skill: 'CSS3',
            logo: <SiCss3 />
        },
        {
            skill: 'HTML5',
            logo: <SiHtml5 />
        },
        {
            skill: 'React',
            logo: <FaReact />
        },
        {
            skill: 'TypeScript',
            logo: <SiTypescript />
        },
        {
            skill: 'JavaScript',
            logo: <SiJavascript />
        },
        {
            skill: 'PHP',
            logo: <SiPhp />
        },
        {
            skill: 'Python',
            logo: <SiPython />
        },
        {
            skill: 'Java',
            logo: <FaJava />
        },
        {
            skill: 'SQL',
            logo: <SiMysql />
        },
        {
            skill: 'Premiere',
            logo: <SiAdobepremierepro />
        },
        {
            skill: 'Photoshop',
            logo: <SiAdobephotoshop />
        },
        {
            skill: 'Illustrator',
            logo: <SiAdobeillustrator />
        },
        {
            skill: 'VSCode',
            logo: <SiVisualstudiocode />
        },
        {
            skill: 'Figma',
            logo: <FaFigma />
        },
        {
            skill: 'Git',
            logo: <SiGit />
        },     
        {
            skill: 'FileZilla',
            logo: <SiFilezilla />
        },     
    ];

    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.2
    });

    const skillContainer = {
        hidden: {
            opacity: 0,
            y: 100,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                delayChildren: 0.2,
            },
        },
    };

    return (
        <motion.div
            className='skill-container'
            ref={ref}
            initial='hidden'
            animate={inView ? 'visible' : 'hidden'}
            variants={skillContainer}
        >
            {skills.map((skill, index) => (
                <Skill key={index} {...skill} />
            ))}
        </motion.div>
    );
};

export default SkillStack;
