export function TrustedBySection() {
  const companies = [1, 2, 3, 4, 5];
  
  return (
    <section className="border-y border-gray-800 py-12 bg-black/50">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-gray-500 text-sm mb-8">TRUSTED BY SECURITY TEAMS AT</p>
        <div className="flex flex-wrap justify-center gap-12 opacity-50">
          {companies.map((i) => (
            <div key={i} className="h-8 w-24 bg-gray-800 rounded animate-pulse" />
          ))}
        </div>
      </div>
    </section>
  );
}