import { useEffect, useState } from 'react';
import { Ship } from 'lucide-react';

export default function LoadingScreen({ onFinish }: { onFinish: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const steps = [
      { target: 25, delay: 100 },
      { target: 55, delay: 400 },
      { target: 78, delay: 900 },
      { target: 92, delay: 1400 },
      { target: 100, delay: 1900 },
    ];

    steps.forEach(({ target, delay }) => {
      setTimeout(() => setProgress(target), delay);
    });

    setTimeout(onFinish, 2400);
  }, [onFinish]);

  return (
    <div className="fixed inset-0 bg-navy-dark flex flex-col items-center justify-center z-50">
      <div className="flex flex-col items-center gap-6 fade-in">
        <div className="relative">
          <div className="w-24 h-24 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center">
            <Ship className="w-12 h-12 text-primary" strokeWidth={1.5} />
          </div>
          <div className="absolute inset-0 rounded-full border border-primary/20 scale-125 pulse-dot" />
        </div>
        <div className="text-center">
          <h1 className="font-heading text-3xl font-bold text-white tracking-wide">Logiko</h1>
          <p className="text-gray-400 text-sm mt-1 font-body">Loading your logistics experience...</p>
        </div>
        <div className="w-64 h-1 bg-navy-light rounded-full overflow-hidden">
          <div
            className="h-full bg-primary rounded-full transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-gray-500 text-xs font-body">{progress}%</p>
      </div>
    </div>
  );
}
