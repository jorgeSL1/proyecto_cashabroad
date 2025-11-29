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
    fullReview: 'Llevo 8 meses usando CashAbroad y ha sido un cambio radical en mi forma de trabajar. Como freelancer que recibe pagos internacionales, siempre tuve problemas con las comisiones altísimas de otras plataformas. Con CashAbroad, la conversión de MXN a USDC es instantánea y las tarifas son increíblemente competitivas. Lo que más me gusta es la transparencia - siempre sé exactamente cuánto voy a recibir, sin sorpresas. El equipo de soporte es excelente, responden en minutos y siempre están dispuestos a ayudar. Además, la interfaz es súper intuitiva, incluso mi mamá podría usarla sin problemas. Definitivamente la recomiendo a todos mis colegas freelancers.',
    monthsUsing: '8',
    transactions: '47',
    totalConverted: '$85K',
    date: '15 de Noviembre, 2024',
    highlights: [
      'Comisiones muy bajas comparadas con otras plataformas',
      'Conversión instantánea sin demoras',
      'Soporte al cliente excepcional 24/7',
      'Interfaz súper fácil de usar'
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
    fullReview: 'Mi empresa importa productos de Asia y pagamos a proveedores en diferentes divisas. Antes usábamos bancos tradicionales y perdíamos días esperando transferencias y pagando comisiones absurdas. CashAbroad cambió completamente nuestro flujo de trabajo. Las transacciones son rápidas, seguras y con un tipo de cambio justo. La integración con nuestro sistema contable fue sencilla y ahora todo nuestro equipo la usa. En 6 meses hemos ahorrado más de $15,000 USD solo en comisiones. La plataforma es robusta, nunca ha fallado, y la seguridad es de nivel bancario. Para cualquier negocio que maneje transacciones internacionales, es una herramienta esencial.',
    monthsUsing: '6',
    transactions: '124',
    totalConverted: '$320K',
    date: '10 de Noviembre, 2024',
    highlights: [
      'Ahorro significativo en comisiones bancarias',
      'Transacciones rápidas y confiables',
      'Excelente para pagos a proveedores internacionales',
      'Seguridad de nivel empresarial'
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
    fullReview: 'Soy dueña de una tienda online y recibo pagos de clientes en Estados Unidos y Europa. Encontrar una plataforma confiable fue un desafío hasta que descubrí CashAbroad. Lo que más me impresiona es la velocidad - literalmente en segundos tengo mi dinero convertido y disponible. La app móvil es genial, puedo hacer todo desde mi teléfono mientras estoy en la tienda. Los reportes son muy claros y me facilitan mucho la contabilidad. He recomendado CashAbroad a todos mis contactos en el gremio de comerciantes y todos están igual de satisfechos. Es una plataforma seria, profesional y que cumple lo que promete. ¡No la cambio por nada!',
    monthsUsing: '10',
    transactions: '89',
    totalConverted: '$150K',
    date: '5 de Noviembre, 2024',
    highlights: [
      'Velocidad de conversión impresionante',
      'App móvil muy completa y fácil de usar',
      'Reportes claros para contabilidad',
      'Plataforma muy confiable y estable'
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
    <section className="py-20 px-6 bg-white dark:bg-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Nuestros <span className="text-primary">usuarios</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Miles de personas confían en CashAbroad para sus transacciones
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
            👆 Haz clic en ver reseña para leer la reseña completa
          </p>
        </motion.div>

        {/* Grid de ProfileCards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="cursor-pointer"
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