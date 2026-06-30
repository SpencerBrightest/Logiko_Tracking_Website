import { useState } from 'react';
import { Truck, ArrowRight } from 'lucide-react';

interface LoginPageProps {
  onNavigate: (page: string) => void;
  onLogin: () => void;
}

export default function LoginPage({ onNavigate, onLogin }: LoginPageProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate authentication
    if (email && password) {
      onLogin();
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
        
        <h2 className="text-2xl font-heading font-bold text-navy text-center mb-2">Welcome Back</h2>
        <p className="text-gray-500 font-body text-sm text-center mb-8">Log in to track your shipments and manage your account.</p>
        
        <form onSubmit={handleSubmit} className="space-y-5">
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
            <div className="flex justify-between items-center mb-2">
              <label className="block text-gray-700 text-sm font-body font-medium">Password</label>
              <button type="button" className="text-primary text-xs font-body hover:underline">Forgot password?</button>
            </div>
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
            Sign In
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </form>
        
        <p className="text-center text-sm font-body text-gray-500 mt-8">
          Don't have an account?{' '}
          <button onClick={() => onNavigate('signup')} className="text-primary font-medium hover:underline">
            Sign up now
          </button>
        </p>
      </div>
    </div>
  );
}
