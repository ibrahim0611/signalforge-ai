import React from 'react';
import GlassCard from './GlassCard';
import { TrendingUp, TrendingDown, Clock } from 'lucide-react';

const SignalCard = ({ signal }) => {
  const isBuy = signal.type === 'BUY';
  const typeColor = isBuy ? 'text-green-500' : 'text-red-500';
  const bgColor = isBuy ? 'bg-green-500/20' : 'bg-red-500/20';
  const borderColor = isBuy ? 'border-green-500/30' : 'border-red-500/30';

  return (
    <GlassCard className="p-6 hover:bg-white/10 transition-all duration-300">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-xl font-bold text-white mb-1">{signal.pair}</h3>
          <div className="flex items-center gap-2">
            <span
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-sm font-semibold ${bgColor} ${typeColor} border ${borderColor}`}
            >
              {isBuy ? (
                <TrendingUp className="w-4 h-4" />
              ) : (
                <TrendingDown className="w-4 h-4" />
              )}
              {signal.type}
            </span>
            <span className="text-gray-400 text-sm flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {signal.timeframe}
            </span>
          </div>
        </div>
        <div className="text-right">
          <div className="text-xs text-gray-400 mb-1">Confidence</div>
          <div className="text-lg font-bold text-white">{signal.confidence}%</div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-4">
        <div>
          <div className="text-xs text-gray-400 mb-1">Entry</div>
          <div className="text-sm font-semibold text-white">{signal.entry}</div>
        </div>
        <div>
          <div className="text-xs text-gray-400 mb-1">Take Profit</div>
          <div className="text-sm font-semibold text-green-500">{signal.takeProfit}</div>
        </div>
        <div>
          <div className="text-xs text-gray-400 mb-1">Stop Loss</div>
          <div className="text-sm font-semibold text-red-500">{signal.stopLoss}</div>
        </div>
      </div>

      <div className="mb-2">
        <div className="flex items-center justify-between text-xs text-gray-400 mb-1">
          <span>Confidence Level</span>
          <span>{signal.confidence}%</span>
        </div>
        <div className="w-full bg-white/5 rounded-full h-2 overflow-hidden">
          <div
            className={`h-full rounded-full transition-all duration-500 ${isBuy ? 'bg-gradient-to-r from-green-500 to-emerald-500' : 'bg-gradient-to-r from-red-500 to-rose-500'}`}
            style={{ width: `${signal.confidence}%` }}
          />
        </div>
      </div>

      <div className="text-xs text-gray-500 mt-3">
        {new Date(signal.timestamp).toLocaleString()}
      </div>
    </GlassCard>
  );
};

export default SignalCard;