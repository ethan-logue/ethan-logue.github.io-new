import React, { useEffect, useState } from 'react';
import './Skills.css';
import ParticleBackg from '../../components/ParticleBackg';
import SkillBox from './SkillBox';
import { motion } from 'framer-motion';

const Skills: React.FC = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5
      }
    }
  }

  return (
    <div className='page skills'>
      <div className="page-container" >
        <ParticleBackg />
        <h2 className='page-title'>Skills</h2>
        <motion.div
          className='skill-container'
          variants={container}
          initial="hidden"
          animate="show"
        >
          <SkillBox skill='css' logo='css.png' d={.1} />
          <SkillBox skill='html' logo='html.png' d={.3} />
          <SkillBox skill='tsx' logo='tsx.png' d={.5} />
          <SkillBox skill='php' logo='php.png' d={.7} />
          <SkillBox skill='py' logo='py.png' d={.9} />
          <SkillBox skill='java' logo='java.png' d={1.1} />
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;