import { Download } from 'lucide-react';

export default function ShipmentDetails() {
  const details = [
    { label: 'Shipment ID', value: 'LGK-2025-0847', special: null },
    { label: 'Status', value: 'In Transit', special: 'status' },
    { label: 'From', value: 'Shanghai, China', special: null },
    { label: 'To', value: 'Los Angeles, USA', special: null },
    { label: 'Weight', value: '2,400 kg', special: null },
    { label: 'Cargo Type', value: 'Electronics (Fragile)', special: null },
    { label: 'Est. Delivery', value: 'July 8, 2025', special: null },
    { label: 'Total Cost', value: '$4,850.00', special: 'price' },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
      <h3 className="font-heading font-bold text-navy text-base mb-6">Shipment Details</h3>
      <div className="divide-y divide-gray-50">
        {details.map(({ label, value, special }) => (
          <div key={label} className="flex items-center justify-between py-3 first:pt-0">
            <span className="text-gray-400 text-sm font-body">{label}</span>
            {special === 'status' ? (
              <span className="bg-accent/10 text-accent text-xs font-heading font-semibold px-3 py-1 rounded-full">
                {value}
              </span>
            ) : special === 'price' ? (
              <span className="font-heading font-bold text-navy text-sm">{value}</span>
            ) : (
              <span className="text-navy text-sm font-body font-medium text-right max-w-[60%]">{value}</span>
            )}
          </div>
        ))}
      </div>
      <button className="mt-6 w-full bg-navy hover:bg-navy-light text-white font-heading font-semibold text-sm py-3 rounded-xl transition-colors flex items-center justify-center gap-2">
        <Download className="w-4 h-4" />
        Download Invoice
      </button>
    </div>
  );
}
