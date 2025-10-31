import { Layout } from '../components/Layout';

export default function PrivacyPolicy() {
  return (
    <Layout
      title="Privacidad — Hernny Malaver"
      description="Política de privacidad del portafolio de Hernny Malaver: cookies, analítica, contacto y uso de APIs (Google Drive para la galería)."
      keywords={[
        'privacidad',
        'cookies',
        'analítica',
        'política de privacidad',
        'Google Drive',
        'galería',
        'contacto',
      ]}
      canonicalPath="/privacy"
    >
    <div className="container section">
      <h1 className="text-3xl font-bold mb-4">Política de Privacidad</h1>
      <p className="opacity-80 mb-6">
        Tu privacidad es importante. En el portafolio de Hernny Malaver, esta política describe qué datos recopilamos, cómo los usamos y tus opciones.
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

      <h2 className="text-xl font-semibold mt-8 mb-2">Contacto y formularios</h2>
      <p className="opacity-80">
        Actualmente no utilizo formularios en el sitio. Si me contactas por WhatsApp o email, la información que compartas
        se empleará únicamente para responder a tu solicitud. Este sitio no almacena tus datos en servidores propios.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">Galería (APIs de Google)</h2>
      <p className="opacity-80">
        La galería obtiene imágenes de una carpeta pública de Google Drive a través de la API de Google. No accedemos a datos
        privados. Asegúrate de revisar las políticas de Google si compartes contenido.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">Contacto</h2>
      <p className="opacity-80">
        Si tienes preguntas sobre esta política, puedes escribirme desde la sección <a href="#contact" className="text-primary underline">Contacto</a>
        , preferiblemente por WhatsApp.
      </p>

      <div className="mt-8">
        <a href="/" className="text-primary hover:underline">Volver al inicio</a>
      </div>
    </div>
    </Layout>
  );
}
