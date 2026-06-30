import { Phone, MapPin } from 'lucide-react';

interface HeroProps {
  onNavigate: (page: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/1427107/pexels-photo-1427107.jpeg?auto=compress&cs=tinysrgb&w=1920')`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/95 via-navy-dark/80 to-navy-dark/50" />

      {/* Animated route SVG */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1440 800" preserveAspectRatio="xMidYMid slice">
        <path
          d="M 200 520 Q 500 300 900 420 Q 1100 480 1280 300"
          fill="none"
          stroke="#E63946"
          strokeWidth="2"
          strokeDasharray="8 6"
          className="route-dash"
          opacity="0.5"
        />
        {/* Origin pin */}
        <circle cx="200" cy="520" r="6" fill="#E63946" />
        <circle cx="200" cy="520" r="12" fill="#E63946" fillOpacity="0.2" className="pulse-dot" />
        {/* Destination pin */}
        <circle cx="1280" cy="300" r="6" fill="#22C55E" />
        <circle cx="1280" cy="300" r="12" fill="#22C55E" fillOpacity="0.2" className="pulse-dot" style={{ animationDelay: '0.5s' }} />
      </svg>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-48">
        <div className="max-w-2xl fade-in">
          <span className="inline-flex items-center gap-2 text-primary text-xs font-heading font-semibold uppercase tracking-widest mb-5">
            <span className="w-6 h-0.5 bg-primary" />
            100% Trusted &amp; Secure
            <span className="w-6 h-0.5 bg-primary" />
          </span>

          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            Logistics &amp;
            <br />
            <span className="text-primary">Transport</span>
          </h1>

          <p className="text-gray-300 text-lg font-body leading-relaxed mb-10 max-w-xl">
            Delivering excellence across borders with end-to-end logistics solutions.
            Trusted by thousands of businesses worldwide for reliable, fast freight services.
          </p>

          <div className="flex flex-wrap items-center gap-6">
            <button
              onClick={() => onNavigate('track')}
              className="bg-primary hover:bg-primary-dark text-white font-heading font-semibold px-8 py-4 rounded-lg transition-all duration-200 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5"
            >
              Track Shipment
            </button>
            <button
              onClick={() => onNavigate('dashboard')}
              className="border border-white/30 hover:border-white text-white font-heading font-medium px-8 py-4 rounded-lg transition-all duration-200 hover:bg-white/5"
            >
              Get a Quote
            </button>
          </div>
        </div>

        {/* Call button */}
        <div className="absolute right-16 bottom-32 hidden xl:flex flex-col items-center gap-3">
          <div className="relative">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-2xl shadow-primary/40 hover:bg-primary-dark transition-colors cursor-pointer">
              <Phone className="w-7 h-7 text-white" />
            </div>
            <div className="absolute inset-0 rounded-full border-2 border-primary/40 scale-125 pulse-dot" />
          </div>
          <div className="text-center">
            <p className="text-gray-400 text-xs font-body">Make a Call</p>
            <p className="text-white text-sm font-heading font-semibold">+1 800 LOGIKO</p>
          </div>
        </div>
      </div>
    </section>
  );
}
