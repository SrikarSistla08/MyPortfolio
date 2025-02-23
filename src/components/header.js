"use client";
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

function Header() {
    const scrollToElement = (e, targetId) => {
        e.preventDefault();
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setIsMenuOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <header id='header' className="z-auto bg-auto shadow-md">
            <div className="text-center mx-auto px-4">
                <div className="flex justify-between items-center py-4">
                    <motion.h1 
                        className="text-4xl md:text-7xl font-bold font-italiana hover:text-stone-500 transition-colors duration-200"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        Srikar Sistla
                    </motion.h1>

                    {/* Hamburger menu button */}
                    <motion.button
                        className="md:hidden z-50 p-2 bg-accent rounded-md"
                        onClick={toggleMenu}
                        aria-expanded={isMenuOpen}
                        aria-label="Toggle menu"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h14"} />
                        </svg>
                    </motion.button>

                    {/* Navigation menu for desktop */}
                    <nav className="hidden md:block">
                        <ul className="flex space-x-4 font-italiana">
                            <NavItem href="#about" onClick={(e) => scrollToElement(e, 'about')}>About</NavItem>
                            <NavItem href="#experience" onClick={(e) => scrollToElement(e, 'experience')}>Experience</NavItem>
                            <NavItem href="#skills" onClick={(e) => scrollToElement(e, 'skills')}>Skills</NavItem>
                            <NavItem href="#contact" onClick={(e) => scrollToElement(e, 'contact')}>Contact</NavItem>
                            <NavItem href="#creations" onClick={(e) => scrollToElement(e, 'creations')}>Creations</NavItem>
                            <NavItem href="/projects">Projects</NavItem>
                        </ul>
                    </nav>
                </div>
            </div>

            {/* Mobile menu */}
            <motion.div 
                className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: isMenuOpen ? 1 : 0, y: isMenuOpen ? 0 : -20 }}
                transition={{ duration: 0.3 }}
            >
                <nav className="h-full flex items-center justify-center">
                    <ul className="flex flex-col space-y-4">
                        <NavItem href="#about" onClick={(e) => { scrollToElement(e, 'about'); toggleMenu(); }}>About</NavItem>
                        <NavItem href="#experience" onClick={(e) => { scrollToElement(e, 'experience'); toggleMenu(); }}>Experience</NavItem>
                        <NavItem href="#skills" onClick={(e) => { scrollToElement(e, 'skills'); toggleMenu(); }}>Skills</NavItem>
                        <NavItem href="#contact" onClick={(e) => { scrollToElement(e, 'contact'); toggleMenu(); }}>Contact</NavItem>
                        <NavItem href="#creations" onClick={(e) => { scrollToElement(e, 'creations'); toggleMenu(); }}>Creations</NavItem>
                        <NavItem href="/projects" onClick={toggleMenu}>Projects</NavItem>
                    </ul>
                </nav>
            </motion.div>
        </header>
    );
}

function NavItem({ href, children, onClick }) {
    return (
        <motion.li 
            className="text-lg hover:text-stone-500 transition-colors duration-200"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
        >
            <Link href={href} onClick={onClick}>{children}</Link>
        </motion.li>
    );
}

export default Header;

