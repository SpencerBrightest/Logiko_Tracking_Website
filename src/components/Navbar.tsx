import { useState, useEffect } from 'react';
import {
  Truck, Search, ShoppingCart, Bell, Menu, X, ChevronDown
} from 'lucide-react';

const navLinks = ['Home', 'Pages', 'Services', 'Projects', 'News', 'Contact'];

interface NavbarProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

export default function Navbar({ onNavigate, currentPage }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
      scrolled ? 'bg-navy shadow-2xl py-3' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => onNavigate('landing')}
          className="flex items-center gap-2 group"
        >
          <div className="w-9 h-9 bg-primary rounded-lg flex items-center justify-center">
            <Truck className="w-5 h-5 text-white" strokeWidth={2} />
          </div>
          <span className="font-heading text-xl font-bold text-white tracking-wide">Logiko</span>
        </button>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link}>
              <button
                onClick={() => link === 'Home' && onNavigate('landing')}
                className="text-gray-300 hover:text-white text-sm font-body font-medium transition-colors duration-200 flex items-center gap-1 group"
              >
                {link}
                {(link === 'Pages' || link === 'Services') && (
                  <ChevronDown className="w-3 h-3 opacity-60 group-hover:opacity-100" />
                )}
              </button>
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div className="hidden lg:flex items-center gap-4">
          <button className="text-gray-300 hover:text-white transition-colors">
            <Search className="w-5 h-5" />
          </button>
          <button className="text-gray-300 hover:text-white transition-colors relative">
            <Bell className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-primary rounded-full" />
          </button>
          <button
            onClick={() => onNavigate('dashboard')}
            className="bg-primary hover:bg-primary-dark text-white text-sm font-heading font-semibold px-5 py-2.5 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-primary/30 flex items-center gap-2"
          >
            <Truck className="w-4 h-4" />
            Track a Shipment
          </button>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="lg:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-navy border-t border-white/10 px-6 py-4">
          {navLinks.map((link) => (
            <button
              key={link}
              className="block w-full text-left text-gray-300 hover:text-white py-3 text-sm font-body border-b border-white/5"
              onClick={() => {
                setMenuOpen(false);
                if (link === 'Home') onNavigate('landing');
              }}
            >
              {link}
            </button>
          ))}
          <button
            onClick={() => { onNavigate('dashboard'); setMenuOpen(false); }}
            className="mt-4 w-full bg-primary text-white text-sm font-heading font-semibold px-5 py-3 rounded-lg"
          >
            Track a Shipment
          </button>
        </div>
      )}
    </nav>
  );
}
