import React from 'react';
import { Activity, Github, Twitter, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const footerLinks = {
    Product: [
      { name: 'Features', path: '/' },
      { name: 'Pricing', path: '/' },
      { name: 'Markets', path: '/' },
      { name: 'API', path: '/' }
    ],
    Company: [
      { name: 'About Us', path: '/' },
      { name: 'Careers', path: '/' },
      { name: 'Blog', path: '/' },
      { name: 'Contact', path: '/' }
    ],
    Legal: [
      { name: 'Privacy Policy', path: '/' },
      { name: 'Terms of Service', path: '/' },
      { name: 'Risk Disclosure', path: '/' },
      { name: 'Compliance', path: '/' }
    ]
  };

  const socialLinks = [
    { icon: Github, href: 'https://github.com', label: 'GitHub' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' }
  ];

  return (
    <footer className="bg-slate-950 border-t border-white/10 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Activity className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white">SignalForge AI</span>
            </Link>
            <p className="text-gray-400 mb-6 max-w-sm">
              Precision trading signals powered by advanced AI algorithms. Trade Forex, Metals, and Crypto with confidence.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-10 h-10 bg-slate-900 border border-white/10 rounded-lg flex items-center justify-center hover:border-blue-500 hover:bg-slate-800 transition-all duration-300"
                  >
                    <Icon className="w-5 h-5 text-gray-400 hover:text-white" />
                  </a>
                );
              })}
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-white font-semibold mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.path}
                      className="text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} SignalForge AI. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm">
              Trading involves risk. Past performance is not indicative of future results.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;