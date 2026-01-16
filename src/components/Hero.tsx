import { ChevronRight } from 'lucide-react';
import AssociatesTeam from '../assets/associates-team.png';

interface HeroProps {
  scrollToSection: (sectionId: string) => void;
}

const Hero: React.FC<HeroProps> = ({ scrollToSection }) => (
  <section
    id="home"
    className="relative min-h-screen flex items-center justify-center"
    style={{
      backgroundImage: `url(${AssociatesTeam})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}
  >
    {/* Light overlay for clean look */}
    <div className="absolute inset-0 bg-white/80"></div>

    {/* Content */}
    <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">

      <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
        Haroon's GI & Liver Associates
      </h1>

      <p className="text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto">
        A dedicated team of gastroenterology and hepatology specialists committed to providing exceptional care.
        Together, we bring decades of expertise to prioritize your digestive health.
      </p>

      <div className="flex flex-wrap gap-4 justify-center">
        <button
          onClick={() => scrollToSection('services')}
          className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl hover:bg-blue-500 focus:bg-blue-500 flex items-center gap-2"
        >
          Our Services <ChevronRight className="h-5 w-5" />
        </button>
        <button
          onClick={() => scrollToSection('team')}
          className="px-8 py-4 bg-white text-blue-600 border-2 border-blue-600 rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl hover:bg-blue-50 focus:bg-blue-50 flex items-center gap-2"
        >
          Meet Our Team <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  </section>
);

export default Hero;
