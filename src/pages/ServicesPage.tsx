import { ArrowRight, CheckCircle, Anchor, Plane, Truck, Train, Warehouse, Package2, Shield, BarChart3 } from 'lucide-react';
import Footer from '../components/landing/Footer';

interface ServicesPageProps {
  onNavigate: (page: string) => void;
}

const SERVICES = [
  {
    title: 'Sea Freight',
    icon: Anchor,
    img: 'https://images.pexels.com/photos/1427107/pexels-photo-1427107.jpeg?auto=compress&cs=tinysrgb&w=800',
    desc: 'Full Container Load (FCL) and Less than Container Load (LCL) across major global shipping lanes. We handle documentation, customs clearance, and port-to-door delivery.',
    features: ['FCL & LCL Options', 'Real-Time Vessel Tracking', 'Customs Clearance', '150+ Global Ports'],
    badge: 'Most Popular',
  },
  {
    title: 'Air Freight',
    icon: Plane,
    img: 'https://images.pexels.com/photos/358319/pexels-photo-358319.jpeg?auto=compress&cs=tinysrgb&w=800',
    desc: 'Express and standard air cargo services for time-sensitive shipments. Door-to-door, airport-to-airport, and charter options available worldwide.',
    features: ['Express & Economy', 'Charter Services', 'Dangerous Goods Certified', '48hr Global Delivery'],
    badge: 'Fastest',
  },
  {
    title: 'Road Transport',
    icon: Truck,
    img: 'https://images.pexels.com/photos/1095814/pexels-photo-1095814.jpeg?auto=compress&cs=tinysrgb&w=800',
    desc: 'Full Truckload (FTL) and Less than Truckload (LTL) services with GPS-tracked fleets. Ideal for regional and last-mile delivery operations.',
    features: ['FTL & LTL', 'GPS Live Tracking', 'Same-Day Options', 'Temperature Controlled'],
    badge: null,
  },
  {
    title: 'Rail Freight',
    icon: Train,
    img: 'https://images.pexels.com/photos/730134/pexels-photo-730134.jpeg?auto=compress&cs=tinysrgb&w=800',
    desc: 'Cost-effective overland rail solutions across Europe, Asia, and North America. A sustainable and reliable alternative to road and air freight.',
    features: ['Intercontinental Routes', 'Intermodal Capable', 'Lower Carbon Footprint', 'Heavy Load Specialist'],
    badge: 'Eco-Friendly',
  },
  {
    title: 'Warehousing',
    icon: Warehouse,
    img: 'https://images.pexels.com/photos/4246120/pexels-photo-4246120.jpeg?auto=compress&cs=tinysrgb&w=800',
    desc: 'State-of-the-art warehousing and distribution centers worldwide. Inventory management, pick & pack, and value-added services at competitive rates.',
    features: ['Real-Time Inventory', 'Climate Control', 'Pick & Pack', 'Cross-Docking'],
    badge: null,
  },
  {
    title: 'Customs Brokerage',
    icon: Shield,
    img: 'https://images.pexels.com/photos/5696556/pexels-photo-5696556.jpeg?auto=compress&cs=tinysrgb&w=800',
    desc: 'Expert customs clearance and compliance support for seamless international trade. We navigate complex regulations in over 100 countries on your behalf.',
    features: ['Import & Export Licenses', 'Duty Optimization', 'HS Code Classification', 'Compliance Consulting'],
    badge: null,
  },
];

const STATS = [
  { value: '150+', label: 'Countries Served' },
  { value: '4,800+', label: 'Monthly Deliveries' },
  { value: '99.7%', label: 'On-Time Delivery' },
  { value: '24/7', label: 'Expert Support' },
];

