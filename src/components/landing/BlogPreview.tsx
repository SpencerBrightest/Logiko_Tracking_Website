import { Calendar, Tag } from 'lucide-react';

const posts = [
  {
    img: 'https://images.pexels.com/photos/1427107/pexels-photo-1427107.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'Sea Freight',
    title: 'How Global Port Congestion Is Affecting Supply Chains in 2025',
    date: 'June 15, 2025',
  },
  {
    img: 'https://images.pexels.com/photos/358319/pexels-photo-358319.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'Air Freight',
    title: 'Air Cargo Demand Surges as E-Commerce Drives Express Shipping',
    date: 'June 8, 2025',
  },
  {
    img: 'https://images.pexels.com/photos/1095814/pexels-photo-1095814.jpeg?auto=compress&cs=tinysrgb&w=600',
    category: 'Road Logistics',
    title: '5 Ways Smart Technology Is Revolutionizing Last-Mile Delivery',
    date: 'May 30, 2025',
  },
];

export default function BlogPreview() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-2 text-primary text-xs font-heading font-semibold uppercase tracking-widest mb-4">
            <span className="w-6 h-0.5 bg-primary" />
            Blog & News
            <span className="w-6 h-0.5 bg-primary" />
          </span>
          <h2 className="font-heading text-4xl font-bold text-navy max-w-2xl mx-auto leading-tight">
            Latest news, advices &amp; best posts from the blog
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article
              key={post.title}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 group cursor-pointer"
            >
              <div className="relative overflow-hidden h-52">
                <img
                  src={post.img}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-white text-xs font-heading font-semibold px-3 py-1 rounded-full flex items-center gap-1">
                    <Tag className="w-3 h-3" />
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-heading font-bold text-navy text-base leading-snug mb-4 group-hover:text-primary transition-colors duration-200">
                  {post.title}
                </h3>
                <div className="flex items-center gap-2 text-gray-400 text-xs font-body">
                  <Calendar className="w-3.5 h-3.5" />
                  {post.date}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
