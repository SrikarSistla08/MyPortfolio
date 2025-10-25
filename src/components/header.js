"use client";
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

function Header() {
    const { isDarkMode, toggleTheme } = useTheme();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const scrollToElement = (e, targetId) => {
        e.preventDefault();
        const targetElement = document.getElementById(targetId);
        const headerOffset = 80; // Height of your header
        if (targetElement) {
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
        if (isMenuOpen) {
            toggleMenu();
        }
    };

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
        <header id='header' className="sticky top-0 left-0 right-0 z-[99] bg-slate-900/95 dark:bg-slate-100/95 backdrop-blur-md border-b border-slate-700/50 dark:border-slate-300/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <motion.h1 
                        className="text-3xl md:text-5xl font-bold text-slate-100 dark:text-slate-900 hover:text-slate-300 dark:hover:text-slate-700 transition-colors duration-200"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        Srikar Sistla
                    </motion.h1>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        <ul className="flex items-center space-x-8">
                            <NavItem href="#about" onClick={(e) => scrollToElement(e, 'about')}>About</NavItem>
                            <NavItem href="#experience" onClick={(e) => scrollToElement(e, 'experience')}>Experience</NavItem>
                            <NavItem href="#skills" onClick={(e) => scrollToElement(e, 'skills')}>Skills</NavItem>
                            <NavItem href="#contact" onClick={(e) => scrollToElement(e, 'contact')}>Contact</NavItem>
                            <NavItem href="#creations" onClick={(e) => scrollToElement(e, 'creations')}>Creations</NavItem>
                            <NavItem href="/projects">Projects</NavItem>
                        </ul>
                        
                        {/* Theme Toggle Button */}
                        <motion.button
                            onClick={toggleTheme}
                            className="p-2 rounded-full bg-slate-800 dark:bg-slate-200 hover:bg-slate-700 dark:hover:bg-slate-300 transition-colors duration-200"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            aria-label="Toggle theme"
                        >
                            {isDarkMode ? (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-slate-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-slate-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                                </svg>
                            )}
                        </motion.button>
                    </nav>

                    {/* Mobile Menu Button */}
                    <div className="flex items-center md:hidden">
                        <motion.button
                            onClick={toggleTheme}
                            className="p-2 mr-2 rounded-full bg-slate-800 dark:bg-slate-200 hover:bg-slate-700 dark:hover:bg-slate-300 transition-colors duration-200"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            aria-label="Toggle theme"
                        >
                            {isDarkMode ? (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-slate-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-slate-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                                </svg>
                            )}
                        </motion.button>
                        
                        <motion.button
                            className="p-2 rounded-md bg-slate-800 dark:bg-slate-200 hover:bg-slate-700 dark:hover:bg-slate-300 transition-colors duration-200"
                            onClick={toggleMenu}
                            aria-expanded={isMenuOpen}
                            aria-label="Toggle menu"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <svg className="w-6 h-6 text-slate-100 dark:text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h14"} />
                            </svg>
                        </motion.button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            <motion.div 
                className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden absolute inset-x-0 top-full bg-slate-900 dark:bg-slate-100 shadow-lg`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: isMenuOpen ? 1 : 0, y: isMenuOpen ? 0 : -20 }}
                transition={{ duration: 0.3 }}
            >
                <nav className="px-4 py-6">
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
            className="inline-block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            <Link 
                href={href} 
                onClick={onClick}
                className="block px-4 py-2 text-lg font-medium text-slate-100 dark:text-slate-900 hover:text-blue-400 dark:hover:text-blue-600 transition-colors duration-200"
            >
                {children}
            </Link>
        </motion.li>
    );
}

export default Header;

