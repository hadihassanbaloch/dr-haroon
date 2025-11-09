import { Activity, Heart, Microscope, ChevronRight } from 'lucide-react';

const Services = () => (
  <section id="services" className="py-20 bg-gradient-to-br from-blue-50 to-white">
  <div className="max-w-7xl mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Clinical Services & Expertise</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Comprehensive diagnostic and therapeutic procedures in Gastroenterology
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
          <div className="bg-blue-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
            <Activity className="h-8 w-8 text-blue-600" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-4">Upper G.I. Endoscopy</h3>
          <ul className="space-y-2 text-gray-600">
            <li className="flex items-start gap-2">
              <ChevronRight className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
              <span>Diagnostic Endoscopy</span>
            </li>
            <li className="flex items-start gap-2">
              <ChevronRight className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
              <span>Esophageal Variceal Sclerotherapy</span>
            </li>
            <li className="flex items-start gap-2">
              <ChevronRight className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
              <span>Stricture Dilatation</span>
            </li>
          </ul>
        </div>
        <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
          <div className="bg-blue-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
            <Heart className="h-8 w-8 text-blue-600" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-4">Variceal Management</h3>
          <ul className="space-y-2 text-gray-600">
            <li className="flex items-start gap-2">
              <ChevronRight className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
              <span>Endoscopic Varices Band Ligation</span>
            </li>
            <li className="flex items-start gap-2">
              <ChevronRight className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
              <span>Gastric Variceal Sclerotherapy</span>
            </li>
            <li className="flex items-start gap-2">
              <ChevronRight className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
              <span>Variceal Bleeding Management</span>
            </li>
          </ul>
        </div>
        <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
          <div className="bg-blue-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
            <Microscope className="h-8 w-8 text-blue-600" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-4">Lower G.I. Endoscopy</h3>
          <ul className="space-y-2 text-gray-600">
            <li className="flex items-start gap-2">
              <ChevronRight className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
              <span>Diagnostic Colonoscopy</span>
            </li>
            <li className="flex items-start gap-2">
              <ChevronRight className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
              <span>Colorectal Issue Detection</span>
            </li>
            <li className="flex items-start gap-2">
              <ChevronRight className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
              <span>Early Management</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default Services;
