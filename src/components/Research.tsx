import { BookOpen, Award, ChevronRight } from 'lucide-react';

const Research = () => (
  <section id="research" className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Research & Publications</h2>
        <p className="text-xl text-gray-600">Contributing to medical advancement through extensive research</p>
      </div>
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-blue-50 rounded-2xl p-8">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-blue-600 p-3 rounded-lg">
              <BookOpen className="h-6 w-6 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900">Key Research Areas</h3>
            </div>
          </div>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-3">
              <ChevronRight className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
              <span>Hepatitis B & C Vaccination and Treatment</span>
            </li>
            <li className="flex items-start gap-3">
              <ChevronRight className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
              <span>Chronic Liver Disease Diagnosis</span>
            </li>
            <li className="flex items-start gap-3">
              <ChevronRight className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
              <span>Variceal Hemorrhage Management</span>
            </li>
            <li className="flex items-start gap-3">
              <ChevronRight className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
              <span>Irritable Bowel Syndrome Treatment</span>
            </li>
            <li className="flex items-start gap-3">
              <ChevronRight className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
              <span>Gastric Varices Treatment with Histoacryl</span>
            </li>
          </ul>
        </div>
        <div className="bg-white border-2 border-blue-100 rounded-2xl p-8">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-blue-600 p-3 rounded-lg">
              <Award className="h-6 w-6 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900">Board Certifications</h3>
            </div>
          </div>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-3">
              <ChevronRight className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
              <span>FACS (USA) - Fellow of American College of Surgeons (2020)</span>
            </li>
            <li className="flex items-start gap-3">
              <ChevronRight className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
              <span>FRCS (England) - Fellowship of Royal College of Surgeons (2016)</span>
            </li>
            <li className="flex items-start gap-3">
              <ChevronRight className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
              <span>FCPS - Fellowship of College of Physicians & Surgeons Pakistan (2012)</span>
            </li>
            <li className="flex items-start gap-3">
              <ChevronRight className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
              <span>Masters in Oncoplastic Breast Surgery, University of East Anglia, UK (2020)</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 text-white">
        <h3 className="text-2xl font-bold mb-6">Selected Publications</h3>
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          <div className="bg-white/10 rounded-lg p-4">
            <p className="leading-relaxed">Dramatic Response Of Hep C Patients With Hep C Virus Geno Type 3 To Sofosbuvir-Based Therapy In Punjab, Pakistan (World J. Gastroenterology, 2017)</p>
          </div>
          <div className="bg-white/10 rounded-lg p-4">
            <p className="leading-relaxed">Incidence And Pattern Of Deranged Liver Functions In Patients With Dengue Fever (Pakistan J. Gastroenterology, 2011)</p>
          </div>
          <div className="bg-white/10 rounded-lg p-4">
            <p className="leading-relaxed">Experience Of Histoacryl Injection In Gastric Varices (Journal Of Rawalpindi Medical College, 2011)</p>
          </div>
          <div className="bg-white/10 rounded-lg p-4">
            <p className="leading-relaxed">Frequency Of Risk Factors For Transmission Of Hepatitis C Virus (Pakistan J., 2004)</p>
          </div>
        </div>
        <p className="text-center mt-6 text-blue-100">18+ peer-reviewed publications in leading medical journals</p>
      </div>
    </div>
  </section>
);

export default Research;
