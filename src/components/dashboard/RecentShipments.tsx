import { ArrowRight } from 'lucide-react';

const shipments = [
  {
    id: 'LGK-2025-0847',
    from: 'Shanghai, CN',
    to: 'Los Angeles, USA',
    status: 'In Transit',
    statusColor: 'bg-accent/10 text-accent',
  },
  {
    id: 'LGK-2025-0821',
    from: 'Rotterdam, NL',
    to: 'New York, USA',
    status: 'Delivered',
    statusColor: 'bg-success/10 text-success',
  },
  {
    id: 'LGK-2025-0799',
    from: 'Dubai, UAE',
    to: 'London, UK',
    status: 'Pending',
    statusColor: 'bg-warning/10 text-warning',
  },
  {
    id: 'LGK-2025-0776',
    from: 'Singapore, SG',
    to: 'Sydney, AU',
    status: 'Delivered',
    statusColor: 'bg-success/10 text-success',
  },
];

interface RecentShipmentsProps {
  onNavigate: (page: string) => void;
}

export default function RecentShipments({ onNavigate }: RecentShipmentsProps) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="px-5 py-4 border-b border-gray-100 flex items-center justify-between">
        <h3 className="font-heading font-bold text-navy text-base">Recent Shipments</h3>
        <button
          onClick={() => onNavigate('track')}
          className="text-primary text-xs font-body font-medium hover:underline flex items-center gap-1"
        >
          View All <ArrowRight className="w-3 h-3" />
        </button>
      </div>
      <div className="divide-y divide-gray-50">
        {shipments.map((s) => (
          <div
            key={s.id}
            className="px-5 py-4 flex items-center justify-between hover:bg-gray-50/50 transition-colors cursor-pointer group"
          >
            <div>
              <p className="font-heading font-semibold text-navy text-sm">{s.id}</p>
              <p className="text-gray-400 text-xs font-body mt-0.5">
                {s.from} <span className="text-gray-300 mx-1">→</span> {s.to}
              </p>
            </div>
            <div className="flex items-center gap-3">
              <span className={`text-xs font-body font-semibold px-3 py-1 rounded-full ${s.statusColor}`}>
                {s.status}
              </span>
              <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-primary transition-colors" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
