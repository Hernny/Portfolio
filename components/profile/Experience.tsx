import { profile } from '../../data/profile';

export function Experience() {
  return (
    <section id="experience" className="section container scroll-mt-24 md:scroll-mt-28">
      <h2 className="text-3xl md:text-4xl font-extrabold leading-tight tracking-tight text-center mb-4 md:mb-6">Experiencia</h2>
      <div className="grid gap-4 md:gap-6">
        {profile.experience.map((e) => (
          <article key={`${e.role}-${e.company}`} className="rounded p-4 md:p-5 border shadow-sm bg-white border-slate-200 dark:bg-white/5 dark:border-white/10 dark:shadow-none">
            <h3 className="font-semibold">{e.role} — {e.company}</h3>
            <p className="text-sm opacity-80">{e.period}{e.location ? ` · ${e.location}` : ''}</p>
            <ul className="list-disc list-inside mt-2 md:mt-3 opacity-90">
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
