import { useState } from 'react';
import { User, Lock, Bell, Globe, Camera, Check } from 'lucide-react';

type Section = 'account' | 'notifications' | 'security' | 'preferences';

const SECTIONS: { id: Section; label: string; icon: typeof User }[] = [
  { id: 'account', label: 'Account', icon: User },
  { id: 'notifications', label: 'Notifications', icon: Bell },
  { id: 'security', label: 'Security', icon: Lock },
  { id: 'preferences', label: 'Preferences', icon: Globe },
];

function SaveButton({ saved, onSave }: { saved: boolean; onSave: () => void }) {
  return (
    <button
      onClick={onSave}
      className={`flex items-center gap-2 font-heading font-semibold px-6 py-2.5 rounded-xl text-sm transition-all duration-300 ${
        saved ? 'bg-success text-white' : 'bg-primary hover:bg-primary-dark text-white'
      }`}
    >
      {saved ? <><Check className="w-4 h-4" /> Saved!</> : 'Save Changes'}
    </button>
  );
}

function AccountSection() {
  const [saved, setSaved] = useState(false);
  const [form, setForm] = useState({ name: 'David Chen', email: 'david@logiko.com', phone: '+1 310 555 0147', company: 'Logiko Inc.' });
  const save = () => { setSaved(true); setTimeout(() => setSaved(false), 2500); };

  return (
    <div>
      <h3 className="font-heading font-bold text-navy text-base mb-6">Account Information</h3>
      {/* Avatar */}
      <div className="flex items-center gap-5 mb-8 p-5 bg-gray-50 rounded-2xl">
        <div className="relative">
          <div className="w-20 h-20 rounded-full bg-primary/10 border-4 border-white shadow-md flex items-center justify-center">
            <span className="font-heading font-bold text-primary text-2xl">DC</span>
          </div>
          <button className="absolute bottom-0 right-0 w-7 h-7 bg-primary rounded-full flex items-center justify-center shadow-md border-2 border-white hover:bg-primary-dark transition-colors">
            <Camera className="w-3.5 h-3.5 text-white" />
          </button>
        </div>
        <div>
          <p className="font-heading font-bold text-navy">David Chen</p>
          <p className="text-gray-500 text-sm font-body">Account Manager</p>
          <button className="text-primary text-xs font-body font-medium mt-1 hover:underline">Change photo</button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6">
        {[
          { label: 'Full Name', key: 'name', type: 'text' },
          { label: 'Email Address', key: 'email', type: 'email' },
          { label: 'Phone Number', key: 'phone', type: 'tel' },
          { label: 'Company', key: 'company', type: 'text' },
        ].map(({ label, key, type }) => (
          <div key={key}>
            <label className="block text-gray-500 text-xs font-body font-medium mb-2">{label}</label>
            <input
              type={type}
              value={form[key as keyof typeof form]}
              onChange={(e) => setForm({ ...form, [key]: e.target.value })}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm font-body text-navy focus:outline-none focus:border-primary/50 transition-colors"
            />
          </div>
        ))}
      </div>
      <div className="flex justify-end">
        <SaveButton saved={saved} onSave={save} />
      </div>
    </div>
  );
}

function NotificationsSection() {
  const [saved, setSaved] = useState(false);
  const [prefs, setPrefs] = useState({
    emailShipment: true, emailInvoice: true, emailPromo: false,
    pushStatus: true, pushDelivery: true, pushAlerts: true,
  });
  const toggle = (key: keyof typeof prefs) => setPrefs((p) => ({ ...p, [key]: !p[key] }));
  const save = () => { setSaved(true); setTimeout(() => setSaved(false), 2500); };

  const rows: { key: keyof typeof prefs; label: string; desc: string }[] = [
    { key: 'emailShipment', label: 'Shipment Updates', desc: 'Receive email when shipment status changes' },
    { key: 'emailInvoice', label: 'Invoice Alerts', desc: 'Get notified about new invoices and due dates' },
    { key: 'emailPromo', label: 'Promotions & News', desc: 'Occasional news, tips, and promotions' },
    { key: 'pushStatus', label: 'Status Changes', desc: 'Push notification on shipment status update' },
    { key: 'pushDelivery', label: 'Delivery Confirmation', desc: 'Alert when a shipment is delivered' },
    { key: 'pushAlerts', label: 'Urgent Alerts', desc: 'Critical alerts like delays and customs holds' },
  ];

  return (
    <div>
      <h3 className="font-heading font-bold text-navy text-base mb-6">Notification Preferences</h3>
      <div className="space-y-4 mb-6">
        {rows.map(({ key, label, desc }) => (
          <div key={key} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
            <div>
              <p className="font-heading font-semibold text-navy text-sm">{label}</p>
              <p className="text-gray-400 text-xs font-body mt-0.5">{desc}</p>
            </div>
            <button
              onClick={() => toggle(key)}
              className={`relative w-11 h-6 rounded-full transition-colors duration-300 flex-shrink-0 ${prefs[key] ? 'bg-primary' : 'bg-gray-200'}`}
            >
              <span className={`absolute top-1 w-4 h-4 bg-white rounded-full shadow-sm transition-transform duration-300 ${prefs[key] ? 'translate-x-6' : 'translate-x-1'}`} />
            </button>
          </div>
        ))}
      </div>
      <div className="flex justify-end">
        <SaveButton saved={saved} onSave={save} />
      </div>
    </div>
  );
}

