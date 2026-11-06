# Datos pendientes y decisiones legales

**Proyecto:** sitio estático de HDC Gestión Biomédica (landing + páginas legales)
**Fecha de este inventario:** 5 de noviembre de 2026
**Estado:** borrador para revisión jurídica. **No publicar** hasta completar los datos y obtener aprobación.

Este documento reúne todo lo que falta para que las páginas legales pasen de borrador a versión publicable. No reemplaza la revisión de un abogado: la señala y la organiza.

---

## 1. Archivos legales creados

| Archivo | Contenido | Estado |
|---|---|---|
| `politica-de-privacidad.html` | Responsable, marco normativo, datos tratados, finalidades, derechos, consultas y reclamos, encargados, seguridad, cookies, menores, RNBD, vigencia | Borrador |
| `terminos-y-condiciones.html` | Identificación, uso permitido, alcance comercial, propiedad intelectual, enlaces, responsabilidad, ley aplicable | Borrador |
| `politica-de-cookies.html` | Qué son, marco normativo, inventario actual, cookies necesarias, terceros, consentimiento, gestión | Borrador |
| `accesibilidad.html` | Compromiso WCAG 2.2 AA, medidas, compatibilidad, limitaciones, canal de reporte | Borrador |
| `assets/css/legal.css` | Hoja de estilos compartida por las cuatro páginas | Listo para revisión |
| `assets/js/legal.js` | Revelado al hacer scroll, barra de progreso y resaltado del índice | Listo para revisión |

Todas las páginas incluyen un aviso visible: **«Documento base para revisión legal»**. Ese aviso debe eliminarse (junto con la clase `.legal-draft`) después de la aprobación.

---

## 2. Datos que debe entregar HDC

Reemplazar cada marcador entre corchetes en las cuatro páginas. Se recomienda hacerlo con una búsqueda global de `legal-placeholder`.

| Marcador | Dónde aparece | Dato que debe reemplazarlo | Responsable |
|---|---|---|---|
| `[NIT]` | Privacidad, Términos | NIT de la persona natural o jurídica responsable | HDC / contador |
| `[ciudad y dirección]` | Privacidad, Términos | Domicilio principal completo | HDC |
| `[dirección de notificaciones]` | Privacidad, Términos, Cookies, Accesibilidad | Dirección física o electrónica para notificaciones judiciales y de datos | HDC / jurídica |
| `[correo de contacto]` | Las cuatro páginas | Buzón atendido para privacidad, accesibilidad y bajas | HDC |
| `[teléfono]` | Las cuatro páginas | Línea de atención con horario real | HDC |
| `[días y horas]` | Las cuatro páginas | Horario de atención | HDC |
| `[dominio oficial]` | Privacidad | Dominio definitivo del sitio | HDC / hosting |
| `[fecha de publicación]` | Las cuatro páginas | Fecha en que la versión entra en vigencia | HDC / jurídica |
| `[fecha de próxima revisión]` | Accesibilidad | Fecha comprometida de revisión | HDC |

### Decisión previa: ¿quién es el responsable?

Antes de completar el NIT y el domicilio hay que confirmar si el responsable es:

1. **HDC Gestión Biomédica** como persona natural, o
2. **Grupo Gess** u otra persona jurídica bajo la cual opera la marca HDC.

La respuesta cambia el NIT, el domicilio, la razón social y la redacción de las cláusulas de responsabilidad. **No inventar ni asumir esta información.**

---

## 3. Decisiones jurídicas que debe confirmar la asesoría

### 3.1. Registro Nacional de Bases de Datos (RNBD)

La política incluye una cláusula que condiciona el registro a los criterios legales. Hay que determinar si HDC está obligada a registrarse ante la SIC según su naturaleza jurídica y el valor de sus activos, y dejar constancia de la decisión.

- [ ] Confirmar si aplica el registro.
- [ ] Si aplica: registrar las bases de datos y anotar el número o fecha.
- [ ] Si no aplica: ajustar la sección 16 para explicar por qué.

### 3.2. Plazos de conservación

La política dice que los datos se conservan «mientras sea necesario» y por los plazos legales. La asesoría debe precisar plazos por tipo de dato:

- [ ] Datos de contacto comercial.
- [ ] Datos de la relación contractual y facturación.
- [ ] Hojas de vida y soportes técnicos de equipos.
- [ ] Registros de acceso a la aplicación.
- [ ] Datos de campañas de email marketing y bajas.

### 3.3. Encargados y transferencias internacionales

La política menciona hosting, correo, nube y plataformas de envío. Hay que identificar los proveedores reales y verificar:

- [ ] Nombre y país de cada proveedor.
- [ ] Si hay transferencia internacional y con qué garantía.
- [ ] Contratos o cláusulas de encargo de tratamiento.
- [ ] Si se usa Google Workspace / Apps Script / Sheets para la campaña, documentar el flujo de datos.

### 3.4. Datos de salud

La política afirma que HDC no solicita ni usa datos clínicos de pacientes. Confirmar que esto es correcto en todos los procesos, incluida la app y las visitas técnicas. Si en algún momento se accede a datos de salud, debe existir un protocolo y una autorización expresa.

- [ ] Validar la afirmación con el equipo técnico y comercial.
- [ ] Definir el procedimiento ante acceso accidental.

### 3.5. Comunicaciones comerciales

- [ ] Confirmar la base de autorización de la base de 35 contactos.
- [ ] Verificar que cada correo incluya el enlace de baja y la identificación del remitente.
- [ ] Definir el procedimiento para bajas verbales o por respuesta al correo.
- [ ] Confirmar que la baja se aplique también a futuras campañas y no solo al envío actual.

