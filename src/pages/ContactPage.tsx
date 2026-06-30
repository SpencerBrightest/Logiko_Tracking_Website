import { useState } from 'react';
import Footer from '../components/landing/Footer';
import { Mail, Phone, MapPin, Send, CheckCircle, Package, Clock, ArrowRight } from 'lucide-react';

const GOOGLE_MAPS_EMBED = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.698956740737!2d-118.24369!3d34.053691!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c64e0f0e0001%3A0x0!2s123%20Harbor%20Blvd%2C%20Los%20Angeles%2C%20CA%2090012!5e0!3m2!1sen!2sus!4v1625000000000!5m2!1sen!2sus";

export default function ContactPage({ onNavigate }: { onNavigate: (page: string) => void }) {
  const [formSent, setFormSent] = useState(false);
  const [formData, setFormData] = useState({
    serviceType: 'Sea Freight',
    weight: '',
    dimensions: '',
    fromLocation: '',
    toLocation: '',
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSent(true);
    setTimeout(() => setFormSent(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">

      {/* ── Hero Banner (mirrors Homepage) ─────────────────── */}
      <div className="relative min-h-[65vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('https://images.pexels.com/photos/4246120/pexels-photo-4246120.jpeg?auto=compress&cs=tinysrgb&w=1920')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/97 via-navy-dark/85 to-navy-dark/60" />
        {/* Animated dashed route line */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1440 700" preserveAspectRatio="xMidYMid slice">
          <path d="M 100 600 Q 500 200 1000 400 Q 1200 480 1440 250" fill="none" stroke="#E63946" strokeWidth="2" strokeDasharray="8 6" opacity="0.35" className="route-dash" />
          <circle cx="100" cy="600" r="6" fill="#E63946" />
          <circle cx="100" cy="600" r="14" fill="#E63946" fillOpacity="0.15" className="pulse-dot" />
          <circle cx="1440" cy="250" r="6" fill="#22C55E" />
          <circle cx="1440" cy="250" r="14" fill="#22C55E" fillOpacity="0.15" className="pulse-dot" />
        </svg>

        <div className="relative max-w-7xl mx-auto px-6 pb-20 pt-40 w-full fade-in text-center flex flex-col items-center justify-center">
          <span className="inline-flex items-center gap-2 text-primary text-xs font-heading font-semibold uppercase tracking-widest mb-5">
            <span className="w-6 h-0.5 bg-primary" />
            Get in Touch
            <span className="w-6 h-0.5 bg-primary" />
          </span>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 max-w-3xl">
            Request a Quote or<br />
            <span className="text-primary">Talk to an Expert</span>
          </h1>
          <p className="text-gray-300 text-base md:text-lg font-body leading-relaxed max-w-xl mb-10 mx-auto">
            Our logistics specialists are available around the clock to deliver tailored freight solutions for your business.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="tel:+18005644566" className="bg-primary hover:bg-primary-dark text-white font-heading font-semibold px-8 py-4 rounded-lg transition-all duration-200 hover:shadow-xl hover:shadow-primary/30 flex items-center gap-2">
              <Phone className="w-5 h-5" />
              Call Us Now
            </a>
            <a href="mailto:quotes@logiko.com" className="border border-white/30 hover:border-white text-white font-heading font-medium px-8 py-4 rounded-lg transition-all duration-200 hover:bg-white/5 flex items-center gap-2">
              <Mail className="w-5 h-5" />
              Email Us
            </a>
          </div>
        </div>
      </div>

      {/* ── Contact Channels Strip ─────────────────── */}
      <div className="relative z-10 -mt-8 max-w-7xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 shadow-2xl rounded-2xl overflow-hidden">
          {[
            {
              icon: Phone,
              label: 'Phone Support',
              value: '+1 (800) LOGIKO-1',
              sub: 'Mon–Fri, 8AM–6PM PST',
              href: 'tel:+18005644566',
              highlight: true,
            },
            {
              icon: Mail,
              label: 'Email Us',
              value: 'quotes@logiko.com',
              sub: 'We respond within 24 hrs',
              href: 'mailto:quotes@logiko.com',
              highlight: false,
            },
            {
              icon: Clock,
              label: '24/7 Emergency Line',
              value: '+1 (310) 555-0147',
              sub: 'For urgent freight issues',
              href: 'tel:+13105550147',
              highlight: false,
            },
          ].map((c) => {
            const Icon = c.icon;
            return (
              <a
                key={c.label}
                href={c.href}
                className={`flex items-center gap-5 p-8 group hover:bg-primary transition-colors duration-300 cursor-pointer ${c.highlight ? 'bg-primary' : 'bg-white'}`}
              >
                <div className={`w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 ${c.highlight ? 'bg-white/20' : 'bg-primary/10 group-hover:bg-white/20'}`}>
                  <Icon className={`w-6 h-6 ${c.highlight ? 'text-white' : 'text-primary group-hover:text-white'}`} />
                </div>
                <div>
                  <p className={`text-xs font-heading font-semibold uppercase tracking-wider mb-1 ${c.highlight ? 'text-white/70' : 'text-gray-400 group-hover:text-white/70'}`}>{c.label}</p>
                  <p className={`font-heading font-bold text-lg ${c.highlight ? 'text-white' : 'text-navy group-hover:text-white'}`}>{c.value}</p>
                  <p className={`text-sm font-body ${c.highlight ? 'text-white/70' : 'text-gray-400 group-hover:text-white/70'}`}>{c.sub}</p>
                </div>
              </a>
            );
          })}
        </div>
      </div>

      {/* ── Main Content: Form + Info ─────────────────── */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

            {/* Left: Contact Info + Map */}
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-navy rounded-3xl p-8 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-56 h-56 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-primary/10 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

                <span className="inline-flex items-center gap-2 text-primary text-xs font-heading font-semibold uppercase tracking-widest mb-6 relative z-10">
                  <span className="w-5 h-0.5 bg-primary" />
                  Our Office
                </span>

                <div className="space-y-6 relative z-10">
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-heading font-semibold text-white mb-1">Global Headquarters</p>
                      <p className="text-gray-300 font-body text-sm leading-relaxed">
                        123 Harbor Blvd, Suite 400<br />
                        Los Angeles, CA 90012<br />
                        United States
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-heading font-semibold text-white mb-1">Phone</p>
                      <a href="tel:+18005644566" className="block text-gray-300 hover:text-primary font-body text-sm transition-colors">
                        Toll-Free: +1 (800) LOGIKO-1
                      </a>
                      <a href="tel:+13105550147" className="block text-gray-300 hover:text-primary font-body text-sm transition-colors">
                        Local: +1 (310) 555-0147
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-heading font-semibold text-white mb-1">Email</p>
                      <a href="mailto:quotes@logiko.com" className="block text-gray-300 hover:text-primary font-body text-sm transition-colors">quotes@logiko.com</a>
                      <a href="mailto:support@logiko.com" className="block text-gray-300 hover:text-primary font-body text-sm transition-colors">support@logiko.com</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-heading font-semibold text-white mb-1">Hours</p>
                      <p className="text-gray-300 font-body text-sm">Mon – Fri: 8:00 AM – 6:00 PM PST</p>
                      <p className="text-gray-300 font-body text-sm">Emergency: 24/7</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Real Google Maps Embed */}
              <div className="rounded-3xl overflow-hidden shadow-xl border border-gray-100 h-72">
                <iframe
                  title="Logiko Headquarters"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.6699!2d-118.24368999999!3d34.053691!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75af74e02c1%3A0x2dd84bca2e2a5a23!2sLA%20Harbor%20Blvd%2C%20Los%20Angeles%2C%20CA%2090731!5e0!3m2!1sen!2sus!4v1695000000000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            {/* Right: Quote Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-3xl shadow-xl shadow-navy/5 border border-gray-100 p-8 md:p-10">
                {formSent ? (
                  <div className="flex flex-col items-center justify-center py-20 text-center">
                    <div className="w-20 h-20 bg-success/10 rounded-full flex items-center justify-center mb-6">
                      <CheckCircle className="w-10 h-10 text-success" />
                    </div>
                    <h3 className="font-heading text-3xl font-bold text-navy mb-4">Quote Request Sent!</h3>
                    <p className="text-gray-500 font-body text-lg max-w-md">
                      Thank you! A logistics specialist will contact you within 24 hours with your custom quote.
                    </p>
                    <button
                      onClick={() => setFormSent(false)}
                      className="mt-8 flex items-center gap-2 text-primary font-heading font-semibold hover:underline"
                    >
                      Submit another request <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-7">
                    <div>
                      <span className="inline-flex items-center gap-2 text-primary text-xs font-heading font-semibold uppercase tracking-widest mb-5">
                        <Package className="w-4 h-4" />
                        Shipment Details
                      </span>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-4">
                        <div className="md:col-span-2">
                          <label className="block text-gray-500 text-xs font-body font-medium mb-2">Service Type</label>
                          <select
                            name="serviceType"
                            value={formData.serviceType}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm font-body text-navy focus:outline-none focus:border-primary/50 transition-colors bg-white"
                          >
                            <option>Sea Freight (FCL / LCL)</option>
                            <option>Air Freight (Express / Standard)</option>
                            <option>Road Transport (FTL / LTL)</option>
                            <option>Rail Freight</option>
                            <option>Warehousing & Distribution</option>
                            <option>Customs Brokerage</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-gray-500 text-xs font-body font-medium mb-2">Total Weight (kg / lbs)</label>
                          <input type="text" name="weight" required value={formData.weight} onChange={handleChange} placeholder="e.g., 500 kg" className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm font-body text-navy focus:outline-none focus:border-primary/50 transition-colors" />
                        </div>
                        <div>
                          <label className="block text-gray-500 text-xs font-body font-medium mb-2">Dimensions (CBM or L×W×H)</label>
                          <input type="text" name="dimensions" required value={formData.dimensions} onChange={handleChange} placeholder="e.g., 2.5 CBM" className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm font-body text-navy focus:outline-none focus:border-primary/50 transition-colors" />
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-gray-100">
                      <span className="inline-flex items-center gap-2 text-primary text-xs font-heading font-semibold uppercase tracking-widest mb-5">
                        <MapPin className="w-4 h-4" />
                        Route
                      </span>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-4">
                        <div>
                          <label className="block text-gray-500 text-xs font-body font-medium mb-2">Origin (City, Country)</label>
                          <input type="text" name="fromLocation" required value={formData.fromLocation} onChange={handleChange} placeholder="e.g., Shanghai, China" className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm font-body text-navy focus:outline-none focus:border-primary/50 transition-colors" />
                        </div>
                        <div>
                          <label className="block text-gray-500 text-xs font-body font-medium mb-2">Destination (City, Country)</label>
                          <input type="text" name="toLocation" required value={formData.toLocation} onChange={handleChange} placeholder="e.g., Los Angeles, USA" className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm font-body text-navy focus:outline-none focus:border-primary/50 transition-colors" />
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-gray-100">
                      <span className="inline-flex items-center gap-2 text-primary text-xs font-heading font-semibold uppercase tracking-widest mb-5">
                        <Mail className="w-4 h-4" />
                        Your Information
                      </span>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-4">
                        <div className="md:col-span-2">
                          <label className="block text-gray-500 text-xs font-body font-medium mb-2">Full Name / Company</label>
                          <input type="text" name="name" required value={formData.name} onChange={handleChange} placeholder="Jane Doe – Logistics Inc." className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm font-body text-navy focus:outline-none focus:border-primary/50 transition-colors" />
                        </div>
                        <div>
                          <label className="block text-gray-500 text-xs font-body font-medium mb-2">Email Address</label>
                          <input type="email" name="email" required value={formData.email} onChange={handleChange} placeholder="jane@company.com" className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm font-body text-navy focus:outline-none focus:border-primary/50 transition-colors" />
                        </div>
                        <div>
                          <label className="block text-gray-500 text-xs font-body font-medium mb-2">Phone Number</label>
                          <input type="tel" name="phone" required value={formData.phone} onChange={handleChange} placeholder="+1 (555) 000-0000" className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm font-body text-navy focus:outline-none focus:border-primary/50 transition-colors" />
                        </div>
                        <div className="md:col-span-2">
                          <label className="block text-gray-500 text-xs font-body font-medium mb-2">Additional Notes</label>
                          <textarea name="message" value={formData.message} onChange={handleChange} rows={4} placeholder="Special handling, hazardous goods, delivery windows, or any other requirements…" className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm font-body text-navy focus:outline-none focus:border-primary/50 transition-colors resize-none" />
                        </div>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-primary hover:bg-primary-dark text-white font-heading font-bold py-4 rounded-xl text-base transition-colors flex items-center justify-center gap-3 group"
                    >
                      <Send className="w-5 h-5 group-hover:scale-110 transition-transform" />
                      Request Free Quote
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
