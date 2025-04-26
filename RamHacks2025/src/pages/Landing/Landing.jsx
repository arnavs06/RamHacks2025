import Header from './components/Header';
import HeroSection from './components/HeroSection';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

export default function Landing() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      <HeroSection />
      <HowItWorks />
      <Testimonials />
      <Footer />
    </div>
  );
}