import { MapPin, Phone, Mail } from 'lucide-react';

const Contact = () => (
  <section id="contact" className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4">
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
);

export default Contact;
