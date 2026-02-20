// components/security/StatsCard.tsx
import { TrendingUp, TrendingDown } from "lucide-react";

interface StatsCardProps {
  title: string;
  value: string;
  icon?: React.ReactNode;
  trend?: string;
  trendUp?: boolean;
  color?: string;
  highlight?: boolean;
}

export default function StatsCard({ 
  title, 
  value, 
  icon, 
  trend, 
  trendUp, 
  color = "red",
  highlight 
}: StatsCardProps) {
  
  const colors = {
    red: "from-red-500 to-red-600",
    blue: "from-blue-500 to-blue-600",
    green: "from-green-500 to-green-600",
    yellow: "from-yellow-500 to-yellow-600",
    purple: "from-purple-500 to-purple-600"
  };

  return (
    <div className="relative group">
      {/* Hover glow effect */}
      <div className={`absolute -inset-0.5 bg-gradient-to-r ${colors[color as keyof typeof colors]} rounded-xl blur opacity-0 group-hover:opacity-20 transition duration-500`} />
      
      {/* Card */}
      <div className="relative bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-gray-600 transition-all">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm text-gray-400 mb-1">{title}</p>
            <p className={`text-3xl font-bold ${highlight ? `text-${color}-500` : 'text-white'}`}>
              {value}
            </p>
          </div>
          
          {/* Icon */}
          {icon && (
            <div className={`w-10 h-10 bg-${color}-500/10 rounded-lg flex items-center justify-center text-${color}-500`}>
              {icon}
            </div>
          )}
        </div>

        {/* Trend indicator */}
        {trend && (
          <div className="flex items-center gap-1 mt-4">
            {trendUp ? (
              <TrendingUp className="w-4 h-4 text-green-500" />
            ) : (
              <TrendingDown className="w-4 h-4 text-red-500" />
            )}
            <span className={`text-sm ${trendUp ? 'text-green-500' : 'text-red-500'}`}>
              {trend}
            </span>
            <span className="text-xs text-gray-500 ml-1">vs last hour</span>
          </div>
        )}
      </div>
    </div>
  );
}