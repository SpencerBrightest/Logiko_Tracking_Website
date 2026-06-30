import { Play } from 'lucide-react';
import { useState } from 'react';

interface VideoCTAProps {
  onNavigate: (page: string) => void;
}

export default function VideoCTA({ onNavigate }: VideoCTAProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <section className="relative py-32 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/906494/pexels-photo-906494.jpeg?auto=compress&cs=tinysrgb&w=1920')`,
        }}
      />
      <div className="absolute inset-0 bg-navy-dark/80" />

      <div className="relative max-w-7xl mx-auto px-6 text-center">
        <button
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className="relative w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-primary/40 transition-transform duration-300 hover:scale-110 cursor-pointer"
        >
          <Play className="w-8 h-8 text-white ml-1" fill="white" />
          <div className={`absolute inset-0 rounded-full border-2 border-primary/50 scale-150 transition-opacity duration-300 ${hovered ? 'opacity-100 pulse-dot' : 'opacity-50'}`} />
        </button>

        <h2 className="font-heading text-4xl md:text-5xl font-bold text-white max-w-2xl mx-auto leading-tight mb-6">
          Looking for the best logistics transport service?
        </h2>
        <p className="text-gray-300 font-body text-base max-w-xl mx-auto mb-8">
          Partner with Logiko for end-to-end supply chain solutions that scale with your business.
        </p>
        <button
          onClick={() => onNavigate('dashboard')}
          className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-heading font-semibold px-8 py-4 rounded-lg transition-all duration-200 hover:shadow-xl hover:shadow-primary/40"
        >
          Get a Quote
        </button>
      </div>
    </section>
  );
}
