"use client";
import Link from 'next/link';
import { useState, useEffect } from 'react';

function Header() {
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
        <header className=" z-auto bg-auto shadow-md">
            <div className="text-center  mx-auto px-4">
                <div className="flex justify-between items-center py-4">
                    <h1 className=" text-4xl md:text-7xl font-bold old-standard-tt-regular-italic hover:text-stone-500 transition-colors duration-200">
                        Srikar Sistla
                    </h1>

                    {/* Hamburger menu button */}
                    <button
                        className="md:hidden z-50 p-2 bg-accent rounded-md"
                        onClick={toggleMenu}
                        aria-expanded={isMenuOpen}
                        aria-label="Toggle menu"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h14"} />
                        </svg>
                    </button>

                    {/* Navigation menu for desktop */}
                    <nav className="hidden md:block">
                        <ul className="flex space-x-4">
                            <NavItem href="#about">About</NavItem>
                            <NavItem href="#experience">Experience</NavItem>
                            <NavItem href="#skills">Skills</NavItem>
                            <NavItem href="#contact">Contact</NavItem>
                            <NavItem href="#creations">Creations</NavItem>
                            <NavItem href="/projects">Projects</NavItem>
                        </ul>
                    </nav>
                </div>
            </div>

            {/* Mobile menu */}
            <div className={`${isMenuOpen ? 'motion-safe:animate-dropIn hover-bg-slate-700' : 'hidden'} md:hidden`}>
                <nav className="h-full flex items-center justify-center">
                    <ul className="flex flex-fold space-x-4">
                        <NavItem href="#about" onClick={toggleMenu}>About</NavItem>
                        <NavItem href="#experience" onClick={toggleMenu}>Experience</NavItem>
                        <NavItem href="#skills" onClick={toggleMenu}>Skills</NavItem>
                        <NavItem href="#contact" onClick={toggleMenu}>Contact</NavItem>
                        <NavItem href="#creations" onClick={toggleMenu}>Creations</NavItem>
                        <NavItem href="/projects" onClick={toggleMenu}>Projects</NavItem>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

function NavItem({ href, children, onClick }) {
    return (
        <li className="text-lg hover:text-stone-500 transition-colors duration-200">
            <Link href={href} onClick={onClick}>{children}</Link>
        </li>
    );
}

export default Header;

