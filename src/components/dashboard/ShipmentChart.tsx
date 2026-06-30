import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const monthlyData = [
  { month: 'Jan', value: 8 },
  { month: 'Feb', value: 15 },
  { month: 'Mar', value: 11 },
  { month: 'Apr', value: 20 },
  { month: 'May', value: 17 },
  { month: 'Jun', value: 24 },
];

const maxVal = 28;
const chartH = 160;
const chartW = 520;
const padLeft = 40;
const padRight = 20;
const padTop = 20;
const padBottom = 30;

function getPoint(i: number, v: number) {
  const x = padLeft + (i / (monthlyData.length - 1)) * (chartW - padLeft - padRight);
  const y = padTop + (1 - v / maxVal) * (chartH - padTop - padBottom);
  return { x, y };
}

export default function ShipmentChart() {
  const [filter, setFilter] = useState('This Month');

  const points = monthlyData.map((d, i) => getPoint(i, d.value));
  const polyline = points.map((p) => `${p.x},${p.y}`).join(' ');

  // Area fill path
  const areaPath =
    `M ${points[0].x},${chartH - padBottom} ` +
    points.map((p) => `L ${p.x},${p.y}`).join(' ') +
    ` L ${points[points.length - 1].x},${chartH - padBottom} Z`;

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-heading font-bold text-navy text-base">Shipment Overview</h3>
        <button className="flex items-center gap-1.5 border border-gray-200 text-gray-500 text-xs font-body px-3 py-1.5 rounded-lg hover:border-gray-300 transition-colors">
          {filter}
          <ChevronDown className="w-3 h-3" />
        </button>
      </div>

      <svg
        viewBox={`0 0 ${chartW} ${chartH}`}
        className="w-full"
        style={{ height: `${chartH}px` }}
      >
        <defs>
          <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#E63946" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#E63946" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Horizontal grid lines */}
        {[0, 7, 14, 21, 28].map((v) => {
          const y = padTop + (1 - v / maxVal) * (chartH - padTop - padBottom);
          return (
            <g key={v}>
              <line x1={padLeft} y1={y} x2={chartW - padRight} y2={y} stroke="#f3f4f6" strokeWidth="1" />
              <text x={padLeft - 6} y={y + 4} textAnchor="end" fill="#9ca3af" fontSize="10" fontFamily="Inter">{v}</text>
            </g>
          );
        })}

        {/* Area */}
        <path d={areaPath} fill="url(#areaGrad)" />

        {/* Line */}
        <polyline
          points={polyline}
          fill="none"
          stroke="#E63946"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="line-grow"
        />

        {/* Data points */}
        {points.map((p, i) => (
          <g key={i}>
            <circle cx={p.x} cy={p.y} r="5" fill="white" stroke="#E63946" strokeWidth="2.5" />
            <text x={p.x} y={chartH - padBottom + 18} textAnchor="middle" fill="#9ca3af" fontSize="10" fontFamily="Inter">
              {monthlyData[i].month}
            </text>
          </g>
        ))}
      </svg>

      <div className="mt-4 flex items-center justify-between text-xs font-body text-gray-400">
        <span>Jan 2025</span>
        <span className="text-primary font-semibold">Peak: 24 shipments in June</span>
        <span>Jun 2025</span>
      </div>
    </div>
  );
}
