import { Download, FileText, ChevronDown } from 'lucide-react';

const INVOICES = [
  { id: 'INV-2025-0847', shipment: 'LGK-2025-0847', date: 'Jun 22, 2025', due: 'Jul 22, 2025', amount: '$4,850.00', status: 'Pending' },
  { id: 'INV-2025-0821', shipment: 'LGK-2025-0821', date: 'Jun 18, 2025', due: 'Jul 18, 2025', amount: '$1,230.00', status: 'Paid' },
  { id: 'INV-2025-0799', shipment: 'LGK-2025-0799', date: 'Jun 15, 2025', due: 'Jul 15, 2025', amount: '$2,890.00', status: 'Overdue' },
  { id: 'INV-2025-0776', shipment: 'LGK-2025-0776', date: 'Jun 10, 2025', due: 'Jul 10, 2025', amount: '$3,470.00', status: 'Paid' },
  { id: 'INV-2025-0754', shipment: 'LGK-2025-0754', date: 'Jun 8, 2025', due: 'Jul 8, 2025', amount: '$980.00', status: 'Paid' },
  { id: 'INV-2025-0731', shipment: 'LGK-2025-0731', date: 'Jun 5, 2025', due: 'Jul 5, 2025', amount: '$1,640.00', status: 'Pending' },
];

const STATUS_COLORS: Record<string, string> = {
  'Paid': 'bg-success/10 text-success',
  'Pending': 'bg-warning/10 text-warning',
  'Overdue': 'bg-primary/10 text-primary',
};

const SUMMARY = [
  { label: 'Total Invoiced', value: '$15,060.00', color: 'text-navy' },
  { label: 'Paid', value: '$7,320.00', color: 'text-success' },
  { label: 'Outstanding', value: '$7,740.00', color: 'text-warning' },
  { label: 'Overdue', value: '$2,890.00', color: 'text-primary' },
];

export default function InvoicesPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="font-heading text-2xl font-bold text-navy mb-1">Invoices</h1>
        <p className="text-gray-500 font-body text-sm">Track billing and payment status for your shipments.</p>
      </div>

      {/* Summary cards */}
      <div className="grid grid-cols-2 xl:grid-cols-4 gap-4 mb-6">
        {SUMMARY.map((s) => (
          <div key={s.label} className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
            <p className="text-gray-500 text-sm font-body mb-2">{s.label}</p>
            <p className={`font-heading text-xl font-bold ${s.color}`}>{s.value}</p>
          </div>
        ))}
      </div>

      {/* Invoice table */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="px-5 py-4 border-b border-gray-100 flex items-center justify-between">
          <h3 className="font-heading font-bold text-navy text-base">All Invoices</h3>
          <button className="flex items-center gap-1.5 border border-gray-200 text-gray-500 text-xs font-body px-3 py-1.5 rounded-lg hover:border-gray-300 transition-colors">
            Sort by Date <ChevronDown className="w-3 h-3" />
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="text-left px-5 py-3 text-xs font-heading font-semibold text-gray-400 uppercase tracking-wider">Invoice</th>
                <th className="text-left px-5 py-3 text-xs font-heading font-semibold text-gray-400 uppercase tracking-wider hidden sm:table-cell">Shipment</th>
                <th className="text-left px-5 py-3 text-xs font-heading font-semibold text-gray-400 uppercase tracking-wider hidden md:table-cell">Issued</th>
                <th className="text-left px-5 py-3 text-xs font-heading font-semibold text-gray-400 uppercase tracking-wider hidden md:table-cell">Due</th>
                <th className="text-left px-5 py-3 text-xs font-heading font-semibold text-gray-400 uppercase tracking-wider">Amount</th>
                <th className="text-left px-5 py-3 text-xs font-heading font-semibold text-gray-400 uppercase tracking-wider">Status</th>
                <th className="px-5 py-3" />
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {INVOICES.map((inv) => (
                <tr key={inv.id} className="hover:bg-gray-50/50 transition-colors group">
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <FileText className="w-4 h-4 text-primary" />
                      </div>
                      <span className="font-heading font-semibold text-navy text-sm">{inv.id}</span>
                    </div>
                  </td>
                  <td className="px-5 py-4 hidden sm:table-cell">
                    <span className="text-gray-500 text-sm font-body">{inv.shipment}</span>
                  </td>
                  <td className="px-5 py-4 hidden md:table-cell">
                    <span className="text-gray-500 text-xs font-body">{inv.date}</span>
                  </td>
                  <td className="px-5 py-4 hidden md:table-cell">
                    <span className="text-gray-500 text-xs font-body">{inv.due}</span>
                  </td>
                  <td className="px-5 py-4">
                    <span className="font-heading font-bold text-navy text-sm">{inv.amount}</span>
                  </td>
                  <td className="px-5 py-4">
                    <span className={`text-xs font-body font-semibold px-3 py-1 rounded-full ${STATUS_COLORS[inv.status]}`}>
                      {inv.status}
                    </span>
                  </td>
                  <td className="px-5 py-4">
                    <button className="text-gray-300 hover:text-primary transition-colors opacity-0 group-hover:opacity-100">
                      <Download className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
