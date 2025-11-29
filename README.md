# 🚀 CashAbroad - Landing Page

Landing page moderna para CashAbroad, plataforma de conversión de MXN a USDC con efectos visuales avanzados.

---

## 📋 Requisitos Previos

Asegúrate de tener instalado:

- **Node.js** >= 18.0.0 → [Descargar aquí](https://nodejs.org/)
- **npm** >= 9.0.0 (incluido con Node.js)

**Verificar instalación:**
```bash
node --version
npm --version
```

---

## 🚀 Instalación Rápida

### 1. Clonar o descargar el proyecto
```bash
# Si tienes Git
git clone https://github.com/tu-usuario/proyecto_cashabroad.git
cd proyecto_cashabroad

# O descarga el ZIP y extrae la carpeta
```

### 2. Instalar todas las dependencias
```bash
npm install
```

**Dependencias que se instalarán automáticamente:**

#### Dependencias principales:
```bash
react                    # ^18.3.1
react-dom                # ^18.3.1
react-router-dom         # ^6.x
framer-motion            # Animaciones
lucide-react             # Iconos
three                    # WebGL para efectos 3D
ogl                      # Librería WebGL ligera
```

#### Dependencias de desarrollo:
```bash
@vitejs/plugin-react     # Plugin de Vite para React
vite                     # Build tool
tailwindcss              # Framework CSS
postcss                  # Procesador CSS
autoprefixer             # Prefijos CSS automáticos
```

### 3. Ejecutar el proyecto
```bash
npm run dev
```

**La aplicación estará disponible en:** http://localhost:5173

---

## Comandos Disponibles
```bash
# Desarrollo (puerto 5173)
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview
```

---

## 🔧 Si las dependencias no se instalan correctamente

### Opción 1: Instalación manual de dependencias principales
```bash
# Limpiar instalación previa
rm -rf node_modules
rm package-lock.json

# Reinstalar todo
npm install

# Instalar dependencias específicas si faltan
npm install react react-dom
npm install react-router-dom
npm install framer-motion
npm install lucide-react
npm install three
npm install ogl
npm install -D tailwindcss postcss autoprefixer
```

### Opción 2: Usando el archivo package.json

Asegúrate que tu `package.json` tenga estas dependencias:
```json
{
  "name": "proyecto_cashabroad",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "framer-motion": "^11.11.17",
    "lucide-react": "^0.460.0",
    "ogl": "^1.0.8",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-router-dom": "^6.28.0",
    "three": "^0.170.0"
  },
  "devDependencies": {
    "@types/react": "^18.3.12",
    "@types/react-dom": "^18.3.1",
    "@vitejs/plugin-react": "^4.3.3",
    "autoprefixer": "^10.4.20",
    "postcss": "^8.4.49",
    "tailwindcss": "^3.4.15",
    "vite": "^5.4.10"
  }
}
```

Luego ejecuta:
```bash
npm install
```

---

##  Configuración de Tailwind CSS

El proyecto ya debe tener estos archivos configurados:

**`tailwind.config.js`:**
```javascript
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#6366F1',
        secondary: '#1A1A1A',
      },
    },
  },
  plugins: [],
}
```

**`postcss.config.js`:**
```javascript
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

**`src/index.css`:**
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  body {
    @apply bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300;
  }
}
```

---

##  Estructura del Proyecto
```
proyecto_cashabroad/
├── src/
│   ├── components/          # Componentes reutilizables
│   │   ├── DarkModeToggle.jsx
│   │   ├── Hero.jsx
│   │   ├── Benefits.jsx
│   │   ├── Demo.jsx
│   │   ├── Testimonials.jsx
│   │   ├── Footer.jsx
│   │   ├── Loader.jsx
│   │   ├── ProfileCard.jsx + .css
│   │   ├── TiltedCard.jsx
│   │   ├── DarkVeil.jsx + .css
│   │   ├── ColorBends.jsx
│   │   └── ReviewModal.jsx
│   ├── pages/               # Páginas
│   │   ├── CrearCuenta.jsx
│   │   └── MasInformacion.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
├── tailwind.config.js
├── vite.config.js
└── index.html
```

---

##  Solucion de algunos errores que pueden surgir 

### Error: "Cannot find module 'three'"
```bash
npm install three
```

### Error: "Cannot find module 'ogl'"
```bash
npm install ogl
```

### Error: "Cannot find module 'react-router-dom'"
```bash
npm install react-router-dom
```

### Error en Tailwind: "Cannot apply unknown utility class"
```bash
# Reiniciar el servidor
# Ctrl + C para detener
npm run dev
```

### La página aparece en blanco
```bash
# Verifica que todas las dependencias estén instaladas
npm install

# Limpia caché y reinstala
rm -rf node_modules
rm package-lock.json
npm install
npm run dev
```

### Puerto 5173 ya en uso
```bash
# Detén el proceso existente
# Ctrl + C

# O usa otro puerto
npm run dev -- --port 3000
```

---

##  Deploy a Producción

### Vercel (Recomendado)

1. Crea cuenta en [vercel.com](https://vercel.com)
2. Conecta tu repositorio de GitHub
3. Vercel detectará automáticamente Vite y hará deploy

**O usando CLI:**
```bash
npm i -g vercel
npm run build
vercel
```

### Netlify

1. Build local:
```bash
npm run build
```

2. Sube la carpeta `dist/` a [netlify.com](https://netlify.com)

### GitHub Pages
```bash
# Instalar gh-pages
npm install --save-dev gh-pages

# Agregar a package.json en "scripts":
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"

# Deploy
npm run deploy
```

---

##  Características del Proyecto

- ✅ React 18 + Vite
- ✅ Tailwind CSS para estilos
- ✅ Framer Motion para animaciones
- ✅ React Router para navegación
- ✅ Dark Mode con persistencia
- ✅ Efectos WebGL (Three.js + OGL)
- ✅ Componentes 3D interactivos
- ✅ Diseño responsive
- ✅ Loader animado
- ✅ 3 páginas navegables

---

##  Soporte

Si tienes problemas:

1. Verifica que Node.js >= 18 esté instalado
2. Borra `node_modules` y `package-lock.json`, luego ejecuta `npm install`
3. Asegúrate de estar en la carpeta correcta del proyecto
4. Verifica que no haya errores en la consola del navegador (F12)

---

##  Inicio Rápido (Resumen)
```bash
# 1. Entrar a la carpeta del proyecto
cd proyecto_cashabroad

# 2. Instalar dependencias
npm install

# 3. Ejecutar proyecto
npm run dev

# 4. Abrir en navegador
http://localhost:5173
```

---

<div align="center">
  <p>Hecho con esfuerzo para CashAbroad</p>
  <p>Si tienes dudas, revisa la sección de Solución de Problemas </p>
</div>