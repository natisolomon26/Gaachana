interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

export function Feature({ icon, title, desc }: FeatureProps) {
  return (
    <div className="group bg-gradient-to-br from-gray-900 to-gray-950 p-8 rounded-2xl border border-gray-800 hover:border-red-500/50 transition-all hover:shadow-2xl hover:shadow-red-500/10">
      <div className="w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center text-red-500 mb-4 group-hover:scale-110 transition">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400 leading-relaxed">{desc}</p>
    </div>
  );
}