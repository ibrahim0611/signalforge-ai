import React from 'react';
import { Target, Signal, Users, Zap } from 'lucide-react';

const Performance = () => {
  const stats = [
    {
      icon: Target,
      number: '87.3%',
      label: 'Win Rate',
      description: 'Consistent accuracy'
    },
    {
      icon: Signal,
      number: '15,420+',
      label: 'Signals Generated',
      description: 'Proven track record'
    },
    {
      icon: Users,
      number: '2,847',
      label: 'Active Users',
      description: 'Growing community'
    },
    {
      icon: Zap,
      number: '156ms',
      label: 'Avg Speed',
      description: 'Lightning fast'
    }
  ];

  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Platform Performance
          </h2>
          <p className="text-gray-400 text-lg">
            Real results from real traders using SignalForge AI
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="bg-slate-900/70 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
                    <div className="relative w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  <div className="text-5xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-purple-600 transition-all">
                    {stat.number}
                  </div>

                  <div className="text-xl font-semibold text-gray-300 mb-2">
                    {stat.label}
                  </div>

                  <div className="text-sm text-gray-500">
                    {stat.description}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-slate-900/70 backdrop-blur-xl border border-white/10 rounded-xl p-8">
            <p className="text-gray-400 text-lg mb-4">
              Join thousands of traders who trust SignalForge AI for their trading decisions
            </p>
            <div className="flex items-center justify-center gap-2 text-gray-500">
              <Zap className="w-4 h-4" />
              <span className="text-sm">Updated in real-time</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Performance;