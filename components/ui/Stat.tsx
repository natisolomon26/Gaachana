interface StatProps {
  label: string;
  value: string;
  highlight?: boolean;
  trend?: string;
}

export function Stat({ label, value, highlight, trend }: StatProps) {
  return (
    <div className="bg-gray-800/50 p-4 rounded-xl border border-gray-700 hover:border-gray-600 transition">
      <p className="text-sm text-gray-400 mb-1">{label}</p>
      <div className="flex items-end justify-between">
        <p className={`text-2xl font-bold ${highlight ? "text-red-500" : "text-white"}`}>
          {value}
        </p>
        {trend && (
          <span className={`text-xs ${trend.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
            {trend}
          </span>
        )}
      </div>
    </div>
  );
}