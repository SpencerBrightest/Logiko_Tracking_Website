import { DollarSign, Clock, Warehouse } from 'lucide-react';

const cards = [
  {
    num: '01',
    icon: DollarSign,
    title: 'Cost Effectiveness',
    desc: 'Optimize your shipping budget with our competitive rates and smart routing algorithms.',
    highlight: true,
  },
  {
    num: '02',
    icon: Clock,
    title: 'Reduced Transit Time',
    desc: 'Express lanes and priority handling ensure your cargo reaches its destination on schedule.',
    highlight: false,
  },
  {
    num: '03',
    icon: Warehouse,
    title: 'Warehouse Operation',
    desc: 'State-of-the-art facilities with real-time inventory management and climate control.',
    highlight: false,
  },
];

export default function FeatureCards() {
  return (
    <section className="relative z-10 -mt-20 max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-0 shadow-2xl rounded-2xl overflow-hidden">
        {cards.map((card) => {
          const Icon = card.icon;
          return (
            <div
              key={card.num}
              className={`relative p-8 ${
                card.highlight
                  ? 'bg-primary text-white'
                  : 'bg-white text-navy'
              } group hover:bg-primary transition-all duration-300`}
            >
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0">
                  <div className={`relative w-14 h-14 rounded-full flex items-center justify-center ${
                    card.highlight
                      ? 'bg-white/20'
                      : 'bg-primary/10 group-hover:bg-white/20'
                  }`}>
                    <Icon className={`w-6 h-6 ${
                      card.highlight ? 'text-white' : 'text-primary group-hover:text-white'
                    }`} />
                    <span className={`absolute -top-1 -right-1 text-xs font-heading font-bold w-6 h-6 rounded-full flex items-center justify-center ${
                      card.highlight ? 'bg-white text-primary' : 'bg-primary text-white group-hover:bg-white group-hover:text-primary'
                    }`}>
                      {card.num}
                    </span>
                  </div>
                </div>
                <div>
                  <h3 className={`font-heading font-bold text-lg mb-2 ${
                    card.highlight ? 'text-white' : 'text-navy group-hover:text-white'
                  }`}>
                    {card.title}
                  </h3>
                  <p className={`text-sm font-body leading-relaxed ${
                    card.highlight ? 'text-white/80' : 'text-gray-500 group-hover:text-white/80'
                  }`}>
                    {card.desc}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