export default function ServicesPage({ onNavigate }: ServicesPageProps) {
  return (
    <div className="min-h-screen bg-white flex flex-col">

      {/* ── Hero Banner (mirrors Homepage) ─────────────────── */}
      <div className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('https://images.pexels.com/photos/906494/pexels-photo-906494.jpeg?auto=compress&cs=tinysrgb&w=1920')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/95 via-navy-dark/80 to-navy-dark/50" />
        {/* Animated dashed route line */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1440 800" preserveAspectRatio="xMidYMid slice">
          <path d="M 0 600 Q 400 350 900 500 Q 1150 580 1440 300" fill="none" stroke="#E63946" strokeWidth="2" strokeDasharray="8 6" opacity="0.4" className="route-dash" />
          <circle cx="0" cy="600" r="6" fill="#E63946" />
          <circle cx="0" cy="600" r="14" fill="#E63946" fillOpacity="0.15" className="pulse-dot" />
          <circle cx="1440" cy="300" r="6" fill="#22C55E" />
          <circle cx="1440" cy="300" r="14" fill="#22C55E" fillOpacity="0.15" className="pulse-dot" />
        </svg>

        <div className="relative max-w-7xl mx-auto px-6 pb-24 pt-40 w-full fade-in text-center flex flex-col items-center justify-center">
          <span className="inline-flex items-center gap-2 text-primary text-xs font-heading font-semibold uppercase tracking-widest mb-5">
            <span className="w-6 h-0.5 bg-primary" />
            What We Offer
            <span className="w-6 h-0.5 bg-primary" />
          </span>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 max-w-3xl">
            Global Logistics,<br />
            <span className="text-primary">Simplified</span>
          </h1>
          <p className="text-gray-300 text-base md:text-lg font-body leading-relaxed max-w-xl mb-10 mx-auto">
            End-to-end freight solutions tailored to your cargo. Sea, air, road, rail — Logiko handles every mile with precision and care.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => onNavigate('contact')}
              className="bg-primary hover:bg-primary-dark text-white font-heading font-semibold px-8 py-4 rounded-lg transition-all duration-200 hover:shadow-xl hover:shadow-primary/30"
            >
              Get a Free Quote
            </button>
            <button
              onClick={() => onNavigate('public_track')}
              className="border border-white/30 hover:border-white text-white font-heading font-medium px-8 py-4 rounded-lg transition-all duration-200 hover:bg-white/5"
            >
              Track a Shipment
            </button>
          </div>
        </div>
      </div>

      {/* ── Stats Strip ─────────────────── */}
      <div className="relative z-10 -mt-8 max-w-7xl mx-auto px-6 w-full">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 shadow-2xl rounded-2xl overflow-hidden">
          {STATS.map((stat, i) => (
            <div key={stat.label} className={`p-8 text-center ${i === 0 ? 'bg-primary' : 'bg-white'} group hover:bg-primary transition-colors duration-300`}>
              <p className={`font-heading text-4xl font-bold mb-1 ${i === 0 ? 'text-white' : 'text-navy group-hover:text-white'}`}>{stat.value}</p>
              <p className={`text-sm font-body ${i === 0 ? 'text-white/80' : 'text-gray-500 group-hover:text-white/80'}`}>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── ServicesIntro mirror ─────────────────── */}
      <section className="py-28 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/2226458/pexels-photo-2226458.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Cargo ship"
                className="rounded-2xl w-full h-80 object-cover shadow-2xl"
              />
              <div className="absolute bottom-[-40px] right-[-20px] w-56 h-44 z-20">
                <img
                  src="https://images.pexels.com/photos/1095814/pexels-photo-1095814.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Truck"
                  className="rounded-xl w-full h-full object-cover shadow-2xl border-4 border-white"
                />
              </div>
              <div className="absolute top-6 left-[-20px] z-30 bg-primary text-white rounded-xl px-5 py-4 shadow-2xl">
                <p className="font-heading text-3xl font-bold">4800+</p>
                <p className="text-white/80 text-xs font-body">Deliveries This Month</p>
              </div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 border-4 border-primary/20 rounded-2xl -z-10" />
              <div className="absolute -top-4 right-4 w-24 h-24 bg-primary/5 rounded-full -z-10" />
            </div>

            <div className="lg:pl-8 mt-12 lg:mt-0">
              <span className="inline-flex items-center gap-2 text-primary text-xs font-heading font-semibold uppercase tracking-widest mb-4">
                <span className="w-6 h-0.5 bg-primary" />
                Why Logiko
              </span>
              <h2 className="font-heading text-4xl font-bold text-navy leading-tight mb-6">
                We provide full range of <span className="text-primary">transport services</span>
              </h2>
              <p className="text-gray-500 font-body text-base leading-relaxed mb-8">
                From first mile to last mile, Logiko handles every aspect of your supply chain with precision and care. Our global network spans 150+ countries with real-time tracking and dedicated account management.
              </p>
              <div className="space-y-5 mb-10">
                {[
                  { title: 'Worldwide Service', desc: 'Seamless cross-border logistics with customs clearance support and global carrier partnerships.' },
                  { title: 'Real-Time Visibility', desc: 'Live GPS tracking and status updates across every mode of transport, accessible 24/7 via your Logiko dashboard.' },
                  { title: 'Expert Compliance', desc: 'Dedicated customs brokers and trade compliance specialists ensure smooth border crossings every time.' },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-heading font-semibold text-navy text-base mb-1">{item.title}</h4>
                      <p className="text-gray-500 text-sm font-body leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <button
                onClick={() => onNavigate('contact')}
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-heading font-semibold px-7 py-3.5 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-primary/30 group"
              >
                Get a Quote
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Service Cards Grid ─────────────────── */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 text-primary text-xs font-heading font-semibold uppercase tracking-widest mb-4">
              <span className="w-6 h-0.5 bg-primary" />
              Our Services
              <span className="w-6 h-0.5 bg-primary" />
            </span>
            <h2 className="font-heading text-4xl font-bold text-navy">Specialist logistics services</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((svc) => {
              const Icon = svc.icon;
              return (
                <div key={svc.title} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-navy/10 transition-all duration-500 group border border-gray-100">
                  <div className="relative h-56 overflow-hidden">
                    <img src={svc.img} alt={svc.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/80 via-navy-dark/30 to-transparent" />
                    {svc.badge && (
                      <div className="absolute top-4 right-4 bg-primary text-white text-xs font-heading font-bold px-3 py-1.5 rounded-lg shadow-lg">
                        {svc.badge}
                      </div>
                    )}
                    <div className="absolute bottom-4 left-4 w-12 h-12 bg-primary/80 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="p-7">
                    <h3 className="font-heading text-2xl font-bold text-navy mb-3">{svc.title}</h3>
                    <p className="text-gray-500 font-body text-sm leading-relaxed mb-5">{svc.desc}</p>
                    <ul className="space-y-2 mb-6">
                      {svc.features.map((f) => (
                        <li key={f} className="flex items-center gap-2.5 text-sm font-body text-gray-600">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <button
                      onClick={() => onNavigate('contact')}
                      className="w-full flex items-center justify-center gap-2 border-2 border-primary/20 hover:border-primary hover:bg-primary text-primary hover:text-white font-heading font-semibold py-3 rounded-xl text-sm transition-all duration-300 group/btn"
                    >
                      Request a Quote
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Dark Process CTA (mirrors homepage dark section) ─────────────────── */}
      <section className="relative py-28 overflow-hidden bg-navy-dark">
        <div className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: `url('https://images.pexels.com/photos/1427107/pexels-photo-1427107.jpeg?auto=compress&cs=tinysrgb&w=1920')` }} />
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <span className="inline-flex items-center gap-2 text-primary text-xs font-heading font-semibold uppercase tracking-widest mb-6">
            <span className="w-6 h-0.5 bg-primary" />
            Ready to Ship?
            <span className="w-6 h-0.5 bg-primary" />
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white max-w-3xl mx-auto leading-tight mb-6">
            Get a custom quote in <span className="text-primary">under 60 seconds</span>
          </h2>
          <p className="text-gray-400 font-body text-lg max-w-xl mx-auto mb-10">
            Our logistics experts are standing by to build a solution around your exact freight requirements and budget.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => onNavigate('contact')}
              className="bg-primary hover:bg-primary-dark text-white font-heading font-semibold px-10 py-4 rounded-lg transition-all duration-200 hover:shadow-xl hover:shadow-primary/30"
            >
              Get a Free Quote
            </button>
            <a
              href="tel:+18005644566"
              className="border border-white/30 hover:border-white text-white font-heading font-medium px-10 py-4 rounded-lg transition-all duration-200 hover:bg-white/5"
            >
              Call +1 800 LOGIKO
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
