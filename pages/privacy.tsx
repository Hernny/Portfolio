import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <div className="container section">
      <h1 className="text-3xl font-bold mb-4">Política de Privacidad</h1>
      <p className="opacity-80 mb-6">
        Tu privacidad es importante. Esta política describe qué datos recopilamos, cómo los usamos y tus opciones.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">Cookies</h2>
      <p className="opacity-80">
        Usamos cookies esenciales para el funcionamiento del sitio y opcionales para analítica y marketing. Puedes aceptar o
        rechazar estas cookies desde el banner de consentimiento. El estado de tu preferencia se almacena en una cookie con una
        validez de hasta 180 días.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">Analítica y seguimiento</h2>
      <p className="opacity-80">
        Si aceptas cookies, podemos habilitar etiquetas de seguimiento como Meta Pixel para medir el uso del sitio. No
        se activa ningún seguimiento sin tu consentimiento.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">Formularios</h2>
      <p className="opacity-80">
        Los datos enviados mediante formularios (nombre, email, mensaje) se usan para responder a tus consultas. En este demo no
        se almacenan en servidores; el envío es simulado.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">Galería (APIs de Google)</h2>
      <p className="opacity-80">
        La galería obtiene imágenes de una carpeta pública de Google Drive a través de la API de Google. No accedemos a datos
        privados. Asegúrate de revisar las políticas de Google si compartes contenido.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">Contacto</h2>
      <p className="opacity-80">
        Si tienes preguntas sobre esta política, contáctanos mediante el formulario en la sección "Contacto".
      </p>

      <div className="mt-8">
        <Link href="/" className="text-primary hover:underline">Volver al inicio</Link>
      </div>
    </div>
  );
}
