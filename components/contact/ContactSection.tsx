import { profile } from '../../data/profile';
import { FaEnvelope, FaLinkedin, FaPhone, FaWhatsapp } from 'react-icons/fa';
import { useMemo } from 'react';

export function ContactSection() {
  const wa = useMemo(() => {
    const digits = profile.phone.replace(/[^0-9]/g, '');
    const msg = encodeURIComponent('Hola Hernny, me gustaría conversar sobre un proyecto.');
    return `https://wa.me/${digits}?text=${msg}`;
  }, []);

  return (
    <section id="contact" className="section container scroll-mt-24 md:scroll-mt-28">
      <div className="max-w-3xl mx-auto text-center mb-8 md:mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold leading-tight tracking-tight mb-4 md:mb-6">Conectemos</h2>
        <p className="text-lg opacity-80 leading-relaxed">
          ¿Tienes un proyecto estratégico, una oportunidad de colaboración o necesitas dirección tecnológica? Escríbeme y
          respondemos por el canal que prefieras. Estoy comprometido con soluciones elegantes, medibles y alineadas al negocio.
        </p>
      </div>
      <div className="grid lg:grid-cols-3 gap-6 md:gap-10">
        {/* Contact channels */}
        <div className="space-y-3 md:space-y-4 lg:col-span-1">
          <div className="text-left">
            <h3 className="font-semibold tracking-wide mb-2 md:mb-3 text-primary">Canales directos</h3>
            <ul className="space-y-2.5 md:space-y-3">
              <li>
                <a href={`mailto:${profile.email}`} className="group flex items-center gap-3 rounded-lg border border-slate-200/60 dark:border-white/10 hover:border-primary/60 px-4 py-3 bg-white/40 dark:bg-white/5 backdrop-blur transition">
                  <span className="p-2 rounded-md bg-primary/10 text-primary group-hover:bg-primary group-hover:text-black transition">
                    <FaEnvelope />
                  </span>
                  <div className="text-sm text-left">
                    <p className="font-medium">Email</p>
                    <p className="opacity-70">{profile.email}</p>
                  </div>
                </a>
              </li>
              <li>
                <a href={profile.linkedin} target="_blank" rel="noreferrer" className="group flex items-center gap-3 rounded-lg border border-slate-200/60 dark:border-white/10 hover:border-primary/60 px-4 py-3 bg-white/40 dark:bg-white/5 backdrop-blur transition">
                  <span className="p-2 rounded-md bg-primary/10 text-primary group-hover:bg-primary group-hover:text-black transition">
                    <FaLinkedin />
                  </span>
                  <div className="text-sm text-left">
                    <p className="font-medium">LinkedIn</p>
                    <p className="opacity-70 truncate max-w-[180px]">{profile.linkedin.replace('https://', '')}</p>
                  </div>
                </a>
              </li>
              <li>
                <a href={`tel:${profile.phone.replace(/\s+/g, '')}`} className="group flex items-center gap-3 rounded-lg border border-slate-200/60 dark:border-white/10 hover:border-primary/60 px-4 py-3 bg-white/40 dark:bg-white/5 backdrop-blur transition">
                  <span className="p-2 rounded-md bg-primary/10 text-primary group-hover:bg-primary group-hover:text-black transition">
                    <FaPhone />
                  </span>
                  <div className="text-sm text-left">
                    <p className="font-medium">Teléfono</p>
                    <p className="opacity-70">{profile.phone}</p>
                  </div>
                </a>
              </li>
              <li>
                {/* WhatsApp link using wa.me (remove + and spaces) with preset message */}
                {(() => {
                  const raw = profile.phone;
                  const digits = raw.replace(/[^0-9]/g, '');
                  const msg = encodeURIComponent('Hola Hernny, me gustaría conversar sobre un proyecto.');
                  const wa = `https://wa.me/${digits}?text=${msg}`;
                  return (
                    <a href={wa} target="_blank" rel="noreferrer" className="group flex items-center gap-3 rounded-lg border border-green-200/60 dark:border-green-500/20 hover:border-green-500/70 px-4 py-3 bg-green-50/70 dark:bg-green-500/10 backdrop-blur transition">
                      <span className="p-2 rounded-md bg-green-500/15 text-green-600 dark:text-green-400 group-hover:bg-green-500 group-hover:text-white transition">
                        <FaWhatsapp />
                      </span>
                      <div className="text-sm text-left">
                        <p className="font-medium">WhatsApp</p>
                        <p className="opacity-70">Chat inmediato</p>
                      </div>
                    </a>
                  );
                })()}
              </li>
            </ul>
          </div>
          <div className="text-sm opacity-70 leading-relaxed">
            También puedo adaptarme a otras plataformas (Teams, Slack, Meet) una vez iniciado el contacto.
          </div>
        </div>
        {/* CTA WhatsApp destacado (sin formulario) */}
        <div className="lg:col-span-2">
          <div className="grid gap-4 md:gap-5 bg-white/50 dark:bg-white/5 backdrop-blur rounded-xl p-5 md:p-6 border border-slate-200/70 dark:border-white/10 shadow-md">
            <div className="space-y-2">
              <h3 className="font-semibold tracking-wide">Contacto inmediato</h3>
              <p className="opacity-80">Prefiero conversaciones ágiles. Escríbeme por WhatsApp y coordinamos.</p>
            </div>
            <div className="flex items-center gap-4 flex-wrap">
              <a href={wa} target="_blank" rel="noreferrer" className="px-6 py-3 rounded-lg bg-primary text-black font-semibold shadow hover:shadow-md hover:bg-primary-400 focus-visible:outline-none focus-visible:ring focus-visible:ring-primary/40 transition">
                Contactar por WhatsApp
              </a>
            </div>
            <p className="text-xs opacity-60 leading-relaxed">Al contactar aceptas ser respondido por cualquiera de los canales que indiques.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
