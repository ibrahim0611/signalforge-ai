export const forexPairs = [
  {
    symbol: 'EUR/USD',
    name: 'Euro / US Dollar',
    price: 1.0892,
    change: 0.23,
    changePercent: '+0.23%',
    volume: '2.4B',
    category: 'forex'
  },
  {
    symbol: 'GBP/USD',
    name: 'British Pound / US Dollar',
    price: 1.2734,
    change: -0.15,
    changePercent: '-0.15%',
    volume: '1.8B',
    category: 'forex'
  },
  {
    symbol: 'USD/JPY',
    name: 'US Dollar / Japanese Yen',
    price: 148.52,
    change: 0.42,
    changePercent: '+0.42%',
    volume: '3.1B',
    category: 'forex'
  },
  {
    symbol: 'AUD/USD',
    name: 'Australian Dollar / US Dollar',
    price: 0.6523,
    change: 0.18,
    changePercent: '+0.18%',
    volume: '1.2B',
    category: 'forex'
  },
  {
    symbol: 'USD/CAD',
    name: 'US Dollar / Canadian Dollar',
    price: 1.3542,
    change: -0.09,
    changePercent: '-0.09%',
    volume: '1.5B',
    category: 'forex'
  },
  {
    symbol: 'NZD/USD',
    name: 'New Zealand Dollar / US Dollar',
    price: 0.5987,
    change: 0.31,
    changePercent: '+0.31%',
    volume: '890M',
    category: 'forex'
  }
];

export const metalPairs = [
  {
    symbol: 'XAU/USD',
    name: 'Gold / US Dollar',
    price: 2034.50,
    change: 12.30,
    changePercent: '+0.61%',
    volume: '4.2B',
    category: 'metal'
  },
  {
    symbol: 'XAG/USD',
    name: 'Silver / US Dollar',
    price: 24.68,
    change: -0.42,
    changePercent: '-1.67%',
    volume: '1.1B',
    category: 'metal'
  }
];

export const cryptoPairs = [
  {
    symbol: 'BTC/USD',
    name: 'Bitcoin / US Dollar',
    price: 43127.00,
    change: 1234.50,
    changePercent: '+2.95%',
    volume: '28.5B',
    category: 'crypto'
  },
  {
    symbol: 'ETH/USD',
    name: 'Ethereum / US Dollar',
    price: 2289.40,
    change: -45.20,
    changePercent: '-1.94%',
    volume: '15.2B',
    category: 'crypto'
  },
  {
    symbol: 'SOL/USD',
    name: 'Solana / US Dollar',
    price: 98.73,
    change: 5.42,
    changePercent: '+5.81%',
    volume: '3.8B',
    category: 'crypto'
  }
];

export const timeframes = [
  { value: '1m', label: '1 Minute' },
  { value: '5m', label: '5 Minutes' },
  { value: '15m', label: '15 Minutes' },
  { value: '30m', label: '30 Minutes' },
  { value: '1h', label: '1 Hour' },
  { value: '4h', label: '4 Hours' },
  { value: '1d', label: '1 Day' },
  { value: '1w', label: '1 Week' }
];

export const performanceStats = {
  accuracy: 87.3,
  totalSignals: 15420,
  activeUsers: 2847,
  avgSpeed: 156
};

export const pricingPlans = [
  {
    name: 'Starter',
    price: 19,
    period: 'month',
    description: 'Perfect for beginners',
    features: [
      'Up to 10 signals per day',
      'Basic market analysis',
      'Email support',
      'Mobile app access',
      '7-day history'
    ],
    popular: false,
    color: 'blue'
  },
  {
    name: 'Pro',
    price: 49,
    period: 'month',
    description: 'For serious traders',
    features: [
      'Unlimited signals',
      'Advanced AI analysis',
      'Priority support 24/7',
      'Custom alerts',
      'Full history access',
      'Risk management tools'
    ],
    popular: true,
    color: 'purple'
  },
  {
    name: 'Elite',
    price: 99,
    period: 'month',
    description: 'Maximum performance',
    features: [
      'Everything in Pro',
      'Dedicated account manager',
      'Custom signal parameters',
      'API access',
      'Backtesting tools',
      'Private Discord community',
      'Weekly strategy calls'
    ],
    popular: false,
    color: 'cyan'
  }
];

