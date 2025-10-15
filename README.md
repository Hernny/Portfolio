# Portafolio de Hernny Malaver

Portafolio personal de Hernny Malaver (Director de proyectos y desarrollador de software) en Next.js + TypeScript con Tailwind CSS, Framer Motion, React Icons y Google APIs. Incluye banner de cookies, píxel de seguimiento (Meta Pixel), agendamiento y galería de fotos vía Google Drive API. Se unificó la sección de contacto priorizando WhatsApp (se eliminó el formulario). Listo para desplegar en GitHub Pages.

## Características UX / UI Clave
- Modo claro y oscuro con toggle persistente (localStorage + preferencia del sistema)
- Navbar fijo con resaltado dinámico de sección (IntersectionObserver)
- Dropdown agrupado "Sobre mí" con subsecciones (Perfil, Habilidades, Experiencia)
- Paleta de marca dual (light/dark) orientada a claridad, profesionalismo y energía controlada (accent cerúleo + highlight ember)
- Inyección condicional de Meta Pixel tras consentimiento de cookies
- Galería resiliente (fallback multiline) con placeholders locales

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

## Tests

- Unitarios (Vitest + RTL):

```bash
npm run test:unit
```

- E2E (Playwright):

```bash
npm run test:e2e
```

Esto construye el sitio, levanta un servidor estático (gestionado por Playwright) y ejecuta los tests.

## Variables de entorno
Crea un archivo `.env.local` en la raíz con:

```
NEXT_PUBLIC_GOOGLE_API_KEY=tu_api_key
NEXT_PUBLIC_GOOGLE_DRIVE_FOLDER_ID=tu_folder_id
NEXT_PUBLIC_META_PIXEL_ID=tu_pixel_id_opcional
NEXT_PUBLIC_GH_PAGES_BASE=nombre_del_repo
NEXT_PUBLIC_BASE_URL=https://<tu-usuario>.github.io/<nombre_del_repo>
```

- Para la galería, comparte una carpeta de Google Drive como "Cualquiera con el enlace" y usa su ID.
- Nota: Google Photos Library API requiere OAuth. Para simplificar el ejemplo, usamos Google Drive Files API con un folder público.

## Estructura
- `pages/` rutas (SPA con anclas)
- `components/` UI modular
- `lib/` utilidades (Google API)
- `hooks/` lógica de estado (consentimiento de cookies, tema `useTheme`)
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

### BasePath y sitemap para GitHub Pages
- `NEXT_PUBLIC_GH_PAGES_BASE` configura `basePath` y `assetPrefix` (por ejemplo, `portfolio-next-spa`).
- `NEXT_PUBLIC_BASE_URL` se usa para generar URLs absolutas en `sitemap.xml` (por ejemplo, `https://<tu-usuario>.github.io/<repo>` o tu dominio personalizado).

Tras `npm run build`, se generará automáticamente `out/sitemap.xml`.

### CI (Checks)

El workflow `.github/workflows/ci.yml` ejecuta:

- Type-check
- Tests unitarios
- Build (export estático)
- E2E (Playwright)

## Notas de privacidad y consentimiento
- El pixel de Meta solo se inyecta cuando el usuario acepta cookies (banner incluido).

## Tema (Light / Dark)
El proyecto usa `darkMode: 'class'` en Tailwind y un hook `useTheme` que:
1. Lee preferencia guardada (localStorage) o el media query del sistema.
2. Aplica / remueve la clase `dark` en `<html>`.
3. Escucha cambios del sistema si no hay preferencia explícita.

### Toggle
El botón (icono Sol / Luna) vive en el navbar (a la izquierda de "Sobre mí"). Cambia instantáneamente el tema y persiste la elección.

### Paleta de marca
Tokens semánticos (CSS variables) definidos en `styles/globals.css`:
```
--color-bg-primary, --color-bg-elevated, --color-accent, --color-accent-hover,
--color-highlight, --color-border, --color-fg-primary, --color-fg-muted, etc.
```
En dark mode se sobreescriben dentro de `.dark { ... }`.

Además se extiende Tailwind con:
```
colors: { primary: {50..900}, ember: {50..900}, surface:{light,dark}, ink:{light,dark} }
```
Recomendación: usar clases utilitarias (`text-primary`, `bg-primary-50`) para elementos interactivos, y variables semánticas para contenedores y tipografía.

### Accesibilidad
- Contrast ratio verificado para `primary` sobre fondos claros (#0EA5E9) y su variante más clara en dark (#38BDF8) sobre #0B1220.
- Focus visible mediante ring Tailwind (`focus-visible:ring-primary/50`).

## Navbar y Dropdown
- El grupo "Sobre mí" muestra un submenu accesible (teclas: Escape, ArrowDown) y cierra al salir con retardo mínimo (160ms) para evitar cortes bruscos.
- El scroll spy agrupa ratios por subsecciones y resalta el grupo cuando cualquiera de sus secciones es dominante en viewport.

## Testing Visual / Theming
Puedes validar el modo oscuro:
```bash
npm run dev
# Abrir http://localhost:3000 y alternar el botón (Sol/Luna)
```

Para forzar un estado inicial distinto en el navegador puedes borrar la key en DevTools:
`localStorage.removeItem('theme-preference')` y recargar.

## Licencia
MIT
