// components/security/ThreatFeed.tsx
import { AlertTriangle, Shield, Lock, Globe, MapPin } from "lucide-react";

const mockEvents = [
  { 
    time: "2m ago", 
    user: "john.doe", 
    event: "Failed Login Attempt", 
    ip: "192.168.1.12", 
    type: "warning",
    country: "US"
  },
  { 
    time: "5m ago", 
    user: "jane.smith", 
    event: "Blocked IP - Brute Force", 
    ip: "10.0.0.5", 
    type: "danger",
    country: "RU"
  },
  { 
    time: "10m ago", 
    user: "bob.wilson", 
    event: "Suspicious Login Location", 
    ip: "172.16.0.2", 
    type: "warning",
    country: "CN"
  },
  { 
    time: "15m ago", 
    user: "alice.brown", 
    event: "2FA Verification Success", 
    ip: "192.168.1.45", 
    type: "success",
    country: "UK"
  },
  { 
    time: "22m ago", 
    user: "charlie.davis", 
    event: "New Device Registered", 
    ip: "192.168.1.78", 
    type: "info",
    country: "DE"
  },
];

const typeIcons = {
  warning: <AlertTriangle className="w-3 h-3" />,
  danger: <Shield className="w-3 h-3" />,
  success: <Lock className="w-3 h-3" />,
  info: <Globe className="w-3 h-3" />
};

const typeColors = {
  warning: "text-yellow-500 bg-yellow-500/10",
  danger: "text-red-500 bg-red-500/10",
  success: "text-green-500 bg-green-500/10",
  info: "text-blue-500 bg-blue-500/10"
};

export default function ThreatFeed() {
  return (
    <div className="space-y-3 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
      {mockEvents.map((e, i) => (
        <div 
          key={i} 
          className="group relative bg-gray-900/50 rounded-lg p-3 hover:bg-gray-800 transition-all border border-gray-800 hover:border-gray-700"
        >
          {/* Time indicator */}
          <div className="flex items-start gap-3">
            <div className={`w-6 h-6 rounded-full ${typeColors[e.type as keyof typeof typeColors]} flex items-center justify-center flex-shrink-0`}>
              {typeIcons[e.type as keyof typeof typeIcons]}
            </div>
            
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-1">
                <p className="text-sm font-medium text-white truncate">
                  {e.user}
                </p>
                <p className="text-xs text-gray-500 flex items-center gap-1">
                  <MapPin className="w-3 h-3" />
                  {e.country}
                </p>
              </div>
              
              <p className="text-xs text-gray-400 mb-1">{e.event}</p>
              
              <div className="flex items-center justify-between">
                <p className="text-xs text-gray-600 font-mono">{e.ip}</p>
                <p className="text-xs text-gray-600">{e.time}</p>
              </div>
            </div>
          </div>

          {/* Hover actions */}
          <div className="absolute right-2 top-2 opacity-0 group-hover:opacity-100 transition">
            <button className="text-xs bg-red-600 px-2 py-1 rounded hover:bg-red-700 transition">
              Investigate
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}