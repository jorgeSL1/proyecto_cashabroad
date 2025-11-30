import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Zap, RefreshCw, TrendingUp, X, Mail, Lock, Eye, EyeOff, LogIn, UserPlus, Info } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import DarkVeil from './DarkVeil';
import { convertCurrency, POPULAR_CURRENCIES } from '../services/exchangeRate';

export default function Hero() {
  const [fromAmount, setFromAmount] = useState('10000');
  const [toAmount, setToAmount] = useState('0');
  const [fromCurrency, setFromCurrency] = useState('MXN');
  const [toCurrency, setToCurrency] = useState('USD');
  const [isLoading, setIsLoading] = useState(false);
  const [conversionRate, setConversionRate] = useState(null);
  const [error, setError] = useState(null);
  const [lastUpdate, setLastUpdate] = useState(null);

  
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  useEffect(() => {
    const convertAmount = async () => {
      const amount = parseFloat(fromAmount);
      
      if (!fromAmount || amount <= 0 || isNaN(amount)) {
        setToAmount('0');
        setConversionRate(null);
        setError(null);
        return;
      }

      setIsLoading(true);
      setError(null);

      try {
        const result = await convertCurrency(amount, fromCurrency, toCurrency);
        setToAmount(result.convertedAmount.toFixed(2));
        setConversionRate(result.conversionRate);
        setLastUpdate(result.date);
      } catch (err) {
        console.error('Error en conversión:', err);
        setError('No se pudo conectar con el servidor.');
        setToAmount('0');
      } finally {
        setIsLoading(false);
      }
    };

    const debounceTimer = setTimeout(convertAmount, 600);
    return () => clearTimeout(debounceTimer);
  }, [fromAmount, fromCurrency, toCurrency]);

  
  useEffect(() => {
    if (isLoginOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isLoginOpen]);

  const handleSwapCurrencies = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
    setFromAmount(toAmount);
  };

  const handleManualConvert = async () => {
    const amount = parseFloat(fromAmount);
    
    if (!fromAmount || amount <= 0 || isNaN(amount)) {
      setError('Por favor ingresa una cantidad válida mayor a 0');
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const result = await convertCurrency(amount, fromCurrency, toCurrency);
      setToAmount(result.convertedAmount.toFixed(2));
      setConversionRate(result.conversionRate);
      setLastUpdate(result.date);
    } catch (err) {
      console.error('Error:', err);
      setError('Error al convertir. Intenta de nuevo.');
      setToAmount('0');
    } finally {
      setIsLoading(false);
    }
  };

  
  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoggingIn(true);
    
    
    setTimeout(() => {
      setIsLoggingIn(false);
      setIsLoginOpen(false);
      setLoginEmail('');
      setLoginPassword('');
    }, 2000);
  };

  const getCurrencyFlag = (code) => {
    if (code === 'MXN') return '🇲🇽';
    const currency = POPULAR_CURRENCIES.find(c => c.code === code);
    return currency ? currency.flag : '';
  };

  const formatNumber = (num) => {
    return new Intl.NumberFormat('es-MX', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(num);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 py-12 sm:py-20 overflow-hidden bg-gradient-to-br from-gray-900 via-indigo-950 to-gray-900">
      {}
      <div className="absolute inset-0 opacity-70">
        <DarkVeil
          hueShift={180}
          noiseIntensity={0.03}
          scanlineIntensity={0}
          speed={0.6}
          scanlineFrequency={0}
          warpAmount={0.4}
          resolutionScale={1}
        />
      </div>

      {}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-purple-900/20 to-pink-900/20 pointer-events-none mix-blend-overlay" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/40 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full">
        
        {}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-4 sm:space-y-6 text-center lg:text-left order-2 lg:order-1"
        >
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-primary/20 backdrop-blur-md rounded-full border border-primary/40 shadow-xl">
            <Zap className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
            <span className="text-xs sm:text-sm font-medium text-primary">Rápido • Seguro • Internacional</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-tight text-white drop-shadow-2xl">
            Conversiones de{' '}
            <span className="text-primary drop-shadow-[0_0_30px_rgba(99,102,241,0.5)]">MXN a Divisas</span>
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-gray-200 drop-shadow-lg max-w-xl mx-auto lg:mx-0">
            Convierte tus pesos mexicanos a cualquier moneda de manera instantánea, segura y sin complicaciones.
          </p>

          {}
          <div 
            className="
              flex flex-col 
              gap-3 
              pt-2 
              sm:pt-4 
              items-center
              lg:items-start
              sm:flex-row
              sm:flex-wrap
              sm:justify-center
              lg:justify-start
            "
          >
            {}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsLoginOpen(true)}
              className="
                w-full sm:w-auto
                px-6 py-3
                bg-white/10 
                backdrop-blur-lg 
                border-2 border-white/30 
                text-white 
                rounded-full 
                font-semibold 
                flex items-center justify-center 
                gap-2 
                hover:bg-primary/20 
                hover:border-primary
                transition-all 
                shadow-xl 
                text-sm
                sm:text-base
              "
            >
              <LogIn className="w-4 h-4 sm:w-5 sm:h-5" />
              Iniciar Sesión
            </motion.button>

            {}
            <Link to="/crear-cuenta" className="w-full sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="
                  w-full
                  px-6 py-3
                  bg-primary 
                  text-white 
                  border-2 border-primary
                  rounded-full 
                  font-semibold 
                  flex items-center justify-center 
                  gap-2 
                  hover:bg-primary/90 
                  transition-all 
                  shadow-2xl shadow-primary/50
                  text-sm
                  sm:text-base
                "
              >
                <UserPlus className="w-4 h-4 sm:w-5 sm:h-5" />
                Crear Cuenta
              </motion.button>
            </Link>

            {}
            <Link to="/mas-informacion" className="w-full sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="
                  w-full
                  px-6 py-3
                  bg-white/10 
                  backdrop-blur-lg 
                  border-2 border-white/30 
                  text-white 
                  rounded-full 
                  font-semibold 
                  flex items-center justify-center 
                  gap-2 
                  hover:border-primary 
                  hover:bg-primary/20
                  transition-all 
                  shadow-xl
                  text-sm
                  sm:text-base
                "
              >
                <Info className="w-4 h-4 sm:w-5 sm:h-5" />
                Más Información
              </motion.button>
            </Link>
          </div>

          {}
          <div className="grid grid-cols-3 gap-3 sm:gap-6 pt-6 sm:pt-8">
            <div className="bg-gradient-to-br from-primary/20 to-purple-900/20 backdrop-blur-xl rounded-lg sm:rounded-xl p-3 sm:p-4 border border-primary/30 shadow-xl">
              <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-primary drop-shadow-[0_0_20px_rgba(99,102,241,0.8)]">$2M+</p>
              <p className="text-xs sm:text-sm text-gray-300">Convertido</p>
            </div>
            <div className="bg-gradient-to-br from-primary/20 to-purple-900/20 backdrop-blur-xl rounded-lg sm:rounded-xl p-3 sm:p-4 border border-primary/30 shadow-xl">
              <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-primary drop-shadow-[0_0_20px_rgba(99,102,241,0.8)]">10K+</p>
              <p className="text-xs sm:text-sm text-gray-300">Usuarios</p>
            </div>
            <div className="bg-gradient-to-br from-primary/20 to-purple-900/20 backdrop-blur-xl rounded-lg sm:rounded-xl p-3 sm:p-4 border border-primary/30 shadow-xl">
              <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-primary drop-shadow-[0_0_20px_rgba(99,102,241,0.8)]">24/7</p>
              <p className="text-xs sm:text-sm text-gray-300">Soporte</p>
            </div>
          </div>
        </motion.div>

        {}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative order-1 lg:order-2"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="relative z-10"
          >
            {}
            <div className="bg-gradient-to-br from-primary/10 to-purple-900/10 backdrop-blur-2xl rounded-2xl sm:rounded-3xl shadow-2xl p-4 sm:p-6 lg:p-8 border border-primary/30">
              <div className="space-y-4 sm:space-y-6">
                
                {}
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-base sm:text-lg font-semibold text-white flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                    Calculadora de Divisas
                  </h3>
                  {lastUpdate && (
                    <span className="text-[10px] sm:text-xs text-gray-500 hidden sm:block">
                      Actualizado: {lastUpdate}
                    </span>
                  )}
                </div>

                {}
                <div>
                  <label className="text-xs sm:text-sm text-gray-300 mb-1.5 sm:mb-2 block font-medium">Cantidad a convertir</label>
                  <div className="flex gap-2 sm:gap-3">
                    <div className="flex-1 flex items-center gap-2 sm:gap-4 p-3 sm:p-4 bg-white/5 rounded-lg sm:rounded-xl border border-white/10 focus-within:border-primary/50 transition-colors">
                      <span className="text-xl sm:text-2xl">🇲🇽</span>
                      <div className="flex-1">
                        <input
                          type="number"
                          value={fromAmount}
                          onChange={(e) => setFromAmount(e.target.value)}
                          className="w-full text-xl sm:text-2xl lg:text-3xl font-bold bg-transparent text-white outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                          placeholder="0.00"
                          min="0"
                          step="0.01"
                        />
                        <p className="text-xs sm:text-sm text-gray-400 mt-0.5 sm:mt-1">MXN - Peso Mexicano</p>
                      </div>
                    </div>
                  </div>
                </div>

                {}
                <div className="flex justify-center">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9, rotate: 180 }}
                    onClick={handleSwapCurrencies}
                    className="p-2 sm:p-3 bg-primary rounded-full shadow-lg shadow-primary/50 hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={isLoading}
                    title="Intercambiar monedas"
                  >
                    <RefreshCw className={`w-5 h-5 sm:w-6 sm:h-6 text-white transition-transform ${isLoading ? 'animate-spin' : ''}`} />
                  </motion.button>
                </div>

                {}
                <div>
                  <label className="text-xs sm:text-sm text-gray-300 mb-1.5 sm:mb-2 block font-medium">Resultado</label>
                  <div className="flex gap-2 sm:gap-3">
                    <div className="flex-1 flex items-center gap-2 sm:gap-4 p-3 sm:p-4 bg-primary/20 rounded-lg sm:rounded-xl border border-primary/40">
                      <span className="text-xl sm:text-2xl">{getCurrencyFlag(toCurrency)}</span>
                      <div className="flex-1 min-w-0">
                        <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-primary drop-shadow-[0_0_20px_rgba(99,102,241,0.8)] truncate">
                          {isLoading ? (
                            <span className="animate-pulse">...</span>
                          ) : (
                            formatNumber(parseFloat(toAmount))
                          )}
                        </p>
                        <select
                          value={toCurrency}
                          onChange={(e) => setToCurrency(e.target.value)}
                          className="text-xs sm:text-sm text-gray-400 bg-transparent outline-none cursor-pointer hover:text-primary transition-colors mt-0.5 sm:mt-1 w-full"
                          disabled={isLoading}
                        >
                          {POPULAR_CURRENCIES.map(currency => (
                            <option key={currency.code} value={currency.code} className="bg-gray-900 text-white">
                              {currency.flag} {currency.code} - {currency.name}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>
                </div>

                {}
                {conversionRate && !error && !isLoading && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center text-xs sm:text-sm bg-white/5 rounded-lg p-2 sm:p-3 border border-white/10"
                  >
                    <p className="text-gray-400">
                      <span className="font-semibold text-primary">1 {fromCurrency}</span> = 
                      <span className="font-semibold text-white"> {conversionRate.toFixed(4)} {toCurrency}</span>
                    </p>
                  </motion.div>
                )}

                {}
                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center text-xs sm:text-sm text-red-400 bg-red-500/10 rounded-lg p-2 sm:p-3 border border-red-500/20"
                  >
                    <p className="flex items-center justify-center gap-2">
                      <span></span>
                      <span>{error}</span>
                    </p>
                  </motion.div>
                )}

                {}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleManualConvert}
                  className="w-full py-3 sm:py-4 bg-primary text-white rounded-lg sm:rounded-xl font-semibold hover:bg-primary/90 transition-colors shadow-lg shadow-primary/30 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <RefreshCw className="w-4 h-4 sm:w-5 sm:h-5 animate-spin" />
                      Convirtiendo...
                    </>
                  ) : (
                    <>
                      <Zap className="w-4 h-4 sm:w-5 sm:h-5" />
                      Convertir Ahora
                    </>
                  )}
                </motion.button>
              </div>
            </div>
          </motion.div>

          {}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -top-10 -right-10 w-20 sm:w-32 h-20 sm:h-32 bg-primary/40 rounded-full blur-3xl hidden sm:block"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-10 -left-10 w-24 sm:w-40 h-24 sm:h-40 bg-purple-500/40 rounded-full blur-3xl hidden sm:block"
          />
        </motion.div>
      </div>

      {}
      {}
      {}
      <AnimatePresence>
        {isLoginOpen && (
          <>
            {}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsLoginOpen(false)}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
            />

            {}
            <div 
              className="
                fixed inset-0 z-50 
                flex items-center justify-center 
                p-4 sm:p-6 md:p-8
              "
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 30 }}
                transition={{ 
                  type: "spring",
                  damping: 30,
                  stiffness: 400
                }}
                onClick={(e) => e.stopPropagation()}
                className="
                  w-full 
                  max-w-[400px]
                  sm:max-w-[420px]
                  md:max-w-[450px]
                "
              >
                {}
                <div 
                  className="
                    bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900
                    rounded-2xl
                    sm:rounded-3xl
                    p-5
                    sm:p-6
                    md:p-8
                    border border-primary/30
                    shadow-2xl
                    shadow-primary/20
                    relative
                    overflow-hidden
                  "
                >
                  {}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />

                  {}
                  <div className="relative z-10">
                    
                    {}
                    <div className="flex items-start justify-between mb-5 sm:mb-6">
                      <div>
                        <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white">
                          Bienvenido de vuelta
                        </h2>
                        <p className="text-xs sm:text-sm text-gray-400 mt-1">
                          Ingresa a tu cuenta de CashAbroad
                        </p>
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.1, rotate: 90 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setIsLoginOpen(false)}
                        className="
                          p-2
                          bg-white/10
                          rounded-full
                          text-gray-400
                          hover:text-white
                          hover:bg-white/20
                          transition-colors
                          flex-shrink-0
                          ml-3
                        "
                      >
                        <X className="w-4 h-4 sm:w-5 sm:h-5" />
                      </motion.button>
                    </div>

                    {}
                    <form onSubmit={handleLogin} className="space-y-4">
                      
                      {}
                      <div>
                        <label className="text-xs sm:text-sm text-gray-300 mb-1.5 block font-medium">
                          Correo electrónico
                        </label>
                        <div 
                          className="
                            flex items-center 
                            gap-3 
                            p-3 sm:p-3.5
                            bg-white/5 
                            rounded-xl 
                            border border-white/10 
                            focus-within:border-primary/50 
                            transition-colors
                          "
                        >
                          <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 flex-shrink-0" />
                          <input
                            type="email"
                            value={loginEmail}
                            onChange={(e) => setLoginEmail(e.target.value)}
                            placeholder="tu@email.com"
                            required
                            className="
                              w-full 
                              bg-transparent 
                              text-white 
                              text-sm
                              outline-none 
                              placeholder-gray-500
                            "
                          />
                        </div>
                      </div>

                      {}
                      <div>
                        <label className="text-xs sm:text-sm text-gray-300 mb-1.5 block font-medium">
                          Contraseña
                        </label>
                        <div 
                          className="
                            flex items-center 
                            gap-3 
                            p-3 sm:p-3.5
                            bg-white/5 
                            rounded-xl 
                            border border-white/10 
                            focus-within:border-primary/50 
                            transition-colors
                          "
                        >
                          <Lock className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 flex-shrink-0" />
                          <input
                            type={showPassword ? "text" : "password"}
                            value={loginPassword}
                            onChange={(e) => setLoginPassword(e.target.value)}
                            placeholder="••••••••"
                            required
                            className="
                              w-full 
                              bg-transparent 
                              text-white 
                              text-sm
                              outline-none 
                              placeholder-gray-500
                            "
                          />
                          <motion.button
                            type="button"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => setShowPassword(!showPassword)}
                            className="text-gray-400 hover:text-white transition-colors flex-shrink-0"
                          >
                            {showPassword ? (
                              <EyeOff className="w-4 h-4 sm:w-5 sm:h-5" />
                            ) : (
                              <Eye className="w-4 h-4 sm:w-5 sm:h-5" />
                            )}
                          </motion.button>
                        </div>
                      </div>

                      {}
                      <div className="flex justify-end">
                        <button
                          type="button"
                          className="
                            text-xs sm:text-sm 
                            text-primary 
                            hover:text-primary/80 
                            transition-colors
                          "
                        >
                          ¿Olvidaste tu contraseña?
                        </button>
                      </div>

                      {}
                      <motion.button
                        type="submit"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        disabled={isLoggingIn}
                        className="
                          w-full 
                          py-3 sm:py-3.5
                          bg-primary 
                          text-white 
                          rounded-xl 
                          font-semibold 
                          text-sm
                          hover:bg-primary/90 
                          transition-colors 
                          shadow-lg shadow-primary/30 
                          flex items-center justify-center 
                          gap-2
                          disabled:opacity-50
                          disabled:cursor-not-allowed
                        "
                      >
                        {isLoggingIn ? (
                          <>
                            <RefreshCw className="w-4 h-4 sm:w-5 sm:h-5 animate-spin" />
                            Iniciando sesión...
                          </>
                        ) : (
                          <>
                            <LogIn className="w-4 h-4 sm:w-5 sm:h-5" />
                            Iniciar Sesión
                          </>
                        )}
                      </motion.button>
                    </form>

                    {}
                    <div className="flex items-center gap-3 my-5">
                      <div className="flex-1 h-px bg-white/10" />
                      <span className="text-xs text-gray-500">o continúa con</span>
                      <div className="flex-1 h-px bg-white/10" />
                    </div>

                    {}
                    <div className="grid grid-cols-2 gap-3">
                      <motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        type="button"
                        className="
                          py-2.5
                          bg-white/5 
                          border border-white/10 
                          rounded-xl 
                          text-white 
                          text-xs sm:text-sm
                          font-medium
                          hover:bg-white/10 
                          transition-colors
                          flex items-center justify-center
                          gap-2
                        "
                      >
                        <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24">
                          <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                          <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                          <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                          <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                        </svg>
                        Google
                      </motion.button>

                      <motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        type="button"
                        className="
                          py-2.5
                          bg-white/5 
                          border border-white/10 
                          rounded-xl 
                          text-white 
                          text-xs sm:text-sm
                          font-medium
                          hover:bg-white/10 
                          transition-colors
                          flex items-center justify-center
                          gap-2
                        "
                      >
                        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.341-3.369-1.341-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
                        </svg>
                        GitHub
                      </motion.button>
                    </div>

                    {}
                    <p className="text-center text-xs sm:text-sm text-gray-400 mt-5">
                      ¿No tienes cuenta?{' '}
                      <Link 
                        to="/crear-cuenta" 
                        onClick={() => setIsLoginOpen(false)}
                        className="text-primary hover:text-primary/80 font-medium transition-colors"
                      >
                        Crear cuenta gratis
                      </Link>
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}