export const generateSignal = (market, timeframe) => {
  const signalTypes = ['BUY', 'SELL'];
  const signalType = signalTypes[Math.floor(Math.random() * signalTypes.length)];
  
  let basePrice;
  if (market.includes('EUR') || market.includes('GBP') || market.includes('AUD') || market.includes('NZD')) {
    basePrice = Math.random() * 0.5 + 1.0;
  } else if (market.includes('JPY')) {
    basePrice = Math.random() * 20 + 140;
  } else if (market.includes('XAU')) {
    basePrice = Math.random() * 100 + 2000;
  } else if (market.includes('XAG')) {
    basePrice = Math.random() * 5 + 23;
  } else if (market.includes('BTC')) {
    basePrice = Math.random() * 5000 + 40000;
  } else if (market.includes('ETH')) {
    basePrice = Math.random() * 500 + 2000;
  } else if (market.includes('SOL')) {
    basePrice = Math.random() * 20 + 90;
  } else {
    basePrice = Math.random() * 0.5 + 1.0;
  }

  const entry = parseFloat(basePrice.toFixed(market.includes('JPY') ? 2 : 4));
  
  let tp, sl;
  if (signalType === 'BUY') {
    tp = parseFloat((entry * 1.015).toFixed(market.includes('JPY') ? 2 : 4));
    sl = parseFloat((entry * 0.995).toFixed(market.includes('JPY') ? 2 : 4));
  } else {
    tp = parseFloat((entry * 0.985).toFixed(market.includes('JPY') ? 2 : 4));
    sl = parseFloat((entry * 1.005).toFixed(market.includes('JPY') ? 2 : 4));
  }

  const confidence = Math.floor(Math.random() * 15 + 78);
  const timeframeLabel = timeframes.find(tf => tf.value === timeframe)?.label || timeframe;

  return {
    id: Date.now().toString(),
    market,
    timeframe: timeframeLabel,
    type: signalType,
    entry,
    takeProfit: tp,
    stopLoss: sl,
    confidence,
    timestamp: new Date().toLocaleString(),
    status: 'Active'
  };
};

export const allPairs = [...forexPairs, ...metalPairs, ...cryptoPairs];

export const getMarketsByCategory = (category) => {
  switch(category) {
    case 'forex':
      return forexPairs;
    case 'metals':
      return metalPairs;
    case 'crypto':
      return cryptoPairs;
    default:
      return allPairs;
  }
};

export const recentSignals = [
  {
    id: '1',
    market: 'EUR/USD',
    type: 'BUY',
    entry: 1.0892,
    takeProfit: 1.0956,
    stopLoss: 1.0845,
    confidence: 89,
    timestamp: '2024-01-15 14:32',
    status: 'Active',
    pnl: null
  },
  {
    id: '2',
    market: 'XAU/USD',
    type: 'SELL',
    entry: 2034.50,
    takeProfit: 2018.30,
    stopLoss: 2045.20,
    confidence: 85,
    timestamp: '2024-01-15 13:15',
    status: 'Closed',
    pnl: 245.80
  },
  {
    id: '3',
    market: 'BTC/USD',
    type: 'BUY',
    entry: 43127.00,
    takeProfit: 44200.00,
    stopLoss: 42500.00,
    confidence: 91,
    timestamp: '2024-01-15 12:48',
    status: 'Active',
    pnl: null
  },
  {
    id: '4',
    market: 'GBP/USD',
    type: 'SELL',
    entry: 1.2734,
    takeProfit: 1.2680,
    stopLoss: 1.2765,
    confidence: 83,
    timestamp: '2024-01-15 11:20',
    status: 'Closed',
    pnl: -128.50
  },
  {
    id: '5',
    market: 'ETH/USD',
    type: 'BUY',
    entry: 2289.40,
    takeProfit: 2350.00,
    stopLoss: 2245.00,
    confidence: 87,
    timestamp: '2024-01-15 10:55',
    status: 'Active',
    pnl: null
  }
];