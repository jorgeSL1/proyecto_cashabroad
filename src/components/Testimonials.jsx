import { motion } from 'framer-motion';
import { useState } from 'react';
import ProfileCard from './ProfileCard';
import ReviewModal from './ReviewModal';

const testimonials = [
  {
    id: 1,
    name: 'María González',
    title: 'Freelancer',
    handle: 'mariagonzalez',
    status: '⭐ Cliente Premium',
    avatarUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Maria',
    behindGlowColor: 'rgba(99, 102, 241, 0.67)',
    reviewTitle: 'La mejor plataforma para freelancers',
    fullReview: 'Llevo 8 meses usando CashAbroad y ha sido un cambio radical en mi forma de trabajar. Como freelancer que recibe pagos internacionales, siempre tuve problemas con las comisiones altísimas de otras plataformas. Con CashAbroad, la conversión de MXN a USDC es instantánea y las tarifas son increíblemente competitivas.',
    monthsUsing: '8',
    transactions: '47',
    totalConverted: '$85K',
    date: '15 de Noviembre, 2024',
    highlights: [
      'Comisiones muy bajas',
      'Conversión instantánea',
      'Soporte excepcional 24/7',
      'Interfaz fácil de usar'
    ]
  },
  {
    id: 2,
    name: 'Carlos Ramírez',
    title: 'Emprendedor',
    handle: 'carlosramirez',
    status: '⭐ Usuario Verificado',
    avatarUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Carlos',
    behindGlowColor: 'rgba(139, 92, 246, 0.67)',
    reviewTitle: 'Perfecta para negocios internacionales',
    fullReview: 'Mi empresa importa productos de Asia y pagamos a proveedores en diferentes divisas. CashAbroad cambió completamente nuestro flujo de trabajo. Las transacciones son rápidas, seguras y con un tipo de cambio justo.',
    monthsUsing: '6',
    transactions: '124',
    totalConverted: '$320K',
    date: '10 de Noviembre, 2024',
    highlights: [
      'Ahorro en comisiones',
      'Transacciones rápidas',
      'Pagos internacionales',
      'Seguridad empresarial'
    ]
  },
  {
    id: 3,
    name: 'Ana López',
    title: 'Comerciante',
    handle: 'analopez',
    status: '⭐ Miembro Activo',
    avatarUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ana',
    behindGlowColor: 'rgba(236, 72, 153, 0.67)',
    reviewTitle: 'Confiable y súper profesional',
    fullReview: 'Soy dueña de una tienda online y recibo pagos de clientes en Estados Unidos y Europa. Lo que más me impresiona es la velocidad - literalmente en segundos tengo mi dinero convertido y disponible.',
    monthsUsing: '10',
    transactions: '89',
    totalConverted: '$150K',
    date: '5 de Noviembre, 2024',
    highlights: [
      'Velocidad impresionante',
      'App móvil completa',
      'Reportes claros',
      'Plataforma estable'
    ]
  }
];

export default function Testimonials() {
  const [selectedReview, setSelectedReview] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = (testimonial) => {
    setSelectedReview(testimonial);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedReview(null), 300);
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-white dark:bg-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
            Nuestros <span className="text-primary">usuarios</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto px-4">
            Miles de personas confían en CashAbroad para sus transacciones
          </p>
          <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-3 sm:mt-4">
            👆 Toca en ver reseña para leer más
          </p>
        </motion.div>

        {/* Grid de ProfileCards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="cursor-pointer flex justify-center"
            >
              <ProfileCard
                name={testimonial.name}
                title={testimonial.title}
                handle={testimonial.handle}
                status={testimonial.status}
                avatarUrl={testimonial.avatarUrl}
                contactText="Ver Reseña"
                showUserInfo={true}
                enableTilt={true}
                enableMobileTilt={false}
                behindGlowEnabled={true}
                behindGlowColor={testimonial.behindGlowColor}
                onContactClick={() => handleCardClick(testimonial)}
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal de Reseña */}
      <ReviewModal
        isOpen={isModalOpen}
        onClose={closeModal}
        review={selectedReview}
      />
    </section>
  );
}