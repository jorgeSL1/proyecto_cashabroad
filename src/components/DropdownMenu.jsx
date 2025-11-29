import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, User, Settings, HelpCircle, LogOut } from "lucide-react";

export default function DropdownMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="p-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white hover:bg-white/20 transition"
      >
        {open ? <X size={20} /> : <Menu size={20} />}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 mt-3 w-56 bg-black/70 backdrop-blur-xl border border-white/20 rounded-xl shadow-xl overflow-hidden"
          >
            <Link
              to="/cuenta"
              className="flex items-center gap-3 px-4 py-3 text-white hover:bg-white/10 transition"
              onClick={() => setOpen(false)}
            >
              <User size={18} />
              Mi Cuenta
            </Link>

            <Link
              to="/configuracion"
              className="flex items-center gap-3 px-4 py-3 text-white hover:bg-white/10 transition"
              onClick={() => setOpen(false)}
            >
              <Settings size={18} />
              Configuración
            </Link>

            <Link
              to="/ayuda"
              className="flex items-center gap-3 px-4 py-3 text-white hover:bg-white/10 transition"
              onClick={() => setOpen(false)}
            >
              <HelpCircle size={18} />
              Ayuda
            </Link>

            <Link
              to="/logout"
              className="flex items-center gap-3 px-4 py-3 text-red-300 hover:bg-red-900/40 transition"
              onClick={() => setOpen(false)}
            >
              <LogOut size={18} />
              Cerrar Sesión
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
