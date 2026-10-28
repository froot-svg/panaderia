# Oh Qué Bueno · Sitio web

Sitio estático con Tailwind CSS (vía CDN). Abre `index.html` en el navegador.

## Qué editar
Todo está en `assets/js/main.js`, bloque `CONFIG`:
- `repoUrl`: link de tu repositorio de GitHub (botón "Repositorio").
- `viveIcUrl`: link del botón VIVE IC.
- `whatsapp`, `telefono`, `correo`, `horario`, redes sociales.

Los textos de Misión, Visión y Valores están en `index.html` (sección `#mision`); son una propuesta, cámbialos por los reales.

## Publicar en GitHub Pages
Sube estos archivos a tu repositorio → Settings → Pages → Deploy from branch → `main` / root.

## Fotos
Están en `assets/img/` (`foto1.jpg` a `foto4.jpg`) con su resolución original. Si cambias una, conserva el mismo nombre.

## Despliegue automático
`.github/workflows/deploy.yml` publica el sitio en GitHub Pages cada vez que subes cambios a `main`.
En el repositorio: Settings → Pages → Source → **GitHub Actions**.
