import { useState } from 'react';
import { Search } from 'lucide-react';
import TrackingTimeline from '../components/track/TrackingTimeline';
import LiveTrackingMap from '../components/track/LiveTrackingMap';
import ShipmentDetails from '../components/track/ShipmentDetails';
import Footer from '../components/landing/Footer';

interface PublicTrackPageProps {
  onNavigate: (page: string) => void;
}

const SAMPLE_TRACKING_NUMBERS = [
  { id: 'LGK-2025-0847', label: 'Shanghai → Los Angeles (Sea Freight)', status: 'In Transit' },
  { id: 'LGK-2025-0821', label: 'London → New York (Air Freight)', status: 'Delivered' },
  { id: 'LGK-2025-0799', label: 'Berlin → Paris (Road Transport)', status: 'Pending' },
];

const STATUS_COLORS: Record<string, string> = {
  'In Transit': 'bg-accent/10 text-accent',
  'Delivered': 'bg-success/10 text-success',
  'Pending': 'bg-warning/10 text-warning',
};

export default function PublicTrackPage({ onNavigate }: PublicTrackPageProps) {
  const [query, setQuery] = useState('');
  const [isTracking, setIsTracking] = useState(false);

  const handleTrack = () => {
    if (query.trim()) setIsTracking(true);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">

      {/* ── Hero Banner (mirrors Homepage) ─────────────────── */}
      <div className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('https://images.pexels.com/photos/2226458/pexels-photo-2226458.jpeg?auto=compress&cs=tinysrgb&w=1920')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/97 via-navy-dark/85 to-navy-dark/60" />
        {/* Animated dashed route line */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1440 700" preserveAspectRatio="xMidYMid slice">
          <path d="M 200 600 Q 600 300 1000 450 Q 1200 530 1440 250" fill="none" stroke="#E63946" strokeWidth="2" strokeDasharray="8 6" opacity="0.4" className="route-dash" />
          <circle cx="200" cy="600" r="6" fill="#E63946" />
          <circle cx="200" cy="600" r="14" fill="#E63946" fillOpacity="0.15" className="pulse-dot" />
          <circle cx="1440" cy="250" r="6" fill="#22C55E" />
          <circle cx="1440" cy="250" r="14" fill="#22C55E" fillOpacity="0.15" className="pulse-dot" />
        </svg>

        <div className="relative max-w-7xl mx-auto px-6 pb-16 pt-40 w-full fade-in text-center flex flex-col items-center justify-center">
          <span className="inline-flex items-center gap-2 text-primary text-xs font-heading font-semibold uppercase tracking-widest mb-5">
            <span className="w-6 h-0.5 bg-primary" />
            Real-Time Tracking
            <span className="w-6 h-0.5 bg-primary" />
          </span>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 max-w-2xl">
            Track Your<br />
            <span className="text-primary">Shipment Live</span>
          </h1>
          <p className="text-gray-300 text-base md:text-lg font-body leading-relaxed max-w-lg mx-auto">
            Enter your Logiko tracking number for instant, real-time status updates — from origin to destination.
          </p>
        </div>
      </div>

      {/* ── Search Panel ─────────────────── */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white rounded-3xl shadow-2xl shadow-navy/10 border border-gray-100 p-8">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleTrack()}
                  placeholder="Enter tracking ID — e.g. LGK-2025-0847"
                  className="w-full pl-14 pr-5 py-4 border-2 border-gray-100 rounded-2xl text-base font-body text-navy focus:outline-none focus:border-primary/50 transition-colors"
                />
              </div>
              <button
                onClick={handleTrack}
                className="bg-primary hover:bg-primary-dark text-white font-heading font-semibold px-10 py-4 rounded-2xl text-base transition-all duration-200 hover:shadow-lg hover:shadow-primary/30"
              >
                Track Now
              </button>
            </div>

            <div className="mt-6 pt-6 border-t border-gray-100">
              <p className="text-sm font-body font-medium text-gray-400 mb-3">Try a sample:</p>
              <div className="flex flex-wrap gap-3">
                {SAMPLE_TRACKING_NUMBERS.map((sample) => (
                  <button
                    key={sample.id}
                    onClick={() => {
                      setQuery(sample.id);
                      setIsTracking(true);
                    }}
                    className="group flex items-center gap-3 bg-gray-50 hover:bg-primary/5 border border-gray-200 hover:border-primary/30 px-4 py-2.5 rounded-xl transition-all duration-200"
                  >
                    <div className="text-left">
                      <span className="block font-heading font-bold text-navy text-sm group-hover:text-primary transition-colors">{sample.id}</span>
                      <span className="block text-gray-400 text-xs font-body">{sample.label}</span>
                    </div>
                    <span className={`text-xs font-body font-semibold px-2 py-0.5 rounded-full ${STATUS_COLORS[sample.status]}`}>
                      {sample.status}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Tracking Results ─────────────────── */}
      {isTracking && (
        <section className="py-12 bg-gray-50 flex-1">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
              <div className="xl:col-span-1">
                <TrackingTimeline />
              </div>
              <div className="xl:col-span-2 space-y-8">
                <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden h-[420px]">
                  <LiveTrackingMap />
                </div>
                <ShipmentDetails />
              </div>
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}
