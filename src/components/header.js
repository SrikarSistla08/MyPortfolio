import Link from 'next/link';

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
                        <li><Link href="#creations">My Creations</Link></li>
                    </div>
                    {/* <div className="hover:text-stone-500 transition-colors duration-200">
                        <li><Link href="#creations">Music</Link></li>
                    </div>*/}
                </ul>
            </nav>
        </header>
    );
  }
export default Header;