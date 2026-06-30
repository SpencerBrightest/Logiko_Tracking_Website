import { CheckCircle, Circle, Clock, Truck, Package, Globe, Home } from 'lucide-react';

const timeline = [
  {
    icon: Package,
    label: 'Order Confirmed',
    date: 'Jun 20, 2025',
    time: '09:14 AM',
    location: 'Shanghai, China',
    status: 'done',
  },
  {
    icon: Truck,
    label: 'Picked Up',
    date: 'Jun 21, 2025',
    time: '07:30 AM',
    location: 'Shanghai Port, China',
    status: 'done',
  },
  {
    icon: Globe,
    label: 'In Transit',
    date: 'Jun 22, 2025',
    time: '03:00 PM',
    location: 'Pacific Ocean',
    status: 'active',
  },
  {
    icon: CheckCircle,
    label: 'Customs Clearance',
    date: '—',
    time: '—',
    location: 'Los Angeles Port, USA',
    status: 'upcoming',
  },
  {
    icon: Truck,
    label: 'Out for Delivery',
    date: '—',
    time: '—',
    location: 'Los Angeles, USA',
    status: 'upcoming',
  },
  {
    icon: Home,
    label: 'Delivered',
    date: '—',
    time: '—',
    location: 'Los Angeles, USA',
    status: 'upcoming',
  },
];

export default function TrackingTimeline() {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-heading font-bold text-navy text-base">Track Shipment</h3>
        <span className="text-xs font-body text-gray-400">
          ID: <span className="font-heading font-semibold text-primary">LGK-2025-0847</span>
        </span>
      </div>

      <div className="relative">
        <div className="absolute left-5 top-6 bottom-6 w-0.5 bg-gray-100" />

        <div className="space-y-0">
          {timeline.map((step, i) => {
            const Icon = step.icon;
            return (
              <div key={i} className="relative flex gap-5 pb-6 last:pb-0">
                {/* Icon */}
                <div className="relative z-10 flex-shrink-0">
                  {step.status === 'done' ? (
                    <div className="w-10 h-10 bg-success/10 rounded-full flex items-center justify-center border-2 border-success">
                      <CheckCircle className="w-5 h-5 text-success" />
                    </div>
                  ) : step.status === 'active' ? (
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center border-2 border-primary">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                  ) : (
                    <div className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center border-2 border-gray-200">
                      <Circle className="w-5 h-5 text-gray-300" />
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className={`flex-1 pb-1 ${step.status === 'upcoming' ? 'opacity-50' : ''}`}>
                  <div className="flex items-center justify-between">
                    <p className={`font-heading font-semibold text-sm ${
                      step.status === 'active' ? 'text-primary' : step.status === 'done' ? 'text-navy' : 'text-gray-400'
                    }`}>
                      {step.label}
                      {step.status === 'active' && (
                        <span className="ml-2 text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full font-body">
                          Active
                        </span>
                      )}
                    </p>
                    {step.date !== '—' && (
                      <div className="flex items-center gap-1 text-gray-400 text-xs font-body">
                        <Clock className="w-3 h-3" />
                        {step.date} · {step.time}
                      </div>
                    )}
                  </div>
                  <p className="text-gray-400 text-xs font-body mt-1">{step.location}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
