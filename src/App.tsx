import { useState, useEffect } from 'react';
import {
  Stethoscope,
  Menu,
  X,
} from 'lucide-react';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Research from './components/Research';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'research', 'team', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-md z-50">
        <div className="max-w-7xl mx-auto px-[4px] ">
          <div className="flex items-center h-20">
            {/* Logo/Brand */}
            <div className="flex items-center gap-3 min-w-[220px]">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Stethoscope className="h-8 w-8 text-white" />
              </div>
              <span className="hidden md:inline text-xl font-bold text-blue-900">Haroon's GI & Liver Associates</span>
            </div>

            {/* Desktop Menu Centered */}
            <div className="hidden md:flex flex-1 justify-center items-center gap-8">
              {['home', 'about', 'services', 'research', 'team', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`text-lg font-medium transition-colors capitalize ${
                    activeSection === item ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Book Appointment Button Right */}
            <div className="hidden md:flex min-w-[180px] justify-end">
              <button
                onClick={() => scrollToSection('contact')}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl"
              >
                Book Appointment
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 ml-auto"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-4 space-y-3">
              {['home', 'about', 'services', 'research', 'team', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg capitalize"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <Hero scrollToSection={scrollToSection} />
      {/* About Section */}
      <About />
      {/* Services Section */}
      <Services />
      {/* Research Section */}
      <Research />
      {/* Team Section */}
      <Team />
      {/* Contact Section */}
      <Contact />
      {/* Footer */}
      <Footer scrollToSection={scrollToSection} />
    </div>
  );
}

export default App;
