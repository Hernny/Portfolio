import { profile } from '../../data/profile';
import { FaEnvelope, FaLinkedin, FaPhone, FaWhatsapp } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';

const schema = z.object({
  name: z.string().min(2, 'Nombre muy corto'),
  email: z.string().email('Email inválido'),
  message: z.string().min(10, 'Mensaje demasiado corto'),
});

type FormData = z.infer<typeof schema>;

export function ContactSection() {
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<FormData>({
    mode: 'onBlur',
    resolver: zodResolver(schema),
  });
  const [sent, setSent] = useState(false);

  const onSubmit = async (data: FormData) => {
    await new Promise(r => setTimeout(r, 800));
    setSent(true);
    reset();
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="section container">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Conectemos</h2>
        <p className="text-lg opacity-80 leading-relaxed">
          ¿Tienes un proyecto estratégico, una oportunidad de colaboración o necesitas dirección tecnológica? Escríbeme y
          respondemos por el canal que prefieras. Estoy comprometido con soluciones elegantes, medibles y alineadas al negocio.
        </p>
      </div>
      <div className="grid lg:grid-cols-3 gap-10">
        {/* Contact channels */}
        <div className="space-y-4 lg:col-span-1">
          <div className="text-left">
            <h3 className="font-semibold tracking-wide mb-3 text-primary">Canales directos</h3>
            <ul className="space-y-3">
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
        {/* Form */}
        <div className="lg:col-span-2">
          <form onSubmit={handleSubmit(onSubmit)} className="grid gap-5 bg-white/50 dark:bg-white/5 backdrop-blur rounded-xl p-6 border border-slate-200/70 dark:border-white/10 shadow-md">
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-medium tracking-wide uppercase mb-1 opacity-70">Nombre</label>
                <input {...register('name')} className="w-full bg-white/70 dark:bg-white/10 border border-slate-300 dark:border-white/10 focus:border-primary/60 rounded px-3 py-2 text-sm outline-none transition" />
                {errors.name && <p className="text-ember-600 dark:text-ember-400 text-xs mt-1">{errors.name.message}</p>}
              </div>
              <div>
                <label className="block text-xs font-medium tracking-wide uppercase mb-1 opacity-70">Email</label>
                <input type="email" {...register('email')} className="w-full bg-white/70 dark:bg-white/10 border border-slate-300 dark:border-white/10 focus:border-primary/60 rounded px-3 py-2 text-sm outline-none transition" />
                {errors.email && <p className="text-ember-600 dark:text-ember-400 text-xs mt-1">{errors.email.message}</p>}
              </div>
            </div>
            <div>
              <label className="block text-xs font-medium tracking-wide uppercase mb-1 opacity-70">Mensaje</label>
              <textarea rows={6} {...register('message')} className="w-full resize-y bg-white/70 dark:bg-white/10 border border-slate-300 dark:border-white/10 focus:border-primary/60 rounded px-3 py-2 text-sm outline-none transition" />
              {errors.message && <p className="text-ember-600 dark:text-ember-400 text-xs mt-1">{errors.message.message}</p>}
            </div>
            <div className="flex items-center gap-4 flex-wrap">
              <button disabled={isSubmitting} className="px-6 py-3 rounded-lg bg-primary text-black font-semibold shadow hover:shadow-md hover:bg-primary-400 focus-visible:outline-none focus-visible:ring focus-visible:ring-primary/40 disabled:opacity-50 transition">
                {isSubmitting ? 'Enviando…' : 'Enviar'}
              </button>
              {sent && <span className="text-sm text-primary animate-pulse">¡Mensaje enviado! Te responderé pronto.</span>}
            </div>
            <p className="text-xs opacity-60 leading-relaxed">Al enviar aceptas ser contactado a través del email o teléfono proporcionado únicamente para el contexto de tu consulta.</p>
          </form>
        </div>
      </div>
    </section>
  );
}
