import { LayoutDashboard, Package, Truck, FileText, MapPin, Bell, HelpCircle, Settings, Home, X } from 'lucide-react';

interface SidebarProps {
  activePage: string;
  onNavigate: (page: string) => void;
  isOpen: boolean;
  onClose: () => void;
}

const topItems = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'shipments', label: 'Shipments', icon: Package },
  { id: 'track', label: 'Track', icon: Truck },
  { id: 'invoices', label: 'Invoices', icon: FileText },
  { id: 'addresses', label: 'Addresses', icon: MapPin },
];

const bottomItems = [
  { id: 'notifications', label: 'Notifications', icon: Bell },
  { id: 'support', label: 'Support', icon: HelpCircle },
  { id: 'settings', label: 'Settings', icon: Settings },
];

function NavButton({ item, active, onClick }: { item: typeof topItems[0]; active: boolean; onClick: () => void }) {
  const Icon = item.icon;
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-body font-medium transition-all duration-200 ${
        active
          ? 'bg-primary/10 text-primary'
          : 'text-gray-400 hover:text-white hover:bg-white/5'
      }`}
    >
      <Icon className="w-5 h-5 flex-shrink-0" />
      <span className="truncate">{item.label}</span>
      {item.id === 'notifications' && (
        <span className="ml-auto w-2 h-2 bg-primary rounded-full flex-shrink-0" />
      )}
    </button>
  );
}

export default function Sidebar({ activePage, onNavigate, isOpen, onClose }: SidebarProps) {
  const handleNav = (page: string) => {
    onNavigate(page);
    onClose();
  };

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-navy-dark/60 backdrop-blur-sm z-20 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 h-screen w-64 bg-navy-dark border-r border-white/5 z-30 flex flex-col
          transition-transform duration-300
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
          lg:translate-x-0`}
      >
        {/* Logo */}
        <div className="h-16 flex items-center justify-between px-5 border-b border-white/5 flex-shrink-0">
          <button onClick={() => handleNav('landing')} className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Truck className="w-5 h-5 text-white" strokeWidth={2} />
            </div>
            <span className="font-heading text-lg font-bold text-white tracking-wide">Logiko</span>
          </button>
          {/* Mobile close */}
          <button
            onClick={onClose}
            className="lg:hidden text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto p-4 space-y-1">
          {topItems.map((item) => (
            <NavButton
              key={item.id}
              item={item}
              active={activePage === item.id}
              onClick={() => handleNav(item.id)}
            />
          ))}

          <div className="my-3 border-t border-white/5" />

          {bottomItems.map((item) => (
            <NavButton
              key={item.id}
              item={item}
              active={activePage === item.id}
              onClick={() => handleNav(item.id)}
            />
          ))}

          <div className="my-3 border-t border-white/5" />

          {/* Back to landing */}
          <button
            onClick={() => handleNav('landing')}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-body font-medium text-gray-500 hover:text-white hover:bg-white/5 transition-all duration-200"
          >
            <Home className="w-5 h-5 flex-shrink-0" />
            <span>Back to Site</span>
          </button>
        </nav>

        {/* User profile footer */}
        <div className="flex-shrink-0 p-4 border-t border-white/5">
          <button
            onClick={() => handleNav('settings')}
            className="w-full flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-white/5 transition-colors group"
          >
            <div className="w-9 h-9 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center flex-shrink-0">
              <span className="font-heading font-bold text-primary text-sm">DC</span>
            </div>
            <div className="flex-1 text-left min-w-0">
              <p className="font-heading font-semibold text-white text-sm truncate">David Chen</p>
              <p className="text-gray-500 text-xs font-body truncate">david@logiko.com</p>
            </div>
            <Settings className="w-4 h-4 text-gray-500 group-hover:text-white transition-colors flex-shrink-0" />
          </button>
        </div>
      </aside>
    </>
  );
}