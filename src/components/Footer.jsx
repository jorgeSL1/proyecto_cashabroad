import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import ColorBends from './ColorBends';

const footerLinks = {
  product: [
    { name: 'Características', href: '#' },
    { name: 'Precios', href: '#' },
    { name: 'API', href: '#' },
    { name: 'Seguridad', href: '#' }
  ],
  company: [
    { name: 'Sobre Nosotros', href: '#' },
    { name: 'Carreras', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Prensa', href: '#' }
  ],
  legal: [
    { name: 'Términos', href: '#' },
    { name: 'Privacidad', href: '#' },
    { name: 'Cookies', href: '#' },
    { name: 'Licencias', href: '#' }
  ],
  support: [
    { name: 'Centro de Ayuda', href: '#' },
    { name: 'Contacto', href: '#' },
    { name: 'FAQ', href: '#' },
    { name: 'Status', href: '#' }
  ]
};

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' }
];

export default function Footer() {
  return (
    <footer className="relative bg-gray-900 text-gray-300 overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0 opacity-20">
        <ColorBends
          colors={["#1F2937", "#4B5563", "#6366F1"]}
          rotation={180}
          speed={0.15}
          scale={1.5}
          frequency={1.0}
          warpStrength={0.8}
          mouseInfluence={0.4}
          parallax={0.3}
          noise={0.03}
          transparent
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/95 to-gray-900/90 pointer-events-none" />

      {/* Newsletter Section */}
      <div className="relative border-b border-gray-800">
        <div 
          className="
            max-w-7xl mx-auto 
            px-4 py-10
            sm:px-6 sm:py-12
            lg:px-8 lg:py-16
          "
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="
              max-w-2xl mx-auto 
              text-center
              px-2
              sm:px-0
            "
          >
            {/* Newsletter Title */}
            <h3 
              className="
                text-2xl font-bold text-white 
                mb-3
                sm:text-3xl
                sm:mb-4
              "
            >
              Mantente actualizado
            </h3>

            {/* Newsletter Description */}
            <p 
              className="
                text-sm text-gray-400 
                mb-6
                sm:text-base
                sm:mb-8
                leading-relaxed
              "
            >
              Recibe las últimas noticias y actualizaciones directamente en tu correo
            </p>

            {/* Newsletter Form */}
            <div 
              className="
                flex flex-col 
                gap-3
                max-w-sm mx-auto
                sm:flex-row
                sm:gap-4
                sm:max-w-md
              "
            >
              <input
                type="email"
                placeholder="tu@email.com"
                className="
                  w-full
                  px-5 py-3
                  sm:px-6
                  sm:flex-1
                  rounded-full 
                  bg-gray-800/80 
                  backdrop-blur-sm 
                  border border-gray-700 
                  focus:border-primary 
                  focus:outline-none 
                  focus:ring-2
                  focus:ring-primary/20
                  text-white 
                  text-sm
                  sm:text-base
                  placeholder-gray-500
                  transition-all
                "
              />

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="
                  w-full
                  px-6 py-3
                  sm:w-auto
                  sm:px-8
                  bg-primary 
                  text-white 
                  rounded-full 
                  font-semibold 
                  text-sm
                  sm:text-base
                  hover:bg-primary/90 
                  active:bg-primary/80
                  transition-colors
                "
              >
                Suscribirse
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div 
        className="
          relative max-w-7xl mx-auto 
          px-4 py-10
          sm:px-6 sm:py-12
          lg:px-8 lg:py-16
        "
      >
        {/* Links Grid */}
        <div 
          className="
            grid 
            grid-cols-2 
            gap-8
            mb-10
            sm:gap-6
            md:grid-cols-3
            lg:grid-cols-6
            lg:gap-8
            lg:mb-12
          "
        >
          {/* Brand Column - Full width on mobile */}
          <div 
            className="
              col-span-2
              mb-4
              md:col-span-3
              lg:col-span-2
              lg:mb-0
            "
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Logo */}
              <h2 
                className="
                  text-xl font-bold text-white 
                  mb-3
                  sm:text-2xl
                  sm:mb-4
                "
              >
                Cash<span className="text-primary">Abroad</span>
              </h2>

              {/* Tagline */}
              <p 
                className="
                  text-sm text-gray-400 
                  mb-5
                  max-w-xs
                  sm:text-base
                  sm:mb-6
                  leading-relaxed
                "
              >
                La forma más moderna y segura de convertir tus pesos mexicanos a USDC.
              </p>

              {/* Contact Info */}
              <div 
                className="
                  space-y-2
                  text-xs
                  sm:space-y-3
                  sm:text-sm
                "
              >
                <a 
                  href="mailto:support@cashabroad.one"
                  className="
                    flex items-center gap-2
                    hover:text-primary
                    transition-colors
                  "
                >
                  <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>support@cashabroad.one</span>
                </a>
                <a 
                  href="tel:+525512345678"
                  className="
                    flex items-center gap-2
                    hover:text-primary
                    transition-colors
                  "
                >
                  <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>+52 (55) 1234-5678</span>
                </a>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Ciudad de México, México</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Product Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 
              className="
                text-white font-semibold 
                mb-3
                text-sm
                sm:text-base
                sm:mb-4
              "
            >
              Producto
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="
                      text-xs
                      sm:text-sm
                      hover:text-primary 
                      transition-colors
                      block
                      py-0.5
                    "
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 
              className="
                text-white font-semibold 
                mb-3
                text-sm
                sm:text-base
                sm:mb-4
              "
            >
              Compañía
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="
                      text-xs
                      sm:text-sm
                      hover:text-primary 
                      transition-colors
                      block
                      py-0.5
                    "
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Support Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 
              className="
                text-white font-semibold 
                mb-3
                text-sm
                sm:text-base
                sm:mb-4
              "
            >
              Soporte
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="
                      text-xs
                      sm:text-sm
                      hover:text-primary 
                      transition-colors
                      block
                      py-0.5
                    "
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Legal Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h4 
              className="
                text-white font-semibold 
                mb-3
                text-sm
                sm:text-base
                sm:mb-4
              "
            >
              Legal
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="
                      text-xs
                      sm:text-sm
                      hover:text-primary 
                      transition-colors
                      block
                      py-0.5
                    "
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="
            border-t border-gray-800 
            pt-6
            sm:pt-8
            flex 
            flex-col 
            items-center 
            gap-4
            sm:flex-row
            sm:justify-between
          "
        >
          {/* Copyright */}
          <p 
            className="
              text-xs text-gray-500
              text-center
              sm:text-sm
              sm:text-left
              order-2
              sm:order-1
            "
          >
            © {new Date().getFullYear()} CashAbroad. Todos los derechos reservados.
          </p>

          {/* Social Links */}
          <div 
            className="
              flex gap-3
              sm:gap-4
              order-1
              sm:order-2
            "
          >
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="
                  p-2
                  sm:p-2.5
                  bg-gray-800 
                  rounded-full 
                  hover:bg-primary 
                  active:bg-primary/80
                  transition-colors
                "
                aria-label={social.label}
              >
                <social.icon className="w-4 h-4 sm:w-5 sm:h-5" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}