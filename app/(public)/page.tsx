import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-black text-white">

      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-5xl font-bold leading-tight">
            SentinelAuth  
            <span className="text-red-500"> AI-Driven Identity Security Platform</span>
          </h1>

          <p className="mt-6 text-lg text-gray-400">
            Secure authentication, detect threats, and monitor identity risks in real time.  
            Built for modern applications and security teams.
          </p>

          <div className="mt-8 flex gap-4">
            <Link href="/register" className="bg-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-red-700">
              Start Free
            </Link>
            <Link href="/docs" className="border border-gray-600 px-6 py-3 rounded-lg hover:bg-gray-900">
              Documentation
            </Link>
          </div>
        </div>

        {/* Dashboard Preview Card */}
        <div className="bg-gray-900 border border-gray-700 rounded-xl p-6 shadow-xl">
          <p className="text-sm text-gray-400">Live Security Overview</p>

          <div className="grid grid-cols-2 gap-4 mt-4">
            <Stat label="Active Sessions" value="1,284" />
            <Stat label="Threat Score" value="82%" highlight />
            <Stat label="Blocked IPs" value="34" />
            <Stat label="Failed Logins" value="1,932" />
          </div>
        </div>
      </section>

      {/* VALUE PROPOSITION */}
      <section className="bg-gray-950 py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold">Identity Security for Modern Applications</h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            SentinelAuth combines authentication, behavioral analysis, and threat detection into a single platform.
          </p>
        </div>
      </section>

      {/* FEATURES GRID */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-3 gap-8">
        <Feature title="Secure Authentication" desc="Argon2 password hashing, JWT rotation, device fingerprinting, and TOTP 2FA." />
        <Feature title="Threat Detection Engine" desc="Detect brute force attacks, IP anomalies, geo-location mismatches, and risky behavior." />
        <Feature title="Real-Time Security Dashboard" desc="Live threat feed, session monitoring, risk scoring, and audit logs." />
        <Feature title="Adaptive Risk Scoring" desc="Each login gets a risk score using behavioral signals and anomaly detection." />
        <Feature title="Session & Device Control" desc="Track devices, terminate sessions instantly, and enforce re-verification." />
        <Feature title="Enterprise Audit Logs" desc="Immutable security event logs for compliance and forensic analysis." />
      </section>

      {/* ARCHITECTURE SECTION */}
      <section className="bg-gray-950 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold">Platform Architecture</h2>
          <p className="mt-4 text-gray-400">
            Built with Next.js frontend, NestJS backend, Redis, PostgreSQL, and event-driven threat analysis.
          </p>

          <div className="mt-8 bg-black border border-gray-700 p-6 rounded-xl text-sm text-gray-400 font-mono">
            UI (Next.js) → API Gateway → Auth Service → Risk Engine → Audit Logs  
            Redis • PostgreSQL • WebSockets • Event Queue
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="py-20 text-center">
        <h2 className="text-4xl font-bold">Start Securing Your Identity Stack</h2>
        <p className="mt-4 text-gray-400">Open-source demo platform built for developers and security engineers.</p>
        <Link href="/register" className="inline-block mt-6 bg-red-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-red-700">
          Get Started Free
        </Link>
      </section>

    </div>
  );
}

function Feature({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="bg-gray-900 p-6 rounded-xl border border-gray-700 hover:border-red-500 transition">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="mt-2 text-gray-400">{desc}</p>
    </div>
  );
}

function Stat({ label, value, highlight }: any) {
  return (
    <div className={`bg-gray-800 p-4 rounded-lg ${highlight ? "text-red-500" : ""}`}>
      <p className="text-sm text-gray-400">{label}</p>
      <p className="text-xl font-bold">{value}</p>
    </div>
  );
}