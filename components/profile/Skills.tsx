import { profile } from '../../data/profile';

export function Skills() {
  const { skills } = profile;
  return (
    <section id="skills" className="section container">
      <h2 className="text-3xl font-bold mb-6">Habilidades</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.entries(skills).map(([cat, items]) => (
          <div key={cat} className="bg-white/5 rounded p-4 border border-white/10">
            <h3 className="font-semibold mb-2 capitalize">{cat}</h3>
            <ul className="list-disc list-inside opacity-90">
              {items.map((it) => (
                <li key={it}>{it}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
