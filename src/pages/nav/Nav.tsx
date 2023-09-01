import React from 'react';
import './Nav.css';
import { motion } from 'framer-motion';
import NavLink from './NavLink';

interface NavProps {
    activeSection: string;
}

const Nav: React.FC<NavProps> = ({ activeSection }) => {


    return (
        <nav>
            <ul className='nav-list'>
                <NavLink activeSection={activeSection} page='home' d={.8} />
                <NavLink activeSection={activeSection} page='about' d={.9} />
                <NavLink activeSection={activeSection} page='projects' d={1.0} />
                <NavLink activeSection={activeSection} page='contact' d={1.1} />
            </ul>
        </nav>
    );
};

export default Nav;
