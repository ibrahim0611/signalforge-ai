import React from 'react';
import { useNavigate } from 'react-router-dom';
import CandlestickBackground from './CandlestickBackground';
import { Zap, BarChart3, Shield } from 'lucide-react';

const Hero = () => {
  const navigate = useNavigate();

  const stats = [
    { icon: Shield, label: '87.3% Accuracy', description: 'Proven performance' },
    { icon: Zap, label: '15K+ Signals', description: 'Daily insights' },
    { icon: BarChart3, label: 'Real-time', description: 'Live market data' },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <CandlestickBackground />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full">
            <Zap className="w-4 h-4 text-blue-500" />
            <span className="text-sm text-gray-300">AI-Powered Trading Signals</span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 bg-clip-text text-transparent animate-gradient">
              Precision Signals
            </span>
            <br />
            <span className="text-white">for Forex, Metals & Crypto</span>
          </h1>

          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            Leverage advanced AI algorithms to receive real-time trading signals with
            unmatched accuracy. Make informed decisions across Forex, Precious Metals,
            and Cryptocurrency markets.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <button
              onClick={() => navigate('/signup')}
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-semibold text-lg hover:shadow-2xl hover:shadow-blue-500/50 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Zap className="w-5 h-5" />
              Get Started
            </button>
            <button
              onClick={() => {
                const element = document.getElementById('signals');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="w-full sm:w-auto px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 text-white rounded-xl font-semibold text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <BarChart3 className="w-5 h-5" />
              View Signals
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">{stat.label}</div>
                  <div className="text-sm text-gray-400">{stat.description}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#060b18] pointer-events-none" />
    </section>
  );
};

export default Hero;