
import React from 'react';
import { CONTACT_EMAIL, CONTACT_PHONE_DISPLAY, WHATSAPP_LINK } from '../constants';

const Contact: React.FC = () => {
  return (
    <section id="contacto" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">¡Estamos listos para ayudarte!</h2>
        <p className="text-lg text-gray-600 mt-4 mb-8 max-w-2xl mx-auto">
          ¿Tienes una entrega urgente o una consulta? No dudes en contactarnos.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8 mb-10">
          <div className="text-lg text-gray-700">
            <strong>Teléfono:</strong> <a href={`tel:${CONTACT_PHONE_DISPLAY.replace(/\s|-/g, '')}`} className="hover:text-cyan-600">{CONTACT_PHONE_DISPLAY}</a>
          </div>
          <div className="text-lg text-gray-700">
            <strong>Email:</strong> <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-cyan-600">{CONTACT_EMAIL}</a>
          </div>
        </div>
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-green-500 text-white font-bold text-lg px-8 py-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 transform hover:-translate-y-1"
        >
          Envíanos un mensaje por WhatsApp
        </a>
      </div>
    </section>
  );
};

export default Contact;
