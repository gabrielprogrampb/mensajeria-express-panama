
import React from 'react';
import { WhatsAppIcon } from './icons';
import { WHATSAPP_LINK } from '../constants';

const FloatingWhatsAppButton: React.FC = () => {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg z-50 transform hover:scale-110 transition-transform duration-300"
      aria-label="Contactar por WhatsApp"
    >
      <WhatsAppIcon className="w-8 h-8" />
    </a>
  );
};

export default FloatingWhatsAppButton;
