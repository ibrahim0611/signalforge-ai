import React from 'react';

const CandlestickBackground = () => {
  const candlesticks = [
    { left: '5%', height: '120px', delay: '0s', color: 'green' },
    { left: '12%', height: '80px', delay: '0.3s', color: 'red' },
    { left: '18%', height: '150px', delay: '0.6s', color: 'green' },
    { left: '25%', height: '100px', delay: '0.9s', color: 'red' },
    { left: '32%', height: '130px', delay: '1.2s', color: 'green' },
    { left: '38%', height: '90px', delay: '1.5s', color: 'red' },
    { left: '45%', height: '110px', delay: '1.8s', color: 'green' },
    { left: '52%', height: '140px', delay: '2.1s', color: 'red' },
    { left: '58%', height: '95px', delay: '2.4s', color: 'green' },
    { left: '65%', height: '125px', delay: '2.7s', color: 'red' },
    { left: '72%', height: '105px', delay: '3s', color: 'green' },
    { left: '78%', height: '115px', delay: '3.3s', color: 'red' },
    { left: '85%', height: '135px', delay: '3.6s', color: 'green' },
    { left: '92%', height: '85px', delay: '3.9s', color: 'red' },
    { left: '8%', height: '145px', delay: '4.2s', color: 'green' },
    { left: '15%', height: '75px', delay: '4.5s', color: 'red' },
    { left: '22%', height: '155px', delay: '4.8s', color: 'green' },
    { left: '28%', height: '105px', delay: '5.1s', color: 'red' },
    { left: '35%', height: '95px', delay: '5.4s', color: 'green' },
    { left: '42%', height: '125px', delay: '5.7s', color: 'red' },
    { left: '48%', height: '110px', delay: '6s', color: 'green' },
    { left: '55%', height: '130px', delay: '6.3s', color: 'red' },
    { left: '62%', height: '100px', delay: '6.6s', color: 'green' },
    { left: '68%', height: '120px', delay: '6.9s', color: 'red' },
    { left: '75%', height: '140px', delay: '7.2s', color: 'green' },
    { left: '82%', height: '90px', delay: '7.5s', color: 'red' },
    { left: '88%', height: '115px', delay: '7.8s', color: 'green' },
    { left: '95%', height: '105px', delay: '8.1s', color: 'red' },
  ];

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      <div className="absolute inset-0 flex items-end justify-start">
        {candlesticks.map((candle, index) => (
          <div
            key={index}
            className={`absolute bottom-0 w-1.5 opacity-20 ${candle.color === 'green' ? 'candlestick-up' : 'candlestick-down'}`}
            style={{
              left: candle.left,
              height: candle.height,
              animationDelay: candle.delay,
              backgroundColor: candle.color === 'green' ? '#22c55e' : '#ef4444',
            }}
          >
            <div
              className="absolute top-0 left-1/2 w-0.5 bg-current"
              style={{
                height: '20px',
                transform: 'translateX(-50%) translateY(-100%)',
              }}
            />
            <div
              className="absolute bottom-0 left-1/2 w-0.5 bg-current"
              style={{
                height: '20px',
                transform: 'translateX(-50%) translateY(100%)',
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CandlestickBackground;