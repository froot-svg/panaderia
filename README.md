# Oh Qué Bueno · Sitio web

Sitio estático con Tailwind CSS (vía CDN). Abre `index.html` en el navegador.

## Qué editar
Todo está en `assets/js/main.js`, bloque `CONFIG`:
- `repoUrl`: link del repositorio del sistema (botón "Repositorio").
- `viveIcUrl`: botón VIVE IC. Con `"#galeria"` baja a las fotos; con un link `https://...` abre esa página.
- `whatsapp`: número principal para pedidos, con código de país (51) y sin espacios.
- `telefonos`: lista de teléfonos que se muestran en la web.
- `correo`, `horario`, `facebook`.

Los textos de Misión, Visión y Valores están en `index.html` (sección `#mision`); son una propuesta, cámbialos por los reales.

## Actualizar el sitio publicado
1. En GitHub, entra al repositorio de la web (`froot-svg/panaderia`).
2. Abre el archivo a cambiar (por ejemplo `assets/js/main.js`) → lápiz (Edit) → pega el contenido nuevo → **Commit changes**.
   Para varios archivos a la vez: **Add file → Upload files**, arrastra los archivos (respeta las carpetas) y haz Commit.
3. En la pestaña **Actions** se ejecuta el despliegue. Cuando aparezca el check verde, la web ya está actualizada (1 a 2 minutos). Si no ves el cambio, recarga con Ctrl + F5.

## Despliegue automático
Cada vez que se sube un cambio a `main`, un flujo de trabajo en `.github/workflows/` publica el sitio en GitHub Pages.
Debe haber **un solo** flujo de publicación en esa carpeta (`static.yml` o `deploy.yml`, no los dos).
En el repositorio: Settings → Pages → Source → **GitHub Actions**.

## Fotos
Están en `assets/img/` (`foto1.jpg` a `foto4.jpg`) con su resolución original. Si cambias una, conserva el mismo nombre.
