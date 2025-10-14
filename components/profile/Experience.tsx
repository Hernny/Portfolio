import { profile } from '../../data/profile';

export function Experience() {
  return (
    <section id="experience" className="section container">
      <h2 className="text-3xl font-bold mb-6">Experiencia</h2>
      <div className="grid gap-4">
        {profile.experience.map((e) => (
          <article key={`${e.role}-${e.company}`} className="bg-white/5 rounded p-4 border border-white/10">
            <h3 className="font-semibold">{e.role} — {e.company}</h3>
            <p className="text-sm opacity-80">{e.period}{e.location ? ` · ${e.location}` : ''}</p>
            <ul className="list-disc list-inside mt-2 opacity-90">
              {e.highlights.map((h, i) => (
                <li key={i}>{h}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
