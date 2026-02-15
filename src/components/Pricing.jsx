import React from 'react';
import { Check, Star, Crown } from 'lucide-react';
import { Link } from 'react-router-dom';

const Pricing = () => {
  const plans = [
    {
      name: 'Starter',
      price: 19,
      icon: Check,
      description: 'Perfect for beginners',
      features: [
        '5 signals per day',
        'Forex only',
        'Email alerts',
        'Basic analytics',
        'Community support'
      ],
      popular: false,
      gradient: 'from-gray-500 to-gray-600'
    },
    {
      name: 'Pro',
      price: 49,
      icon: Star,
      description: 'Most popular choice',
      features: [
        '25 signals per day',
        'All markets',
        'Push + Email alerts',
        'Advanced analytics',
        'Priority support',
        'Risk management tools'
      ],
      popular: true,
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      name: 'Elite',
      price: 99,
      icon: Crown,
      description: 'For serious traders',
      features: [
        'Unlimited signals',
        'All markets',
        'All alert types',
        'Full analytics suite',
        '1-on-1 support',
        'API access',
        'Custom indicators',
        'White-glove onboarding'
      ],
      popular: false,
      gradient: 'from-purple-500 to-pink-600'
    }
  ];

  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-gray-400 text-lg">
            Choose the perfect plan for your trading journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            return (
              <div
                key={index}
                className={`relative bg-slate-900/70 backdrop-blur-xl border rounded-2xl p-8 hover:scale-105 transition-all duration-300 ${
                  plan.popular
                    ? 'border-blue-500 shadow-2xl shadow-blue-500/20'
                    : 'border-white/10 hover:border-white/20'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      MOST POPULAR
                    </div>
                  </div>
                )}

                <div className="text-center mb-8">
                  <div className="flex justify-center mb-4">
                    <div className={`w-16 h-16 bg-gradient-to-r ${plan.gradient} rounded-full flex items-center justify-center`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 text-sm mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-5xl font-bold text-white">${plan.price}</span>
                    <span className="text-gray-400 ml-2">/month</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <div className={`flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-r ${plan.gradient} flex items-center justify-center mt-0.5`}>
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/signup"
                  className={`block w-full py-4 rounded-lg font-semibold text-center transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white shadow-lg'
                      : 'bg-slate-800/50 hover:bg-slate-700/50 text-white border border-white/10'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400">
            All plans include 14-day money-back guarantee • Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;