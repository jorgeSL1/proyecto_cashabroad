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
        <div className="px-6 py-20">
          <div className="max-w-7xl mx-auto">
            
            {/* Botón Volver */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-12"
            >
              <Link 
                to="/"
                className="inline-flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-primary transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                <span>Volver al inicio</span>
              </Link>
            </motion.div>

            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                La plataforma más <span className="text-primary">completa</span> para tus finanzas
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Descubre todo lo que CashAbroad puede hacer por ti. Una solución integral para convertir, enviar y gestionar tu dinero de forma segura.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
            >
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 backdrop-blur-xl rounded-2xl p-6 text-center border border-gray-200/80 dark:border-gray-700/80 shadow-lg"
                >
                  <p className="text-4xl font-bold text-primary mb-2">{stat.value}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Features Section */}
        <div className="px-6 py-20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                ¿Qué hace a CashAbroad <span className="text-primary">diferente</span>?
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Tecnología de punta combinada con un enfoque centrado en el usuario
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white dark:bg-gray-800 backdrop-blur-xl rounded-2xl p-8 border border-gray-200/80 dark:border-gray-700/80 shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <div className="bg-primary/10 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      {feature.description}
                    </p>
                    <ul className="space-y-2">
                      {feature.details.map((detail, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                          <span className="text-primary mt-0.5">✓</span>
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
        <div className="px-6 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto bg-gradient-to-br from-primary to-purple-600 rounded-3xl p-12 text-center text-white shadow-2xl"
          >
            <Award className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-4">
              ¿Listo para empezar?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Únete a miles de usuarios que ya están transformando su forma de manejar dinero
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/crear-cuenta">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white text-primary rounded-full font-semibold hover:bg-gray-100 transition-colors shadow-lg"
                >
                  Crear Cuenta Gratis
                </motion.button>
              </Link>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-semibold hover:bg-white/10 transition-colors flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Contactar Ventas
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}