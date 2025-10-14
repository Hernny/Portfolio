import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="container section">
      <h1 className="text-3xl font-bold mb-2">404 - Página no encontrada</h1>
      <p className="opacity-80 mb-6">La página que buscas no existe.</p>
      <Link href="/" className="px-6 py-3 rounded bg-primary text-black font-semibold hover:bg-sky-500">Volver al inicio</Link>
    </div>
  );
}
