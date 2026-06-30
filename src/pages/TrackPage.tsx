import { useState } from 'react';
import { Search, Menu } from 'lucide-react';
import Sidebar from '../components/dashboard/Sidebar';
import TrackingTimeline from '../components/track/TrackingTimeline';
import LiveTrackingMap from '../components/track/LiveTrackingMap';
import ShipmentDetails from '../components/track/ShipmentDetails';

interface TrackPageProps {
  onNavigate: (page: string) => void;
}

export default function TrackPage({ onNavigate }: TrackPageProps) {
  const [query, setQuery] = useState('LGK-2025-0847');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar
        activePage="track"
        onNavigate={onNavigate}
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      <main className="flex-1 lg:ml-64 p-6 lg:p-8 overflow-y-auto min-w-0">
        {/* Mobile top bar */}
        <div className="lg:hidden flex items-center gap-4 mb-6">
          <button
            onClick={() => setSidebarOpen(true)}
            className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm border border-gray-100 text-navy hover:shadow-md transition-shadow"
          >
            <Menu className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white text-xs font-heading font-bold">L</span>
            </div>
            <span className="font-heading font-bold text-navy">Logiko</span>
          </div>
        </div>

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