### 3.6. Términos y condiciones

- [ ] Confirmar que el sitio no constituye oferta vinculante.
- [ ] Revisar la cláusula de jurisdicción y la remisión a la SIC.
- [ ] Validar la mención de planes, QR y aplicación incluye la redacción exacta de la propuesta comercial.
- [ ] Confirmar los créditos de fotografía y tipografías.

### 3.7. Accesibilidad

- [ ] Validar el nivel de conformidad declarado (WCAG 2.2 AA).
- [ ] Confirmar el canal y el plazo de respuesta para reportes de accesibilidad.
- [ ] Designar a una persona responsable del seguimiento.

---

## 4. Cookies: decisión actual y regla futura

### Situación actual

El sitio es estático y **no instala cookies propias ni de terceros** para analítica, publicidad o perfilamiento. Por eso no se implementó un banner de consentimiento. Esta decisión está documentada en `politica-de-cookies.html`.

### Cuándo se activa el banner

El banner será obligatorio si se incorpora cualquiera de estos elementos:

- Google Analytics, Matomo, Plausible u otra analítica.
- Píxeles de Meta, Google Ads, LinkedIn o TikTok.
- Mapas embebidos, video embebido o chat de terceros.
- Botones sociales que carguen scripts externos.
- Cualquier cookie no estrictamente necesaria.

### Requisitos del banner cuando se implemente

- [ ] Aparecer antes de cargar cookies no necesarias.
- [ ] Permitir aceptar, rechazar y configurar por categoría con la misma facilidad.
- [ ] No preseleccionar categorías opcionales.
- [ ] Recordar la decisión y permitir cambiarla.
- [ ] Registrar la fecha y la versión del consentimiento.
- [ ] Bloquear scripts hasta la aceptación.

**No añadir el banner ahora**: un banner sin cookies que gestionar añade fricción y no mejora el cumplimiento.

---

## 5. Estado de las pantallas de baja de email marketing

**Ya existen y están implementadas** en la landing:

- `baja.html`: confirma la baja con enlace firmado (`id` + `t`) y envía por POST al Web App de Apps Script.
- `baja-gracias.html`: confirma que la solicitud quedó registrada.

### Pendiente para que funcionen en producción

- [ ] Reemplazar `REEMPLAZAR_WEB_APP` en `baja.html` (meta `unsubscribe-endpoint` y `action` del formulario) por la URL `/exec` del Web App.
- [ ] Configurar `UnsubscribeBaseURL` y `UnsubscribeThanksURL` en la hoja `Control`.
- [ ] Publicar el Web App con acceso para cualquier persona.
- [ ] Probar el flujo completo: enlace firmado → confirmación → registro en `Exclusiones` → página de gracias.
- [ ] Probar un enlace inválido o vencido y verificar el mensaje de error.
- [ ] Verificar que la baja se aplique antes del siguiente envío.

Los documentos de marketing ya lo registran como pendiente: «falta publicar la página y probarla».

---

## 6. Coherencia editorial que debe validarse

Las páginas legales describen el servicio con base en el contenido de la landing. Antes de publicar, confirmar estas afirmaciones:

| Afirmación | Dónde | Qué validar |
|---|---|---|
| La aplicación y el QR se incluyen «según el plan» | Términos, Privacidad | Que todos los planes incluyan QR o precisar cuáles |
| «Hoja de vida en tiempo real» | Landing, Términos | Que la app actualice la información en tiempo real y no por lotes |
| «Un QR por equipo» | Landing | Que la identificación física se entregue en la implementación |
| No se venden por separado | Landing, Términos | Que no exista venta independiente de la app |
| Cobertura Arauca, Casanare y Boyacá | Landing, Términos | Vigencia de la cobertura |
| No se usan datos clínicos | Privacidad | Confirmación operativa |

Si alguna afirmación no es exacta, ajustar primero la landing y luego las páginas legales. La política no debe prometer más de lo que el servicio entrega.

---

## 7. Checklist antes de publicar

### Datos
- [ ] NIT, razón social, domicilio y canales de contacto reemplazados.
- [ ] Dominio oficial definido y añadido a `canonical`, `og:url` y a la política.
- [ ] Fechas de vigencia y próxima revisión completadas.

### Revisión jurídica
- [ ] Política de privacidad aprobada.
- [ ] Términos y condiciones aprobados.
- [ ] Política de cookies aprobada.
- [ ] Declaración de accesibilidad aprobada.
- [ ] Decisión sobre RNBD documentada.
- [ ] Plazos de conservación definidos.
- [ ] Encargados y transferencias identificados.

### Implementación
- [ ] Aviso «Documento base para revisión legal» eliminado de las cuatro páginas.
- [ ] Enlaces del pie de la landing probados.
- [ ] Enlaces entre páginas legales probados.
- [ ] Tablas y textos revisados en móvil.
- [ ] Revisión con teclado y lector de pantalla.
- [ ] Sin errores en consola ni recursos 404.
- [ ] `robots.txt` permite indexar las páginas legales.
- [ ] Sitemap actualizado cuando exista el dominio.

### Email marketing
- [ ] Web App publicado y `REEMPLAZAR_WEB_APP` reemplazado.
- [ ] Flujo de baja probado de punta a punta.
- [ ] Enlace de baja incluido en la plantilla del correo.
- [ ] Base de contactos con autorización verificada.

---

## 8. Nota sobre el alcance de este documento

Este inventario no constituye asesoría jurídica. Su función es evitar que se publique una política incompleta o con datos inventados, y dejar trazabilidad de las decisiones que debe tomar HDC.

Mientras los marcadores entre corchetes sigan visibles, el sitio debe considerarse **no publicable**.
