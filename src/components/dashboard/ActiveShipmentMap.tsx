import { MapPin, ArrowRight } from 'lucide-react';

interface ActiveShipmentMapProps {
  onNavigate: (page: string) => void;
}

export default function ActiveShipmentMap({ onNavigate }: ActiveShipmentMapProps) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
      <div className="p-5 border-b border-gray-100 flex items-center justify-between">
        <h3 className="font-heading font-bold text-navy text-base">Active Shipment</h3>
        <button
          onClick={() => onNavigate('track')}
          className="text-primary text-xs font-body font-medium hover:underline flex items-center gap-1"
        >
          View All <ArrowRight className="w-3 h-3" />
        </button>
      </div>

      {/* Map area */}
      <div className="relative bg-[#EEF2F7] overflow-hidden" style={{ height: '260px' }}>
        {/* Simplified world map SVG */}
        <svg viewBox="0 0 900 400" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
          {/* Ocean background */}
          <rect width="900" height="400" fill="#D4E3F5" />
          {/* Simplified continent shapes */}
          {/* North America */}
          <path d="M 80 80 L 220 70 L 240 100 L 230 160 L 200 200 L 160 220 L 130 200 L 100 160 L 80 120 Z" fill="#C8D8E8" stroke="#B0C4D8" strokeWidth="1" />
          {/* South America */}
          <path d="M 150 240 L 200 230 L 220 280 L 210 340 L 180 360 L 155 330 L 145 280 Z" fill="#C8D8E8" stroke="#B0C4D8" strokeWidth="1" />
          {/* Europe */}
          <path d="M 380 60 L 460 55 L 475 90 L 460 120 L 420 130 L 390 110 L 375 85 Z" fill="#C8D8E8" stroke="#B0C4D8" strokeWidth="1" />
          {/* Africa */}
          <path d="M 400 130 L 465 125 L 480 200 L 460 290 L 420 310 L 390 270 L 380 200 L 395 150 Z" fill="#C8D8E8" stroke="#B0C4D8" strokeWidth="1" />
          {/* Asia */}
          <path d="M 480 50 L 720 45 L 740 90 L 730 150 L 690 180 L 640 190 L 570 170 L 510 150 L 480 110 Z" fill="#C8D8E8" stroke="#B0C4D8" strokeWidth="1" />
          {/* Australia */}
          <path d="M 650 240 L 730 235 L 750 270 L 740 310 L 700 320 L 660 300 L 645 265 Z" fill="#C8D8E8" stroke="#B0C4D8" strokeWidth="1" />

          {/* Route line: Shanghai (700, 140) to Los Angeles (185, 155) */}
          <path
            d="M 700 140 Q 580 80 440 120 Q 330 148 185 155"
            fill="none"
            stroke="#E63946"
            strokeWidth="2"
            strokeDasharray="8 5"
            className="route-dash"
          />

          {/* Animated ship icon along route */}
          <g transform="translate(450, 105)">
            <circle r="5" fill="#E63946" opacity="0.6" className="pulse-dot" />
          </g>

          {/* Shanghai pin */}
          <g transform="translate(700, 140)">
            <circle r="10" fill="#E63946" fillOpacity="0.2" />
            <circle r="5" fill="#E63946" />
            <text x="8" y="-8" fill="#1A1F2E" fontSize="10" fontFamily="Poppins" fontWeight="600">Shanghai</text>
          </g>

          {/* LA pin */}
          <g transform="translate(185, 155)">
            <circle r="10" fill="#22C55E" fillOpacity="0.2" />
            <circle r="5" fill="#22C55E" />
            <text x="8" y="-8" fill="#1A1F2E" fontSize="10" fontFamily="Poppins" fontWeight="600">Los Angeles</text>
          </g>
        </svg>

        {/* Info overlay */}
        <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-xl shadow-lg p-4 text-xs font-body w-52">
          <div className="flex items-center justify-between mb-3">
            <span className="font-heading font-bold text-navy text-sm">LGK-2025-0847</span>
            <span className="bg-accent/10 text-accent px-2 py-0.5 rounded-full text-xs font-semibold">In Transit</span>
          </div>
          <div className="space-y-1.5 text-gray-500">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3 h-3 text-primary" />
              <span>Shanghai, China → Los Angeles, USA</span>
            </div>
            <div className="text-gray-400">Est. Delivery: <span className="text-navy font-medium">July 8, 2025</span></div>
          </div>
          <button
            onClick={() => onNavigate('track')}
            className="mt-3 w-full bg-primary text-white text-xs font-heading font-semibold py-1.5 rounded-lg hover:bg-primary-dark transition-colors"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}
