import { useState, useEffect } from 'react';
import {
  Stethoscope,
  Menu,
  X,
  Award,
  Microscope,
  Heart,
  BookOpen,
  Users,
  Phone,
  Mail,
  MapPin,
  ChevronRight,
  Activity
} from 'lucide-react';

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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-3">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Stethoscope className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-blue-900">Haroon's GI & Liver Associates</h1>
                <p className="text-sm text-blue-600">Expert Care in Gastroenterology & Hepatology</p>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              {['home', 'about', 'services', 'research', 'team', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`text-sm font-medium transition-colors capitalize ${
                    activeSection === item ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
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
      <section id="home" className="pt-20 min-h-screen flex items-center bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
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
                  onClick={() => scrollToSection('contact')}
                  className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl flex items-center gap-2"
                >
                  Book Appointment
                  <ChevronRight className="h-5 w-5" />
                </button>
                <button
                  onClick={() => scrollToSection('services')}
                  className="px-8 py-4 bg-white text-blue-600 border-2 border-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-all"
                >
                  Our Services
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-blue-600 rounded-3xl p-8 shadow-2xl">
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white rounded-xl p-6 text-center">
                    <Activity className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                    <div className="text-3xl font-bold text-gray-900">20+</div>
                    <div className="text-sm text-gray-600">Years Experience</div>
                  </div>
                  <div className="bg-white rounded-xl p-6 text-center">
                    <Users className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                    <div className="text-3xl font-bold text-gray-900">Expert</div>
                    <div className="text-sm text-gray-600">Medical Team</div>
                  </div>
                  <div className="bg-white rounded-xl p-6 text-center">
                    <Award className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                    <div className="text-3xl font-bold text-gray-900">Advanced</div>
                    <div className="text-sm text-gray-600">Procedures</div>
                  </div>
                  <div className="bg-white rounded-xl p-6 text-center">
                    <Heart className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                    <div className="text-3xl font-bold text-gray-900">Patient</div>
                    <div className="text-sm text-gray-600">Focused Care</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

      {/* Research Section */}
      <section id="research" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

      {/* Team Section */}
      <section id="team" className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Expert Team</h2>
            <p className="text-xl text-gray-600">Dedicated professionals committed to your health</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-4xl font-bold text-white">HY</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Prof. Muhammad Haroon Yousaf</h3>
              <p className="text-blue-600 font-semibold mb-4">FCPS</p>
              <p className="text-gray-600 mb-4">Professor & Head of Gastroenterology & Hepatology Department</p>
              <div className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold">
                Lead Consultant
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-4xl font-bold text-white">AS</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Dr. Ali Sabir</h3>
              <p className="text-blue-600 font-semibold mb-4">Gastroenterologist</p>
              <p className="text-gray-600 mb-4">Specialist in advanced GI procedures</p>
              <div className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold">
                Team Member
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-4xl font-bold text-white">YH</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Miss Yumnah Haroon</h3>
              <p className="text-blue-600 font-semibold mb-4">Medical Professional</p>
              <p className="text-gray-600 mb-4">Dedicated to patient care excellence</p>
              <div className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold">
                Team Member
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-xl text-gray-600">Get in touch to schedule your appointment</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-blue-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Visit Our Clinic</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-600 p-3 rounded-lg">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Location</h4>
                      <p className="text-gray-600">Shalamar Hospital and Medical College<br />Lahore, Pakistan</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-blue-600 p-3 rounded-lg">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                      <p className="text-gray-600">Available on request</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-blue-600 p-3 rounded-lg">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                      <p className="text-gray-600">Available on request</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Clinic Hours</h3>
                <p className="text-blue-100 mb-6">We are committed to providing accessible healthcare services</p>
                <div className="space-y-3">
                  <div className="flex justify-between items-center pb-3 border-b border-blue-400">
                    <span>Monday - Friday</span>
                    <span className="font-semibold">By Appointment</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-blue-400">
                    <span>Saturday</span>
                    <span className="font-semibold">By Appointment</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Sunday</span>
                    <span className="font-semibold">Closed</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Request an Appointment</h3>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Preferred Date</label>
                  <input
                    type="date"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none resize-none"
                    placeholder="Tell us about your concerns"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl"
                >
                  Submit Request
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
    </div>
  );
}

export default App;
