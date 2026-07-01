import { useState } from 'react';
import { Search } from 'lucide-react';

interface TrackBarProps {
  onNavigate: (page: string) => void;
}

export default function TrackBar({ onNavigate }: TrackBarProps) {
  const [trackId, setTrackId] = useState('');
  const [email, setEmail] = useState('');

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    onNavigate('public_track');
  };

  return (
    <section className="bg-primary py-14">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="flex-shrink-0">
            <h2 className="font-heading text-3xl font-bold text-white">Track your Order</h2>
            <p className="text-white/70 text-sm font-body mt-1">Real-time updates for your shipments</p>
          </div>
          <form onSubmit={handleTrack} className="flex-1 flex flex-col sm:flex-row gap-3 w-full">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/50" />
              <input
                type="text"
                value={trackId}
                onChange={(e) => setTrackId(e.target.value)}
                placeholder="Enter Tracking ID"
                className="w-full bg-white/10 border border-white/20 text-white placeholder-white/50 pl-11 pr-4 py-3.5 rounded-lg font-body text-sm focus:outline-none focus:border-white/60 focus:bg-white/15 transition-all"
              />
            </div>
            <div className="flex-1 relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Email Address"
                className="w-full bg-white/10 border border-white/20 text-white placeholder-white/50 px-4 py-3.5 rounded-lg font-body text-sm focus:outline-none focus:border-white/60 focus:bg-white/15 transition-all"
              />
            </div>
            <button
              type="submit"
              className="bg-navy hover:bg-navy-dark text-white font-heading font-semibold px-8 py-3.5 rounded-lg transition-colors duration-200 whitespace-nowrap flex items-center gap-2"
            >
              <Search className="w-4 h-4" />
              Track Order
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
