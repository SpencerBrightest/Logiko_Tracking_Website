import { Package, Truck, CheckCircle, AlertTriangle, Bell, X, RefreshCw } from 'lucide-react';
import { useState, useEffect } from 'react';

const BASE_NOTIFICATIONS = [
  {
    id: 1,
    icon: Truck,
    color: 'bg-accent/10 text-accent',
    borderColor: 'border-l-accent',
    title: 'Shipment LGK-2025-0847 is in transit',
    body: 'Your shipment departed Shanghai Port and is now crossing the Pacific Ocean. ETA: Nov 4, 2025.',
    time: '2 hours ago',
    read: false,
    type: 'transit',
  },
  {
    id: 2,
    icon: CheckCircle,
    color: 'bg-success/10 text-success',
    borderColor: 'border-l-success',
    title: 'LGK-2025-0821 successfully delivered',
    body: 'Your shipment has been delivered and signed for at the New York, USA destination warehouse.',
    time: '1 day ago',
    read: false,
    type: 'delivered',
  },
  {
    id: 3,
    icon: AlertTriangle,
    color: 'bg-warning/10 text-warning',
    borderColor: 'border-l-warning',
    title: 'Payment overdue for INV-2025-0799',
    body: 'Invoice INV-2025-0799 is past its due date. Please settle the balance to avoid service interruption.',
    time: '2 days ago',
    read: true,
    type: 'alert',
  },
  {
    id: 4,
    icon: Package,
    color: 'bg-primary/10 text-primary',
    borderColor: 'border-l-primary',
    title: 'New shipment request confirmed — LGK-2025-0799',
    body: 'Your shipment has been registered and is awaiting pickup from the Dubai, UAE facility.',
    time: '3 days ago',
    read: true,
    type: 'confirmed',
  },
  {
    id: 5,
    icon: CheckCircle,
    color: 'bg-success/10 text-success',
    borderColor: 'border-l-success',
    title: 'LGK-2025-0776 delivered to Sydney',
    body: 'The shipment from Singapore has arrived at its destination in Sydney, Australia.',
    time: '5 days ago',
    read: true,
    type: 'delivered',
  },
  {
    id: 6,
    icon: Truck,
    color: 'bg-accent/10 text-accent',
    borderColor: 'border-l-accent',
    title: 'LGK-2025-0754 cleared Hamburg customs',
    body: 'Your rail freight shipment has passed customs inspection and is en route to Chicago, IL.',
    time: '1 week ago',
    read: true,
    type: 'transit',
  },
];

// New notification that arrives live
const LIVE_NOTIFICATION = {
  id: 99,
  icon: Truck,
  color: 'bg-accent/10 text-accent',
  borderColor: 'border-l-accent',
  title: '🔴 Live Update: LGK-2025-0847 reached mid-Pacific',
  body: 'Real-time GPS ping received. Vessel MV Pacific Star is 2,400 nautical miles from Los Angeles.',
  time: 'Just now',
  read: false,
  type: 'transit',
};

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState(BASE_NOTIFICATIONS);
  const [liveActive, setLiveActive] = useState(true);
  const [newArrived, setNewArrived] = useState(false);

  // Simulate a live notification arriving after 4 seconds
  useEffect(() => {
    if (!liveActive) return;
    const timer = setTimeout(() => {
      setNotifications((prev) => {
        if (prev.find((n) => n.id === 99)) return prev;
        setNewArrived(true);
        setTimeout(() => setNewArrived(false), 3000);
        return [LIVE_NOTIFICATION, ...prev];
      });
    }, 4000);
    return () => clearTimeout(timer);
  }, [liveActive]);

  const dismiss = (id: number) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  };

  const markAllRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
  };

  const unreadCount = notifications.filter((n) => !n.read).length;

  return (
    <div>
      {/* Header */}
      <div className="mb-8 flex items-start justify-between gap-4 flex-wrap">
        <div>
          <div className="flex items-center gap-3 mb-1">
            <h1 className="font-heading text-2xl font-bold text-navy">Notifications</h1>
            {unreadCount > 0 && (
              <span className="notif-pop text-xs bg-primary text-white px-2.5 py-0.5 rounded-full font-heading font-bold">
                {unreadCount} new
              </span>
            )}
            {/* Live indicator */}
            <div className="flex items-center gap-1.5 bg-success/10 text-success px-2.5 py-1 rounded-full">
              <span className="relative flex h-2 w-2">
                <span className="live-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-success" />
              </span>
              <span className="text-xs font-heading font-semibold">Live</span>
            </div>
          </div>
          <p className="text-gray-500 font-body text-sm">Real-time updates on your shipment activity.</p>
        </div>
        <div className="flex items-center gap-3">
          {unreadCount > 0 && (
            <button
              onClick={markAllRead}
              className="text-primary text-sm font-body font-medium hover:underline"
            >
              Mark all as read
            </button>
          )}
          <button
            onClick={() => {
              setNotifications(BASE_NOTIFICATIONS);
              setLiveActive(true);
            }}
            className="flex items-center gap-1.5 text-gray-400 hover:text-navy text-xs font-body transition-colors"
            title="Reset notifications"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            Reset
          </button>
        </div>
      </div>

      {/* Live toast banner */}
      {newArrived && (
        <div className="mb-4 slide-in bg-accent/10 border border-accent/30 rounded-2xl p-4 flex items-center gap-3">
          <div className="relative flex h-2.5 w-2.5 flex-shrink-0">
            <span className="live-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent" />
          </div>
          <p className="text-sm font-heading font-semibold text-navy">New live update received for LGK-2025-0847!</p>
        </div>
      )}

      {/* Notification list */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        {notifications.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 text-gray-300">
            <Bell className="w-14 h-14 mb-4" />
            <p className="font-heading font-semibold text-lg text-gray-400">All caught up!</p>
            <p className="font-body text-sm text-gray-400 mt-1">No notifications right now.</p>
          </div>
        ) : (
          <div className="divide-y divide-gray-50">
            {notifications.map((n, idx) => {
              const Icon = n.icon;
              return (
                <div
                  key={n.id}
                  className={`flex items-start gap-4 px-5 py-4 transition-all duration-200 group border-l-4 ${n.borderColor} ${
                    !n.read
                      ? 'bg-gradient-to-r from-primary/[0.03] to-transparent'
                      : 'border-l-transparent hover:bg-gray-50/60'
                  } ${idx === 0 && n.id === 99 ? 'notif-pop' : ''}`}
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5 ${n.color}`}>
                    <Icon className="w-5 h-5" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-3">
                      <p className={`font-heading font-semibold text-sm leading-snug ${!n.read ? 'text-navy' : 'text-gray-600'}`}>
                        {!n.read && (
                          <span className="inline-block w-2 h-2 bg-primary rounded-full mr-2 mb-px flex-shrink-0 align-middle" />
                        )}
                        {n.title}
                      </p>
                      <span className="text-gray-400 text-xs font-body whitespace-nowrap flex-shrink-0 mt-0.5">{n.time}</span>
                    </div>
                    <p className="text-gray-500 text-sm font-body mt-1.5 leading-relaxed">{n.body}</p>
                  </div>

                  <button
                    onClick={() => dismiss(n.id)}
                    className="text-gray-300 hover:text-primary transition-colors opacity-0 group-hover:opacity-100 flex-shrink-0 mt-0.5 ml-1"
                    title="Dismiss"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
