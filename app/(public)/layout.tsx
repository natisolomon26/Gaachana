import Link from "next/link";

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">

      {/* NAVBAR */}
      <header className="border-b border-gray-800 bg-black/80 backdrop-blur sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          {/* Brand */}
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-red-500">SentinelAuth</span>
            <span className="text-xs text-gray-500 hidden sm:block">
              Identity Security Platform
            </span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex gap-6 text-sm text-gray-300">
            <Link href="/" className="hover:text-white">Home</Link>
            <Link href="/pricing" className="hover:text-white">Pricing</Link>
            <Link href="/docs" className="hover:text-white">Docs</Link>
            <Link href="/blog" className="hover:text-white">Blog</Link>
          </nav>

          {/* Actions */}
          <div className="flex gap-3">
            <Link href="/login" className="px-4 py-2 text-sm border border-gray-700 rounded hover:bg-gray-900">
              Login
            </Link>
            <Link href="/register" className="px-4 py-2 text-sm bg-red-600 rounded hover:bg-red-700">
              Start Free
            </Link>
          </div>

        </div>
      </header>

      {/* PAGE CONTENT */}
      <main className="flex-1">{children}</main>

      {/* FOOTER */}
      <footer className="border-t border-gray-800 bg-black">
        <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-8 text-sm text-gray-400">

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-3">SentinelAuth</h3>
            <p>AI-driven identity security platform for modern applications.</p>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-white font-semibold mb-3">Product</h4>
            <ul className="space-y-2">
              <li><Link href="/pricing">Pricing</Link></li>
              <li><Link href="/docs">Documentation</Link></li>
              <li><Link href="/dashboard">Dashboard</Link></li>
            </ul>
          </div>

          {/* Developers */}
          <div>
            <h4 className="text-white font-semibold mb-3">Developers</h4>
            <ul className="space-y-2">
              <li><Link href="/docs/api">API Reference</Link></li>
              <li><Link href="/docs/sdk">SDKs</Link></li>
              <li><Link href="/github">GitHub</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold mb-3">Legal</h4>
            <ul className="space-y-2">
              <li><Link href="/privacy">Privacy Policy</Link></li>
              <li><Link href="/terms">Terms of Service</Link></li>
            </ul>
          </div>

        </div>

        <div className="text-center text-xs text-gray-600 py-4 border-t border-gray-800">
          © {new Date().getFullYear()} SentinelAuth. All rights reserved.
        </div>
      </footer>

    </div>
  );
}