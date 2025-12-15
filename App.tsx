import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { ServicesSection } from './components/ServicesSection';
import { PortfolioSectionMacbook } from './components/PortfolioSectionMacbook';
import { FAQSection } from './components/FAQSection';
import { ContactSection } from './components/ContactSection';
import { Toaster } from 'sonner@2.0.3';

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <Toaster 
        position="top-center" 
        toastOptions={{
          style: {
            background: '#1a1a1a',
            color: '#fff',
            border: '1px solid #333',
          },
        }}
      />
      <Navigation />
      <main>
        <HeroSection />
        <ServicesSection />
        <PortfolioSectionMacbook />
        <FAQSection />
        <ContactSection />
      </main>
    </div>
  );
}