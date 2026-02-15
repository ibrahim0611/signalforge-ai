import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { LayoutDashboard, Signal, BarChart3, Wallet, Settings, Bell, ChevronLeft, Menu, TrendingUp, LogOut } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeNav, setActiveNav] = useState('overview');
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user, navigate]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSidebarOpen(false);
      } else {
        setSidebarOpen(true);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const navItems = [
    { id: 'overview', label: 'Overview', icon: LayoutDashboard },
    { id: 'signals', label: 'Signals', icon: Signal },
    { id: 'markets', label: 'Markets', icon: BarChart3 },
    { id: 'portfolio', label: 'Portfolio', icon: Wallet },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  const stats = [
    { label: 'Balance', value: '$12,450', change: '+2.5%', positive: true },
    { label: "Today's P&L", value: '+$342', change: '+12.3%', positive: true },
    { label: 'Active Signals', value: '7', change: '3 new', positive: true },
    { label: 'Win Rate', value: '87.3%', change: '+1.2%', positive: true },
  ];

  const recentSignals = [
    { pair: 'EUR/USD', type: 'BUY', entry: '1.0850', tp: '1.0920', sl: '1.0800', status: 'Won', pnl: '+$125' },
    { pair: 'GBP/USD', type: 'SELL', entry: '1.2650', tp: '1.2580', sl: '1.2700', status: 'Won', pnl: '+$98' },
    { pair: 'XAU/USD', type: 'BUY', entry: '1985.50', tp: '1995.00', sl: '1980.00', status: 'Active', pnl: '+$45' },
    { pair: 'BTC/USD', type: 'BUY', entry: '43250', tp: '44000', sl: '42800', status: 'Active', pnl: '+$180' },
    { pair: 'USD/JPY', type: 'SELL', entry: '149.85', tp: '149.20', sl: '150.30', status: 'Lost', pnl: '-$65' },
    { pair: 'ETH/USD', type: 'BUY', entry: '2285.00', tp: '2350.00', sl: '2250.00', status: 'Active', pnl: '+$92' },
  ];

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-[#060b18] text-white">
      <aside className={`fixed top-0 left-0 h-full bg-[#0f172a] border-r border-white/10 transition-all duration-300 z-40 ${sidebarOpen ? 'w-64' : 'w-0 md:w-20'}`}>
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-6 border-b border-white/10">
            {sidebarOpen && (
              <div className="flex items-center gap-2">
                <TrendingUp className="w-8 h-8 text-blue-500" />
                <span className="font-bold text-lg">SignalForge</span>
              </div>
            )}
            <button onClick={() => setSidebarOpen(!sidebarOpen)} className="p-2 hover:bg-white/5 rounded-lg transition-colors md:block hidden">
              <ChevronLeft className={`w-5 h-5 transition-transform ${!sidebarOpen ? 'rotate-180' : ''}`} />
            </button>
          </div>

          <nav className="flex-1 p-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveNav(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                  activeNav === item.id
                    ? 'bg-gradient-to-r from-blue-500/20 to-purple-600/20 border border-blue-500/50 text-white'
                    : 'text-gray-400 hover:bg-white/5 hover:text-white'
                }`}
              >
                <item.icon className="w-5 h-5 flex-shrink-0" />
                {sidebarOpen && <span>{item.label}</span>}
              </button>
            ))}
          </nav>

          <div className="p-4 border-t border-white/10">
            <button onClick={handleLogout} className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-gray-400 hover:bg-white/5 hover:text-white transition-all">
              <LogOut className="w-5 h-5 flex-shrink-0" />
              {sidebarOpen && <span>Logout</span>}
            </button>
          </div>
        </div>
      </aside>

      <div className={`transition-all duration-300 ${sidebarOpen ? 'ml-0 md:ml-64' : 'ml-0 md:ml-20'}`}>
        <header className="bg-[#0f172a]/80 backdrop-blur-xl border-b border-white/10 sticky top-0 z-30">
          <div className="flex items-center justify-between px-6 py-4">
            <div className="flex items-center gap-4">
              <button onClick={() => setSidebarOpen(!sidebarOpen)} className="md:hidden p-2 hover:bg-white/5 rounded-lg transition-colors">
                <Menu className="w-6 h-6" />
              </button>
              <div>
                <h1 className="text-2xl font-bold">Welcome back, {user.name}!</h1>
                <p className="text-sm text-gray-400">Here's what's happening with your trading today</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button className="relative p-2 hover:bg-white/5 rounded-lg transition-colors">
                <Bell className="w-6 h-6" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-blue-500 rounded-full"></span>
              </button>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center font-bold">
                  {user.name.charAt(0).toUpperCase()}
                </div>
              </div>
            </div>
          </div>
        </header>

        <main className="p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <div key={index} className="bg-[rgba(15,23,42,0.7)] backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-blue-500/50 transition-all">
                <div className="text-sm text-gray-400 mb-2">{stat.label}</div>
                <div className="text-3xl font-bold mb-2">{stat.value}</div>
                <div className={`text-sm ${stat.positive ? 'text-green-400' : 'text-red-400'}`}>{stat.change}</div>
              </div>
            ))}
          </div>

          <div className="bg-[rgba(15,23,42,0.7)] backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden">
            <div className="p-6 border-b border-white/10">
              <h2 className="text-2xl font-bold">Recent Signals</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-white/5">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-400">Pair</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-400">Type</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-400">Entry</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-400">TP</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-400">SL</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-400">Status</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-400">P&L</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  {recentSignals.map((signal, index) => (
                    <tr key={index} className="hover:bg-white/5 transition-colors">
                      <td className="px-6 py-4 font-semibold">{signal.pair}</td>
                      <td className="px-6 py-4">
                        <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                          signal.type === 'BUY' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
                        }`}>
                          {signal.type}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-gray-300">{signal.entry}</td>
                      <td className="px-6 py-4 text-green-400">{signal.tp}</td>
                      <td className="px-6 py-4 text-red-400">{signal.sl}</td>
                      <td className="px-6 py-4">
                        <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                          signal.status === 'Won' ? 'bg-green-500/20 text-green-400' :
                          signal.status === 'Lost' ? 'bg-red-500/20 text-red-400' :
                          'bg-blue-500/20 text-blue-400'
                        }`}>
                          {signal.status}
                        </span>
                      </td>
                      <td className={`px-6 py-4 font-semibold ${
                        signal.pnl.startsWith('+') ? 'text-green-400' : 'text-red-400'
                      }`}>
                        {signal.pnl}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>

      {sidebarOpen && (
        <div onClick={() => setSidebarOpen(false)} className="fixed inset-0 bg-black/50 z-30 md:hidden"></div>
      )}
    </div>
  );
};

export default Dashboard;