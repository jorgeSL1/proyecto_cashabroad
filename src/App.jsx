import { useState } from 'react';
import DarkModeToggle from './components/DarkModeToggle';
import Loader from './components/Loader';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Demo from './components/Demo';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  const [showLoader, setShowLoader] = useState(true);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      {/* Loader/Intro */}
      {showLoader && (
        <Loader onLoadComplete={() => setShowLoader(false)} />
      )}

      {/* Contenido principal */}
      {!showLoader && (
        <>
          <DarkModeToggle />
          <Hero />
          <Benefits />
          <Demo />
          <Testimonials />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;