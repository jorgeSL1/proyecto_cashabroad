import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Loader({ onLoadComplete }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simula carga de recursos
    const timer = setTimeout(() => {
      setIsLoading(false);
      setTimeout(() => {
        onLoadComplete?.();
      }, 800); // Espera a que termine la animación de salida
    }, 2500); // Duración del loader

    return () => clearTimeout(timer);
  }, [onLoadComplete]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black"
        >
          {/* Slide panels - se deslizan hacia arriba */}
          <motion.div
            initial={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"
          />

          {/* Contenedor del logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.2 }}
            transition={{ 
              duration: 0.6,
              exit: { duration: 0.4 }
            }}
            className="relative z-10 flex flex-col items-center gap-8"
          >
            {/* Logo */}
            <motion.div
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-center"
            >
              <h1 className="text-6xl md:text-8xl font-bold text-white mb-2">
                Cash<span className="text-primary">Abroad</span>
              </h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="text-gray-400 text-lg"
              >
                Conversiones seguras MXN a USDC
              </motion.p>
            </motion.div>

            {/* Barra de progreso animada */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="w-64 h-1 bg-gray-800 rounded-full overflow-hidden"
            >
              <motion.div
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ 
                  duration: 2,
                  ease: "easeInOut"
                }}
                className="h-full bg-gradient-to-r from-primary via-purple-500 to-pink-500 rounded-full"
              />
            </motion.div>

            {/* Puntos animados */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="flex gap-2"
            >
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0 }}
                  animate={{ scale: [0, 1.2, 1] }}
                  transition={{
                    delay: 1.2 + i * 0.15,
                    duration: 0.4,
                    repeat: Infinity,
                    repeatDelay: 1
                  }}
                  className="w-2 h-2 bg-primary rounded-full"
                />
              ))}
            </motion.div>
          </motion.div>

          {/* Efectos de brillo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.5, 0] }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute inset-0 bg-gradient-to-t from-transparent via-primary/5 to-transparent pointer-events-none"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}