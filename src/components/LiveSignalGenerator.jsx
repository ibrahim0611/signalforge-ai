import React, { useState } from 'react';
import { Zap } from 'lucide-react';
import { generateSignal } from '../utils/signalData';
import SignalCard from './SignalCard';

const LiveSignalGenerator = () => {
  const [market, setMarket] = useState('Forex');
  const [timeframe, setTimeframe] = useState('15m');
  const [signal, setSignal] = useState(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerateSignal = () => {
    setIsGenerating(true);
    setTimeout(() => {
      const newSignal = generateSignal(market, timeframe);
      setSignal(newSignal);
      setIsGenerating(false);
    }, 800);
  };

  return (
    <section className="py-20 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Live Signal Generator
          </h2>
          <p className="text-gray-400 text-lg">
            Generate real-time trading signals powered by AI
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-slate-900/70 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Market
                </label>
                <select
                  value={market}
                  onChange={(e) => setMarket(e.target.value)}
                  className="w-full bg-slate-800/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                >
                  <option value="Forex">Forex</option>
                  <option value="Metals">Metals</option>
                  <option value="Crypto">Crypto</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Timeframe
                </label>
                <select
                  value={timeframe}
                  onChange={(e) => setTimeframe(e.target.value)}
                  className="w-full bg-slate-800/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                >
                  <option value="5m">5 Minutes</option>
                  <option value="15m">15 Minutes</option>
                  <option value="30m">30 Minutes</option>
                  <option value="1h">1 Hour</option>
                  <option value="4h">4 Hours</option>
                  <option value="1d">1 Day</option>
                </select>
              </div>
            </div>

            <button
              onClick={handleGenerateSignal}
              disabled={isGenerating}
              className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105"
            >
              <Zap className={`w-5 h-5 ${isGenerating ? 'animate-pulse' : ''}`} />
              {isGenerating ? 'Generating...' : 'Generate Signal'}
            </button>
          </div>

          {signal && (
            <div className="mt-8 animate-fadeIn">
              <SignalCard signal={signal} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default LiveSignalGenerator;