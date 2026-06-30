import { ArrowRight } from 'lucide-react';

const services = [
  {
    title: 'Sea Freight',
    img: 'https://images.pexels.com/photos/1427107/pexels-photo-1427107.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    title: 'Air Freight',
    img: 'https://images.pexels.com/photos/358319/pexels-photo-358319.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    title: 'Road Service',
    img: 'https://images.pexels.com/photos/1095814/pexels-photo-1095814.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    title: 'Train Freight',
    img: 'https://images.pexels.com/photos/730134/pexels-photo-730134.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
];

export default function ServicesGrid() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-2 text-primary text-xs font-heading font-semibold uppercase tracking-widest mb-4">
            <span className="w-6 h-0.5 bg-primary" />
            What We Do
            <span className="w-6 h-0.5 bg-primary" />
          </span>
          <h2 className="font-heading text-4xl font-bold text-navy">
            Specialist logistics services
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((svc) => (
            <div
              key={svc.title}
              className="relative group overflow-hidden rounded-2xl h-72 cursor-pointer"
            >
              <img
                src={svc.img}
                alt={svc.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/90 via-navy-dark/40 to-transparent" />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="font-heading font-bold text-white text-xl mb-2">{svc.title}</h3>
                <a
                  href="#"
                  className="inline-flex items-center gap-1 text-primary text-sm font-body font-medium opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300"
                >
                  Read More <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
