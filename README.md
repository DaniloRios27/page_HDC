# HDC Gestión Biomédica — Landing v1

Sitio estático de una sola página para presentar el servicio de mantenimiento de equipos biomédicos de HDC Gestión Biomédica en Arauca, Casanare y Boyacá.

## Estado

- Versión: **v1 de revisión**.
- **No publicada / no desplegada.** Este repositorio no se ha subido a Hostinger ni a ningún otro hosting.
- El CTA **«Solicitar propuesta» es provisional**: todos los enlaces apuntan al ancla local `#contacto`. No hay formulario, teléfono, correo, WhatsApp ni destinatario configurado.
- Antes de publicar, reemplazar el destino del CTA en `index.html` por el canal de contacto definitivo (por ejemplo, un correo `mailto:` o una URL de agenda). El comentario `CTA PROVISIONAL` marca los puntos a editar.

## Contenido

La landing comunica únicamente:

- Mantenimiento de equipos biomédicos propiedad de la institución cliente.
- Organización de hojas de vida e historial de mantenimiento por equipo.
- Identificación de cada equipo con un código QR dentro del plan: al escanearlo desde un teléfono o tablet se consulta la hoja de vida y la información del equipo en tiempo real.
- Aplicación web de Gestión Biomédica incluida para clientes con servicio activo; no se vende por separado.
- Cobertura en Arauca, Casanare y Boyacá.
- Planes: Biomédico Individual, Biomédico Esencial, Biomédico Gestión y Biomédico 360, más un plan especial para conversar con un asesor. Sin precios ni alcances detallados.

No se afirman ventas de equipos, certificaciones ni garantías de cumplimiento normativo.

## Archivos

```text
index.html                     Página completa
politica-de-privacidad.html    Política de privacidad y datos personales
terminos-y-condiciones.html    Términos y condiciones de uso
politica-de-cookies.html       Política de cookies
accesibilidad.html             Declaración de accesibilidad
LEGAL_DATOS_PENDIENTES.md      Datos y decisiones legales por completar
baja.html                      Confirmación de baja con enlace firmado
baja-gracias.html              Confirmación final después de la baja
robots.txt                     Rastreo permitido; sitemap pendiente del dominio
PENDIENTES.txt                 Lo que falta, por qué y ejemplos
assets/css/styles.css          Estilos, animaciones y diseño responsive
assets/css/legal.css           Estilos de las páginas legales
assets/js/main.js              Menú móvil, revelados, progreso y tilt
assets/js/legal.js             Revelado, progreso e índice de las páginas legales
assets/logo/hdc-dark.svg       Logo oficial HDC
assets/logo/apple-touch-icon.png  Icono para iOS
assets/fonts/                  Satoshi y Syne, con sus licencias
assets/img/                    Fotografía y variantes optimizadas
assets/img/equipos-biomedicos-{800,1200,1600}.webp  Hero responsive
assets/img/equipos-biomedicos-1200.jpg              Respaldo del hero
assets/img/og-hdc.png          Imagen para vistas previas sociales
review/                        Capturas de verificación visual
```

## SEO y metadatos

- Título, descripción y JSON-LD de tipo `Service` con cobertura y audiencia.
- Etiquetas Open Graph y Twitter Card con `og-hdc.png` (1200×630).
- `robots.txt` permite la indexación.
- **Pendiente al publicar:** convertir `og:image` y `twitter:image` en URLs absolutas, añadir `og:url` y `canonical`, y crear `sitemap.xml` cuando exista el dominio definitivo. No se inventó un dominio.

## Páginas legales

Las cuatro páginas comparten `assets/css/legal.css` y `assets/js/legal.js`, usan rutas relativas y enlazan entre sí desde el pie de la landing.

| Página | Estado |
|---|---|
| `politica-de-privacidad.html` | Borrador para revisión jurídica |
| `terminos-y-condiciones.html` | Borrador para revisión jurídica |
| `politica-de-cookies.html` | Borrador para revisión jurídica |
| `accesibilidad.html` | Borrador para revisión jurídica |

- **No publicar** mientras queden marcadores entre corchetes visibles.
- El aviso «Documento base para revisión legal» debe eliminarse después de la aprobación.
- Los datos pendientes y las decisiones que debe tomar HDC están en **`LEGAL_DATOS_PENDIENTES.md`**.
- El sitio no usa cookies de analítica, publicidad o perfilamiento. Por eso no se añadió banner de cookies. Si se incorporan cookies no necesarias, el banner y el consentimiento previo son obligatorios.

## Email marketing y pantallas de baja

Las pantallas de baja **ya están implementadas**:

