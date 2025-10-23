import { profile } from '../../data/profile';

export function About() {
  return (
    <section id="about" className="section container scroll-mt-24 md:scroll-mt-28">
      <h2 className="text-3xl md:text-4xl font-extrabold leading-tight tracking-tight text-center mb-4 md:mb-6">Sobre mí</h2>
      <p className="opacity-80 text-center">{profile.name} — {profile.title}</p>
      <div className="mt-4 md:mt-6 grid gap-3 md:gap-4">
        {profile.summary.map((s, i) => (
          <p key={i} className="opacity-80">{s}</p>
        ))}
      </div>
    </section>
  );
}
