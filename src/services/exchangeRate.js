
const BASE_URL = 'https://api.exchangerate-api.com/v4/latest';


export const getExchangeRates = async (baseCurrency = 'MXN') => {
  try {
    const response = await fetch(`${BASE_URL}/${baseCurrency}`);
    
    if (!response.ok) {
      throw new Error('Error al obtener tasas de cambio');
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error en getExchangeRates:', error);
    throw error;
  }
};


 
export const convertCurrency = async (amount, from = 'MXN', to = 'USD') => {
  try {
    console.log(' Convirtiendo:', { amount, from, to });
    
    
    const response = await fetch(`${BASE_URL}/${from}`);
    
    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`);
    }
    
    const data = await response.json();
    console.log(' Datos recibidos:', data);
    
    
    if (!data.rates[to]) {
      throw new Error(`Moneda ${to} no encontrada`);
    }
    
    const rate = data.rates[to];
    const convertedAmount = amount * rate;
    
    console.log(' Resultado:', {
      rate,
      convertedAmount,
      from,
      to
    });
    
    return {
      conversionRate: rate,
      convertedAmount: convertedAmount,
      from: from,
      to: to,
      amount: amount,
      date: data.date
    };
  } catch (error) {
    console.error(' Error en convertCurrency:', error);
    throw error;
  }
};


export const POPULAR_CURRENCIES = [
  { code: 'USD', name: 'Dólar Estadounidense', symbol: '$', flag: '🇺🇸' },
  { code: 'EUR', name: 'Euro', symbol: '€', flag: '🇪🇺' },
  { code: 'GBP', name: 'Libra Esterlina', symbol: '£', flag: '🇬🇧' },
  { code: 'JPY', name: 'Yen Japonés', symbol: '¥', flag: '🇯🇵' },
  { code: 'CAD', name: 'Dólar Canadiense', symbol: 'C$', flag: '🇨🇦' },
  { code: 'AUD', name: 'Dólar Australiano', symbol: 'A$', flag: '🇦🇺' },
  { code: 'CHF', name: 'Franco Suizo', symbol: 'CHF', flag: '🇨🇭' },
  { code: 'CNY', name: 'Yuan Chino', symbol: '¥', flag: '🇨🇳' },
  { code: 'BRL', name: 'Real Brasileño', symbol: 'R$', flag: '🇧🇷' },
  { code: 'ARS', name: 'Peso Argentino', symbol: '$', flag: '🇦🇷' },
];