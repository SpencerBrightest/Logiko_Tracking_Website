import { Ship, Bell, Navigation } from 'lucide-react';

export default function LiveTrackingMap() {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="px-5 py-4 border-b border-gray-100">
        <h3 className="font-heading font-bold text-navy text-base">Live Tracking</h3>
      </div>

      {/* Map */}
      <div className="relative bg-[#D4E3F5]" style={{ height: '240px' }}>
        <svg viewBox="0 0 700 240" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
          <rect width="700" height="240" fill="#D4E3F5" />
          {/* Continents simplified */}
          <path d="M 30 50 L 160 45 L 175 75 L 160 120 L 130 150 L 90 160 L 60 140 L 40 100 Z" fill="#C8D8E8" stroke="#B0C4D8" strokeWidth="0.8" />
          <path d="M 270 35 L 360 30 L 375 65 L 360 95 L 325 105 L 295 85 L 278 60 Z" fill="#C8D8E8" stroke="#B0C4D8" strokeWidth="0.8" />
          <path d="M 370 30 L 570 28 L 590 65 L 570 110 L 530 125 L 470 115 L 410 100 L 375 75 Z" fill="#C8D8E8" stroke="#B0C4D8" strokeWidth="0.8" />
          <path d="M 490 140 L 560 135 L 575 165 L 565 195 L 535 205 L 505 190 L 490 165 Z" fill="#C8D8E8" stroke="#B0C4D8" strokeWidth="0.8" />

          {/* Route: Shanghai (~545, 85) → LA (~130, 100) */}
          <path
            d="M 545 85 Q 440 45 330 70 Q 230 90 130 100"
            fill="none"
            stroke="#E63946"
            strokeWidth="2"
            strokeDasharray="7 4"
            className="route-dash"
          />

          {/* Moving ship indicator */}
          <g transform="translate(340, 60)">
            <circle r="8" fill="#E63946" fillOpacity="0.15" className="pulse-dot" />
            <circle r="4" fill="#E63946" />
          </g>

          {/* Shanghai pin */}
          <g transform="translate(545, 85)">
            <circle r="8" fill="#E63946" fillOpacity="0.2" />
            <circle r="4" fill="#E63946" />
            <text x="7" y="-6" fill="#1A1F2E" fontSize="8" fontFamily="Poppins" fontWeight="600">Shanghai</text>
          </g>

          {/* LA pin */}
          <g transform="translate(130, 100)">
            <circle r="8" fill="#22C55E" fillOpacity="0.2" />
            <circle r="4" fill="#22C55E" />
            <text x="7" y="-6" fill="#1A1F2E" fontSize="8" fontFamily="Poppins" fontWeight="600">Los Angeles</text>
          </g>
        </svg>
      </div>

      {/* Vessel info */}
      <div className="p-5">
        <div className="flex items-start gap-4 mb-4">
          <div className="w-12 h-12 bg-navy/5 rounded-xl flex items-center justify-center flex-shrink-0">
            <Ship className="w-6 h-6 text-navy" />
          </div>
          <div className="grid grid-cols-2 gap-x-8 gap-y-2 flex-1">
            {[
              ['Vessel', 'MSC Virtuosa'],
              ['Carrier', 'Maersk Line'],
              ['Speed', '18.4 knots'],
              ['Position', '38.2°N, 162.5°W'],
              ['Last Updated', '2 min ago'],
            ].map(([k, v]) => (
              <div key={k}>
                <p className="text-gray-400 text-xs font-body">{k}</p>
                <p className="text-navy text-sm font-heading font-semibold">{v}</p>
              </div>
            ))}
          </div>
        </div>
        <button className="w-full bg-primary hover:bg-primary-dark text-white font-heading font-semibold text-sm py-3 rounded-xl transition-colors flex items-center justify-center gap-2">
          <Bell className="w-4 h-4" />
          Get Updates
        </button>
      </div>
    </div>
  );
}
