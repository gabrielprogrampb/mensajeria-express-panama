
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="nosotros" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6 text-center max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Sobre Nosotros</h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          Somos un equipo local de mensajeros motorizados apasionados por lo que hacemos. Nacimos en Ciudad de Panamá con la misión de ofrecer un servicio de entregas no solo rápido, sino también seguro y confiable. Para nosotros, cada paquete y cada documento es un compromiso. Entendemos la importancia de tu tiempo y por eso trabajamos con dedicación para ser tu aliado logístico de confianza en la ciudad.
        </p>
      </div>
    </section>
  );
};

export default About;