function SecuritySection() {
  const [saved, setSaved] = useState(false);
  const [form, setForm] = useState({ current: '', next: '', confirm: '' });
  const save = (e: React.FormEvent) => { e.preventDefault(); setSaved(true); setForm({ current: '', next: '', confirm: '' }); setTimeout(() => setSaved(false), 2500); };

  return (
    <div>
      <h3 className="font-heading font-bold text-navy text-base mb-6">Security Settings</h3>
      <div className="bg-gray-50 rounded-2xl p-5 mb-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-heading font-semibold text-navy text-sm">Two-Factor Authentication</p>
            <p className="text-gray-400 text-xs font-body mt-0.5">Add an extra layer of security to your account</p>
          </div>
          <button className="bg-primary hover:bg-primary-dark text-white font-heading font-semibold px-4 py-2 rounded-lg text-xs transition-colors">
            Enable 2FA
          </button>
        </div>
      </div>
      <form onSubmit={save} className="space-y-4 mb-6">
        <p className="font-heading font-semibold text-navy text-sm mb-3">Change Password</p>
        {[
          { label: 'Current Password', key: 'current' },
          { label: 'New Password', key: 'next' },
          { label: 'Confirm New Password', key: 'confirm' },
        ].map(({ label, key }) => (
          <div key={key}>
            <label className="block text-gray-500 text-xs font-body font-medium mb-2">{label}</label>
            <input
              type="password"
              value={form[key as keyof typeof form]}
              onChange={(e) => setForm({ ...form, [key]: e.target.value })}
              placeholder="••••••••"
              className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm font-body text-navy focus:outline-none focus:border-primary/50 transition-colors"
            />
          </div>
        ))}
        <div className="flex justify-end">
          <SaveButton saved={saved} onSave={() => {}} />
        </div>
      </form>
    </div>
  );
}

function PreferencesSection() {
  const [saved, setSaved] = useState(false);
  const [prefs, setPrefs] = useState({ currency: 'USD', language: 'English', timezone: 'America/Los_Angeles', units: 'metric' });
  const save = () => { setSaved(true); setTimeout(() => setSaved(false), 2500); };

  return (
    <div>
      <h3 className="font-heading font-bold text-navy text-base mb-6">Display Preferences</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6">
        {[
          { label: 'Currency', key: 'currency', opts: ['USD', 'EUR', 'GBP', 'CNY', 'SGD'] },
          { label: 'Language', key: 'language', opts: ['English', 'French', 'German', 'Chinese', 'Arabic'] },
          { label: 'Time Zone', key: 'timezone', opts: ['America/Los_Angeles', 'America/New_York', 'Europe/London', 'Asia/Shanghai', 'Asia/Singapore'] },
          { label: 'Units', key: 'units', opts: ['metric', 'imperial'] },
        ].map(({ label, key, opts }) => (
          <div key={key}>
            <label className="block text-gray-500 text-xs font-body font-medium mb-2">{label}</label>
            <select
              value={prefs[key as keyof typeof prefs]}
              onChange={(e) => setPrefs({ ...prefs, [key]: e.target.value })}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm font-body text-navy focus:outline-none focus:border-primary/50 transition-colors bg-white"
            >
              {opts.map((o) => <option key={o} value={o}>{o}</option>)}
            </select>
          </div>
        ))}
      </div>
      <div className="flex justify-end">
        <SaveButton saved={saved} onSave={save} />
      </div>
    </div>
  );
}

export default function SettingsPage() {
  const [active, setActive] = useState<Section>('account');

  return (
    <div>
      <div className="mb-8">
        <h1 className="font-heading text-2xl font-bold text-navy mb-1">Settings</h1>
        <p className="text-gray-500 font-body text-sm">Manage your account preferences and security.</p>
      </div>

      <div className="flex flex-col xl:flex-row gap-6">
        {/* Sidebar nav */}
        <div className="xl:w-52 flex-shrink-0">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-2">
            {SECTIONS.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setActive(id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-body font-medium transition-all duration-200 ${
                  active === id ? 'bg-primary/10 text-primary' : 'text-gray-500 hover:bg-gray-50 hover:text-navy'
                }`}
              >
                <Icon className="w-4 h-4" />
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          {active === 'account' && <AccountSection />}
          {active === 'notifications' && <NotificationsSection />}
          {active === 'security' && <SecuritySection />}
          {active === 'preferences' && <PreferencesSection />}
        </div>
      </div>
    </div>
  );
}
