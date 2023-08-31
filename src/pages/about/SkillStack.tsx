import React from 'react';
import Skill, { SkillProps } from './Skill';
import { SiAdobeillustrator, SiAdobephotoshop, SiAdobepremierepro, SiCss3, SiFilezilla, SiGit, SiHtml5, SiJavascript, SiMysql, SiPhp, SiPython, SiTypescript } from 'react-icons/si';
import { FaFigma, FaJava, FaReact } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const SkillStack: React.FC = () => {

    const skills: SkillProps[] = [
        {
            skill: 'css',
            logo: <SiCss3 />
        },
        {
            skill: 'html',
            logo: <SiHtml5 />
        },
        {
            skill: 'react',
            logo: <FaReact />
        },
        {
            skill: 'typescript',
            logo: <SiTypescript />
        },
        {
            skill: 'figma',
            logo: <FaFigma />
        },
        {
            skill: 'premiere',
            logo: <SiAdobepremierepro />
        },
        {
            skill: 'photoshop',
            logo: <SiAdobephotoshop />
        },
        {
            skill: 'illustrator',
            logo: <SiAdobeillustrator />
        },
        {
            skill: 'javascript',
            logo: <SiJavascript />
        },
        {
            skill: 'php',
            logo: <SiPhp />
        },
        {
            skill: 'python',
            logo: <SiPython />
        },
        {
            skill: 'java',
            logo: <FaJava />
        },
        {
            skill: 'sql',
            logo: <SiMysql />
        },
        {
            skill: 'git',
            logo: <SiGit />
        },     
        {
            skill: 'filezilla',
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
                when: "beforeChildren",
                staggerChildren: 0.2,
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
