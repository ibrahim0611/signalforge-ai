import React from 'react';
import { Wifi, BarChart3, TrendingUp } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      icon: Wifi,
      title: 'Connect',
      description: 'Link your trading account securely in seconds. Our platform supports all major brokers and exchanges with bank-level encryption.'
    },
    {
      number: '02',
      icon: BarChart3,
      title: 'Analyze',
      description: 'Our AI algorithms analyze millions of data points across market trends, technical indicators, and sentiment in real-time.'
    },
    {
      number: '03',
      icon: TrendingUp,
      title: 'Profit',
      description: 'Receive precision signals with entry, stop-loss, and take-profit levels. Execute trades confidently with our proven system.'
    }
  ];

  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            How It Works
          </h2>
          <p className="text-gray-400 text-lg">
            Three simple steps to start receiving AI-powered trading signals
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500/30 to-transparent transform -translate-y-1/2 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={index}
                  className="relative group"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="bg-slate-900/70 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 h-full">
                    <div className="flex justify-center mb-6">
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
                        <div className="relative w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                          <Icon className="w-10 h-10 text-white" />
                        </div>
                      </div>
                    </div>

                    <div className="text-center mb-4">
                      <div className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 mb-2">
                        {step.number}
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-3">
                        {step.title}
                      </h3>
                      <p className="text-gray-400 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-20">
                      <div className="w-8 h-8 border-t-2 border-r-2 border-blue-500/50 transform rotate-45"></div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;