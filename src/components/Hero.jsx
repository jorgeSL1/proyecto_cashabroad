import { motion } from 'framer-motion';
import { ArrowRight, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import DarkVeil from './DarkVeil';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden bg-gradient-to-br from-gray-900 via-indigo-950 to-gray-900">
      <div className="absolute inset-0 opacity-70">
        <DarkVeil
          hueShift={240}
          noiseIntensity={0.03}
          scanlineIntensity={0}
          speed={0.6}
          scanlineFrequency={0}
          warpAmount={0.4}
          resolutionScale={1}
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-purple-900/20 to-pink-900/20 pointer-events-none mix-blend-overlay" />
      
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/40 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 backdrop-blur-md rounded-full border border-primary/40 shadow-xl">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Rápido • Seguro • Internacional</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight text-white drop-shadow-2xl">
            Conversiones de{' '}
            <span className="text-primary drop-shadow-[0_0_30px_rgba(99,102,241,0.5)]">MXN a USDC</span>
          </h1>

          <p className="text-xl text-gray-200 drop-shadow-lg">
            Convierte tus pesos mexicanos a USDC de manera instantánea, segura y sin complicaciones. La forma más moderna de manejar tu dinero.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link to="/crear-cuenta">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-primary text-white rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors shadow-2xl shadow-primary/50"
              >
                Crear Cuenta
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>

            <Link to="/mas-informacion">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white/20 backdrop-blur-lg border-2 border-white/30 text-white rounded-full font-semibold hover:border-primary hover:bg-primary/20 transition-all shadow-xl"
              >
                Más Información
              </motion.button>
            </Link>
          </div>

          <div className="grid grid-cols-3 gap-6 pt-8">
            <div className="bg-gradient-to-br from-primary/20 to-purple-900/20 backdrop-blur-xl rounded-xl p-4 border border-primary/30 shadow-xl">
              <p className="text-3xl font-bold text-primary drop-shadow-[0_0_20px_rgba(99,102,241,0.8)]">$2M+</p>
              <p className="text-sm text-gray-300">Convertido</p>
            </div>
            <div className="bg-gradient-to-br from-primary/20 to-purple-900/20 backdrop-blur-xl rounded-xl p-4 border border-primary/30 shadow-xl">
              <p className="text-3xl font-bold text-primary drop-shadow-[0_0_20px_rgba(99,102,241,0.8)]">10K+</p>
              <p className="text-sm text-gray-300">Usuarios</p>
            </div>
            <div className="bg-gradient-to-br from-primary/20 to-purple-900/20 backdrop-blur-xl rounded-xl p-4 border border-primary/30 shadow-xl">
              <p className="text-3xl font-bold text-primary drop-shadow-[0_0_20px_rgba(99,102,241,0.8)]">24/7</p>
              <p className="text-sm text-gray-300">Soporte</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="relative z-10"
          >
            <div className="bg-gradient-to-br from-primary/10 to-purple-900/10 backdrop-blur-2xl rounded-3xl shadow-2xl p-8 border border-primary/30">
              <div className="space-y-6">
                <div>
                  <label className="text-sm text-gray-300 mb-2 block">De</label>
                  <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
                    <span className="text-2xl">🇲🇽</span>
                    <div className="flex-1">
                      <p className="text-3xl font-bold text-white">$10,000</p>
                      <p className="text-sm text-gray-400">MXN</p>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center">
                  <div className="p-3 bg-primary rounded-full shadow-lg shadow-primary/50">
                    <ArrowRight className="w-6 h-6 text-white rotate-90" />
                  </div>
                </div>

                <div>
                  <label className="text-sm text-gray-300 mb-2 block">A</label>
                  <div className="flex items-center gap-4 p-4 bg-primary/20 rounded-xl border border-primary/40">
                    <span className="text-2xl">💰</span>
                    <div className="flex-1">
                      <p className="text-3xl font-bold text-primary drop-shadow-[0_0_20px_rgba(99,102,241,0.8)]">500</p>
                      <p className="text-sm text-gray-400">USDC</p>
                    </div>
                  </div>
                </div>

                <button className="w-full py-4 bg-primary text-white rounded-xl font-semibold hover:bg-primary/90 transition-colors shadow-lg shadow-primary/30">
                  Convertir Ahora
                </button>
              </div>
            </div>
          </motion.div>

          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -top-10 -right-10 w-32 h-32 bg-primary/40 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-500/40 rounded-full blur-3xl"
          />
        </motion.div>
      </div>
    </section>
  );
}
