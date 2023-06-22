import React from 'react';
import './Skills.css';

interface SkillBoxProps {
    skill: string;
    logo: string;
}


const SkillBox: React.FC<SkillBoxProps> = ({ skill, logo }) => {
    return (
        <div className={`skill-box ${skill}`}>
            <h3 className='skill-title'>.{skill}</h3>
            <img className='skill-logo' src={`./images/${logo}`} alt={`${skill} logo`} />
        </div>
    );
};

export default SkillBox;
