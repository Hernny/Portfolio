import { projects } from '../../data/projects';

export function Projects() {
  return (
    <section id="projects" className="section container">
      <h2 className="text-3xl font-bold mb-6">Proyectos</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p) => (
          <article key={p.title} className="border border-white/10 rounded p-5 bg-white/5">
            <h3 className="font-semibold text-lg">{p.title}</h3>
            <p className="opacity-80 mt-2">{p.summary}</p>
            <div className="mt-3 flex flex-wrap gap-2 text-xs opacity-80">
              {p.stack.map((s) => (
                <span key={s} className="px-2 py-1 rounded border border-white/10">{s}</span>
              ))}
            </div>
            {p.links?.length ? (
              <div className="mt-4 flex gap-3 text-sm">
                {p.links.map((l) => (
                  <a key={l.href} href={l.href} target="_blank" rel="noreferrer" className="underline hover:text-primary">
                    {l.label}
                  </a>
                ))}
              </div>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  );
}
