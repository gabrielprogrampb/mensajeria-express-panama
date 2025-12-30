
import React from 'react';
import { CONTACT_EMAIL, CONTACT_PHONE_DISPLAY } from '../constants';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6 text-center">
        <div className="mb-4">
          <p className="font-bold text-lg">Mensajería Express Panamá</p>
          <div className="flex justify-center items-center space-x-6 mt-2 text-gray-400">
            <a href={`tel:${CONTACT_PHONE_DISPLAY.replace(/\s|-/g, '')}`} className="hover:text-white transition-colors">{CONTACT_PHONE_DISPLAY}</a>
            <span>|</span>
            <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-white transition-colors">{CONTACT_EMAIL}</a>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-4 mt-4">
          <p className="text-sm text-gray-500">
            &copy; {currentYear} Mensajería Express Panamá. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
