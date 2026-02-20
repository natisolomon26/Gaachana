import { Lock, AlertTriangle, Activity, Cpu, Globe, FileText } from "lucide-react";
import { Feature } from "@/components/ui/Feature";

const features = [
  {
    icon: <Lock className="w-6 h-6" />,
    title: "Secure Authentication",
    desc: "Argon2 password hashing, JWT rotation, device fingerprinting, and TOTP 2FA."
  },
  {
    icon: <AlertTriangle className="w-6 h-6" />,
    title: "Threat Detection Engine",
    desc: "Detect brute force attacks, IP anomalies, geo-location mismatches, and risky behavior."
  },
  {
    icon: <Activity className="w-6 h-6" />,
    title: "Real-Time Dashboard",
    desc: "Live threat feed, session monitoring, risk scoring, and audit logs."
  },
  {
    icon: <Cpu className="w-6 h-6" />,
    title: "Adaptive Risk Scoring",
    desc: "Each login gets a risk score using behavioral signals and anomaly detection."
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Session & Device Control",
    desc: "Track devices, terminate sessions instantly, and enforce re-verification."
  },
  {
    icon: <FileText className="w-6 h-6" />,
    title: "Enterprise Audit Logs",
    desc: "Immutable security event logs for compliance and forensic analysis."
  }
];

export function FeaturesGrid() {
  return (
    <section id="features" className="max-w-7xl mx-auto px-6 py-20">
      <div className="grid md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <Feature key={index} {...feature} />
        ))}
      </div>
    </section>
  );
}