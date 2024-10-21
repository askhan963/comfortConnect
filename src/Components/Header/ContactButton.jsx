import React from 'react';

function ContactButton() {
  return (
    <a 
      href="#contact" 
      className="hidden sm:inline-block px-10 py-3 text-white bg-orange-400 rounded-full text-lg hover:bg-orange-500 transition duration-300"
    >
      Contact Us
    </a>
  );
}

export default ContactButton;
