import React from 'react';
import './Skills.css';
import ParticleBackg from '../../components/ParticleBackg';
import SkillBox from './SkillBox';

const Skills = () => {
    return (
        <div className='page skills'>
            <ParticleBackg />
            <h2 className='page-title'>Skills</h2>
            <div className='skill-container'>
                <SkillBox skill='css' logo='css.png' />
                <SkillBox skill='html' logo='html.png' />
                <SkillBox skill='tsx' logo='tsx.png' />
                <SkillBox skill='php' logo='php.png' />
                <SkillBox skill='py' logo='py.png' />
                <SkillBox skill='java' logo='java.png' />
            </div>
        </div>
    );
};

export default Skills;