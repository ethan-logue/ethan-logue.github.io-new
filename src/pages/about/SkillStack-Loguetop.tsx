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
            logo: <SiCss3 />,
            fillColor: '#0277BD'
        },
        {
            skill: 'HTML5',
            logo: <SiHtml5 />,
            fillColor: '#E65100'
        },
        {
            skill: 'React',
            logo: <FaReact />,
            fillColor: '#',
        },
        {
            skill: 'TypeScript',
            logo: <SiTypescript />,
            fillColor: '#007ACC',
        },
        {
            skill: 'JavaScript',
            logo: <SiJavascript />,
            fillColor: '#',
        },
        {
            skill: 'PHP',
            logo: <SiPhp />,
            fillColor: '#5664A1',
        },
        {
            skill: 'Python',
            logo: <SiPython />,
            fillColor: '#FED655',
        },
        {
            skill: 'Java',
            logo: <FaJava />,
            fillColor: '#E76F00',
        },
        {
            skill: 'SQL',
            logo: <SiMysql />,
            fillColor: '#',
        },
        {
            skill: 'Premiere',
            logo: <SiAdobepremierepro />,
            fillColor: '#',
        },
        {
            skill: 'Photoshop',
            logo: <SiAdobephotoshop />,
            fillColor: '#',
        },
        {
            skill: 'Illustrator',
            logo: <SiAdobeillustrator />,
            fillColor: '#',
        },
        {
            skill: 'VSCode',
            logo: <SiVisualstudiocode />,
            fillColor: '#',
        },
        {
            skill: 'Figma',
            logo: <FaFigma />,
            fillColor: '#',
        },
        {
            skill: 'Git',
            logo: <SiGit />,
            fillColor: '#',
        },     
        {
            skill: 'FileZilla',
            logo: <SiFilezilla />,
            fillColor: '#',
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
