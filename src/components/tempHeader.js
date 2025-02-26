import React from'react';
import Image from 'next/image';

function Header() {
    return (
        <header className="mb-12 flex p-4 justify-left items-center tracking-wide font-['rajdhani']">
            <Image
            className="rounded-full mr-4"
                vertical-align="middle"
                src="/Profile.jpg"
                alt="Srikar Sistla"
                width={70}
                height={70}
                border-radius="50%"
                priority
            />
            <h1 className="text-xl font-bold hover:text-stone-500 transition-colors duration-200">Srikar Sistla</h1>
            <nav>
                <ul className="flex">
                </ul>
            </nav>
        </header>
    );
  }
export default Header;