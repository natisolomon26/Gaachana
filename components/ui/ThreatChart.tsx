// components/ui/ThreatChart.tsx
export function ThreatChart() {
  const data = [
    { value: 40, status: 'normal' },
    { value: 65, status: 'suspicious' },
    { value: 45, status: 'normal' },
    { value: 80, status: 'critical' },
    { value: 55, status: 'suspicious' },
    { value: 70, status: 'critical' },
    { value: 85, status: 'critical' },
    { value: 42, status: 'normal' },
    { value: 38, status: 'normal' },
    { value: 62, status: 'suspicious' },
  ];

  const statusColors = {
    normal: 'from-green-500 to-green-400',
    suspicious: 'from-yellow-500 to-yellow-400',
    critical: 'from-red-500 to-red-400'
  };

  return (
    <div className="relative">
      {/* Animated scan line */}
      <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-red-500 to-transparent animate-scan" />
      
      <div className="flex gap-1 h-16 items-end">
        {data.map((item, i) => (
          <div key={i} className="flex-1 group/chart">
            <div className="relative h-full">
              {/* Bar */}
              <div 
                className={`absolute bottom-0 w-full bg-gradient-to-t ${statusColors[item.status as keyof typeof statusColors]} rounded-t-sm transition-all duration-500 group-hover/chart:scale-y-110 origin-bottom`}
                style={{ height: `${item.value}%` }}
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-white opacity-0 group-hover/chart:opacity-20 transition-opacity" />
              </div>
              
              {/* Tooltip */}
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover/chart:opacity-100 transition-opacity bg-gray-800 text-white text-xs rounded px-2 py-1 whitespace-nowrap">
                {item.value}% Risk
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Time labels */}
      <div className="flex justify-between mt-2 text-xs text-gray-600">
        <span>00:00</span>
        <span>06:00</span>
        <span>12:00</span>
        <span>18:00</span>
        <span>24:00</span>
      </div>
    </div>
  );
}

// Add to your global CSS
const styles = `
@keyframes scan {
  0% {
    top: 0%;
  }
  100% {
    top: 100%;
  }
}

.animate-scan {
  animation: scan 3s linear infinite;
}
`;