# PROMPT PARA MEJORAR EL HERO SECTION DE HERNNY MALAVER

## CONTEXTO DEL PROYECTO
Soy Hernny Malaver, Project Manager especializado en fintech. Mi sitio web actual tiene un hero section que necesita ser rediseñado completamente siguiendo las mejores prácticas de UI/UX para PMs de alto valor.

## ANÁLISIS ACTUAL
Mi hero section actual tiene estos problemas críticos:
- **Jerarquía visual deficiente**: Todos los elementos compiten por atención
- **Headline genérico**: Solo muestra mi nombre sin valor específico  
- **Value proposition vago**: "convierte caos técnico en sistemas" es muy abstracto
- **Layout 50/50 problemático**: Foto y texto compiten visualmente
- **CTAs poco prominentes**: Botones pequeños y sin contraste
- **Ausencia de métricas**: No hay números que demuestren éxito
- **Falta social proof**: Sin credenciales o testimonios visibles

## TAREAS ESPECÍFICAS A REALIZAR

### PRIORIDAD 1 - CRÍTICO (Implementar primero)

1. **Reescribir el Headline Principal**
   - Cambiar "Hernny Malaver" por un headline orientado a resultados
   - USAR: "Transformo Proyectos Fintech en Sistemas que Generan $10M+ ROI"
   - Font-size: 48-64px, font-weight: 700, line-height: 1.1

2. **Crear Value Proposition Específico** 
   - Reemplazar el texto confuso actual por:
   - "Especializado en transformaciones digitales que reducen costos operacionales 35% mientras aceleran el time-to-market en fintech y e-commerce"
   - Font-size: 20-24px, font-weight: 500, line-height: 1.4

3. **Agregar Métricas de Impacto Visuales**
   - Incluir: "98% proyectos entregados a tiempo | $50M+ en proyectos gestionados | 35% reducción promedio en costos"
   - Usar iconos o cards para destacar cada métrica

### PRIORIDAD 2 - ALTO IMPACTO

4. **Rediseñar Botones CTA**
   - CTA primario: "Agenda Consulta Estratégica Gratuita"
   - Estilo: padding 16px 32px, font-size 18px, font-weight 600
   - Background: gradient azul vibrante con box-shadow
   - CTA secundario: "Ver Portfolio de Proyectos"

5. **Reestructurar Layout**
   - Cambiar de layout 50/50 a layout centrado
   - Contenido principal: max-width 600px, centrado
   - Foto: reducir a 30% del espacio visual

6. **Agregar Credenciales Visibles**
   - "PMP® Certified | Agile Coach | Fintech Expert"
   - Incluir logos de certificaciones si los tienes

### PRIORIDAD 3 - COMPLEMENTARIO

7. **Implementar Jerarquía Tipográfica Clara**
   - H1 (Headline): 48-64px, weight 700
   - H2 (Subheadline): 20-24px, weight 500  
   - Body text: 16-18px, weight 400
   - Usar escala tipográfica 1.25 (Major Third)

8. **Mejorar Espaciado Vertical**
   - 40px entre headline y subheadline
   - 32px entre secciones principales
   - 24px entre párrafos
   - Usar sistema de espaciado base 8px

## CÓDIGO CSS DE REFERENCIA

```css
/* JERARQUÍA TIPOGRÁFICA */
.hero-headline {
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  text-align: center;
}

.hero-subheadline {
  font-size: clamp(1.125rem, 2vw, 1.5rem);
  font-weight: 500;
  line-height: 1.4;
  margin-bottom: 2rem;
  text-align: center;
}

/* LAYOUT CENTRADO */
.hero-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.hero-content {
  max-width: 600px;
  text-align: center;
}

/* CTA PROMINENTE */
.cta-primary {
  font-size: 1.125rem;
  font-weight: 600;
  padding: 1rem 2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 8px;
  box-shadow: 0 4px 14px rgba(102, 126, 234, 0.3);
  transition: transform 0.2s ease;
  margin: 1rem 0.5rem;
}

.cta-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);
}

.cta-secondary {
  font-size: 1rem;
  font-weight: 500;
  padding: 0.875rem 1.5rem;
  background: transparent;
  color: white;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 8px;
  margin: 1rem 0.5rem;
}

/* MÉTRICAS CARDS */
.metrics-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin: 3rem 0;
}

.metric-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  padding: 1.5rem;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.metric-number {
  font-size: 2rem;
  font-weight: 700;
  color: #667eea;
  display: block;
}

.metric-label {
  font-size: 0.875rem;
  opacity: 0.8;
  margin-top: 0.5rem;
}
```

## ESTRUCTURA HTML SUGERIDA

```html
<section class="hero-section">
  <div class="hero-container">
    <div class="hero-content">
      <!-- Headline Principal -->
      <h1 class="hero-headline">
        Transformo Proyectos Fintech en Sistemas que Generan $10M+ ROI
      </h1>
      
      <!-- Value Proposition -->
      <p class="hero-subheadline">
        Especializado en transformaciones digitales que reducen costos operacionales 35% mientras aceleran el time-to-market en fintech y e-commerce
      </p>
      
      <!-- Credenciales -->
      <div class="credentials">
        <span>PMP® Certified</span> | <span>Agile Coach</span> | <span>Fintech Expert</span>
      </div>
      
      <!-- Métricas de Impacto -->
      <div class="metrics-container">
        <div class="metric-card">
          <span class="metric-number">98%</span>
          <span class="metric-label">Proyectos a tiempo</span>
        </div>
        <div class="metric-card">
          <span class="metric-number">$50M+</span>
          <span class="metric-label">En proyectos gestionados</span>
        </div>
        <div class="metric-card">
          <span class="metric-number">35%</span>
          <span class="metric-label">Reducción de costos</span>
        </div>
      </div>
      
      <!-- CTAs -->
      <div class="cta-container">
        <button class="cta-primary">Agenda Consulta Estratégica Gratuita</button>
        <button class="cta-secondary">Ver Portfolio de Proyectos</button>
      </div>
    </div>
    
    <!-- Foto profesional (30% del espacio) -->
    <div class="hero-image">
      <img src="ruta-a-foto-professional.jpg" alt="Hernny Malaver - Project Manager Fintech">
    </div>
  </div>
</section>
```

## INSTRUCCIONES FINALES

1. **Implementa los cambios en este orden de prioridad**
2. **Asegúrate de que sea responsive** usando clamp() y media queries
3. **Mantén la accesibilidad** con contraste adecuado y alt texts
4. **Testa en múltiples dispositivos** antes de publicar
5. **Mide el impacto** comparando tiempo de permanencia y clicks en CTA

## RESULTADO ESPERADO
Un hero section que inmediatamente comunique valor específico, establezca credibilidad con métricas concretas, y guíe al usuario hacia una acción clara con jerarquía visual profesional.

**Tiempo estimado de implementación: 12-15 horas**
**Impacto esperado: 25-40% mejora en conversión**