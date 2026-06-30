import { useState, useCallback } from 'react';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import DashboardPage from './pages/DashboardPage';
import TrackPage from './pages/TrackPage';

type Page = 'landing' | 'dashboard' | 'track';

const DASHBOARD_PAGES = new Set(['dashboard', 'shipments', 'history', 'invoices', 'addresses', 'notifications', 'support', 'settings']);

function getPageType(page: string): Page {
  if (DASHBOARD_PAGES.has(page)) return 'dashboard';
  if (page === 'track') return 'track';
  return 'landing';
}

export default function App() {
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState<string>('landing');

  const handleNavigate = useCallback((page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  if (loading) {
    return <LoadingScreen onFinish={() => setLoading(false)} />;
  }

  const pageType = getPageType(currentPage);
  const showNavbar = pageType === 'landing';

  return (
    <div className="min-h-screen">
      {showNavbar && <Navbar onNavigate={handleNavigate} currentPage={currentPage} />}
      {pageType === 'landing' && <LandingPage onNavigate={handleNavigate} />}
      {pageType === 'dashboard' && <DashboardPage onNavigate={handleNavigate} />}
      {pageType === 'track' && <TrackPage onNavigate={handleNavigate} />}
    </div>
  );
}
