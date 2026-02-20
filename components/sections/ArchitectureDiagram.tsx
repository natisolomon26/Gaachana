import { Metric } from "@/components/ui/Metric";

export function ArchitectureDiagram() {
  return (
    <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 p-8 rounded-2xl shadow-2xl">
      <div className="font-mono text-sm">
        <div className="flex items-center gap-2 text-green-400 mb-4">
          <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span>System Status: Operational</span>
        </div>
        
        <div className="space-y-3 text-gray-400">
          <p className="flex items-center gap-2">
            <span className="text-red-500">→</span>
            <span>UI (Next.js) → API Gateway</span>
          </p>
          <p className="flex items-center gap-2 ml-6">
            <span className="text-blue-500">→</span>
            <span>Auth Service → Risk Engine</span>
          </p>
          <p className="flex items-center gap-2 ml-12">
            <span className="text-purple-500">→</span>
            <span>Redis • PostgreSQL • WebSockets</span>
          </p>
          <p className="flex items-center gap-2 ml-6">
            <span className="text-yellow-500">→</span>
            <span>Event Queue → Audit Logs</span>
          </p>
        </div>

        <div className="mt-6 pt-6 border-t border-gray-800 grid grid-cols-3 gap-4">
          <Metric label="Latency" value="<50ms" />
          <Metric label="Uptime" value="99.99%" />
          <Metric label="Requests/s" value="10k+" />
        </div>
      </div>
    </div>
  );
}