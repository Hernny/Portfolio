# Contribuir al Proyecto

Este repositorio sigue un flujo simple orientado a cambios pequeños, revisables y desplegables con seguridad en GitHub Pages.

## Flujo de trabajo

1. Crea una rama por tarea o requerimiento
   - Nombres sugeridos: `feat/...`, `fix/...`, `chore/...`, `docs/...`, `test/...`
   - Ejemplos:
     - `feat/galeria-always-section`
     - `fix/navbar-hash-active`
     - `docs/contexto-actualizado`

2. Commits convencionales (recomendado)
   - Formato: `type(scope): resumen`
   - Types comunes: `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `build`, `ci`, `chore`
   - Ejemplos:
     - `feat(header): navegación por hash con scroll suave`
     - `fix(gallery): renderizar sección siempre para scroll-spy`

3. Pull Request
   - Abre un PR hacia `main` describiendo:
     - Qué cambia de cara al usuario
     - Impactos en configuración/env vars si aplica
     - Screenshots o GIFs si es UI
     - Cómo probar (pasos, comandos)
   - Revisa que CI pase (build, lint/types, tests).

4. Merge y limpieza
   - Haz merge por rebase o squash (consistente para historial).
   - Elimina la rama del feature tras el merge (GitHub puede hacerlo automático).

## Convenciones del proyecto

- Next.js 15 con `output: 'export'` para GitHub Pages (subpath basePath).
- Rutas y assets deben ser basePath-safe:
  - Enlaces a páginas internas: `Link` con `href={{ pathname: '/ruta' }}`
  - Assets públicos: `router.basePath + '/asset.ext'` o rutas relativas en manifest.
- Secciones deben existir con `<section id="...">` desde el primer render (importante para scroll-spy y `#hash`).
- Galería: evita `useRouter` en los placeholders para permitir test unitarios sin montar el router.

## Scripts útiles

- Dev: `npm run dev`
- Build: `npm run build`
- Unit tests: `npm run test:unit`
- E2E: `npm run test:e2e`

## Código de conducta

Sé respetuoso y empático. Propón mejoras con propuestas concretas y evita introducir dependencias innecesarias.
