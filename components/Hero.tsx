
import React from 'react';
import { WHATSAPP_LINK } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="bg-white text-center py-20 md:py-32">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
          Tu Mensajería Rápida y Confiable en <span className="text-cyan-600">Ciudad de Panamá</span>
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          Entregas seguras para tus documentos y paquetes. ¡Contáctanos ahora y simplifica tu logística!
        </p>
        <div className="mt-8">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-500 text-white font-bold text-lg px-8 py-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 transform hover:-translate-y-1"
          >
            Escribir por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
