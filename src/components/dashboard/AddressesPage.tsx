import { useState } from 'react';
import { MapPin, Plus, Trash2, Star } from 'lucide-react';

const ADDRESSES = [
  {
    id: 1,
    label: 'Head Office',
    name: 'David Chen',
    company: 'Logiko Inc.',
    street: '123 Harbor Blvd, Suite 400',
    city: 'Los Angeles, CA 90012',
    country: 'United States',
    default: true,
  },
  {
    id: 2,
    label: 'Warehouse',
    name: 'Ops Team',
    company: 'Logiko Inc.',
    street: '8800 Industrial Dr',
    city: 'Long Beach, CA 90805',
    country: 'United States',
    default: false,
  },
  {
    id: 3,
    label: 'Partner Hub',
    name: 'Sarah Williams',
    company: 'Pacific Freight Co.',
    street: '44 Docklands Way',
    city: 'Shanghai 200001',
    country: 'China',
    default: false,
  },
];

export default function AddressesPage() {
  const [addresses, setAddresses] = useState(ADDRESSES);

  const setDefault = (id: number) => {
    setAddresses((prev) => prev.map((a) => ({ ...a, default: a.id === id })));
  };

  const remove = (id: number) => {
    setAddresses((prev) => prev.filter((a) => a.id !== id));
  };

  return (
    <div>
      <div className="mb-8 flex items-start justify-between">
        <div>
          <h1 className="font-heading text-2xl font-bold text-navy mb-1">Addresses</h1>
          <p className="text-gray-500 font-body text-sm">Manage your saved shipping and billing addresses.</p>
        </div>
        <button className="flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-heading font-semibold px-5 py-2.5 rounded-xl text-sm transition-colors">
          <Plus className="w-4 h-4" />
          Add Address
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        {addresses.map((addr) => (
          <div key={addr.id} className={`bg-white rounded-2xl shadow-sm border p-6 relative group transition-all duration-200 hover:shadow-md ${
            addr.default ? 'border-primary/30' : 'border-gray-100'
          }`}>
            {addr.default && (
              <span className="absolute top-4 right-4 text-xs font-heading font-semibold bg-primary/10 text-primary px-2.5 py-1 rounded-full">
                Default
              </span>
            )}

            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-heading font-bold text-navy text-sm">{addr.label}</p>
                <p className="text-gray-400 text-xs font-body">{addr.company}</p>
              </div>
            </div>

            <div className="space-y-1 mb-5">
              <p className="text-navy text-sm font-body font-medium">{addr.name}</p>
              <p className="text-gray-500 text-sm font-body">{addr.street}</p>
              <p className="text-gray-500 text-sm font-body">{addr.city}</p>
              <p className="text-gray-400 text-xs font-body mt-1">{addr.country}</p>
            </div>

            <div className="flex items-center gap-2 pt-4 border-t border-gray-100">
              {!addr.default && (
                <button
                  onClick={() => setDefault(addr.id)}
                  className="flex items-center gap-1.5 text-xs font-body text-gray-400 hover:text-warning transition-colors"
                >
                  <Star className="w-3.5 h-3.5" />
                  Set Default
                </button>
              )}
              <button
                onClick={() => remove(addr.id)}
                className="flex items-center gap-1.5 text-xs font-body text-gray-400 hover:text-primary transition-colors ml-auto"
              >
                <Trash2 className="w-3.5 h-3.5" />
                Remove
              </button>
            </div>
          </div>
        ))}

        {/* Add new address card */}
        <button className="bg-gray-50 border-2 border-dashed border-gray-200 rounded-2xl p-6 flex flex-col items-center justify-center gap-3 text-gray-400 hover:border-primary/40 hover:text-primary hover:bg-primary/5 transition-all duration-200 min-h-[220px]">
          <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
            <Plus className="w-5 h-5" />
          </div>
          <span className="font-body text-sm font-medium">Add New Address</span>
        </button>
      </div>
    </div>
  );
}
