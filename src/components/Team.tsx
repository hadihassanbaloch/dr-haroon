const Team = () => (
  <section id="team" className="py-20 bg-gradient-to-br from-blue-50 to-white">
  <div className="max-w-7xl mx-auto px-4">
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
);

export default Team;
