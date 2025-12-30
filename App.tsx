
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsAppButton from './components/FloatingWhatsAppButton';

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsAppButton />
    </div>
  );
};

export default App;
