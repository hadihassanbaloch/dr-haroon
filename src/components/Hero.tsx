import { ChevronRight } from 'lucide-react';
import DrHaroon from '../assets/Dr.-Haroon.webp';

interface HeroProps {
  scrollToSection: (sectionId: string) => void;
}

const Hero: React.FC<HeroProps> = ({ scrollToSection }) => (
  <section id="home" className="pt-20 min-h-screen flex items-center bg-gradient-to-br from-blue-50 via-white to-blue-50">
  <div className="max-w-7xl mx-auto px-4 py-20">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-6">
            Leading Gastroenterology & Hepatology Care
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Haroon's GI & Liver Associates
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Providing world-class gastroenterology and hepatology services with over two decades of expertise.
            Your health is our priority.
          </p>
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => scrollToSection('services')}
              className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl hover:bg-blue-500 focus:bg-blue-500 flex items-center gap-2"
            >
              Our Services <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
        <div className="flex justify-center md:justify-end">
          <div className="relative flex items-center justify-center">
            <div className="absolute w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-blue-200 via-blue-100 to-blue-300 rounded-full blur-2xl opacity-60 z-0"></div>
            <img
              src={DrHaroon}
              alt="Dr. Haroon Yousaf"
              className="relative w-[480px] h-[480px] object-cover rounded-full border-8 border-white shadow-2xl z-10"
              style={{ boxShadow: '0 8px 32px 0 rgba(17, 27, 170, 0.6)' }}
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
