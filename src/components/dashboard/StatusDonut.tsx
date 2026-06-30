const segments = [
  { label: 'In Transit', pct: 33, color: '#3B82F6' },
  { label: 'Delivered', pct: 58, color: '#22C55E' },
  { label: 'Pending', pct: 9, color: '#F4B400' },
];

function polarToXY(cx: number, cy: number, r: number, angle: number) {
  const rad = ((angle - 90) * Math.PI) / 180;
  return {
    x: cx + r * Math.cos(rad),
    y: cy + r * Math.sin(rad),
  };
}

function describeArc(cx: number, cy: number, r: number, startAngle: number, endAngle: number) {
  const start = polarToXY(cx, cy, r, startAngle);
  const end = polarToXY(cx, cy, r, endAngle);
  const largeArc = endAngle - startAngle > 180 ? 1 : 0;
  return `M ${cx} ${cy} L ${start.x} ${start.y} A ${r} ${r} 0 ${largeArc} 1 ${end.x} ${end.y} Z`;
}

export default function StatusDonut() {
  const cx = 80;
  const cy = 80;
  const r = 60;
  const ir = 36;

  let startAngle = 0;
  const arcs = segments.map((seg) => {
    const sweep = (seg.pct / 100) * 360;
    const path = describeArc(cx, cy, r, startAngle, startAngle + sweep);
    startAngle += sweep;
    return { ...seg, path };
  });

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
      <h3 className="font-heading font-bold text-navy text-base mb-6">Shipment Status</h3>
      <div className="flex items-center gap-6">
        <div className="relative flex-shrink-0">
          <svg viewBox="0 0 160 160" className="w-36 h-36">
            {arcs.map((arc) => (
              <path key={arc.label} d={arc.path} fill={arc.color} className="hover:opacity-80 transition-opacity cursor-pointer" />
            ))}
            {/* Inner white circle for donut */}
            <circle cx={cx} cy={cy} r={ir} fill="white" />
            <text x={cx} y={cy - 4} textAnchor="middle" fill="#1A1F2E" fontSize="14" fontWeight="bold" fontFamily="Poppins">24</text>
            <text x={cx} y={cy + 10} textAnchor="middle" fill="#9ca3af" fontSize="9" fontFamily="Inter">Total</text>
          </svg>
        </div>
        <div className="space-y-3 flex-1">
          {segments.map((seg) => (
            <div key={seg.label} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full flex-shrink-0" style={{ backgroundColor: seg.color }} />
                <span className="text-gray-600 text-sm font-body">{seg.label}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-20 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full rounded-full" style={{ width: `${seg.pct}%`, backgroundColor: seg.color }} />
                </div>
                <span className="text-navy text-sm font-heading font-semibold w-8 text-right">{seg.pct}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
