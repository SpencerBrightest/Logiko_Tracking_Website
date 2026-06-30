import { useState } from 'react';
import { Truck, ArrowRight } from 'lucide-react';

interface SignupPageProps {
  onNavigate: (page: string) => void;
  onSignup: () => void;
}

export default function SignupPage({ onNavigate, onSignup }: SignupPageProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate authentication
    if (name && email && password) {
      onSignup();
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 pt-20">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-xl border border-gray-100 p-8">
        <div className="flex justify-center mb-8">
          <button onClick={() => onNavigate('landing')} className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
              <Truck className="w-6 h-6 text-white" strokeWidth={2} />
            </div>
            <span className="font-heading text-2xl font-bold text-navy">Logiko</span>
          </button>
        </div>
        
        <h2 className="text-2xl font-heading font-bold text-navy text-center mb-2">Create an Account</h2>
        <p className="text-gray-500 font-body text-sm text-center mb-8">Sign up to get real-time insights into your freight.</p>
        
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-gray-700 text-sm font-body font-medium mb-2">Full Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="John Doe"
              className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm font-body text-navy focus:outline-none focus:border-primary/50 transition-colors"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-body font-medium mb-2">Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@company.com"
              className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm font-body text-navy focus:outline-none focus:border-primary/50 transition-colors"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-body font-medium mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm font-body text-navy focus:outline-none focus:border-primary/50 transition-colors"
              required
            />
          </div>
          
          <button
            type="submit"
            className="w-full bg-primary hover:bg-primary-dark text-white font-heading font-semibold py-3.5 rounded-xl text-sm transition-colors flex items-center justify-center gap-2 group mt-2"
          >
            Create Account
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </form>
        
        <p className="text-center text-sm font-body text-gray-500 mt-8">
          Already have an account?{' '}
          <button onClick={() => onNavigate('login')} className="text-primary font-medium hover:underline">
            Log in
          </button>
        </p>
      </div>
    </div>
  );
}
