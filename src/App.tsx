import { useState, useCallback } from 'react';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import DashboardPage from './pages/DashboardPage';
import TrackPage from './pages/TrackPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import PublicTrackPage from './pages/PublicTrackPage';
import NewsPage from './pages/NewsPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';

type PageType = 'landing' | 'dashboard' | 'track' | 'login' | 'signup' | 'public_track' | 'news' | 'contact' | 'services';

const DASHBOARD_PAGES = new Set([
  'dashboard', 'shipments', 'invoices', 'addresses',
  'notifications', 'support', 'settings',
]);

function getPageType(page: string): PageType {
  if (DASHBOARD_PAGES.has(page)) return 'dashboard';
  if (page === 'track') return 'track';
  if (page === 'login') return 'login';
  if (page === 'signup') return 'signup';
  if (page === 'public_track') return 'public_track';
  if (page === 'news') return 'news';
  if (page === 'contact') return 'contact';
  if (page === 'services') return 'services';
  return 'landing';
}

export default function App() {
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState<string>('landing');
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  const handleNavigate = useCallback((page: string) => {
    // Protected routes check
    const type = getPageType(page);
    if ((type === 'dashboard' || type === 'track' || type === 'public_track') && !isAuthenticated) {
      setCurrentPage('login');
    } else {
      setCurrentPage(page);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [isAuthenticated]);

  if (loading) {
    return <LoadingScreen onFinish={() => setLoading(false)} />;
  }

  const pageType = getPageType(currentPage);
  
  // Show navbar on public facing pages except auth and app pages
  const showNavbar = ['landing', 'news', 'contact', 'public_track', 'services'].includes(pageType);

  return (
    <div className="min-h-screen bg-gray-50">
      {showNavbar && (
        <Navbar 
          onNavigate={handleNavigate} 
          currentPage={currentPage} 
          isAuthenticated={isAuthenticated}
          onLogout={() => { setIsAuthenticated(false); setCurrentPage('landing'); }}
        />
      )}
      
      {pageType === 'landing' && <LandingPage onNavigate={handleNavigate} />}
      {pageType === 'dashboard' && (
        <DashboardPage onNavigate={handleNavigate} currentPage={currentPage} />
      )}
      {pageType === 'track' && <TrackPage onNavigate={handleNavigate} />}
      {pageType === 'public_track' && <PublicTrackPage onNavigate={handleNavigate} />}
      
      {pageType === 'login' && (
        <LoginPage 
          onNavigate={handleNavigate} 
          onLogin={() => { setIsAuthenticated(true); handleNavigate('public_track'); }} 
        />
      )}
      {pageType === 'signup' && (
        <SignupPage 
          onNavigate={handleNavigate} 
          onSignup={() => { setIsAuthenticated(true); handleNavigate('public_track'); }} 
        />
      )}
      
      {pageType === 'news' && <NewsPage onNavigate={handleNavigate} />}
      {pageType === 'contact' && <ContactPage onNavigate={handleNavigate} />}
      {pageType === 'services' && <ServicesPage onNavigate={handleNavigate} />}
    </div>
  );
}
