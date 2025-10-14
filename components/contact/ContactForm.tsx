import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const schema = z.object({
  name: z.string().min(2, 'Nombre muy corto'),
  email: z.string().email('Email inválido'),
  message: z.string().min(10, 'Mensaje demasiado corto'),
});

type FormData = z.infer<typeof schema>;

export function ContactForm() {
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<FormData>({
    mode: 'onBlur',
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    // Simulate request
    await new Promise((r) => setTimeout(r, 800));
    alert(`Gracias ${data.name}, tu mensaje fue enviado!`);
    reset();
  };

  return (
    <section id="contact" className="section container">
      <h2 className="text-3xl font-bold mb-6">Contacto</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 max-w-xl">
        <div>
          <label className="block text-sm mb-1">Nombre</label>
          <input {...register('name')} className="w-full bg-transparent border border-white/20 rounded px-3 py-2" />
          {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>}
        </div>
        <div>
          <label className="block text-sm mb-1">Email</label>
          <input type="email" {...register('email')} className="w-full bg-transparent border border-white/20 rounded px-3 py-2" />
          {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>}
        </div>
        <div>
          <label className="block text-sm mb-1">Mensaje</label>
          <textarea rows={5} {...register('message')} className="w-full bg-transparent border border-white/20 rounded px-3 py-2" />
          {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message.message}</p>}
        </div>
        <button disabled={isSubmitting} className="px-6 py-3 rounded bg-primary text-black font-semibold hover:bg-sky-500 disabled:opacity-50">
          {isSubmitting ? 'Enviando…' : 'Enviar'}
        </button>
      </form>
    </section>
  );
}
