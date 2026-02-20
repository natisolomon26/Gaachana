import { Server, Database, Zap } from "lucide-react";
import { ArchitectureDiagram } from "./ArchitectureDiagram";

const architectureItems = [
  { icon: <Server className="w-5 h-5" />, text: "Scalable microservices architecture" },
  { icon: <Database className="w-5 h-5" />, text: "Real-time data synchronization" },
  { icon: <Zap className="w-5 h-5" />, text: "Sub-millisecond threat detection" }
];

export function ArchitectureSection() {
  return (
    <section className="py-28 bg-gradient-to-b from-black to-gray-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold">Enterprise-Grade Architecture</h2>
            <p className="mt-4 text-gray-400 text-lg">
              Built with Next.js frontend, NestJS backend, Redis, PostgreSQL, 
              and event-driven threat analysis.
            </p>
            
            <div className="mt-8 space-y-4">
              {architectureItems.map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-gray-300">
                  <div className="text-red-500">{item.icon}</div>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          <ArchitectureDiagram />
        </div>
      </div>
    </section>
  );
}