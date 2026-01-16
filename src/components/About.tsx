import { Award, Users, Heart, Clock, Building2, Stethoscope, Shield, Target } from 'lucide-react';

const About = () => (
  <section id="about" className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">About Our Practice</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Haroon's GI & Liver Associates is a premier gastroenterology and hepatology practice
          dedicated to providing comprehensive digestive health care in Lahore.
        </p>
      </div>

      {/* Mission, Vision, Commitment & Approach */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <div className="bg-blue-50 rounded-2xl p-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
              <Heart className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
          </div>
          <p className="text-gray-700 leading-relaxed">
            To deliver exceptional gastroenterology and hepatology care through a patient-centered approach,
            combining advanced medical expertise with compassionate treatment. We are committed to improving
            the digestive health and quality of life for every patient we serve.
          </p>
        </div>
        <div className="bg-blue-50 rounded-2xl p-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
              <Award className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
          </div>
          <p className="text-gray-700 leading-relaxed">
            To be the leading center of excellence in gastroenterology and liver care in Pakistan,
            recognized for our clinical expertise, innovative treatments, and unwavering commitment
            to patient outcomes and medical education.
          </p>
        </div>
        <div className="bg-blue-50 rounded-2xl p-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
              <Shield className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">Our Commitment</h3>
          </div>
          <p className="text-gray-700 leading-relaxed">
            We are dedicated to maintaining the highest standards of medical care, patient safety, and ethical practice.
            Our commitment extends to continuous learning, staying updated with the latest advancements in gastroenterology,
            and ensuring accessible, affordable healthcare for all our patients.
          </p>
        </div>
        <div className="bg-blue-50 rounded-2xl p-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
              <Target className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">Our Approach</h3>
          </div>
          <p className="text-gray-700 leading-relaxed">
            We believe in a holistic, patient-first approach that combines thorough diagnosis with personalized treatment plans.
            Every patient receives individualized attention, clear communication about their condition, and collaborative
            decision-making to achieve the best possible health outcomes.
          </p>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="mb-16">
        <h3 className="text-3xl font-bold text-gray-900 text-center mb-10">Why Choose Us</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white border-2 border-blue-100 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-blue-600" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-2">Expert Team</h4>
            <p className="text-gray-600">
              Our team of specialists brings decades of combined experience in treating complex GI and liver conditions.
            </p>
          </div>
          <div className="bg-white border-2 border-blue-100 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Stethoscope className="h-8 w-8 text-blue-600" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-2">Advanced Care</h4>
            <p className="text-gray-600">
              State-of-the-art diagnostic and treatment facilities including advanced endoscopy and imaging.
            </p>
          </div>
          <div className="bg-white border-2 border-blue-100 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="h-8 w-8 text-blue-600" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-2">Patient-First</h4>
            <p className="text-gray-600">
              Personalized treatment plans and compassionate care tailored to each patient's unique needs.
            </p>
          </div>
        </div>
      </div>

      {/* Affiliations */}
      <div className="bg-blue-600 text-white rounded-2xl p-8">
        <div className="flex items-center gap-3 mb-6">
          <Building2 className="h-8 w-8" />
          <h3 className="text-2xl font-bold">Our Affiliations</h3>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-lg font-semibold mb-3">Hospital Affiliations</h4>
            <ul className="space-y-2 text-white/90">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-white rounded-full"></span>
                Shalamar Institute of Health Sciences, Lahore
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-white rounded-full"></span>
                Shalamar Hospital, Lahore
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-3">Professional Memberships</h4>
            <ul className="space-y-2 text-white/90">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-white rounded-full"></span>
                Pakistan Society of Gastroenterology & G.I. Endoscopy
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-white rounded-full"></span>
                Pakistan Society of Hepatology
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
