import React, { useState } from 'react';
import { DollarSign, Gem, Bitcoin } from 'lucide-react';
import { forexPairs, metalsPairs, cryptoPairs } from '../utils/signalData';

const Markets = () => {
  const [activeTab, setActiveTab] = useState('Forex');

  const tabs = [
    { name: 'Forex', icon: DollarSign, data: forexPairs },
    { name: 'Metals', icon: Gem, data: metalsPairs },
    { name: 'Crypto', icon: Bitcoin, data: cryptoPairs }
  ];

  const activeData = tabs.find(tab => tab.name === activeTab)?.data || [];

  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Markets We Cover
          </h2>
          <p className="text-gray-400 text-lg">
            Real-time signals across multiple asset classes
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.name}
                onClick={() => setActiveTab(tab.name)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === tab.name
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg scale-105'
                    : 'bg-slate-900/50 text-gray-400 hover:text-white border border-white/10 hover:border-white/20'
                }`}
              >
                <Icon className="w-5 h-5" />
                {tab.name}
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activeData.map((pair, index) => (
            <div
              key={index}
              className="bg-slate-900/70 backdrop-blur-xl border border-white/10 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">{pair.name}</h3>
                  <p className="text-gray-500 text-sm">{pair.symbol}</p>
                </div>
                <div
                  className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    pair.change > 0
                      ? 'bg-green-500/20 text-green-400'
                      : 'bg-red-500/20 text-red-400'
                  }`}
                >
                  {pair.change > 0 ? '+' : ''}{pair.change}%
                </div>
              </div>

              <div className="flex justify-between items-end">
                <div>
                  <p className="text-3xl font-bold text-white">{pair.price}</p>
                </div>
                <div className="text-right">
                  <p className="text-gray-500 text-xs mb-1">24h Volume</p>
                  <p className="text-gray-300 font-semibold">{pair.volume}</p>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-white/10">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">High:</span>
                  <span className="text-gray-300 font-semibold">{pair.high}</span>
                </div>
                <div className="flex justify-between text-sm mt-1">
                  <span className="text-gray-500">Low:</span>
                  <span className="text-gray-300 font-semibold">{pair.low}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Markets;