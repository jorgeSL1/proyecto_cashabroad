import { motion } from 'framer-motion';
import { ArrowRight, Zap, RefreshCw, TrendingUp } from 'lucide-react';
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

  const getCurrencyFlag = (code) => {
    if (code === 'MXN') return '🇲🇽';
    const currency = POPULAR_CURRENCIES.find(c => c.code === code);
    return currency ? currency.flag : '💰';
  };

  const formatNumber = (num) => {
    return new Intl.NumberFormat('es-MX', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(num);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 py-12 sm:py-20 overflow-hidden bg-gradient-to-br from-gray-900 via-indigo-950 to-gray-900">
      {/* DarkVeil Background */}
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

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-purple-900/20 to-pink-900/20 pointer-events-none mix-blend-overlay" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/40 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full">
        
        {/* Texto del Hero */}
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

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4 justify-center lg:justify-start">
            <Link to="/crear-cuenta" className="w-full sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-primary text-white rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors shadow-2xl shadow-primary/50 text-sm sm:text-base"
              >
                Crear Cuenta
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </motion.button>
            </Link>

            <Link to="/mas-informacion" className="w-full sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white/20 backdrop-blur-lg border-2 border-white/30 text-white rounded-full font-semibold hover:border-primary hover:bg-primary/20 transition-all shadow-xl text-sm sm:text-base"
              >
                Más Información
              </motion.button>
            </Link>
          </div>

          {/* Stats */}
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

        {/* Calculadora de Conversión */}
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
            {/* Card de conversión */}
            <div className="bg-gradient-to-br from-primary/10 to-purple-900/10 backdrop-blur-2xl rounded-2xl sm:rounded-3xl shadow-2xl p-4 sm:p-6 lg:p-8 border border-primary/30">
              <div className="space-y-4 sm:space-y-6">
                
                {/* Título */}
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

                {/* De (From) */}
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

                {/* Botón de intercambio */}
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

                {/* A (To) */}
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

                {/* Tasa de conversión */}
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

                {/* Error */}
                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center text-xs sm:text-sm text-red-400 bg-red-500/10 rounded-lg p-2 sm:p-3 border border-red-500/20"
                  >
                    <p className="flex items-center justify-center gap-2">
                      <span>⚠️</span>
                      <span>{error}</span>
                    </p>
                  </motion.div>
                )}

                {/* Botón de conversión */}
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

                {/* Nota informativa */}
                <p className="text-[10px] sm:text-xs text-center text-gray-500">
                  💡 La conversión se actualiza automáticamente
                </p>
              </div>
            </div>
          </motion.div>

          {/* Elementos decorativos - ocultos en móvil */}
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
    </section>
  );
}