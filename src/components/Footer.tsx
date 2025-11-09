import { Stethoscope } from 'lucide-react';

interface FooterProps {
  scrollToSection: (sectionId: string) => void;
}

const Footer: React.FC<FooterProps> = ({ scrollToSection }) => (
  <footer className="bg-gray-900 text-white py-12">
  <div className="max-w-7xl mx-auto px-4">
      <div className="grid md:grid-cols-3 gap-8 mb-8">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-blue-600 p-2 rounded-lg">
              <Stethoscope className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-bold">Haroon's GI & Liver Associates</h3>
          </div>
          <p className="text-gray-400">
            Expert care in Gastroenterology and Hepatology with over two decades of experience.
          </p>
        </div>
        <div>
          <h4 className="text-lg font-bold mb-4">Quick Links</h4>
          <div className="space-y-2">
            {['home', 'about', 'services', 'research', 'team', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="block text-gray-400 hover:text-white transition-colors capitalize"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-lg font-bold mb-4">Location</h4>
          <p className="text-gray-400">
            Shalamar Hospital and Medical College<br />
            Lahore, Pakistan
          </p>
        </div>
      </div>
      <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
        <p>© 2024 Haroon's GI & Liver Associates. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
