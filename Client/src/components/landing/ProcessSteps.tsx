import { Package, CreditCard, Send } from 'lucide-react';

const steps = [
  {
    num: '01',
    icon: Package,
    title: 'Enter Product & Destination',
    desc: 'Input your cargo details and delivery address through our simple online form.',
  },
  {
    num: '02',
    icon: CreditCard,
    title: 'Pay Your Service Charge',
    desc: 'Choose a service tier and complete payment securely with multiple methods.',
  },
  {
    num: '03',
    icon: Send,
    title: 'Ready to Send Products',
    desc: "We handle pickup, transit, and delivery — you get real-time tracking updates.",
  },
];

export default function ProcessSteps() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 text-primary text-xs font-heading font-semibold uppercase tracking-widest mb-4">
            <span className="w-6 h-0.5 bg-primary" />
            How It Works
            <span className="w-6 h-0.5 bg-primary" />
          </span>
          <h2 className="font-heading text-4xl font-bold text-navy">
            3 easy steps to task
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connector lines */}
          <div className="absolute top-12 left-[calc(16.67%+2rem)] right-[calc(16.67%+2rem)] hidden md:block">
            <svg viewBox="0 0 800 8" className="w-full h-2">
              <line x1="0" y1="4" x2="800" y2="4" stroke="#E63946" strokeWidth="1.5" strokeDasharray="8 6" />
            </svg>
          </div>

          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div key={step.num} className="flex flex-col items-center text-center group">
                <div className="relative mb-6">
                  <div className="w-24 h-24 rounded-full bg-gray-50 border-2 border-primary/20 group-hover:border-primary group-hover:bg-primary/5 flex items-center justify-center transition-all duration-300">
                    <Icon className="w-10 h-10 text-primary" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-heading font-bold">{i + 1}</span>
                  </div>
                </div>
                <h3 className="font-heading font-bold text-navy text-lg mb-3">{step.title}</h3>
                <p className="text-gray-500 text-sm font-body leading-relaxed max-w-xs">{step.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
