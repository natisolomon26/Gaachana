// components/security/ThreatTable.tsx
import { MoreHorizontal, AlertTriangle, Shield, Info } from "lucide-react";

const mockThreats = [
  { id: 1, user: "john.doe", ip: "192.168.1.12", type: "Brute Force Attack", risk: "High", timestamp: "2024-01-15 14:23", attempts: 156 },
  { id: 2, user: "jane.smith", ip: "10.0.0.5", type: "Geo-location Mismatch", risk: "Medium", timestamp: "2024-01-15 14:15", attempts: 12 },
  { id: 3, user: "bob.wilson", ip: "172.16.0.2", type: "Failed Login", risk: "Low", timestamp: "2024-01-15 14:02", attempts: 3 },
  { id: 4, user: "alice.brown", ip: "192.168.1.45", type: "Suspicious IP", risk: "High", timestamp: "2024-01-15 13:48", attempts: 89 },
  { id: 5, user: "charlie.davis", ip: "192.168.1.78", type: "Device Fingerprint", risk: "Medium", timestamp: "2024-01-15 13:32", attempts: 23 },
];

const riskColors = {
  High: "text-red-500 bg-red-500/10",
  Medium: "text-yellow-500 bg-yellow-500/10",
  Low: "text-green-500 bg-green-500/10"
};

const riskIcons = {
  High: <AlertTriangle className="w-3 h-3" />,
  Medium: <Info className="w-3 h-3" />,
  Low: <Shield className="w-3 h-3" />
};

export default function ThreatTable() {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left">
        <thead>
          <tr className="border-b border-gray-700">
            <th className="pb-3 text-xs font-medium text-gray-400 uppercase tracking-wider">User</th>
            <th className="pb-3 text-xs font-medium text-gray-400 uppercase tracking-wider">IP Address</th>
            <th className="pb-3 text-xs font-medium text-gray-400 uppercase tracking-wider">Threat Type</th>
            <th className="pb-3 text-xs font-medium text-gray-400 uppercase tracking-wider">Risk Level</th>
            <th className="pb-3 text-xs font-medium text-gray-400 uppercase tracking-wider">Attempts</th>
            <th className="pb-3 text-xs font-medium text-gray-400 uppercase tracking-wider">Timestamp</th>
            <th className="pb-3 text-xs font-medium text-gray-400 uppercase tracking-wider"></th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-800">
          {mockThreats.map((threat) => (
            <tr key={threat.id} className="group hover:bg-gray-800/50 transition">
              <td className="py-3 text-sm font-medium">{threat.user}</td>
              <td className="py-3 text-sm text-gray-400 font-mono">{threat.ip}</td>
              <td className="py-3 text-sm text-gray-300">{threat.type}</td>
              <td className="py-3">
                <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${riskColors[threat.risk as keyof typeof riskColors]}`}>
                  {riskIcons[threat.risk as keyof typeof riskIcons]}
                  {threat.risk}
                </span>
              </td>
              <td className="py-3 text-sm text-gray-400">{threat.attempts}</td>
              <td className="py-3 text-sm text-gray-400">{threat.timestamp}</td>
              <td className="py-3">
                <button className="opacity-0 group-hover:opacity-100 transition p-1 hover:bg-gray-700 rounded">
                  <MoreHorizontal className="w-4 h-4 text-gray-400" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}