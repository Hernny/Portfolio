# Recursos de Contexto (context_rsc)

Este directorio almacena recursos locales de apoyo al proyecto que no forman parte del bundle de la aplicación, pero sirven para aportar contexto al desarrollo, documentación o comunicación externa.

Ejemplos de archivos a colocar aquí:
- CV / currículum actualizado (PDF, DOCX)
- Diagramas de arquitectura (PNG, SVG, draw.io)
- Bocetos o wireframes
- Notas internas de alcance
- Capturas de evidencias para casos de estudio

Convenciones:
- Evitar credenciales o datos sensibles.
- Usar nombres descriptivos: `cv-hernny-2025.pdf`, `arquitectura-v1.drawio`, `wireframe-landing.png`.
- Si un recurso se vuelve obsoleto, moverlo a una subcarpeta `archive/`.

Ignorar en build:
- Estos archivos no deben ser servidos públicamente; si se requiriera publicar alguno (ej. CV público) moverlo a `public/`.

Licenciamiento:
- Asumir que los recursos son privados salvo que se indique explícitamente lo contrario.
