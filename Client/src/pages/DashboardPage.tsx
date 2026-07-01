import { useState } from 'react';
import { Menu } from 'lucide-react';
import Sidebar from '../components/dashboard/Sidebar';
import DashboardHeader from '../components/dashboard/DashboardHeader';
import ShipmentChart from '../components/dashboard/ShipmentChart';
import StatusDonut from '../components/dashboard/StatusDonut';
import ActiveShipmentMap from '../components/dashboard/ActiveShipmentMap';
import RecentShipments from '../components/dashboard/RecentShipments';
import ShipmentsPage from '../components/dashboard/ShipmentsPage';
import InvoicesPage from '../components/dashboard/InvoicesPage';
import AddressesPage from '../components/dashboard/AddressesPage';
import NotificationsPage from '../components/dashboard/NotificationsPage';
import SupportPage from '../components/dashboard/SupportPage';
import SettingsPage from '../components/dashboard/SettingsPage';
import ChatWidget from '../components/dashboard/ChatWidget';

interface DashboardPageProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

export default function DashboardPage({ onNavigate, currentPage }: DashboardPageProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const renderContent = () => {
    switch (currentPage) {
      case 'shipments':
      case 'dashboard': // treat 'dashboard' as shipments by default — no empty overview
        return <ShipmentsPage onNavigate={onNavigate} />;
      case 'invoices':
        return <InvoicesPage />;
      case 'addresses':
        return <AddressesPage />;
      case 'notifications':
        return <NotificationsPage />;
      case 'support':
        return <SupportPage />;
      case 'settings':
        return <SettingsPage />;
      default:
        return <ShipmentsPage onNavigate={onNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar
        activePage={currentPage}
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

        {renderContent()}
      </main>

      <ChatWidget />
    </div>
  );
}
