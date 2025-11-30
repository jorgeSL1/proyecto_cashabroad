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
    <section 
      className="
        py-12 px-4
        sm:py-16 sm:px-6
        lg:py-20 lg:px-8
        bg-gray-50 dark:bg-gray-800
      "
    >
      <div className="max-w-7xl mx-auto">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="
            text-center 
            mb-8
            sm:mb-10
            lg:mb-12
            px-2
          "
        >
          <h2 
            className="
              text-2xl font-bold 
              mb-3
              sm:text-3xl
              md:text-4xl
              lg:text-5xl
              sm:mb-4
            "
          >
            Una plataforma <span className="text-primary">poderosa</span>
          </h2>
          <p 
            className="
              text-sm text-gray-600 dark:text-gray-300 
              max-w-xs mx-auto
              sm:text-base
              sm:max-w-lg
              lg:text-xl
              lg:max-w-2xl
              leading-relaxed
            "
          >
            Todo lo que necesitas para gestionar tu dinero en un solo lugar
          </p>
        </motion.div>

        <div 
          className="
            flex justify-center 
            mb-6
            gap-2
            px-2
            sm:mb-8
            sm:gap-4
            sm:px-0
            flex-wrap
          "
        >
          {tabs.map((tab) => (
            <motion.button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`
                flex items-center 
                gap-1.5
                px-4 py-2.5
                text-sm
                sm:gap-2
                sm:px-6 sm:py-3
                sm:text-base
                rounded-full 
                font-semibold 
                transition-all duration-300
                ${activeTab === tab.id
                  ? 'bg-primary text-white shadow-lg shadow-primary/30'
                  : 'bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }
              `}
            >
              <tab.icon className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="hidden xs:inline sm:inline">{tab.label}</span>
              <span className="xs:hidden sm:hidden">
                {tab.id === 'transactions' ? 'Trans.' : tab.label}
              </span>
            </motion.button>
          ))}
        </div>

        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="
            bg-white dark:bg-gray-900 
            rounded-2xl
            shadow-xl
            p-4
            border border-gray-200 dark:border-gray-700
            sm:rounded-3xl
            sm:shadow-2xl
            sm:p-6
            lg:p-8
          "
        >
          {activeTab === 'dashboard' && (
            <div className="space-y-6 sm:space-y-8">
              <div 
                className="
                  bg-gradient-to-br from-primary to-teal-600 
                  rounded-xl
                  p-5
                  text-white
                  sm:rounded-2xl
                  sm:p-6
                  lg:p-8
                "
              >
                <p className="text-xs opacity-90 mb-1 sm:text-sm sm:mb-2">
                  Balance Total
                </p>
                <h3 
                  className="
                    text-3xl font-bold 
                    mb-4
                    sm:text-4xl
                    lg:text-5xl
                    sm:mb-6
                  "
                >
                  $12,450.00 <span className="text-lg sm:text-2xl lg:text-3xl font-normal opacity-90">USDC</span>
                </h3>
                <div className="flex items-center gap-2 text-xs sm:text-sm">
                  <TrendingUp className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  <span>+12.5% este mes</span>
                </div>
              </div>

              <div 
                className="
                  grid 
                  grid-cols-1
                  gap-3
                  sm:grid-cols-3
                  sm:gap-4
                  lg:gap-6
                "
              >
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="
                    p-4
                    bg-gray-50 dark:bg-gray-800 
                    rounded-xl 
                    text-left 
                    hover:shadow-lg 
                    transition-all
                    flex items-center gap-4
                    sm:flex-col
                    sm:items-start
                    sm:p-5
                    lg:p-6
                  "
                >
                  <div 
                    className="
                      w-10 h-10
                      bg-primary/10 
                      rounded-full 
                      flex items-center justify-center
                      flex-shrink-0
                      sm:w-12 sm:h-12
                      sm:mb-3
                      lg:mb-4
                    "
                  >
                    <ArrowUpRight className="w-5 h-5 text-primary sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm sm:text-base sm:mb-1 lg:mb-2">
                      Enviar
                    </h4>
                    <p className="text-xs text-gray-600 dark:text-gray-400 sm:text-sm">
                      Envía dinero al instante
                    </p>
                  </div>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="
                    p-4
                    bg-gray-50 dark:bg-gray-800 
                    rounded-xl 
                    text-left 
                    hover:shadow-lg 
                    transition-all
                    flex items-center gap-4
                    sm:flex-col
                    sm:items-start
                    sm:p-5
                    lg:p-6
                  "
                >
                  <div 
                    className="
                      w-10 h-10
                      bg-purple-500/10 
                      rounded-full 
                      flex items-center justify-center
                      flex-shrink-0
                      sm:w-12 sm:h-12
                      sm:mb-3
                      lg:mb-4
                    "
                  >
                    <Wallet className="w-5 h-5 text-purple-500 sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm sm:text-base sm:mb-1 lg:mb-2">
                      Recibir
                    </h4>
                    <p className="text-xs text-gray-600 dark:text-gray-400 sm:text-sm">
                      Recibe pagos fácilmente
                    </p>
                  </div>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="
                    p-4
                    bg-gray-50 dark:bg-gray-800 
                    rounded-xl 
                    text-left 
                    hover:shadow-lg 
                    transition-all
                    flex items-center gap-4
                    sm:flex-col
                    sm:items-start
                    sm:p-5
                    lg:p-6
                  "
                >
                  <div 
                    className="
                      w-10 h-10
                      bg-blue-500/10 
                      rounded-full 
                      flex items-center justify-center
                      flex-shrink-0
                      sm:w-12 sm:h-12
                      sm:mb-3
                      lg:mb-4
                    "
                  >
                    <TrendingUp className="w-5 h-5 text-blue-500 sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm sm:text-base sm:mb-1 lg:mb-2">
                      Convertir
                    </h4>
                    <p className="text-xs text-gray-600 dark:text-gray-400 sm:text-sm">
                      MXN a USDC al instante
                    </p>
                  </div>
                </motion.button>
              </div>
            </div>
          )}

          {activeTab === 'transactions' && (
            <div className="space-y-3 sm:space-y-4">
              <h3 
                className="
                  text-lg font-bold 
                  mb-4
                  sm:text-xl
                  lg:text-2xl
                  sm:mb-6
                "
              >
                Transacciones Recientes
              </h3>

              {transactionsData.map((transaction, index) => (
                <motion.div
                  key={transaction.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="
                    flex items-center justify-between 
                    p-3
                    bg-gray-50 dark:bg-gray-800 
                    rounded-lg
                    hover:shadow-md 
                    transition-all
                    sm:p-4
                    sm:rounded-xl
                  "
                >
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div 
                      className="
                        w-10 h-10
                        bg-primary/10 
                        rounded-full 
                        flex items-center justify-center
                        flex-shrink-0
                        sm:w-12 sm:h-12
                      "
                    >
                      <ArrowUpRight className="w-5 h-5 text-primary sm:w-6 sm:h-6" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm sm:text-base">
                        {transaction.type}
                      </p>
                      <p className="text-xs text-gray-600 dark:text-gray-400 sm:text-sm">
                        {transaction.date}
                      </p>
                    </div>
                  </div>

                  <div className="text-right">
                    <p 
                      className="
                        font-bold 
                        text-sm text-primary
                        sm:text-base
                        lg:text-lg
                      "
                    >
                      {transaction.amount}
                    </p>
                    <span 
                      className="
                        text-[10px]
                        px-2 py-0.5
                        bg-green-100 dark:bg-green-900 
                        text-green-700 dark:text-green-300 
                        rounded-full
                        sm:text-xs
                        sm:px-3 sm:py-1
                      "
                    >
                      {transaction.status}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {activeTab === 'cards' && (
            <div className="space-y-6 sm:space-y-8">
              <h3 
                className="
                  text-lg font-bold 
                  mb-4
                  sm:text-xl
                  lg:text-2xl
                  sm:mb-6
                "
              >
                Mis Tarjetas
              </h3>

              <div 
                className="
                  grid 
                  grid-cols-1
                  gap-4
                  sm:grid-cols-2
                  sm:gap-6
                "
              >
                <motion.div
                  whileHover={{ scale: 1.02, rotateY: 5 }}
                  className="
                    bg-gradient-to-br from-gray-900 to-gray-700 
                    rounded-xl
                    p-5
                    text-white 
                    relative 
                    overflow-hidden
                    sm:rounded-2xl
                    sm:p-6
                    lg:p-8
                  "
                  style={{ perspective: '1000px' }}
                >
                  <div 
                    className="
                      absolute top-0 right-0 
                      w-24 h-24
                      bg-primary/20 
                      rounded-full 
                      blur-2xl
                      sm:w-40 sm:h-40
                      sm:blur-3xl
                    " 
                  />
                  
                  <div className="relative z-10">
                    <Smartphone className="w-8 h-8 mb-4 sm:w-10 sm:h-10 lg:w-12 lg:h-12 sm:mb-6 lg:mb-8" />
                    
                    <p className="text-xs opacity-75 mb-1 sm:text-sm sm:mb-2">
                      Virtual Card
                    </p>
                    <p 
                      className="
                        text-lg font-mono 
                        mb-4
                        sm:text-xl
                        lg:text-2xl
                        sm:mb-6
                        lg:mb-8
                      "
                    >
                      •••• •••• •••• 4521
                    </p>
                    
                    <div className="flex justify-between items-end">
                      <div>
                        <p className="text-[10px] opacity-75 sm:text-xs">Balance</p>
                        <p className="text-base font-bold sm:text-lg lg:text-xl">
                          $8,450 USDC
                        </p>
                      </div>
                      <CreditCard className="w-8 h-8 opacity-50 sm:w-10 sm:h-10" />
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02, rotateY: 5 }}
                  className="
                    bg-gradient-to-br from-primary to-teal-600 
                    rounded-xl
                    p-5
                    text-white 
                    relative 
                    overflow-hidden
                    sm:rounded-2xl
                    sm:p-6
                    lg:p-8
                  "
                  style={{ perspective: '1000px' }}
                >
                  <div 
                    className="
                      absolute top-0 right-0 
                      w-24 h-24
                      bg-white/10 
                      rounded-full 
                      blur-2xl
                      sm:w-40 sm:h-40
                      sm:blur-3xl
                    " 
                  />
                  
                  <div className="relative z-10">
                    <CreditCard className="w-8 h-8 mb-4 sm:w-10 sm:h-10 lg:w-12 lg:h-12 sm:mb-6 lg:mb-8" />
                    
                    <p className="text-xs opacity-90 mb-1 sm:text-sm sm:mb-2">
                      Physical Card
                    </p>
                    <p 
                      className="
                        text-lg font-mono 
                        mb-4
                        sm:text-xl
                        lg:text-2xl
                        sm:mb-6
                        lg:mb-8
                      "
                    >
                      •••• •••• •••• 8742
                    </p>
                    
                    <div className="flex justify-between items-end">
                      <div>
                        <p className="text-[10px] opacity-90 sm:text-xs">Balance</p>
                        <p className="text-base font-bold sm:text-lg lg:text-xl">
                          $4,000 USDC
                        </p>
                      </div>
                      <Wallet className="w-8 h-8 opacity-75 sm:w-10 sm:h-10" />
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
