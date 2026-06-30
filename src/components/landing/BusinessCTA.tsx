interface BusinessCTAProps {
  onNavigate: (page: string) => void;
}

export default function BusinessCTA({ onNavigate }: BusinessCTAProps) {
  return (
    <section className="py-0 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left: Dark/red */}
        <div className="bg-navy py-20 px-12 flex flex-col justify-center">
          <span className="inline-flex items-center gap-2 text-primary text-xs font-heading font-semibold uppercase tracking-widest mb-5">
            <span className="w-6 h-0.5 bg-primary" />
            For Businesses
          </span>
          <h2 className="font-heading text-4xl font-bold text-white leading-tight mb-4">
            Best services for <span className="text-primary">businesses</span>
          </h2>
          <p className="text-gray-400 font-body text-base leading-relaxed mb-8 max-w-md">
            Scale your operations with volume discounts, dedicated account managers,
            and enterprise-grade API integrations for seamless order management.
          </p>
          <div className="flex flex-wrap gap-4 mb-8">
            {['Volume Discounts', 'API Access', 'Dedicated Support', 'Custom Reporting'].map((f) => (
              <span key={f} className="text-xs font-body font-medium bg-white/10 text-gray-300 border border-white/10 px-4 py-1.5 rounded-full">
                {f}
              </span>
            ))}
          </div>
          <button
            onClick={() => onNavigate('contact')}
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-heading font-semibold px-7 py-3.5 rounded-lg transition-all duration-200 w-fit hover:shadow-lg hover:shadow-primary/30"
          >
            Learn More
          </button>
        </div>

        {/* Right: Image with badge */}
        <div className="relative min-h-[360px] lg:min-h-auto">
          <img
            src="https://images.pexels.com/photos/4246120/pexels-photo-4246120.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="Warehouse worker"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-navy/30" />
          <div className="absolute bottom-10 left-10 bg-primary text-white rounded-2xl p-6 shadow-2xl">
            <p className="font-heading text-5xl font-bold">4,800</p>
            <p className="text-white/80 text-sm font-body mt-1">Deliveries This Month</p>
            <div className="mt-3 flex gap-1">
              {[1,2,3,4,5].map((s) => (
                <div key={s} className="w-2 h-2 rounded-full bg-white/60" />
              ))}
              <span className="text-white/60 text-xs font-body ml-2">5-star rated</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
