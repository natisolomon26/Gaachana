// app/(public)/layout.tsx - Minimal Version
import Link from "next/link";
import { Shield } from "lucide-react";

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      
      {/* Minimal Navbar */}
      <header className="border-b border-gray-800 bg-black/50 backdrop-blur sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          
          {/* Simple Brand */}
          <Link href="/" className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-red-500" />
            <span className="text-lg font-semibold">SentinelAuth</span>
          </Link>

          {/* Simple Nav */}
          <nav className="hidden md:flex gap-6 text-sm">
            <Link href="/" className="text-gray-400 hover:text-white transition">Home</Link>
            <Link href="/pricing" className="text-gray-400 hover:text-white transition">Pricing</Link>
            <Link href="/docs" className="text-gray-400 hover:text-white transition">Docs</Link>
          </nav>

          {/* Simple Actions */}
          <div className="flex gap-3">
            <Link href="/login" className="text-sm text-gray-400 hover:text-white transition px-3 py-1">
              Login
            </Link>
            <Link 
              href="/register" 
              className="text-sm bg-red-600 px-4 py-1.5 rounded-md hover:bg-red-700 transition"
            >
              Start Free
            </Link>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="flex-1">{children}</main>

      {/* Minimal Footer */}
      <footer className="border-t border-gray-800 bg-black py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4" />
              <span>SentinelAuth</span>
            </div>
            <div className="flex gap-6">
              <Link href="/privacy" className="hover:text-gray-400 transition">Privacy</Link>
              <Link href="/terms" className="hover:text-gray-400 transition">Terms</Link>
              <Link href="/contact" className="hover:text-gray-400 transition">Contact</Link>
            </div>
            <p>© {new Date().getFullYear()} All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}