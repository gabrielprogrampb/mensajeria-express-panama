// =============================================================================
// App.tsx - Componente Principal de Mensajería Express Panamá
// =============================================================================
// Descripción: Landing page para un servicio de mensajería y paquetería en
// Panamá. Presenta los servicios, información de la empresa y contacto.
// 
// Estructura:
// - Navbar: Navegación principal
// - Hero: Sección principal con CTA
// - Services: Servicios ofrecidos
// - About: Información de la empresa
// - Contact: Formulario de contacto
// - Footer: Pie de página
// - FloatingWhatsAppButton: Botón de contacto rápido por WhatsApp
// =============================================================================

import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsAppButton from './components/FloatingWhatsAppButton';

/**
 * Componente principal de la aplicación
 * Landing page de una sola página (Single Page)
 */
const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Barra de navegación superior */}
      <Navbar />

      <main className="flex-grow">
        {/* Sección Hero con mensaje principal y CTA */}
        <Hero />

        {/* Sección de servicios de mensajería */}
        <Services />

        {/* Sección sobre la empresa */}
        <About />

        {/* Formulario de contacto */}
        <Contact />
      </main>

      {/* Pie de página */}
      <Footer />

      {/* Botón flotante de WhatsApp para contacto rápido */}
      <FloatingWhatsAppButton />
    </div>
  );
};

export default App;
