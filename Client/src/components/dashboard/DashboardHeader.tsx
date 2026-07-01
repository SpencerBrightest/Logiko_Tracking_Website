import { Bell, Mail, TrendingUp, TrendingDown } from 'lucide-react';

const stats = [
  {
    label: 'Total Shipments',
    value: 24,
    change: '+12%',
    positive: true,
    color: 'accent',
    bgColor: 'bg-accent/10',
    textColor: 'text-accent',
  },
  {
    label: 'In Transit',
    value: 8,
    change: '+8%',
    positive: true,
    color: 'warning',
    bgColor: 'bg-warning/10',
    textColor: 'text-warning',
  },
  {
    label: 'Delivered',
    value: 14,
    change: '+18%',
    positive: true,
    color: 'success',
    bgColor: 'bg-success/10',
    textColor: 'text-success',
  },
  {
    label: 'Pending',
    value: 2,
    change: '-4%',
    positive: false,
    color: 'primary',
    bgColor: 'bg-primary/10',
    textColor: 'text-primary',
  },
];

export default function DashboardHeader() {
  return (
    <div className="mb-8">
      {/* Header row */}
      <div className="flex items-start justify-between mb-8">
        <div>
          <h1 className="font-heading text-2xl font-bold text-navy">
            Welcome back, David! <span className="text-2xl">👋</span>
          </h1>
          <p className="text-gray-500 font-body text-sm mt-1">
            Here's what's happening with your shipments today.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button className="relative w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <Bell className="w-4.5 h-4.5 text-navy" style={{ width: '18px', height: '18px' }} />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-primary rounded-full" />
          </button>
          <button className="relative w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <Mail className="w-4.5 h-4.5 text-navy" style={{ width: '18px', height: '18px' }} />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-accent rounded-full" />
          </button>
        </div>
      </div>

      {/* Stats cards */}
      <div className="grid grid-cols-2 xl:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-gray-500 text-sm font-body">{stat.label}</span>
              <div className={`w-9 h-9 ${stat.bgColor} rounded-xl flex items-center justify-center`}>
                <span className={`font-heading text-xs font-bold ${stat.textColor}`}>
                  {stat.label === 'In Transit' ? 'TR' : stat.label === 'Delivered' ? 'DL' : stat.label === 'Pending' ? 'PD' : 'SH'}
                </span>
              </div>
            </div>
            <div className="flex items-end justify-between">
              <p className="font-heading text-3xl font-bold text-navy">{stat.value}</p>
              <div className={`flex items-center gap-1 text-xs font-body font-semibold ${stat.positive ? 'text-success' : 'text-primary'}`}>
                {stat.positive
                  ? <TrendingUp style={{ width: '12px', height: '12px' }} />
                  : <TrendingDown style={{ width: '12px', height: '12px' }} />
                }
                {stat.change}
              </div>
            </div>
            <p className="text-gray-400 text-xs font-body mt-1">from last month</p>
          </div>
        ))}
      </div>
    </div>
  );
}
