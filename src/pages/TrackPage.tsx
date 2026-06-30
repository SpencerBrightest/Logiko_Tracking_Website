import Sidebar from '../components/dashboard/Sidebar';
import TrackingTimeline from '../components/track/TrackingTimeline';
import LiveTrackingMap from '../components/track/LiveTrackingMap';
import ShipmentDetails from '../components/track/ShipmentDetails';
import { Search } from 'lucide-react';
import { useState } from 'react';

interface TrackPageProps {
  onNavigate: (page: string) => void;
}

export default function TrackPage({ onNavigate }: TrackPageProps) {
  const [query, setQuery] = useState('LGK-2025-0847');

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar activePage="track" onNavigate={onNavigate} />

      <main className="flex-1 ml-64 p-8 overflow-y-auto">
        <div className="mb-8">
          <h1 className="font-heading text-2xl font-bold text-navy mb-1">Track Shipment</h1>
          <p className="text-gray-500 font-body text-sm">Monitor your shipment in real time.</p>
        </div>

        {/* Search bar */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 mb-6">
          <div className="flex gap-3">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Enter tracking ID..."
                className="w-full pl-11 pr-4 py-3 border border-gray-200 rounded-xl text-sm font-body text-navy focus:outline-none focus:border-primary/50 transition-colors"
              />
            </div>
            <button className="bg-primary hover:bg-primary-dark text-white font-heading font-semibold px-6 py-3 rounded-xl text-sm transition-colors">
              Track
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          {/* Timeline */}
          <div className="xl:col-span-1">
            <TrackingTimeline />
          </div>
          {/* Map + Details */}
          <div className="xl:col-span-2 space-y-6">
            <LiveTrackingMap />
            <ShipmentDetails />
          </div>
        </div>
      </main>
    </div>
  );
}
