import React from 'react';
import Logo from './Logo.jsx';
import Navigation from './Navigation';
import ContactButton from './ContactButton';

function Header() {
  return (
    <header className="w-full px-4 py-6 flex flex-wrap justify-between items-center gap-6 lg:gap-10 text-zinc-900 bg-white">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        <Logo />
        <Navigation />
        <ContactButton />
      </div>
    </header>
  );
}

export default Header;
