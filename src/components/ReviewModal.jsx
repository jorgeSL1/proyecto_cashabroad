import { motion, AnimatePresence } from 'framer-motion';
import { X, Star, Quote } from 'lucide-react';
import { useEffect } from 'react';

export default function ReviewModal({ isOpen, onClose, review }) {
  
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };
    
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!review) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-gray-200 dark:border-gray-700"
              onClick={(e) => e.stopPropagation()}
            >
              {}
              <div className="sticky top-0 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 p-6 flex items-center justify-between z-10">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary">
                    <img
                      src={review.avatarUrl}
                      alt={review.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {review.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">{review.title}</p>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
                  aria-label="Cerrar"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {}
              <div className="p-6 space-y-6">
                {}
                <div className="flex items-center gap-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="ml-2 text-gray-600 dark:text-gray-400 font-semibold">
                    5.0 / 5.0
                  </span>
                </div>

                {}
                <div className="flex justify-center">
                  <div className="p-4 bg-primary/10 rounded-full">
                    <Quote className="w-8 h-8 text-primary" />
                  </div>
                </div>

                {}
                <h4 className="text-2xl font-bold text-center text-gray-900 dark:text-white">
                  {review.reviewTitle}
                </h4>

                {}
                <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-6">
                  <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                    {review.fullReview}
                  </p>
                </div>

                {}
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-primary/5 rounded-xl p-4 text-center">
                    <p className="text-3xl font-bold text-primary mb-1">{review.monthsUsing}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Meses usando</p>
                  </div>
                  <div className="bg-primary/5 rounded-xl p-4 text-center">
                    <p className="text-3xl font-bold text-primary mb-1">{review.transactions}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Transacciones</p>
                  </div>
                  <div className="bg-primary/5 rounded-xl p-4 text-center">
                    <p className="text-3xl font-bold text-primary mb-1">{review.totalConverted}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Convertido</p>
                  </div>
                </div>

                {}
                <div className="space-y-3">
                  <h5 className="font-semibold text-lg text-gray-900 dark:text-white">
                    Lo que más valora:
                  </h5>
                  <ul className="space-y-2">
                    {review.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="text-primary text-xl">✓</span>
                        <span className="text-gray-700 dark:text-gray-300">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {}
                <div className="text-center pt-4 border-t border-gray-200 dark:border-gray-700">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Reseña verificada • {review.date}
                  </p>
                </div>
              </div>

              {}
              <div className="sticky bottom-0 bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 p-6">
                <button
                  onClick={onClose}
                  className="w-full py-3 bg-primary text-white rounded-xl font-semibold hover:bg-primary/90 transition-colors"
                >
                  Cerrar
                </button>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}