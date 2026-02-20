// app/(dashboard)/dashboard/page.tsx
import { 
  Shield, 
  Activity, 
  Globe, 
  Lock, 
  AlertTriangle,
  TrendingUp,
  TrendingDown,
  Clock,
  Users,
  Server,
  Zap
} from "lucide-react";
import StatsCard from "@/components/security/StatsCard";
import ThreatFeed from "@/components/security/ThreatFeed";
import ThreatTable from "@/components/table/ThreatTable";
import SecurityChart from "@/components/security/SecurityChart";

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      {/* Header with Welcome */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Security Overview
          </h1>
          <p className="text-gray-500 text-sm mt-1">
            Real-time threat monitoring and identity security metrics
          </p>
        </div>
        <div className="flex items-center gap-3 bg-gray-800/50 px-4 py-2 rounded-lg border border-gray-700">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          <span className="text-sm text-gray-300">System Online</span>
          <span className="text-xs text-gray-500">•</span>
          <span className="text-sm text-gray-300">v2.4.0</span>
        </div>
      </div>

      {/* Stats Overview with Trends */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard 
          title="Active Sessions" 
          value="1,284" 
          icon={<Users className="w-5 h-5" />}
          trend="+12%"
          trendUp={true}
          color="blue"
        />
        <StatsCard 
          title="Threat Score" 
          value="82%" 
          icon={<AlertTriangle className="w-5 h-5" />}
          trend="-5%"
          trendUp={false}
          color="red"
          highlight
        />
        <StatsCard 
          title="Blocked IPs" 
          value="34" 
          icon={<Shield className="w-5 h-5" />}
          trend="+3"
          trendUp={true}
          color="green"
        />
        <StatsCard 
          title="Failed Logins" 
          value="1,932" 
          icon={<Lock className="w-5 h-5" />}
          trend="+18%"
          trendUp={false}
          color="yellow"
        />
      </div>

      {/* Charts and Activity Grid */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Security Chart - Takes 2 columns on large screens */}
        <div className="lg:col-span-2 bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-gray-600 transition">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <Activity className="w-5 h-5 text-red-500" />
                Threat Activity (Last 24h)
              </h3>
              <p className="text-xs text-gray-500 mt-1">Real-time threat intelligence</p>
            </div>
            <div className="flex gap-2">
              <button className="px-3 py-1 text-xs bg-gray-700 rounded-md hover:bg-gray-600 transition">Hourly</button>
              <button className="px-3 py-1 text-xs bg-red-600 rounded-md hover:bg-red-700 transition">Daily</button>
              <button className="px-3 py-1 text-xs bg-gray-700 rounded-md hover:bg-gray-600 transition">Weekly</button>
            </div>
          </div>
          <SecurityChart />
        </div>

        {/* Quick Stats */}
        <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-gray-600 transition">
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Zap className="w-5 h-5 text-yellow-500" />
            Quick Stats
          </h3>
          <div className="space-y-4">
            <QuickStat 
              label="Avg. Response Time" 
              value="124ms" 
              subtext="Fast"
              icon={<Clock className="w-4 h-4" />}
              color="green"
            />
            <QuickStat 
              label="Threats Detected" 
              value="2,847" 
              subtext="Last 24h"
              icon={<AlertTriangle className="w-4 h-4" />}
              color="red"
            />
            <QuickStat 
              label="Active Countries" 
              value="43" 
              subtext="Worldwide"
              icon={<Globe className="w-4 h-4" />}
              color="blue"
            />
            <QuickStat 
              label="Server Health" 
              value="98%" 
              subtext="Optimal"
              icon={<Server className="w-4 h-4" />}
              color="purple"
            />
          </div>

          {/* System Status */}
          <div className="mt-6 pt-4 border-t border-gray-700">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-400">System Load</span>
              <span className="text-white font-medium">42%</span>
            </div>
            <div className="w-full h-1.5 bg-gray-700 rounded-full mt-2 overflow-hidden">
              <div className="h-full w-[42%] bg-gradient-to-r from-red-500 to-red-400 rounded-full" />
            </div>
          </div>
        </div>
      </div>

      {/* Threat Feed and Table Grid */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Live Threat Feed */}
        <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-gray-600 transition">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
              Live Threat Feed
            </h3>
            <span className="text-xs text-gray-500">12 events/sec</span>
          </div>
          <ThreatFeed />
        </div>

        {/* Recent Threats Table - Takes 2 columns */}
        <div className="lg:col-span-2 bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-gray-600 transition">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h3 className="text-lg font-semibold">Recent Threats</h3>
              <p className="text-xs text-gray-500 mt-1">Latest security events requiring attention</p>
            </div>
            <button className="text-sm text-red-500 hover:text-red-400 transition flex items-center gap-1">
              View All
              <span className="text-lg">→</span>
            </button>
          </div>
          <ThreatTable />
        </div>
      </div>
    </div>
  );
}

// Fixed QuickStat Component with proper typing
function QuickStat({ label, value, subtext, icon, color }: { 
  label: string; 
  value: string; 
  subtext: string; 
  icon: React.ReactNode; 
  color: 'green' | 'red' | 'blue' | 'purple' 
}) {
  // Define color mappings as constants
  const colorClasses = {
    green: 'text-green-500 bg-green-500/10',
    red: 'text-red-500 bg-red-500/10',
    blue: 'text-blue-500 bg-blue-500/10',
    purple: 'text-purple-500 bg-purple-500/10'
  };

  const iconColors = {
    green: 'text-green-500',
    red: 'text-red-500',
    blue: 'text-blue-500',
    purple: 'text-purple-500'
  };

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className={`w-8 h-8 ${colorClasses[color]} rounded-lg flex items-center justify-center`}>
          <div className={iconColors[color]}>
            {icon}
          </div>
        </div>
        <div>
          <p className="text-sm text-gray-400">{label}</p>
          <p className="text-lg font-semibold">{value}</p>
        </div>
      </div>
      <span className="text-xs text-gray-500">{subtext}</span>
    </div>
  );
}