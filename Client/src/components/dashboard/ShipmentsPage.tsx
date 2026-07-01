import { useState } from 'react';
import { ArrowRight, Filter, Search, ChevronDown } from 'lucide-react';

const ALL_SHIPMENTS = [
  { id: 'LGK-2025-0847', from: 'Shanghai, CN', to: 'Los Angeles, USA', status: 'In Transit', date: 'Jun 22, 2025', weight: '2,400 kg', type: 'Sea Freight' },
  { id: 'LGK-2025-0821', from: 'Rotterdam, NL', to: 'New York, USA', status: 'Delivered', date: 'Jun 18, 2025', weight: '860 kg', type: 'Sea Freight' },
  { id: 'LGK-2025-0799', from: 'Dubai, UAE', to: 'London, UK', status: 'Pending', date: 'Jun 15, 2025', weight: '1,200 kg', type: 'Air Freight' },
  { id: 'LGK-2025-0776', from: 'Singapore, SG', to: 'Sydney, AU', status: 'Delivered', date: 'Jun 10, 2025', weight: '3,100 kg', type: 'Sea Freight' },
  { id: 'LGK-2025-0754', from: 'Hamburg, DE', to: 'Chicago, USA', status: 'In Transit', date: 'Jun 8, 2025', weight: '980 kg', type: 'Rail Freight' },
  { id: 'LGK-2025-0731', from: 'Tokyo, JP', to: 'Vancouver, CA', status: 'Delivered', date: 'Jun 5, 2025', weight: '540 kg', type: 'Air Freight' },
  { id: 'LGK-2025-0710', from: 'Mumbai, IN', to: 'Frankfurt, DE', status: 'Pending', date: 'Jun 2, 2025', weight: '1,750 kg', type: 'Air Freight' },
  { id: 'LGK-2025-0688', from: 'Busan, KR', to: 'Long Beach, USA', status: 'Delivered', date: 'May 28, 2025', weight: '4,200 kg', type: 'Sea Freight' },
];

const STATUS_COLORS: Record<string, string> = {
  'In Transit': 'bg-accent/10 text-accent',
  'Delivered': 'bg-success/10 text-success',
  'Pending': 'bg-warning/10 text-warning',
};

const TABS = ['All', 'In Transit', 'Delivered', 'Pending'];

interface ShipmentsPageProps {
  onNavigate: (page: string) => void;
}

export default function ShipmentsPage({ onNavigate }: ShipmentsPageProps) {
  const [activeTab, setActiveTab] = useState('All');
  const [search, setSearch] = useState('');

  const filtered = ALL_SHIPMENTS.filter((s) => {
    const matchTab = activeTab === 'All' || s.status === activeTab;
    const matchSearch = s.id.toLowerCase().includes(search.toLowerCase()) ||
      s.from.toLowerCase().includes(search.toLowerCase()) ||
      s.to.toLowerCase().includes(search.toLowerCase());
    return matchTab && matchSearch;
  });

  return (
    <div>
      <div className="mb-8">
        <h1 className="font-heading text-2xl font-bold text-navy mb-1">Shipments</h1>
        <p className="text-gray-500 font-body text-sm">Manage and monitor all your shipments.</p>
      </div>

      {/* Search + Filter row */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 mb-6">
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by ID, origin, or destination..."
              className="w-full pl-11 pr-4 py-3 border border-gray-200 rounded-xl text-sm font-body text-navy focus:outline-none focus:border-primary/50 transition-colors"
            />
          </div>
          <button className="flex items-center gap-2 border border-gray-200 text-gray-500 text-sm font-body px-4 py-3 rounded-xl hover:border-gray-300 transition-colors">
            <Filter className="w-4 h-4" />
            Filter
            <ChevronDown className="w-3 h-3" />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mt-4">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-1.5 rounded-full text-xs font-heading font-semibold transition-all duration-200 ${
                activeTab === tab
                  ? 'bg-primary text-white shadow-sm'
                  : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
              }`}
            >
              {tab}
              <span className="ml-1.5 opacity-70">
                ({tab === 'All' ? ALL_SHIPMENTS.length : ALL_SHIPMENTS.filter(s => s.status === tab).length})
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="text-left px-5 py-4 text-xs font-heading font-semibold text-gray-400 uppercase tracking-wider">Tracking ID</th>
                <th className="text-left px-5 py-4 text-xs font-heading font-semibold text-gray-400 uppercase tracking-wider">Route</th>
                <th className="text-left px-5 py-4 text-xs font-heading font-semibold text-gray-400 uppercase tracking-wider hidden sm:table-cell">Type</th>
                <th className="text-left px-5 py-4 text-xs font-heading font-semibold text-gray-400 uppercase tracking-wider hidden md:table-cell">Date</th>
                <th className="text-left px-5 py-4 text-xs font-heading font-semibold text-gray-400 uppercase tracking-wider hidden lg:table-cell">Weight</th>
                <th className="text-left px-5 py-4 text-xs font-heading font-semibold text-gray-400 uppercase tracking-wider">Status</th>
                <th className="px-5 py-4" />
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan={7} className="text-center py-12 text-gray-400 font-body text-sm">
                    No shipments found.
                  </td>
                </tr>
              ) : (
                filtered.map((s) => (
                  <tr key={s.id} className="hover:bg-gray-50/50 transition-colors group cursor-pointer">
                    <td className="px-5 py-4">
                      <p className="font-heading font-semibold text-navy text-sm">{s.id}</p>
                    </td>
                    <td className="px-5 py-4">
                      <p className="text-gray-500 text-sm font-body">
                        {s.from} <span className="text-gray-300 mx-1">→</span> {s.to}
                      </p>
                    </td>
                    <td className="px-5 py-4 hidden sm:table-cell">
                      <span className="text-gray-500 text-xs font-body">{s.type}</span>
                    </td>
                    <td className="px-5 py-4 hidden md:table-cell">
                      <span className="text-gray-500 text-xs font-body">{s.date}</span>
                    </td>
                    <td className="px-5 py-4 hidden lg:table-cell">
                      <span className="text-gray-500 text-xs font-body">{s.weight}</span>
                    </td>
                    <td className="px-5 py-4">
                      <span className={`text-xs font-body font-semibold px-3 py-1 rounded-full ${STATUS_COLORS[s.status]}`}>
                        {s.status}
                      </span>
                    </td>
                    <td className="px-5 py-4">
                      <button
                        onClick={() => onNavigate('track')}
                        className="text-primary opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
