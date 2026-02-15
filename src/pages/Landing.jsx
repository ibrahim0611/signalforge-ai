import React from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, BarChart3, Zap, Target, Users, Clock, CheckCircle, ArrowRight, Menu, X } from 'lucide-react';
import { useState } from 'react';

const Landing = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const Navbar = () => (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#060b18]/80 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <TrendingUp className="w-8 h-8 text-blue-500" />
            <span className="text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">SignalForge AI</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
            <a href="#markets" className="text-gray-300 hover:text-white transition-colors">Markets</a>
            <a href="#pricing" className="text-gray-300 hover:text-white transition-colors">Pricing</a>
            <Link to="/login" className="text-gray-300 hover:text-white transition-colors">Login</Link>
            <Link to="/signup" className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold hover:opacity-90 transition-opacity">Get Started</Link>
          </div>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-white">
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0f172a]/95 backdrop-blur-xl border-t border-white/10">
          <div className="px-4 py-4 space-y-3">
            <a href="#features" className="block text-gray-300 hover:text-white transition-colors">Features</a>
            <a href="#markets" className="block text-gray-300 hover:text-white transition-colors">Markets</a>
            <a href="#pricing" className="block text-gray-300 hover:text-white transition-colors">Pricing</a>
            <Link to="/login" className="block text-gray-300 hover:text-white transition-colors">Login</Link>
            <Link to="/signup" className="block px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold text-center">Get Started</Link>
          </div>
        </div>
      )}
    </nav>
  );

  const Hero = () => (
    <section className="relative pt-32 pb-20 px-4 overflow-hidden">
      <div className="candlestick-bg"></div>
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <div className="inline-block mb-4 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full">
          <span className="text-sm text-gray-300">Precision Signals for Forex, Metals & Crypto</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Trade Smarter with
          <br />
          <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">AI-Powered Signals</span>
        </h1>
        <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
          Get real-time trading signals powered by advanced machine learning algorithms. Join thousands of traders maximizing their profits with SignalForge AI.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/signup" className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold text-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
            Start Trading Now <ArrowRight className="w-5 h-5" />
          </Link>
          <a href="#features" className="px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg font-semibold text-lg hover:bg-white/10 transition-colors">
            Learn More
          </a>
        </div>
      </div>
    </section>
  );

  const LiveSignalGenerator = () => {
    const [market, setMarket] = useState('forex');
    const [pair, setPair] = useState('EUR/USD');
    const [timeframe, setTimeframe] = useState('1H');
    const [signal, setSignal] = useState(null);

    const pairs = {
      forex: ['EUR/USD', 'GBP/USD', 'USD/JPY'],
      metals: ['XAU/USD', 'XAG/USD'],
      crypto: ['BTC/USD', 'ETH/USD']
    };

    const generateSignal = () => {
      const type = Math.random() > 0.5 ? 'BUY' : 'SELL';
      const entry = (Math.random() * 1000 + 1000).toFixed(2);
      const tp = type === 'BUY' ? (parseFloat(entry) + Math.random() * 50).toFixed(2) : (parseFloat(entry) - Math.random() * 50).toFixed(2);
      const sl = type === 'BUY' ? (parseFloat(entry) - Math.random() * 30).toFixed(2) : (parseFloat(entry) + Math.random() * 30).toFixed(2);
      setSignal({ type, pair, timeframe, entry, tp, sl, confidence: (Math.random() * 15 + 85).toFixed(1) });
    };

    return (
      <section id="features" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Live Signal Generator</h2>
            <p className="text-gray-400">Experience our AI in action - generate a live trading signal</p>
          </div>
          <div className="bg-[rgba(15,23,42,0.7)] backdrop-blur-xl border border-white/10 rounded-2xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div>
                <label className="block text-sm text-gray-400 mb-2">Market</label>
                <select value={market} onChange={(e) => { setMarket(e.target.value); setPair(pairs[e.target.value][0]); }} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500">
                  <option value="forex">Forex</option>
                  <option value="metals">Metals</option>
                  <option value="crypto">Crypto</option>
                </select>
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2">Pair</label>
                <select value={pair} onChange={(e) => setPair(e.target.value)} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500">
                  {pairs[market].map(p => <option key={p} value={p}>{p}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2">Timeframe</label>
                <select value={timeframe} onChange={(e) => setTimeframe(e.target.value)} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500">
                  <option value="5M">5 Minutes</option>
                  <option value="15M">15 Minutes</option>
                  <option value="1H">1 Hour</option>
                  <option value="4H">4 Hours</option>
                  <option value="1D">Daily</option>
                </select>
              </div>
            </div>
            <button onClick={generateSignal} className="w-full py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold text-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
              <Zap className="w-5 h-5" /> Generate Signal
            </button>
            {signal && (
              <div className="mt-6 p-6 bg-white/5 rounded-xl border border-white/10 animate-fadeIn">
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-2xl font-bold ${signal.type === 'BUY' ? 'text-green-400' : 'text-red-400'}`}>{signal.type}</span>
                  <span className="text-sm text-gray-400">Confidence: {signal.confidence}%</span>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div>
                    <div className="text-sm text-gray-400 mb-1">Pair</div>
                    <div className="font-semibold">{signal.pair}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-400 mb-1">Entry</div>
                    <div className="font-semibold">{signal.entry}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-400 mb-1">Take Profit</div>
                    <div className="font-semibold text-green-400">{signal.tp}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-400 mb-1">Stop Loss</div>
                    <div className="font-semibold text-red-400">{signal.sl}</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    );
  };

  const Markets = () => (
    <section id="markets" className="py-20 px-4 bg-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Supported Markets</h2>
          <p className="text-gray-400">Trade across multiple asset classes with precision signals</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[rgba(15,23,42,0.7)] backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-blue-500/50 transition-all">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
              <TrendingUp className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Forex</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-blue-500" /> EUR/USD</li>
              <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-blue-500" /> GBP/USD</li>
              <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-blue-500" /> USD/JPY</li>
            </ul>
          </div>
          <div className="bg-[rgba(15,23,42,0.7)] backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-blue-500/50 transition-all">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
              <Target className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Metals</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-blue-500" /> XAU/USD (Gold)</li>
              <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-blue-500" /> XAG/USD (Silver)</li>
            </ul>
          </div>
          <div className="bg-[rgba(15,23,42,0.7)] backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-blue-500/50 transition-all">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
              <BarChart3 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Crypto</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-blue-500" /> BTC/USD</li>
              <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-blue-500" /> ETH/USD</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );

  const HowItWorks = () => (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-gray-400">Three simple steps to start trading smarter</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl font-bold">1</div>
            <h3 className="text-2xl font-bold mb-4">Sign Up</h3>
            <p className="text-gray-400">Create your account in seconds and choose your perfect plan</p>
          </div>
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl font-bold">2</div>
            <h3 className="text-2xl font-bold mb-4">Receive Signals</h3>
            <p className="text-gray-400">Get real-time AI-powered trading signals directly to your dashboard</p>
          </div>
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl font-bold">3</div>
            <h3 className="text-2xl font-bold mb-4">Execute & Profit</h3>
            <p className="text-gray-400">Place trades with confidence and watch your portfolio grow</p>
          </div>
        </div>
      </div>
    </section>
  );

  const Performance = () => (
    <section className="py-20 px-4 bg-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Our Performance</h2>
          <p className="text-gray-400">Real results from our AI-powered signal platform</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-[rgba(15,23,42,0.7)] backdrop-blur-xl border border-white/10 rounded-2xl p-8 text-center">
            <div className="text-5xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent mb-2">87.3%</div>
            <div className="text-gray-400">Signal Accuracy</div>
          </div>
          <div className="bg-[rgba(15,23,42,0.7)] backdrop-blur-xl border border-white/10 rounded-2xl p-8 text-center">
            <div className="text-5xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent mb-2">15,420</div>
            <div className="text-gray-400">Signals Generated</div>
          </div>
          <div className="bg-[rgba(15,23,42,0.7)] backdrop-blur-xl border border-white/10 rounded-2xl p-8 text-center">
            <div className="text-5xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent mb-2">2,847</div>
            <div className="text-gray-400">Active Users</div>
          </div>
          <div className="bg-[rgba(15,23,42,0.7)] backdrop-blur-xl border border-white/10 rounded-2xl p-8 text-center">
            <div className="text-5xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent mb-2">156ms</div>
            <div className="text-gray-400">Avg Response Time</div>
          </div>
        </div>
      </div>
    </section>
  );

  const Pricing = () => (
    <section id="pricing" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Choose Your Plan</h2>
          <p className="text-gray-400">Flexible pricing for traders of all levels</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[rgba(15,23,42,0.7)] backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-blue-500/50 transition-all">
            <h3 className="text-2xl font-bold mb-2">Starter</h3>
            <div className="text-5xl font-bold mb-6">$19<span className="text-xl text-gray-400">/mo</span></div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-2 text-gray-300"><CheckCircle className="w-5 h-5 text-blue-500" /> 50 signals/month</li>
              <li className="flex items-center gap-2 text-gray-300"><CheckCircle className="w-5 h-5 text-blue-500" /> Basic analytics</li>
              <li className="flex items-center gap-2 text-gray-300"><CheckCircle className="w-5 h-5 text-blue-500" /> Email support</li>
              <li className="flex items-center gap-2 text-gray-300"><CheckCircle className="w-5 h-5 text-blue-500" /> 1 market access</li>
            </ul>
            <Link to="/signup" className="block w-full py-3 bg-white/10 border border-white/20 rounded-lg font-semibold text-center hover:bg-white/20 transition-colors">Get Started</Link>
          </div>
          <div className="bg-[rgba(15,23,42,0.7)] backdrop-blur-xl border-2 border-blue-500 rounded-2xl p-8 relative transform scale-105 shadow-2xl shadow-blue-500/20">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-500 to-purple-600 px-4 py-1 rounded-full text-sm font-semibold">Most Popular</div>
            <h3 className="text-2xl font-bold mb-2">Pro</h3>
            <div className="text-5xl font-bold mb-6">$49<span className="text-xl text-gray-400">/mo</span></div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-2 text-gray-300"><CheckCircle className="w-5 h-5 text-blue-500" /> Unlimited signals</li>
              <li className="flex items-center gap-2 text-gray-300"><CheckCircle className="w-5 h-5 text-blue-500" /> Advanced analytics</li>
              <li className="flex items-center gap-2 text-gray-300"><CheckCircle className="w-5 h-5 text-blue-500" /> Priority support</li>
              <li className="flex items-center gap-2 text-gray-300"><CheckCircle className="w-5 h-5 text-blue-500" /> All markets access</li>
              <li className="flex items-center gap-2 text-gray-300"><CheckCircle className="w-5 h-5 text-blue-500" /> Mobile alerts</li>
            </ul>
            <Link to="/signup" className="block w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold text-center hover:opacity-90 transition-opacity">Get Started</Link>
          </div>
          <div className="bg-[rgba(15,23,42,0.7)] backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-blue-500/50 transition-all">
            <h3 className="text-2xl font-bold mb-2">Elite</h3>
            <div className="text-5xl font-bold mb-6">$99<span className="text-xl text-gray-400">/mo</span></div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-2 text-gray-300"><CheckCircle className="w-5 h-5 text-blue-500" /> Everything in Pro</li>
              <li className="flex items-center gap-2 text-gray-300"><CheckCircle className="w-5 h-5 text-blue-500" /> Custom strategies</li>
              <li className="flex items-center gap-2 text-gray-300"><CheckCircle className="w-5 h-5 text-blue-500" /> 1-on-1 coaching</li>
              <li className="flex items-center gap-2 text-gray-300"><CheckCircle className="w-5 h-5 text-blue-500" /> API access</li>
              <li className="flex items-center gap-2 text-gray-300"><CheckCircle className="w-5 h-5 text-blue-500" /> White-label option</li>
            </ul>
            <Link to="/signup" className="block w-full py-3 bg-white/10 border border-white/20 rounded-lg font-semibold text-center hover:bg-white/20 transition-colors">Get Started</Link>
          </div>
        </div>
      </div>
    </section>
  );

  const Footer = () => (
    <footer className="bg-[#0f172a] border-t border-white/10 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <TrendingUp className="w-8 h-8 text-blue-500" />
              <span className="text-xl font-bold">SignalForge AI</span>
            </div>
            <p className="text-gray-400 text-sm">Precision Signals for Forex, Metals & Crypto</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#markets" className="hover:text-white transition-colors">Markets</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Disclaimer</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">© 2024 SignalForge AI. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-gray-400 hover:text-white transition-colors"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg></a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg></a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg></a>
          </div>
        </div>
      </div>
    </footer>
  );

  return (
    <div className="min-h-screen bg-[#060b18] text-white">
      <Navbar />
      <Hero />
      <LiveSignalGenerator />
      <Markets />
      <HowItWorks />
      <Performance />
      <Pricing />
      <Footer />
    </div>
  );
};

export default Landing;