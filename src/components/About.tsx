import { Award, ChevronRight } from 'lucide-react';

const About = () => (
  <section id="about" className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">About Prof. Muhammad Haroon Yousaf</h2>
        <p className="text-xl text-gray-600">FCPS - Professor, Head of Gastroenterology & Hepatology Department</p>
        <p className="text-lg text-blue-600 mt-2">Shalamar Institute of Health Sciences, Lahore</p>
      </div>
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div className="space-y-6">
          <div className="bg-blue-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Professional Profile</h3>
            <p className="text-gray-700 leading-relaxed">
              Professor Dr. Muhammad Haroon Yousaf is a distinguished medical professional with a wealth of expertise
              in the fields of Gastroenterology and Hepatology. Serving as a consultant Physician and Gastroenterologist
              at SMDC, he also holds the position of Head of the Gastroenterology Department and Medical Unit II.
            </p>
          </div>
          <div className="bg-white border-2 border-blue-100 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Education & Training</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <ChevronRight className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                <span>King Edward Medical College, Lahore</span>
              </li>
              <li className="flex items-start gap-3">
                <ChevronRight className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                <span>Internship at Mayo Hospital, Lahore</span>
              </li>
              <li className="flex items-start gap-3">
                <ChevronRight className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                <span>Medical Residency and Fellowship at Services Hospital, Lahore</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="space-y-6">
          <div className="bg-blue-600 text-white rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">Present Titles & Affiliations</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Award className="h-5 w-5 mt-1 flex-shrink-0" />
                <span>Division Head, Division of Surgical Oncology and Endocrine Surgery</span>
              </li>
              <li className="flex items-start gap-3">
                <Award className="h-5 w-5 mt-1 flex-shrink-0" />
                <span>Chair of Surgery & Allied, Shalamar Hospital and Medical College</span>
              </li>
              <li className="flex items-start gap-3">
                <Award className="h-5 w-5 mt-1 flex-shrink-0" />
                <span>Associate Professor, Department of Surgery, Shalamar Medical and Dental College, Lahore</span>
              </li>
            </ul>
          </div>
          <div className="bg-white border-2 border-blue-100 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Professional Memberships</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <ChevronRight className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                <span>Vice President - Pakistan Society of Gastroenterology & G.I. Endoscopy</span>
              </li>
              <li className="flex items-start gap-3">
                <ChevronRight className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                <span>Pakistan Society of Hepatology</span>
              </li>
              <li className="flex items-start gap-3">
                <ChevronRight className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                <span>Co-Chairman - IRB Committee, Shalamar Hospital Lahore</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
