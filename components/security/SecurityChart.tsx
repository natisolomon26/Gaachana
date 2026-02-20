// components/security/SecurityChart.tsx
export default function SecurityChart() {
  const data = [65, 45, 75, 55, 80, 70, 85, 60, 45, 70, 90, 65, 55, 80, 70, 65, 75, 85, 60, 45, 70, 80, 65, 55];
  const hours = ['00', '02', '04', '06', '08', '10', '12', '14', '16', '18', '20', '22'];
  
  return (
    <div className="relative">
      {/* Chart Grid */}
      <div className="absolute inset-0 flex flex-col justify-between">
        {[1,2,3,4].map((i) => (
          <div key={i} className="w-full h-px bg-gray-800" />
        ))}
      </div>

      {/* Bars */}
      <div className="relative h-40 flex items-end gap-1">
        {data.map((value, i) => (
          <div key={i} className="flex-1 group">
            <div className="relative h-full flex items-end">
              <div 
                className="w-full bg-gradient-to-t from-red-500 to-red-400 rounded-t-sm transition-all duration-500 group-hover:from-red-400 group-hover:to-red-300"
                style={{ height: `${value}%` }}
              >
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
                  {value} threats
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Time Labels */}
      <div className="flex justify-between mt-4 text-xs text-gray-600">
        {hours.map((hour, i) => (
          <span key={i}>{hour}:00</span>
        ))}
      </div>
    </div>
  );
}