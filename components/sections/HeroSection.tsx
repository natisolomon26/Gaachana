import Link from "next/link";
import { Zap, FileText, ArrowRight, CheckCircle, Users } from "lucide-react";
import { DashboardPreview } from "./DashboardPreview";

export function HeroSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 pt-32 pb-24 grid md:grid-cols-2 gap-12 items-center">
      <div>
        <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/20 rounded-full px-4 py-2 mb-8">
          <Zap className="w-4 h-4 text-red-500" />
          <span className="text-sm text-red-500">AI-Powered Security Platform</span>
        </div>
        
        <h1 className="text-6xl font-bold leading-tight">
          <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            SentinelAuth
          </span>
          <br />
          <span className="text-red-500">AI-Driven Identity</span>
          <br />
          <span className="text-red-500">Security Platform</span>
        </h1>

        <p className="mt-6 text-xl text-gray-400 max-w-lg">
          Secure authentication, detect threats, and monitor identity risks in real time.  
          Built for modern applications and security teams.
        </p>

        <div className="mt-10 flex gap-4">
          <Link 
            href="/register" 
            className="group bg-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition-all hover:shadow-xl hover:shadow-red-600/25 flex items-center gap-2"
          >
            Start Free
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
          </Link>
          <Link 
            href="/docs" 
            className="border border-gray-700 px-8 py-4 rounded-lg hover:bg-gray-900 transition flex items-center gap-2"
          >
            <FileText className="w-4 h-4" />
            Documentation
          </Link>
        </div>

        <div className="mt-12 flex items-center gap-8 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-green-500" />
            <span>No credit card</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-blue-500" />
            <span>10k+ users</span>
          </div>
        </div>
      </div>

      <DashboardPreview />
    </section>
  );
}