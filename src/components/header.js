import React from 'react';

function Header() {
    return (
        <header className="flex justify-between items-center">
            <h1 className="text-7xl font-bold">Srikar Sistla</h1>
            <nav>
                <ul className="flex gap-4">
                    <li><a href="#about">About</a></li>
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
  }
export default Header;