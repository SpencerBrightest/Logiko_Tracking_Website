import { CheckCircle, ArrowRight } from 'lucide-react';

interface ServicesIntroProps {
  onNavigate: (page: string) => void;
}

export default function ServicesIntro({ onNavigate }: ServicesIntroProps) {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image collage */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://images.pexels.com/photos/2226458/pexels-photo-2226458.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Cargo ship"
                className="rounded-2xl w-full h-80 object-cover shadow-2xl"
              />
            </div>
            <div className="absolute bottom-[-40px] right-[-20px] w-56 h-44 z-20">
              <img
                src="https://images.pexels.com/photos/1095814/pexels-photo-1095814.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Truck"
                className="rounded-xl w-full h-full object-cover shadow-2xl border-4 border-white"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute top-6 left-[-20px] z-30 bg-primary text-white rounded-xl px-5 py-4 shadow-2xl">
              <p className="font-heading text-3xl font-bold">4800+</p>
              <p className="text-white/80 text-xs font-body">Deliveries This Month</p>
            </div>
            {/* Decoration */}
            <div className="absolute -bottom-4 -left-4 w-32 h-32 border-4 border-primary/20 rounded-2xl -z-10" />
            <div className="absolute -top-4 right-4 w-24 h-24 bg-primary/5 rounded-full -z-10" />
          </div>

          {/* Right: Content */}
          <div className="lg:pl-8">
            <span className="inline-flex items-center gap-2 text-primary text-xs font-heading font-semibold uppercase tracking-widest mb-4">
              <span className="w-6 h-0.5 bg-primary" />
              Our Services
            </span>
            <h2 className="font-heading text-4xl font-bold text-navy leading-tight mb-6">
              We provide full range of
              <span className="text-primary"> transport services</span>
            </h2>
            <p className="text-gray-500 font-body text-base leading-relaxed mb-8">
              From first mile to last mile, Logiko handles every aspect of your supply chain
              with precision and care. Our global network spans 150+ countries with real-time tracking.
            </p>

            <div className="space-y-6 mb-10">
              {[
                {
                  title: 'Worldwide Service',
                  desc: 'Seamless cross-border logistics with customs clearance support and global carrier partnerships.',
                },
                {
                  title: 'Local Service',
                  desc: 'Same-day and next-day delivery solutions powered by our regional distribution network.',
                },
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
              onClick={() => onNavigate('dashboard')}
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-heading font-semibold px-7 py-3.5 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-primary/30 group"
            >
              Explore More
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
