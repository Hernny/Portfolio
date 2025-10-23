import { profile } from '../../data/profile';

export function Skills() {
  const { skills } = profile;
  return (
    <section id="skills" className="section container scroll-mt-24 md:scroll-mt-28">
      <h2 className="text-3xl md:text-4xl font-extrabold leading-tight tracking-tight text-center mb-4 md:mb-6">Habilidades</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {Object.entries(skills).map(([cat, items]) => (
          <div key={cat} className="bg-white/5 rounded p-4 md:p-5 border border-white/10">
            <h3 className="font-semibold mb-2 md:mb-3 capitalize">{cat}</h3>
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
