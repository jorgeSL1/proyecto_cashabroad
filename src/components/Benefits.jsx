import { motion } from 'framer-motion';
import TiltedCard from './TiltedCard';
import { Zap, Shield, Globe, Clock, TrendingUp, Lock } from 'lucide-react';

const benefits = [
  {
    id: 1,
    icon: Zap,
    title: 'Pagos Rápidos',
    description: 'Transacciones instantáneas en segundos. Sin esperas, sin complicaciones.',
    gradient: 'from-yellow-400 to-orange-500',
    tooltip: 'Velocidad instantánea'
  },
  {
    id: 2,
    icon: Shield,
    title: 'Conversión MXN a USDC',
    description: 'Convierte tus pesos mexicanos a USDC con las mejores tasas del mercado.',
    gradient: 'from-blue-400 to-cyan-500',
    tooltip: 'Mejores tasas del mercado'
  },
  {
    id: 3,
    icon: Globe,
    title: 'Internacional',
    description: 'Envía y recibe dinero en cualquier parte del mundo, sin fronteras.',
    gradient: 'from-green-400 to-emerald-500',
    tooltip: 'Sin fronteras'
  },
  {
    id: 4,
    icon: Lock,
    title: 'Seguridad Total',
    description: 'Encriptación de nivel bancario. Tu dinero siempre protegido.',
    gradient: 'from-purple-400 to-pink-500',
    tooltip: 'Máxima seguridad'
  },
  {
    id: 5,
    icon: TrendingUp,
    title: 'Mejores Tasas',
    description: 'Tipo de cambio competitivo y transparente. Sin comisiones ocultas.',
    gradient: 'from-indigo-400 to-purple-500',
    tooltip: 'Transparencia total'
  },
  {
    id: 6,
    icon: Clock,
    title: '24/7 Disponible',
    description: 'Accede a tu dinero cuando quieras, desde donde quieras.',
    gradient: 'from-pink-400 to-rose-500',
    tooltip: 'Siempre disponible'
  }
];

export default function Benefits() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
            ¿Por qué elegir <span className="text-primary">CashAbroad</span>?
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto px-4">
            La plataforma más moderna y segura para tus conversiones de divisas
          </p>
          <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-3 sm:mt-4 hidden sm:block">
            Mueve el mouse sobre las tarjetas para explorar cada beneficio
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={benefit.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Versión móvil - Card simple */}
                <div className="block sm:hidden">
                  <div className={`bg-gradient-to-br ${benefit.gradient} rounded-2xl p-6 text-white h-full`}>
                    <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl mb-4 w-fit">
                      <Icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                    <p className="text-sm opacity-95">{benefit.description}</p>
                  </div>
                </div>

                {/* Versión desktop - TiltedCard */}
                <div className="hidden sm:block">
                  <TiltedCard
                    imageSrc={`data:image/svg+xml,%3Csvg width='400' height='350' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='grad${benefit.id}' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23${benefit.gradient.includes('yellow') ? 'FBBF24' : benefit.gradient.includes('blue') ? '60A5FA' : benefit.gradient.includes('green') ? '34D399' : benefit.gradient.includes('purple') ? 'A78BFA' : benefit.gradient.includes('indigo') ? '818CF8' : 'F472B6'};stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23${benefit.gradient.includes('orange') ? 'F97316' : benefit.gradient.includes('cyan') ? '06B6D4' : benefit.gradient.includes('emerald') ? '059669' : benefit.gradient.includes('pink') ? 'EC4899' : benefit.gradient.includes('purple') ? 'A855F7' : 'F43F5E'};stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='400' height='350' fill='url(%23grad${benefit.id})' rx='15'/%3E%3C/svg%3E`}
                    altText={benefit.title}
                    captionText={benefit.tooltip}
                    containerHeight="350px"
                    containerWidth="100%"
                    imageHeight="350px"
                    imageWidth="100%"
                    rotateAmplitude={10}
                    scaleOnHover={1.05}
                    showMobileWarning={false}
                    showTooltip={true}
                    displayOverlayContent={true}
                    overlayContent={
                      <div className="w-full h-full flex flex-col items-center justify-center p-6 lg:p-8 text-white">
                        <motion.div 
                          className="bg-white/20 backdrop-blur-sm p-4 lg:p-6 rounded-2xl mb-4 lg:mb-6"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <Icon className="w-12 h-12 lg:w-16 lg:h-16" />
                        </motion.div>
                        <h3 className="text-xl lg:text-2xl font-bold mb-2 lg:mb-3 text-center">{benefit.title}</h3>
                        <p className="text-xs lg:text-sm text-center opacity-95 leading-relaxed">
                          {benefit.description}
                        </p>
                      </div>
                    }
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-10 sm:mt-16"
        >
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-4 sm:mb-6">
            Únete a miles de usuarios que ya confían en nosotros
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-primary text-white rounded-full font-semibold hover:bg-primary/90 transition-colors shadow-lg shadow-primary/30 text-sm sm:text-base"
          >
            Comenzar Ahora
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}