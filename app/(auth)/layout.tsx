// app/(auth)/layout.tsx
import Link from "next/link";
import { Shield } from "lucide-react";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-950 to-black flex flex-col">
      
      {/* Background Effects - Only visible on desktop */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-red-600/10 rounded-full blur-3xl animate-pulse hidden lg:block" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl animate-pulse delay-1000 hidden lg:block" />
      </div>

      {/* Simple Header */}
      <header className="relative z-10 py-4 px-6">
        <Link href="/" className="flex items-center gap-2 w-fit">
          <Shield className="w-5 h-5 text-red-500" />
          <span className="text-sm font-medium text-gray-400">SentinelAuth</span>
        </Link>
      </header>

      {/* Main Content - Centered */}
      <main className="relative z-10 flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          {/* Simple Card - No extra styling here, let the page handle it */}
          {children}
        </div>
      </main>

      {/* Simple Footer */}
      <footer className="relative z-10 py-4 px-6 text-center">
        <p className="text-xs text-gray-700">
          © {new Date().getFullYear()} SentinelAuth. All rights reserved.
        </p>
      </footer>
    </div>
  );
}