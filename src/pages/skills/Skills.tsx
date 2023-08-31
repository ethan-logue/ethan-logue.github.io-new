import React from 'react';
import './Skills.css';
import Page from '../../components/Page';
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
    <Page page={'projects'}>
        
    </Page>
  );
};

export default Skills;