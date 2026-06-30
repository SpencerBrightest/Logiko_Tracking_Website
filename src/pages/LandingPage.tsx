import Hero from '../components/landing/Hero';
import FeatureCards from '../components/landing/FeatureCards';
import ServicesIntro from '../components/landing/ServicesIntro';
import ServicesGrid from '../components/landing/ServicesGrid';
import TrackBar from '../components/landing/TrackBar';
import VideoCTA from '../components/landing/VideoCTA';
import ProcessSteps from '../components/landing/ProcessSteps';
import BusinessCTA from '../components/landing/BusinessCTA';
import BlogPreview from '../components/landing/BlogPreview';
import Footer from '../components/landing/Footer';

interface LandingPageProps {
  onNavigate: (page: string) => void;
}

export default function LandingPage({ onNavigate }: LandingPageProps) {
  return (
    <div className="bg-white">
      <Hero onNavigate={onNavigate} />
      <FeatureCards />
      <ServicesIntro onNavigate={onNavigate} />
      <ServicesGrid />
      <TrackBar onNavigate={onNavigate} />
      <VideoCTA onNavigate={onNavigate} />
      <ProcessSteps />
      <BusinessCTA onNavigate={onNavigate} />
      <BlogPreview />
      <Footer />
    </div>
  );
}