- `baja.html`: confirmación con enlace firmado (`id` + `t`) y envío por POST al Web App de Apps Script.
- `baja-gracias.html`: confirmación final después del registro.

**Pendiente:** reemplazar `REEMPLAZAR_WEB_APP` por la URL `/exec` del Web App, configurar `UnsubscribeBaseURL` y `UnsubscribeThanksURL` en la hoja `Control` y probar el flujo completo.

## Accesibilidad y comportamiento

- HTML semántico, enlace para saltar al contenido y foco visible con contraste ajustado por sección.
- Menú móvil con `aria-expanded`, cierre con `Escape`, clic fuera y al cambiar de tamaño.
- Estados `:active` en botones y enlaces; navegación por teclado.
- Diseño responsive probado en 320 px, 390 px, 800 px y 1440 px, sin desbordamiento horizontal.
- Animaciones de texto, hoja de vida, archivo y QR; todas decorativas y desactivadas con `prefers-reduced-motion`.
- El QR de la sección de la aplicación es una ilustración generada, no un código escaneable: está marcado con `aria-hidden` y la información se repite en texto.
- Sin solicitudes externas en tiempo de ejecución: fuentes, logo e imagen son locales.

## Ejecución local

La página no necesita compilación ni dependencias. Dos opciones:

1. **Abrir directamente:** hacer doble clic en `index.html`. Los estilos, fuentes y la imagen usan rutas relativas y funcionan sin servidor.
2. **Servidor local (recomendado para revisar anclas y comportamiento real):**

   ```bash
   # Python
   python -m http.server 8123

   # o Node.js (si se tiene instalado)
   npx serve .
   ```

   Luego abrir `http://127.0.0.1:8123/`.

## Publicación en Hostinger

Cuando el CTA y el contenido estén aprobados:

1. Entrar a hPanel → **Sitios web** → administrar el sitio → **Administrador de archivos**.
2. Abrir la carpeta `public_html`.
3. Subir **el contenido** de esta carpeta, no la carpeta contenedora:
   - `index.html` en la raíz de `public_html`.
   - Las páginas legales: `politica-de-privacidad.html`, `terminos-y-condiciones.html`, `politica-de-cookies.html` y `accesibilidad.html`.
   - La carpeta `assets/` completa, conservando su estructura.
4. No es necesario subir `review/`, `README.md`, `PENDIENTES.txt` ni `LEGAL_DATOS_PENDIENTES.md`, aunque no afectan el sitio.
5. Si vas a usar la baja por formulario, sube también `baja.html` y `baja-gracias.html`.
   - Antes de subir `baja.html`, reemplaza `REEMPLAZAR_WEB_APP` por la URL `/exec` del Web App de Apps Script.
   - Configura `UnsubscribeBaseURL` y `UnsubscribeThanksURL` en la hoja `Control`.
6. Verificar que `https://dominio.com/index.html` y `https://dominio.com/` carguen la página, que el logo y las fuentes se vean bien y que todos los enlaces del menú y del pie funcionen.
7. Probar los enlaces legales del pie y la página de baja con un enlace firmado real.
8. Activar/renovar el certificado SSL desde hPanel si aún no está activo.

No se requiere build, base de datos ni configuración de servidor.

## Créditos y licencias

- **Logo:** archivo oficial de HDC / Grupo Gess, usado sin modificaciones.
- **Satoshi:** licencia incluida en `assets/fonts/Satoshi-FFL.txt`.
- **Syne:** licencia SIL Open Font License incluida en `assets/fonts/Syne-OFL.txt`.
- **Fotografía:** Pexels, autor Jonathan Borba (foto 13697729), licencia de uso libre de Pexels. Es una **imagen ilustrativa**: no corresponde a instalaciones ni equipos de HDC.

## Pendientes antes de publicar

- Definir y probar el canal de contacto definitivo del CTA.
- Definir el dominio y completar `canonical`, `og:url`, `og:image` absoluta y `sitemap.xml`.
- Completar los datos legales (`[NIT]`, domicilio, correo, teléfono, horario, dominio y fechas) y obtener revisión jurídica. Ver `LEGAL_DATOS_PENDIENTES.md`.
- Reemplazar `REEMPLAZAR_WEB_APP` en `baja.html` y probar el flujo de baja de punta a punta.
- Aprobar textos, planes, cobertura y la afirmación de QR con hoja de vida en tiempo real.
- Revisar la página en el dominio final (incluido móvil) y confirmar SSL.

El detalle de cada pendiente, su función y un ejemplo están en **`PENDIENTES.txt`**. Los datos y decisiones legales están en **`LEGAL_DATOS_PENDIENTES.md`**.
