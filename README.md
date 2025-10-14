# Portafolio de Hernny Malaver

Portafolio personal de Hernny Malaver (Director de proyectos y desarrollador de software) en Next.js + TypeScript con Tailwind CSS, Framer Motion, React Icons y Google APIs. Incluye banner de cookies, píxel de seguimiento (Meta Pixel), formulario de contacto, agendamiento y galería de fotos vía Google Drive API. Listo para desplegar en GitHub Pages.

## Requisitos
- Node.js 18+ (recomendado 20)
- Cuenta de GitHub
- Claves de Google (API Key) y folder público de Google Drive (ID)

## Instalación

```bash
npm install
```

## Desarrollo

```bash
npm run dev
```

Abre http://localhost:3000

## Variables de entorno
Crea un archivo `.env.local` en la raíz con:

```
NEXT_PUBLIC_GOOGLE_API_KEY=tu_api_key
NEXT_PUBLIC_GOOGLE_DRIVE_FOLDER_ID=tu_folder_id
NEXT_PUBLIC_META_PIXEL_ID=tu_pixel_id_opcional
```

- Para la galería, comparte una carpeta de Google Drive como "Cualquiera con el enlace" y usa su ID.
- Nota: Google Photos Library API requiere OAuth. Para simplificar el ejemplo, usamos Google Drive Files API con un folder público.

## Estructura
- `pages/` rutas (SPA con anclas)
- `components/` UI modular
- `lib/` utilidades (Google API)
- `hooks/` lógica de estado (consentimiento de cookies)
- `styles/` Tailwind CSS

## Despliegue en GitHub Pages
1. Crea un repositorio en GitHub y sube el código.
2. En Settings > Pages, selecciona "GitHub Actions" como Source.
3. En Settings > Secrets and variables > Actions añade:
   - `NEXT_PUBLIC_GOOGLE_API_KEY`
   - `NEXT_PUBLIC_GOOGLE_DRIVE_FOLDER_ID`
   - `NEXT_PUBLIC_META_PIXEL_ID` (opcional)
4. Asegúrate de que la rama por defecto es `main`.
5. Haz push a `main`. El workflow `deploy.yml` hará build y export, y publicará `out/`.

Si tu repositorio se llama `portfolio-next-spa`, la app estará en `https://<tu-usuario>.github.io/portfolio-next-spa/`.

### BasePath para GitHub Pages
Usamos `NEXT_PUBLIC_GH_PAGES_BASE` para configurar `basePath` y `assetPrefix` durante el build en Actions.

## Notas de privacidad y consentimiento
- El pixel de Meta solo se inyecta cuando el usuario acepta cookies (banner incluido).

## Licencia
MIT
