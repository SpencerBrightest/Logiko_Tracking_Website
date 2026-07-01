import { Truck, Mail, ArrowRight, MapPin, Phone } from 'lucide-react';
import { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');

  return (
    <footer className="bg-navy-dark text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Col 1 */}
          <div>
            <div className="flex items-center gap-2 mb-5">
              <div className="w-9 h-9 bg-primary rounded-lg flex items-center justify-center">
                <Truck className="w-5 h-5 text-white" strokeWidth={2} />
              </div>
              <span className="font-heading text-xl font-bold">Logiko</span>
            </div>
            <p className="text-gray-400 font-body text-sm leading-relaxed mb-6">
              Global logistics solutions built on trust, technology, and transparency.
              Moving cargo from port to door seamlessly.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-400 text-sm">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                <span>123 Harbor Blvd, Los Angeles, CA</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400 text-sm">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <span>+1 800 LOGIKO</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400 text-sm">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <span>hello@logiko.com</span>
              </div>
            </div>
          </div>

          {/* Col 2 */}
          <div>
            <h4 className="font-heading font-bold text-base mb-5 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {['About Us', 'Our Services', 'Track Shipment', 'Get a Quote', 'Careers', 'Contact Us'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-400 hover:text-primary text-sm font-body flex items-center gap-2 group transition-colors duration-200">
                    <ArrowRight className="w-3 h-3 text-primary opacity-0 group-hover:opacity-100 transition-opacity -ml-1" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 */}
          <div>
            <h4 className="font-heading font-bold text-base mb-5 text-white">Our Services</h4>
            <ul className="space-y-3">
              {['Sea Freight', 'Air Freight', 'Road Transport', 'Rail Freight', 'Warehousing', 'Customs Clearance'].map((svc) => (
                <li key={svc}>
                  <a href="#" className="text-gray-400 hover:text-primary text-sm font-body flex items-center gap-2 group transition-colors duration-200">
                    <ArrowRight className="w-3 h-3 text-primary opacity-0 group-hover:opacity-100 transition-opacity -ml-1" />
                    {svc}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 */}
          <div>
            <h4 className="font-heading font-bold text-base mb-5 text-white">Newsletter</h4>
            <p className="text-gray-400 text-sm font-body mb-5 leading-relaxed">
              Get the latest logistics news and shipping tips in your inbox weekly.
            </p>
            <form
              onSubmit={(e) => { e.preventDefault(); setEmail(''); }}
              className="flex flex-col gap-3"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="bg-white/10 border border-white/10 text-white placeholder-gray-500 px-4 py-3 rounded-lg text-sm font-body focus:outline-none focus:border-primary/60 transition-colors"
              />
              <button
                type="submit"
                className="bg-primary hover:bg-primary-dark text-white font-heading font-semibold px-6 py-3 rounded-lg text-sm transition-colors duration-200"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-500 text-xs font-body">
            © 2025 Logiko Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-gray-500 hover:text-gray-300 text-xs font-body transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-gray-300 text-xs font-body transition-colors">Terms & Conditions</a>
            <a href="#" className="text-gray-500 hover:text-gray-300 text-xs font-body transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
