'use client';

import { useState } from 'react';
import Navigation from './Navigation';
import BurgerMenu from './BurgerMenu';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="w-full flex justify-between items-center bg-gray-800 text-white p-4 relative z-20">
      <div>
        <a
          className="text-xl font-bold hover:text-blue-100 animate-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent text-5xl font-black"
          href="/"
        >
          CoMM
        </a>
      </div>
      <BurgerMenu isOpen={isOpen} toggleMenu={toggleMenu} />{' '}
      <Navigation isOpen={isOpen} onLinkClick={toggleMenu} />
    </header>
  );
};

export default Header;
