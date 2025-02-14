import React from 'react';

function Header() {
    return (
        <header className="flex justify-between items-center">
            <h1 className="text-7xl font-bold old-standard-tt-regular-italic hover:text-stone-500 transition-colors duration-200">Srikar Sistla</h1>
            <nav>
                <ul className="flex gap-4">
                    <div className="hover:text-stone-500 transition-colors duration-200">
                        <li><a href="#about">About</a></li>
                    </div>
                    <div className="hover:text-stone-500 transition-colors duration-200">
                        <li><a href="#experience">Experience</a></li>
                    </div>
                    <div className="hover:text-stone-500 transition-colors duration-200">
                        <li><a href="#skills">Skills</a></li>
                    </div>
                    <div className="hover:text-stone-500 transition-colors duration-200">
                        <li><a href="#contact">Contact</a></li>
                    </div>
                    <div className="hover:text-stone-500 transition-colors duration-200">
                        <li><a href="@components/photography">Photography</a></li>
                    </div>
                </ul>
            </nav>
        </header>
    );
  }
export default Header;