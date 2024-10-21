import React from 'react';

function Navigation() {
  const navItems = ['Home', 'About', 'Services', 'Page'];

  return (
    <nav className="hidden md:flex gap-8 text-lg">
      {navItems.map((item, index) => (
        <a 
          key={index} 
          href={`#${item.toLowerCase()}`} 
          className={`hover:text-orange-400 transition duration-300 ${index === 0 ? 'font-semibold' : ''}`}
        >
          {item}
        </a>
      ))}
    </nav>
  );
}

export default Navigation;
