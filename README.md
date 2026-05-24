# Altum Abogados & Asociados - sitio web base

Base HTML/CSS/JS lista para subir a GitHub Pages.

## Archivos principales

- `index.html`: página principal con carrusel, áreas, métricas, acerca de nosotros, publicaciones y noticias.
- `areas.html`: listado de áreas legales.
- `area-detalle.html?id=...`: detalle dinámico de cada área.
- `publicaciones.html`: publicaciones filtrables por categoría y búsqueda.
- `publicacion-detalle.html?id=...`: detalle dinámico de publicación.
- `noticias.html`: noticias/biblioteca filtrable por categoría y búsqueda.
- `noticia-detalle.html?id=...`: detalle dinámico de noticia.
- `equipo.html`: staff con tarjetas y modal.
- `eventos.html`: listado de eventos.
- `evento-detalle.html?id=...`: detalle dinámico de evento.
- `contacto.html`: formulario con validación simple y modal de éxito.

## Cómo editar datos

Edita `assets/js/data.js`:

- `SITE_CONFIG`: nombre del estudio, teléfono, WhatsApp, correo, dirección y redes.
- `AREAS`: áreas legales y detalle de servicios.
- `STAFF`: integrantes del equipo.
- `POSTS`: publicaciones.
- `NEWS`: noticias o biblioteca legal.
- `EVENTS`: eventos académicos o institucionales.

## Cómo publicar en GitHub Pages

1. Crea un repositorio.
2. Sube todos los archivos y carpetas respetando la estructura.
3. En GitHub, entra a Settings > Pages.
4. Selecciona la rama principal y la carpeta raíz.
5. Guarda y espera la URL pública.

## Nota de uso

Esta base reproduce la arquitectura funcional de una web institucional de estudio jurídico: loader, menú, menú móvil, hero slider, cards, filtros, búsqueda, modales, contador animado, detalle por query string, CTA y formulario simulado. No incluye imágenes, logotipos, código propietario ni textos protegidos de terceros.

## Capa artística V2 incorporada

Se añadió una capa visual adicional para acercar la experiencia a una web jurídica premium:

- Barra de progreso de scroll.
- Preloader institucional.
- Hero con carrusel, fondo artístico, luz ambiental y parallax.
- Títulos del hero con entrada por palabras.
- Botones con efecto ripple.
- Tarjetas con profundidad 3D ligera.
- Animación por scroll con blur suave.
- Menú móvil con entrada escalonada.
- Modal de equipo con animación.
- Respeto a `prefers-reduced-motion` para accesibilidad.

Nota: no se incluyen imágenes, textos extensos ni código propietario de la web de referencia. La estructura es editable y funcional para GitHub Pages.

---

## Publicación rápida en GitHub Pages

1. Crear un repositorio nuevo en GitHub.
2. Subir el contenido interno de esta carpeta, no la carpeta completa.
3. Verificar que `index.html` quede en la raíz del repositorio.
4. Ir a `Settings > Pages`.
5. Seleccionar `Deploy from a branch`.
6. Elegir rama `main` y carpeta `/ root`.
7. Guardar y esperar a que GitHub genere la URL pública.

## Archivos principales

- `index.html`: página de inicio.
- `assets/css/styles.css`: diseño visual, colores, tarjetas, responsive y animaciones.
- `assets/js/data.js`: contenido editable del estudio jurídico.
- `assets/js/app.js`: interacciones, carrusel, modales, filtros y animaciones.


PERSONALIZACIÓN ALTUM 2026
- Fuente base: Poppins
- Logos incluidos en assets/img
- Línea gráfica: azul oscuro / dorado / gris institucional
- Contacto principal: +51 989 245 203
- Correo: servicioslegales.altumlumen@gmail.com


Se incluyó un paquete de imágenes hiperrealistas en assets/img. Ver MAPA_DE_IMAGENES.txt


ACTUALIZACIÓN FINAL: se añadieron retratos realistas del equipo en assets/img y se integraron al módulo de Equipo.


VERSIÓN V2 REALISTA
- Se reemplazaron varias imágenes por escenas más reales y menos futuristas.
- Se optimizaron a formato WEBP con tope aproximado menor a 1 MB por imagen en la mayoría de casos.
- Ver MAPA_DE_IMAGENES.txt para detalle.


ACTUALIZACIÓN SERVICIOS V3
- Se habilitaron únicamente las ramas indicadas: Penal, Civil, Inmobiliario y Registral, Constitucional, Administrativo, Laboral, Administración Pública, Contrataciones del Estado y Electoral.
- Se añadió simbología sobria por cada rama.
- Se conservaron estructura, diseño base y línea gráfica.
