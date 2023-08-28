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
                <NavLink activeSection={activeSection} page='home' d={.1} />
                <NavLink activeSection={activeSection} page='about' d={.3} />
                <NavLink activeSection={activeSection} page='skills' d={.5} />
                <NavLink activeSection={activeSection} page='contact' d={.7} />
            </ul>
        </nav>
    );
};

export default Nav;
