import { profile } from '../../data/profile';

export function About() {
  return (
    <section id="about" className="section container">
      <h2 className="text-3xl font-bold mb-4">Sobre mí</h2>
      <p className="opacity-80">{profile.name} — {profile.title}</p>
      <div className="mt-4 grid gap-3">
        {profile.summary.map((s, i) => (
          <p key={i} className="opacity-80">{s}</p>
        ))}
      </div>
    </section>
  );
}
