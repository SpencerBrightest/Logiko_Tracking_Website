import Footer from '../components/landing/Footer';
import { ArrowRight, Calendar, Tag } from 'lucide-react';

const NEWS_ARTICLES = [
  { id: 1, title: 'Logiko Expands European Rail Freight Network', category: 'Company News', date: 'Oct 24, 2025', image: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&q=80&w=600' },
  { id: 2, title: 'Q3 Global Supply Chain Resilience Report', category: 'Industry Insights', date: 'Oct 18, 2025', image: 'https://images.unsplash.com/photo-1586528116311-ad8ed7c6632f?auto=format&fit=crop&q=80&w=600' },
  { id: 3, title: 'New AI-Driven Analytics Dashboard Launched', category: 'Technology', date: 'Oct 12, 2025', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600' },
  { id: 4, title: 'Sustainable Shipping: Our Path to Net Zero', category: 'Sustainability', date: 'Oct 05, 2025', image: 'https://images.unsplash.com/photo-1511556820780-d912e42b4980?auto=format&fit=crop&q=80&w=600' },
  { id: 5, title: 'Navigating Peak Season: Tips for E-Commerce', category: 'Guides', date: 'Sep 28, 2025', image: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&q=80&w=600' },
  { id: 6, title: 'Major Port Upgrades Reshaping Southeast Asia', category: 'Global Trade', date: 'Sep 22, 2025', image: 'https://images.unsplash.com/photo-1555319525-4c60f2bb97f5?auto=format&fit=crop&q=80&w=600' },
  { id: 7, title: 'How Blockchain is Securing Bills of Lading', category: 'Technology', date: 'Sep 15, 2025', image: 'https://images.unsplash.com/photo-1639762681485-074b7f4ec651?auto=format&fit=crop&q=80&w=600' },
  { id: 8, title: 'Logiko Named Top Freight Forwarder 2025', category: 'Awards', date: 'Sep 08, 2025', image: 'https://images.unsplash.com/photo-1579444741963-5ae219cafe27?auto=format&fit=crop&q=80&w=600' },
  { id: 9, title: 'Understanding New Customs Regulations in the EU', category: 'Compliance', date: 'Sep 01, 2025', image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80&w=600' },
  { id: 10, title: 'The Rise of Autonomous Last-Mile Delivery', category: 'Innovation', date: 'Aug 25, 2025', image: 'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?auto=format&fit=crop&q=80&w=600' },
  { id: 11, title: 'Mitigating Risks in Ocean Freight Transshipments', category: 'Guides', date: 'Aug 18, 2025', image: 'https://images.unsplash.com/photo-1505705694340-019e1be3324c?auto=format&fit=crop&q=80&w=600' },
  { id: 12, title: 'Logiko Opens New Logistics Hub in Dubai', category: 'Company News', date: 'Aug 12, 2025', image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=600' },
  { id: 13, title: 'Air Freight Capacity Trends for Winter 2025', category: 'Market Analysis', date: 'Aug 05, 2025', image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=600' },
  { id: 14, title: 'Cold Chain Logistics: Safeguarding Pharmaceuticals', category: 'Specialized Freight', date: 'Jul 29, 2025', image: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&q=80&w=600' },
  { id: 15, title: 'Interview with our CEO: The Future of Logiko', category: 'Leadership', date: 'Jul 22, 2025', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=600' },
];

// Featured top 3
const FEATURED = NEWS_ARTICLES.slice(0, 3);
const REST = NEWS_ARTICLES.slice(3);

export default function NewsPage({ onNavigate }: { onNavigate: (page: string) => void }) {
  return (
    <div className="min-h-screen bg-white flex flex-col">

      {/* ── Hero Banner (mirrors Homepage) ─────────────────── */}
      <div className="relative min-h-[65vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('https://images.pexels.com/photos/1427107/pexels-photo-1427107.jpeg?auto=compress&cs=tinysrgb&w=1920')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/97 via-navy-dark/85 to-navy-dark/60" />
        {/* Dashed route animation */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1440 700" preserveAspectRatio="xMidYMid slice">
          <path d="M 0 500 Q 400 200 900 380 Q 1150 460 1440 200" fill="none" stroke="#E63946" strokeWidth="2" strokeDasharray="8 6" opacity="0.4" className="route-dash" />
          <circle cx="0" cy="500" r="6" fill="#E63946" />
          <circle cx="0" cy="500" r="14" fill="#E63946" fillOpacity="0.15" className="pulse-dot" />
          <circle cx="1440" cy="200" r="6" fill="#22C55E" />
          <circle cx="1440" cy="200" r="14" fill="#22C55E" fillOpacity="0.15" className="pulse-dot" />
        </svg>

        <div className="relative max-w-7xl mx-auto px-6 pb-20 pt-40 w-full fade-in text-center flex flex-col items-center justify-center">
          <span className="inline-flex items-center gap-2 text-primary text-xs font-heading font-semibold uppercase tracking-widest mb-5 font-size 6px">
            {/* <span className="w-6 h-0.5 bg-primary" /> */}
            Latest Updates
            {/* <span className="w-6 h-0.5 bg-primary" /> */}
          </span>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 max-w-3xl">
            News &amp;<br />
            <span className="text-primary">Industry Insights</span>
          </h1>
          <p className="text-black-800-bold text-base  md:text-lg font-body leading-relaxed max-w-xl mx-auto">
            Logistics trends, supply chain intelligence, company milestones, and global trade updates  all in one place.
          </p>
        </div>
      </div>

      {/* ── Featured Top 3 ─────────────────── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <span className="inline-flex items-center gap-2 text-primary text-xs font-heading font-semibold uppercase tracking-widest">
              <span className="w-5 h-0.5 bg-primary" />
              Featured Stories
              <span className="w-5 h-0.5 bg-primary" />
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            {/* Large hero card */}
            <div className="lg:col-span-2 relative group overflow-hidden rounded-3xl h-96 cursor-pointer">
              <img src={FEATURED[0].image} alt={FEATURED[0].title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/95 via-navy-dark/40 to-transparent" />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-500" />
              <div className="absolute top-5 left-5">
                <span className="bg-primary text-white text-xs font-heading font-bold px-3 py-1.5 rounded-lg shadow">
                  {FEATURED[0].category}
                </span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-7">
                <div className="flex items-center gap-2 text-gray-300 text-xs font-body mb-3">
                  <Calendar className="w-3.5 h-3.5" /> {FEATURED[0].date}
                </div>
                <h3 className="font-heading text-2xl font-bold text-white mb-3 leading-tight">{FEATURED[0].title}</h3>
                <div className="flex items-center text-primary text-sm font-heading font-semibold gap-1 group-hover:gap-2 transition-all">
                  Read Article <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>

            {/* Two smaller featured cards */}
            <div className="flex flex-col gap-6">
              {FEATURED.slice(1).map((article) => (
                <div key={article.id} className="relative group overflow-hidden rounded-3xl h-44 cursor-pointer flex-1">
                  <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/90 via-navy-dark/40 to-transparent" />
                  <div className="absolute top-3 left-3">
                    <span className="bg-primary/90 backdrop-blur-sm text-white text-xs font-heading font-bold px-2.5 py-1 rounded-lg">
                      {article.category}
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div className="flex items-center gap-1.5 text-gray-400 text-xs font-body mb-1.5">
                      <Calendar className="w-3 h-3" /> {article.date}
                    </div>
                    <h3 className="font-heading text-base font-bold text-white line-clamp-2 leading-tight">{article.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── All 12 Remaining Articles ─────────────────── */}
      <section className="pb-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <span className="inline-flex items-center gap-2 text-primary text-xs font-heading font-semibold uppercase tracking-widest">
              <span className="w-5 h-0.5 bg-primary" />
              All Articles
              <span className="w-5 h-0.5 bg-primary" />
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {REST.map((article) => (
              <article key={article.id} className="bg-white rounded-3xl shadow-sm hover:shadow-xl hover:shadow-navy/5 transition-all duration-300 border border-gray-100 overflow-hidden group flex flex-col">
                <div className="relative h-52 overflow-hidden">
                  <div className="absolute inset-0 bg-navy/20 group-hover:bg-transparent transition-colors z-10" />
                  <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-4 left-4 z-20">
                    <span className="bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-lg text-xs font-heading font-bold text-navy shadow-sm flex items-center gap-1.5">
                      <Tag className="w-3 h-3 text-primary" />
                      {article.category}
                    </span>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-2 text-gray-400 text-xs font-body mb-3">
                    <Calendar className="w-3.5 h-3.5" />
                    {article.date}
                  </div>
                  <h3 className="font-heading text-xl font-bold text-navy mb-3 group-hover:text-primary transition-colors line-clamp-2">{article.title}</h3>
                  <div className="mt-auto pt-4 flex items-center text-primary font-heading font-semibold text-sm gap-1 group-hover:gap-2 transition-all">
                    Read Article
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Dark CTA Strip ─────────────────── */}
      <section className="relative py-20 overflow-hidden bg-navy-dark">
        <div className="absolute inset-0 opacity-5 bg-cover bg-center"
          style={{ backgroundImage: `url('https://images.pexels.com/photos/906494/pexels-photo-906494.jpeg?auto=compress&cs=tinysrgb&w=1920')` }} />
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">Stay ahead of the curve</h2>
          <p className="text-gray-400 font-body text-base max-w-md mx-auto mb-8">
            Get the latest logistics insights and Logiko updates delivered directly to your inbox.
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-heading font-semibold px-8 py-4 rounded-lg transition-all duration-200 hover:shadow-xl hover:shadow-primary/30"
          >
            Contact Us <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
