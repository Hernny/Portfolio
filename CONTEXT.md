# Contexto del Proyecto

Este documento captura decisiones clave, configuración y reglas para mantener y evolucionar el proyecto sin fricción.

## Stack y Propósito
- Framework: Next.js 15 (Pages Router, exportación estática)
- Lenguaje: TypeScript (estricto)
- UI: Tailwind CSS
- Animaciones: Framer Motion
- Íconos: React Icons
- Formularios: react-hook-form + zod
- Fechas: date-fns
- Cookies: js-cookie (gestión de consentimiento)
- Hosting: GitHub Pages (exportación estática vía `next export`)

## Arquitectura
- `pages/`: rutas (`/_app.tsx`, `index.tsx`, `404.tsx`, `privacy.tsx`). Estilo SPA con anclas por sección.
- `components/`: módulos de UI (layout, header, footer, banner de cookies, tracking, hero, galería, agenda, formulario de contacto, secciones de perfil).
- `hooks/`: hooks reutilizables (`useCookieConsent`).
- `lib/`: utilidades (`googleDrive.ts`).
- `styles/`: Tailwind global en `styles/globals.css`.
- `public/`: assets estáticos (por ejemplo, `robots.txt`).
- `instrumentation.ts`: hook de instrumentación de Next.js (stub) para compatibilidad y futura telemetría.

## Branding / Propietario
- Propietario: Hernny Malaver — Director de proyectos y desarrollador de software
- Título por defecto y metadatos personalizados en toda la app (head, layout, hero, footer, README, página de privacidad).

## Variables de Entorno
Añadir en `.env.local` para desarrollo local y configurar como secretos en Actions para CI:
- `NEXT_PUBLIC_GOOGLE_API_KEY`: API key de Google con Drive API habilitada.
- `NEXT_PUBLIC_GOOGLE_DRIVE_FOLDER_ID`: ID de carpeta pública de Drive con imágenes.
- `NEXT_PUBLIC_META_PIXEL_ID`: Opcional, ID de Meta Pixel. Solo inyecta el pixel con consentimiento.
- `NEXT_PUBLIC_GH_PAGES_BASE`: Nombre del repo para basePath de GitHub Pages (definido en CI).

## Galería de Google Drive
- Lista imágenes usando la API v3 de Google Drive. Requiere carpeta compartida como “Cualquiera con el enlace”.
- Filtro de consulta: `mimeType contains 'image/' and trashed=false`.
- Orden de fallback para URLs de imagen: `thumbnailLink` -> `thumbnail?id=ID&sz=w1000` -> `uc?export=view&id=ID` -> `webContentLink`.
- La grilla usa relación de aspecto fija con `object-cover` para miniaturas consistentes.

## Cookies y Seguimiento
- Estados de consentimiento: `granted | denied | unset` almacenados con `js-cookie` (180 días).
- El pixel (Meta) se renderiza solo con consentimiento y si `NEXT_PUBLIC_META_PIXEL_ID` está configurado.

## Build y Despliegue
- `next.config.js` usa `output: 'export'`, `trailingSlash`, `images.unoptimized`.
- El workflow de GitHub Actions `.github/workflows/deploy.yml` construye, exporta a `out/` y publica en Pages.
- Para Pages, `NEXT_PUBLIC_GH_PAGES_BASE` se define con el nombre del repo para configurar `basePath`/`assetPrefix`.

## Comandos de Desarrollo
- Iniciar dev: `npm run dev`
- Type check: `npm run type-check`
- Build: `npm run build`
- Export: `npm run export`

## Reglas de Branching y Flujo de Trabajo
- SIEMPRE crear una nueva rama para cada requerimiento o tarea. Nomenclatura sugerida: `feat/…`, `fix/…`, `chore/…`.
  - Ejemplo: `git switch -c feat/politica-privacidad-link`
- Commits pequeños y descriptivos; preferir mensajes de commits convencionales.
- Los PRs deben describir cambios de cara al usuario y cualquier impacto en configuración o variables.
- Tras hacer merge a `main`, eliminar la rama de feature:
  - Preferible: activar “Automatically delete head branches” en la configuración del repo en GitHub.
  - Alternativa: borrado manual (local: `git branch -d <branch>`; remoto: `git push origin --delete <branch>`).

## Notas de Mantenimiento
- Si las imágenes de Drive fallan, verifica el compartido de la carpeta y que la API esté habilitada. Revisa la consola del navegador para ver el detalle del error (se registra un fragmento de respuesta).
- Si se actualiza Next.js, mantener `instrumentation.ts` para satisfacer los alias de instrumentación.
- Para GitHub Pages, confirmar que en Settings > Pages la fuente sea GitHub Actions.

## Mejoras Futuras
- Migración opcional a App Router (`app/`) y uso de server actions para OAuth de Google Photos.
- Añadir unit tests (React Testing Library), E2E (Playwright) y checks básicos de CI.
- Añadir fallback de imágenes locales si Drive no está disponible.
