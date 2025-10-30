export default function NotFound() {
  return (
    <div style={{ padding: '4rem 1rem', textAlign: 'center' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '0.5rem' }}>404 - Página no encontrada</h1>
      <p style={{ opacity: 0.8 }}>La página que buscas no existe.</p>
      <p style={{ marginTop: '1.25rem' }}>
        <a href="/" style={{ color: 'var(--color-primary)', textDecoration: 'underline' }}>
          Volver al inicio
        </a>
      </p>
    </div>
  );
}
