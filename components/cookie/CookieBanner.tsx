import { useCookieConsent } from '../../hooks/useCookieConsent';
import Link from 'next/link';

export function CookieBanner() {
  const { consent, accept, reject } = useCookieConsent();

  if (consent !== 'unset') return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-50 bg-secondary text-white p-4 shadow-lg">
      <div className="container flex flex-col md:flex-row items-center gap-3">
        <p className="text-sm opacity-90">
          Usamos cookies para mejorar tu experiencia. Puedes aceptar o rechazar. Lee nuestra{' '}
          <Link href="/privacy" className="underline hover:text-primary">Política de Privacidad</Link> para más detalles.
        </p>
        <div className="ml-auto flex gap-2">
          <button onClick={reject} className="px-4 py-2 rounded bg-gray-600 hover:bg-gray-500">Rechazar</button>
          <button onClick={accept} className="px-4 py-2 rounded bg-primary hover:bg-sky-500 text-black font-semibold">Aceptar</button>
        </div>
      </div>
    </div>
  );
}
