import React from 'react';
import Skill, { SkillProps } from './Skill';
import { SiCss3, SiHtml5, SiPhp, SiPython, SiTypescript } from 'react-icons/si';
import { FaJava } from 'react-icons/fa';

const SkillStack: React.FC = () => {

    const skills: SkillProps[] = [
        {
            skill: 'css',
            logo: <SiCss3 />,
            d: .1
        },
        {
            skill: 'html',
            logo: <SiHtml5 />,
            d: .3
        },
        {
            skill: 'tsx',
            logo: <SiTypescript />,
            d: .5
        },
        {
            skill: 'php',
            logo: <SiPhp />,
            d: .7
        },
        {
            skill: 'py',
            logo: <SiPython />,
            d: .9
        },
        {
            skill: 'java',
            logo: <FaJava />,
            d: 1.1
        },
        
    ];

    console.log(skills);

    return (
        <>
        {skills.map((skill) => (
            <Skill skill={skill.skill} logo={skill.logo} d={skill.d} />
        ))}
        </>
    );
};

export default SkillStack;
