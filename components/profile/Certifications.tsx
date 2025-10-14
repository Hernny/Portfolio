import { certifications } from '../../data/certifications';

export function Certifications() {
  return (
    <section id="certifications" className="section container">
      <h2 className="text-3xl font-bold mb-6">Certificaciones</h2>
      <ul className="grid gap-3">
        {certifications.map((c) => (
          <li key={c.name} className="border border-white/10 rounded p-4 bg-white/5 flex items-center justify-between">
            <div>
              <p className="font-semibold">{c.name}</p>
              <p className="text-sm opacity-80">{c.issuer}</p>
            </div>
            <span className="text-sm opacity-70">{c.year}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
