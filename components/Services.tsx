
import React from 'react';
import { DocumentIcon, PackageIcon, ErrandIcon } from './icons';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => (
  <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center">
    <div className="bg-cyan-100 text-cyan-600 p-4 rounded-full mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Services: React.FC = () => {
  const servicesData = [
    {
      icon: <DocumentIcon className="w-8 h-8" />,
      title: "Entrega de Documentos",
      description: "Recogemos y entregamos tus documentos importantes con máxima prioridad y confidencialidad."
    },
    {
      icon: <PackageIcon className="w-8 h-8" />,
      title: "Paquetería Pequeña",
      description: "Soluciones ágiles para el envío de paquetes pequeños y medianos en toda la ciudad."
    },
    {
      icon: <ErrandIcon className="w-8 h-8" />,
      title: "Gestiones Rápidas",
      description: "Realizamos tus trámites y gestiones urgentes para que ahorres tiempo y te enfoques en lo tuyo."
    }
  ];

  return (
    <section id="servicios" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">¿Qué Hacemos?</h2>
          <p className="text-lg text-gray-600 mt-2">Nuestros servicios están diseñados para tu comodidad y eficiencia.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
