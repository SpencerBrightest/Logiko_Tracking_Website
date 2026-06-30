import Sidebar from '../components/dashboard/Sidebar';
import DashboardHeader from '../components/dashboard/DashboardHeader';
import ShipmentChart from '../components/dashboard/ShipmentChart';
import StatusDonut from '../components/dashboard/StatusDonut';
import ActiveShipmentMap from '../components/dashboard/ActiveShipmentMap';
import RecentShipments from '../components/dashboard/RecentShipments';

interface DashboardPageProps {
  onNavigate: (page: string) => void;
}

export default function DashboardPage({ onNavigate }: DashboardPageProps) {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar activePage="dashboard" onNavigate={onNavigate} />

      <main className="flex-1 ml-64 p-8 overflow-y-auto">
        <DashboardHeader />

        {/* Charts row */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mb-6">
          <div className="xl:col-span-2">
            <ShipmentChart />
          </div>
          <StatusDonut />
        </div>

        {/* Map + Recent */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          <div className="xl:col-span-2">
            <ActiveShipmentMap onNavigate={onNavigate} />
          </div>
          <RecentShipments onNavigate={onNavigate} />
        </div>
      </main>
    </div>
  );
}
