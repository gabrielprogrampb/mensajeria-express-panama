import React, { useState } from 'react';
import { MotorcycleIcon } from './icons';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsOpen(false); // Cierra el menú móvil después de hacer clic
  };

  const navLinks = [
    { href: '#servicios', text: 'Servicios' },
    { href: '#nosotros', text: 'Nosotros' },
    { href: '#contacto', text: 'Contacto' },
  ];

  return (
    <header className="bg-white/80 backdrop-blur-md shadow-md sticky top-0 z-40">
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <a href="#hero" onClick={(e) => handleNavClick(e, '#hero')} className="flex items-center space-x-2 text-xl font-bold text-gray-800">
            <MotorcycleIcon className="w-8 h-8 text-cyan-600" />
            <span>Mensajería Express</span>
          </a>
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-gray-600 hover:text-cyan-600 transition-colors duration-300 font-medium"
              >
                {link.text}
              </a>
            ))}
          </nav>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
              </svg>
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden mt-4">
            <nav className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-gray-600 hover:text-cyan-600 transition-colors duration-300 py-2 text-center bg-gray-100 rounded-md"
                  onClick={(e) => handleNavClick(e, link.href)}
                >
                  {link.text}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;