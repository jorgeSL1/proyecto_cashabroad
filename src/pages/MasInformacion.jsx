import { motion } from 'framer-motion';
import { ArrowLeft, Shield, Zap, Globe, TrendingUp, Clock, CreditCard, Phone, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import ColorBends from '../components/ColorBends';
import DarkModeToggle from '../components/DarkModeToggle';

const features = [
  {
    icon: Shield,
    title: 'Seguridad de Nivel Bancario',
    description: 'Encriptación end-to-end y autenticación de dos factores para proteger tu dinero en todo momento.',
    details: [
      'Certificación SSL de 256 bits',
      'Autenticación multifactor (MFA)',
      'Monitoreo 24/7 contra fraudes',
      'Cumplimiento con regulaciones internacionales'
    ]
  },
  {
    icon: Zap,
    title: 'Transacciones Instantáneas',
    description: 'Convierte y transfiere dinero en segundos, sin demoras ni complicaciones.',
    details: [
      'Conversión en tiempo real',
      'Sin tiempos de espera',
      'Confirmación inmediata',
      'Disponibilidad instantánea de fondos'
    ]
  },
  {
    icon: TrendingUp,
    title: 'Mejores Tasas del Mercado',
    description: 'Tipos de cambio competitivos y transparentes, sin comisiones ocultas.',
    details: [
      'Tarifas hasta 80% más bajas',
      'Sin costos ocultos',
      'Tipo de cambio en tiempo real',
      'Transparencia total en cada operación'
    ]
  },
  {
    icon: Globe,
    title: 'Alcance Internacional',
    description: 'Opera en más de 50 países con soporte para múltiples monedas.',
    details: [
      'Más de 50 países soportados',
      'Múltiples monedas disponibles',
      'Transferencias internacionales',
      'Sin restricciones geográficas'
    ]
  },
  {
    icon: Clock,
    title: 'Disponible 24/7',
    description: 'Accede a tus fondos en cualquier momento, desde cualquier lugar.',
    details: [
      'Operación sin interrupciones',
      'Soporte en todo momento',
      'App móvil y web',
      'Sin horarios de atención'
    ]
  },
  {
    icon: CreditCard,
    title: 'Tarjetas Virtuales',
    description: 'Crea tarjetas virtuales ilimitadas para compras seguras en línea.',
    details: [
      'Generación instantánea',
      'Control total de límites',
      'Tarjetas desechables',
      'Compatible con Apple Pay y Google Pay'
    ]
  }
];

const stats = [
  { value: '$500M+', label: 'Volumen Procesado' },
  { value: '50K+', label: 'Usuarios Activos' },
  { value: '150+', label: 'Países' },
  { value: '99.9%', label: 'Uptime' }
];

export default function MasInformacion() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <DarkModeToggle />
      
      {/* ColorBends Background */}
      <div className="absolute inset-0 opacity-60 dark:opacity-70">
        <ColorBends
          colors={["#6366F1", "#8B5CF6", "#EC4899"]}
          rotation={90}
          speed={0.25}
          scale={1.3}
          frequency={1.4}
          warpStrength={1.2}
          mouseInfluence={0.7}
          parallax={0.5}
          noise={0.05}
          transparent
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/50 to-white/60 dark:from-gray-900/40 dark:via-gray-900/50 dark:to-gray-900/60 pointer-events-none" />

      {/* Contenido */}
      <div className="relative z-10">
        
        {/* Hero Section */}
        <div 
          className="
            px-4 py-12
            sm:px-6 sm:py-16
            lg:px-8 lg:py-20
          "
        >
          <div className="max-w-7xl mx-auto">
            
            {/* Botón Volver */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="
                mb-8
                sm:mb-10
                lg:mb-12
              "
            >
              <Link 
                to="/"
                className="
                  inline-flex items-center 
                  gap-1.5
                  text-sm
                  text-gray-700 dark:text-gray-300 
                  hover:text-primary 
                  active:text-primary/80
                  transition-colors
                  py-2
                  sm:gap-2
                  sm:text-base
                "
              >
                <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Volver al inicio</span>
              </Link>
            </motion.div>

            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="
                text-center 
                mb-10
                px-2
                sm:mb-12
                lg:mb-16
              "
            >
              <h1 
                className="
                  text-3xl font-bold 
                  mb-4
                  leading-tight
                  sm:text-4xl
                  md:text-5xl
                  lg:text-6xl
                  xl:text-7xl
                  sm:mb-6
                "
              >
                La plataforma más <span className="text-primary">completa</span> para tus finanzas
              </h1>
              <p 
                className="
                  text-sm text-gray-600 dark:text-gray-300 
                  max-w-xs mx-auto
                  leading-relaxed
                  sm:text-base
                  sm:max-w-xl
                  lg:text-xl
                  lg:max-w-3xl
                "
              >
                Descubre todo lo que CashAbroad puede hacer por ti. Una solución integral para convertir, enviar y gestionar tu dinero de forma segura.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="
                grid 
                grid-cols-2 
                gap-3
                mb-12
                sm:gap-4
                md:grid-cols-4
                md:gap-6
                sm:mb-16
                lg:mb-20
              "
            >
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="
                    bg-white dark:bg-gray-800 
                    backdrop-blur-xl 
                    rounded-xl
                    p-4
                    text-center 
                    border border-gray-200/80 dark:border-gray-700/80 
                    shadow-md
                    sm:rounded-2xl
                    sm:p-5
                    lg:p-6
                    lg:shadow-lg
                  "
                >
                  <p 
                    className="
                      text-2xl font-bold text-primary 
                      mb-1
                      sm:text-3xl
                      lg:text-4xl
                      sm:mb-2
                    "
                  >
                    {stat.value}
                  </p>
                  <p 
                    className="
                      text-xs text-gray-600 dark:text-gray-400
                      sm:text-sm
                    "
                  >
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Features Section */}
        <div 
          className="
            px-4 py-12
            sm:px-6 sm:py-16
            lg:px-8 lg:py-20
          "
        >
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="
                text-center 
                mb-10
                px-2
                sm:mb-12
                lg:mb-16
              "
            >
              <h2 
                className="
                  text-2xl font-bold 
                  mb-3
                  sm:text-3xl
                  md:text-4xl
                  lg:text-5xl
                  sm:mb-4
                "
              >
                ¿Qué hace a CashAbroad <span className="text-primary">diferente</span>?
              </h2>
              <p 
                className="
                  text-sm text-gray-600 dark:text-gray-300 
                  max-w-xs mx-auto
                  sm:text-base
                  sm:max-w-lg
                  lg:text-xl
                  lg:max-w-2xl
                "
              >
                Tecnología de punta combinada con un enfoque centrado en el usuario
              </p>
            </motion.div>

            {/* Features Grid */}
            <div 
              className="
                grid 
                grid-cols-1 
                gap-4
                sm:grid-cols-2
                sm:gap-6
                lg:grid-cols-3
                lg:gap-8
              "
            >
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                    className="
                      bg-white dark:bg-gray-800 
                      backdrop-blur-xl 
                      rounded-xl
                      p-5
                      border border-gray-200/80 dark:border-gray-700/80 
                      shadow-md
                      hover:shadow-lg 
                      transition-shadow
                      sm:rounded-2xl
                      sm:p-6
                      lg:p-8
                    "
                  >
                    {/* Icon */}
                    <div 
                      className="
                        bg-primary/10 
                        w-11 h-11
                        rounded-lg
                        flex items-center justify-center 
                        mb-4
                        sm:w-12 sm:h-12
                        lg:w-14 lg:h-14
                        sm:rounded-xl
                        sm:mb-5
                        lg:mb-6
                      "
                    >
                      <Icon className="w-5 h-5 text-primary sm:w-6 sm:h-6 lg:w-7 lg:h-7" />
                    </div>

                    {/* Title */}
                    <h3 
                      className="
                        text-lg font-bold 
                        mb-2
                        sm:text-xl
                        lg:text-2xl
                        sm:mb-3
                      "
                    >
                      {feature.title}
                    </h3>

                    {/* Description */}
                    <p 
                      className="
                        text-sm text-gray-600 dark:text-gray-300 
                        mb-4
                        leading-relaxed
                        sm:text-base
                        sm:mb-5
                        lg:mb-6
                      "
                    >
                      {feature.description}
                    </p>

                    {/* Details List */}
                    <ul className="space-y-1.5 sm:space-y-2">
                      {feature.details.map((detail, i) => (
                        <li 
                          key={i} 
                          className="
                            flex items-start 
                            gap-2 
                            text-xs text-gray-600 dark:text-gray-400
                            sm:text-sm
                          "
                        >
                          <span className="text-primary mt-0.5 flex-shrink-0">✓</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div 
          className="
            px-4 py-12
            sm:px-6 sm:py-16
            lg:px-8 lg:py-20
          "
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="
              max-w-4xl mx-auto 
              bg-gradient-to-br from-primary to-purple-600 
              rounded-2xl
              p-6
              text-center 
              text-white 
              shadow-xl
              sm:rounded-3xl
              sm:p-8
              lg:p-12
              lg:shadow-2xl
            "
          >
            {/* Icon */}
            <Award 
              className="
                w-10 h-10 
                mx-auto 
                mb-4
                sm:w-12 sm:h-12
                lg:w-16 lg:h-16
                sm:mb-5
                lg:mb-6
              " 
            />

            {/* Title */}
            <h2 
              className="
                text-2xl font-bold 
                mb-3
                sm:text-3xl
                lg:text-4xl
                sm:mb-4
              "
            >
              ¿Listo para empezar?
            </h2>

            {/* Description */}
            <p 
              className="
                text-sm 
                mb-6
                opacity-90
                max-w-xs mx-auto
                sm:text-base
                sm:max-w-md
                lg:text-xl
                lg:max-w-none
                sm:mb-8
              "
            >
              Únete a miles de usuarios que ya están transformando su forma de manejar dinero
            </p>

            {/* CTA Buttons */}
            <div 
              className="
                flex flex-col 
                gap-3
                sm:flex-row
                sm:gap-4
                sm:justify-center
              "
            >
              <Link to="/crear-cuenta" className="w-full sm:w-auto">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="
                    w-full
                    px-6 py-3
                    bg-white 
                    text-primary 
                    rounded-full 
                    font-semibold 
                    text-sm
                    hover:bg-gray-100 
                    active:bg-gray-200
                    transition-colors 
                    shadow-lg
                    sm:w-auto
                    sm:px-8 sm:py-4
                    sm:text-base
                  "
                >
                  Crear Cuenta Gratis
                </motion.button>
              </Link>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="
                  w-full
                  px-6 py-3
                  bg-transparent 
                  border-2 border-white 
                  text-white 
                  rounded-full 
                  font-semibold 
                  text-sm
                  hover:bg-white/10 
                  active:bg-white/20
                  transition-colors 
                  flex items-center justify-center 
                  gap-2
                  sm:w-auto
                  sm:px-8 sm:py-4
                  sm:text-base
                "
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                Contactanos 
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}