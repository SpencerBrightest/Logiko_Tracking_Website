import { useState } from 'react';
import { ChevronDown, ChevronUp, MessageSquare, Send, Phone, Mail } from 'lucide-react';

const FAQS = [
  {
    q: 'How do I track my shipment?',
    a: 'Go to the Track page from the sidebar or enter your tracking ID in the search bar. You will see real-time location, vessel info, and a step-by-step timeline of your shipment.',
  },
  {
    q: 'What shipping methods are available?',
    a: 'Logiko offers Sea Freight, Air Freight, Road Transport, Rail Freight, and multimodal combinations. Choose the option that best fits your timeline and budget.',
  },
  {
    q: 'How do I get a shipping quote?',
    a: 'Click "Get a Quote" from the dashboard or landing page. Fill in your cargo details, origin, and destination — our system will calculate rates in real time.',
  },
  {
    q: 'Can I change my delivery address after booking?',
    a: 'Address changes are possible up to 24 hours after booking confirmation. Contact your account manager or use the chat below for urgent changes.',
  },
  {
    q: 'What documents are required for customs clearance?',
    a: 'Typically: commercial invoice, packing list, bill of lading, and certificate of origin. Specific requirements vary by country. Our customs team will guide you.',
  },
  {
    q: 'How are shipment delays handled?',
    a: 'We proactively monitor all shipments and notify you of any delays via email and in-app notifications. Our team works to find the fastest alternative routing.',
  },
];

export default function SupportPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [form, setForm] = useState({ subject: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setForm({ subject: '', message: '' });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="font-heading text-2xl font-bold text-navy mb-1">Support</h1>
        <p className="text-gray-500 font-body text-sm">Get help with your shipments and account.</p>
      </div>

      {/* Contact channels */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        {[
          { icon: Phone, label: 'Phone Support', value: '+1 800 LOGIKO', hint: 'Mon–Fri, 8AM–6PM PST', color: 'bg-accent/10 text-accent' },
          { icon: Mail, label: 'Email Support', value: 'support@logiko.com', hint: 'Response within 24 hours', color: 'bg-success/10 text-success' },
          { icon: MessageSquare, label: 'Live Chat', value: 'Start a Chat', hint: 'Average wait: 3 minutes', color: 'bg-primary/10 text-primary' },
        ].map((c) => {
          const Icon = c.icon;
          return (
            <div key={c.label} className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 flex items-center gap-4">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${c.color}`}>
                <Icon className="w-5 h-5" />
              </div>
              <div>
                <p className="font-heading font-semibold text-navy text-sm">{c.label}</p>
                <p className="text-navy text-sm font-body mt-0.5">{c.value}</p>
                <p className="text-gray-400 text-xs font-body mt-0.5">{c.hint}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {/* FAQ */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="px-6 py-5 border-b border-gray-100">
            <h3 className="font-heading font-bold text-navy text-base">Frequently Asked Questions</h3>
          </div>
          <div className="divide-y divide-gray-50">
            {FAQS.map((faq, i) => (
              <div key={i}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-gray-50/50 transition-colors"
                >
                  <span className={`font-heading font-semibold text-sm pr-4 ${openFaq === i ? 'text-primary' : 'text-navy'}`}>
                    {faq.q}
                  </span>
                  {openFaq === i
                    ? <ChevronUp className="w-4 h-4 text-primary flex-shrink-0" />
                    : <ChevronDown className="w-4 h-4 text-gray-400 flex-shrink-0" />
                  }
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5">
                    <p className="text-gray-500 text-sm font-body leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Contact form */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <h3 className="font-heading font-bold text-navy text-base mb-6">Send a Message</h3>
          {sent ? (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mb-4">
                <Send className="w-8 h-8 text-success" />
              </div>
              <p className="font-heading font-bold text-navy mb-1">Message Sent!</p>
              <p className="text-gray-500 text-sm font-body">We'll get back to you within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-500 text-xs font-body font-medium mb-2">Subject</label>
                <input
                  type="text"
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  placeholder="e.g. Issue with shipment LGK-2025-0847"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm font-body text-navy focus:outline-none focus:border-primary/50 transition-colors"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-500 text-xs font-body font-medium mb-2">Message</label>
                <textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Describe your issue or question in detail..."
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm font-body text-navy focus:outline-none focus:border-primary/50 transition-colors resize-none"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-primary hover:bg-primary-dark text-white font-heading font-semibold py-3 rounded-xl text-sm transition-colors flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
