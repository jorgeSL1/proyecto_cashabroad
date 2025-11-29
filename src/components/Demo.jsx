import { motion } from 'framer-motion';
import { useState } from 'react';
import { CreditCard, Smartphone, Wallet, ArrowUpRight, TrendingUp } from 'lucide-react';

const tabs = [
  { id: 'dashboard', label: 'Dashboard', icon: Wallet },
  { id: 'transactions', label: 'Transacciones', icon: ArrowUpRight },
  { id: 'cards', label: 'Tarjetas', icon: CreditCard },
];

const transactionsData = [
  { id: 1, type: 'Conversión', amount: '+500 USDC', date: 'Hoy, 10:30 AM', status: 'Completado' },
  { id: 2, type: 'Envío', amount: '-250 USDC', date: 'Ayer, 3:45 PM', status: 'Completado' },
  { id: 3, type: 'Recibido', amount: '+1,200 USDC', date: '25 Nov, 9:15 AM', status: 'Completado' },
  { id: 4, type: 'Conversión', amount: '+800 USDC', date: '24 Nov, 2:20 PM', status: 'Completado' },
];

export default function Demo() {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <section className="py-20 px-6 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Una plataforma <span className="text-primary">poderosa</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Todo lo que necesitas para gestionar tu dinero en un solo lugar
          </p>
        </motion.div>

        <div className="flex justify-center mb-8 gap-4 flex-wrap">
          {tabs.map((tab) => (
            <motion.button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-primary text-white shadow-lg shadow-primary/30'
                  : 'bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              <tab.icon className="w-5 h-5" />
              {tab.label}
            </motion.button>
          ))}
        </div>

        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white dark:bg-gray-900 rounded-3xl shadow-2xl p-8 border border-gray-200 dark:border-gray-700"
        >
          {activeTab === 'dashboard' && (
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-primary to-teal-600 rounded-2xl p-8 text-white">
                <p className="text-sm opacity-90 mb-2">Balance Total</p>
                <h3 className="text-5xl font-bold mb-6">$12,450.00 USDC</h3>
                <div className="flex items-center gap-2 text-sm">
                  <TrendingUp className="w-4 h-4" />
                  <span>+12.5% este mes</span>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl text-left hover:shadow-lg transition-all"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <ArrowUpRight className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-semibold mb-2">Enviar</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Envía dinero al instante</p>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl text-left hover:shadow-lg transition-all"
                >
                  <div className="w-12 h-12 bg-purple-500/10 rounded-full flex items-center justify-center mb-4">
                    <Wallet className="w-6 h-6 text-purple-500" />
                  </div>
                  <h4 className="font-semibold mb-2">Recibir</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Recibe pagos fácilmente</p>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl text-left hover:shadow-lg transition-all"
                >
                  <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center mb-4">
                    <TrendingUp className="w-6 h-6 text-blue-500" />
                  </div>
                  <h4 className="font-semibold mb-2">Convertir</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">MXN a USDC al instante</p>
                </motion.button>
              </div>
            </div>
          )}

          {activeTab === 'transactions' && (
            <div className="space-y-4">
              <h3 className="text-2xl font-bold mb-6">Transacciones Recientes</h3>
              {transactionsData.map((transaction, index) => (
                <motion.div
                  key={transaction.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-xl hover:shadow-md transition-all"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <ArrowUpRight className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold">{transaction.type}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{transaction.date}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-lg text-primary">{transaction.amount}</p>
                    <span className="text-xs px-3 py-1 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 rounded-full">
                      {transaction.status}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {activeTab === 'cards' && (
            <div className="space-y-8">
              <h3 className="text-2xl font-bold mb-6">Mis Tarjetas</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <motion.div
                  whileHover={{ scale: 1.02, rotateY: 5 }}
                  className="bg-gradient-to-br from-gray-900 to-gray-700 rounded-2xl p-8 text-white relative overflow-hidden"
                  style={{ perspective: '1000px' }}
                >
                  <div className="absolute top-0 right-0 w-40 h-40 bg-primary/20 rounded-full blur-3xl" />
                  <div className="relative z-10">
                    <Smartphone className="w-12 h-12 mb-8" />
                    <p className="text-sm opacity-75 mb-2">Virtual Card</p>
                    <p className="text-2xl font-mono mb-8">•••• •••• •••• 4521</p>
                    <div className="flex justify-between items-end">
                      <div>
                        <p className="text-xs opacity-75">Balance</p>
                        <p className="text-xl font-bold">$8,450 USDC</p>
                      </div>
                      <CreditCard className="w-10 h-10 opacity-50" />
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02, rotateY: 5 }}
                  className="bg-gradient-to-br from-primary to-teal-600 rounded-2xl p-8 text-white relative overflow-hidden"
                  style={{ perspective: '1000px' }}
                >
                  <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
                  <div className="relative z-10">
                    <CreditCard className="w-12 h-12 mb-8" />
                    <p className="text-sm opacity-90 mb-2">Physical Card</p>
                    <p className="text-2xl font-mono mb-8">•••• •••• •••• 8742</p>
                    <div className="flex justify-between items-end">
                      <div>
                        <p className="text-xs opacity-90">Balance</p>
                        <p className="text-xl font-bold">$4,000 USDC</p>
                      </div>
                      <Wallet className="w-10 h-10 opacity-75" />
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
