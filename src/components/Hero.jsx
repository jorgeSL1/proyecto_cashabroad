import { motion } from 'framer-motion';
import { ArrowRight, Zap, RefreshCw } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import DarkVeil from './DarkVeil';
import { convertCurrency, POPULAR_CURRENCIES } from '../services/exchangeRate';

export default function Hero() {
  const [fromAmount, setFromAmount] = useState('10000');
  const [toAmount, setToAmount] = useState('0');
  const [fromCurrency, setFromCurrency] = useState('MXN');
  const [toCurrency, setToCurrency] = useState('USD');
  const [conversionRate, setConversionRate] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

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
        console.log('Iniciando conversión...');
        const result = await convertCurrency(amount, fromCurrency, toCurrency);
        console.log('Resultado:', result);
        setToAmount(result.convertedAmount.toFixed(2));
        setConversionRate(result.conversionRate);
      } catch (err) {
        console.error('Error en conversión:', err);
        setError('No se pudo convertir. Verifica la API o tu conexión.');
        setToAmount('0');
        setConversionRate(null);
      } finally {
        setIsLoading(false);
      }
    };

    const debounceTimer = setTimeout(convertAmount, 800);
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
      setError('Por favor ingresa una cantidad válida');
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const result = await convertCurrency(amount, fromCurrency, toCurrency);
      setToAmount(result.convertedAmount.toFixed(2));
      setConversionRate(result.conversionRate);
    } catch (err) {
      console.error('Error en conversión:', err);
      setError('No se pudo convertir. Intenta de nuevo.');
      setToAmount('0');
      setConversionRate(null);
    } finally {
      setIsLoading(false);
    }
  };

  const getCurrencyFlag = (code) => {
    if (code === 'MXN') return '🇲🇽';
    const currency = POPULAR_CURRENCIES.find(c => c.code === code);
    return currency ? currency.flag : '💰';
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden bg-gradient-to-br from-gray-900 via-indigo-950 to-gray-900">
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

      <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Texto del Hero */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 backdrop-blur-md rounded-full border border-primary/40 shadow-xl">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Rápido • Seguro • Internacional</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight text-white drop-shadow-2xl">
            Conversiones de{' '}
            <span className="text-primary drop-shadow-[0_0_30px_rgba(99,102,241,0.5)]">MXN a Divisas</span>
          </h1>

          <p className="text-xl text-gray-200 drop-shadow-lg">
            Convierte tus pesos mexicanos a cualquier moneda de manera instantánea, segura y sin complicaciones. La forma más moderna de manejar tu dinero.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link to="/crear-cuenta">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-primary text-white rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors shadow-2xl shadow-primary/50"
              >
                Crear Cuenta
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>

            <Link to="/mas-informacion">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white/20 backdrop-blur-lg border-2 border-white/30 text-white rounded-full font-semibold hover:border-primary hover:bg-primary/20 transition-all shadow-xl"
              >
                Más Información
              </motion.button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 pt-8">
            <div className="bg-gradient-to-br from-primary/20 to-purple-900/20 backdrop-blur-xl rounded-xl p-4 border border-primary/30 shadow-xl">
              <p className="text-3xl font-bold text-primary drop-shadow-[0_0_20px_rgba(99,102,241,0.8)]">$2M+</p>
              <p className="text-sm text-gray-300">Convertido</p>
            </div>
            <div className="bg-gradient-to-br from-primary/20 to-purple-900/20 backdrop-blur-xl rounded-xl p-4 border border-primary/30 shadow-xl">
              <p className="text-3xl font-bold text-primary drop-shadow-[0_0_20px_rgba(99,102,241,0.8)]">10K+</p>
              <p className="text-sm text-gray-300">Usuarios</p>
            </div>
            <div className="bg-gradient-to-br from-primary/20 to-purple-900/20 backdrop-blur-xl rounded-xl p-4 border border-primary/30 shadow-xl">
              <p className="text-3xl font-bold text-primary drop-shadow-[0_0_20px_rgba(99,102,241,0.8)]">24/7</p>
              <p className="text-sm text-gray-300">Soporte</p>
            </div>
          </div>
        </motion.div>

        {/* Calculadora de Conversión FUNCIONAL */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="relative z-10"
          >
            <div className="bg-gradient-to-br from-primary/10 to-purple-900/10 backdrop-blur-2xl rounded-3xl shadow-2xl p-8 border border-primary/30 space-y-6">
              {/* De (From) */}
              <div>
                <label className="text-sm text-gray-300 mb-2 block">De</label>
                <div className="flex gap-3">
                  <div className="flex-1 flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10 focus-within:border-primary/50 transition-colors">
                    <span className="text-2xl">{getCurrencyFlag(fromCurrency)}</span>
                    <div className="flex-1">
                      <input
                        type="number"
                        value={fromAmount}
                        onChange={(e) => setFromAmount(e.target.value)}
                        className="w-full text-3xl font-bold bg-transparent text-white outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                        placeholder="0"
                        min="0"
                        step="0.01"
                      />
                      <p className="text-sm text-gray-400">{fromCurrency} - {POPULAR_CURRENCIES.find(c => c.code === fromCurrency)?.name}</p>
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
                  className="p-3 bg-primary rounded-full shadow-lg shadow-primary/50 hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={isLoading}
                >
                  <RefreshCw className={`w-6 h-6 text-white transition-transform ${isLoading ? 'animate-spin' : ''}`} />
                </motion.button>
              </div>

              {/* A (To) */}
              <div>
                <label className="text-sm text-gray-300 mb-2 block">A</label>
                <div className="flex gap-3">
                  <div className="flex-1 flex items-center gap-4 p-4 bg-primary/20 rounded-xl border border-primary/40">
                    <span className="text-2xl">{getCurrencyFlag(toCurrency)}</span>
                    <div className="flex-1">
                      <p className="text-3xl font-bold text-primary drop-shadow-[0_0_20px_rgba(99,102,241,0.8)]">
                        {isLoading ? <span className="animate-pulse">...</span> : toAmount}
                      </p>
                      <select
                        value={toCurrency}
                        onChange={(e) => setToCurrency(e.target.value)}
                        className="text-sm text-gray-400 bg-transparent outline-none cursor-pointer hover:text-primary transition-colors mt-1"
                        disabled={isLoading}
                      >
                        {POPULAR_CURRENCIES.map(currency => (
                          <option key={currency.code} value={currency.code} className="bg-gray-900 text-white">
                            {currency.code} - {currency.name}
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
                  className="text-center text-sm text-gray-400 bg-white/5 rounded-lg p-3 border border-white/10"
                >
                  <span className="font-semibold">Tasa:</span> 1 {fromCurrency} = {conversionRate.toFixed(4)} {toCurrency}
                </motion.div>
              )}

              {/* Error */}
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center text-sm text-red-400 bg-red-500/10 rounded-lg p-3 border border-red-500/20"
                >
                  ⚠️ {error}
                </motion.div>
              )}

              {/* Botón de conversión */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleManualConvert}
                className="w-full py-4 bg-primary text-white rounded-xl font-semibold hover:bg-primary/90 transition-colors shadow-lg shadow-primary/30 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <RefreshCw className="w-5 h-5 animate-spin" />
                    Convirtiendo...
                  </>
                ) : (
                  <>
                    <Zap className="w-5 h-5" />
                    Convertir Ahora
                  </>
                )}
              </motion.button>

              <p className="text-xs text-center text-gray-500">
                💡 La conversión se actualiza automáticamente al escribir
              </p>
            </div>
          </motion.div>

          {/* Elementos decorativos */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -top-10 -right-10 w-32 h-32 bg-primary/40 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-500/40 rounded-full blur-3xl"
          />
        </motion.div>
      </div>
    </section>
  );
}
