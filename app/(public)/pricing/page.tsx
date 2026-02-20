export default function Pricing() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <h2 className="text-4xl font-bold">Pricing</h2>

      <div className="mt-10 grid md:grid-cols-3 gap-6">
        <Plan name="Free" price="$0" features={["Basic Auth", "Logs", "1k events/mo"]} />
        <Plan name="Pro" price="$29" features={["Threat Detection", "Risk Scoring", "100k events/mo"]} />
        <Plan name="Enterprise" price="Custom" features={["SIEM export", "AI Risk Engine", "Unlimited events"]} />
      </div>
    </div>
  );
}

function Plan({ name, price, features }: any) {
  return (
    <div className="bg-black text-white p-6 rounded-xl border border-gray-700">
      <h3 className="text-2xl font-bold">{name}</h3>
      <p className="text-3xl mt-4">{price}</p>
      <ul className="mt-4 text-gray-400 space-y-2">
        {features.map((f: string) => <li key={f}>✔ {f}</li>)}
      </ul>
    </div>
  );
}