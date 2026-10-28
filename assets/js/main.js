/* =========================================================
   CONFIGURACIÓN: edita solo esta parte
   ========================================================= */
const CONFIG = {
  repoUrl: "https://github.com/TU-USUARIO/TU-REPOSITORIO", // <- pon aquí el link de tu repositorio
  viveIcUrl: "#galeria",              // <- botón VIVE IC: "#galeria" baja a las fotos; o pon un link https://... para abrir otra página
  whatsapp: "51999999999",            // <- número con código de país (51 = Perú), sin + ni espacios
  telefono: "+51 999 999 999",        // <- teléfono que se muestra en la web
  correo: "contacto@ejemplo.com",     // <- tu correo
  horario: "Lunes a domingo · 6:00 a. m. – 9:00 p. m.", // <- ajusta tu horario real
  facebook: "#",
  instagram: "#",
  tiktok: "#"
};

/* ---------- Aplicar configuración ---------- */
document.querySelectorAll("[data-repo]").forEach(a => a.href = CONFIG.repoUrl);
document.querySelectorAll("[data-viveic]").forEach(a => {
  a.href = CONFIG.viveIcUrl;
  if (CONFIG.viveIcUrl.startsWith("#")) { a.removeAttribute("target"); a.removeAttribute("rel"); }
});
document.querySelectorAll("[data-tel]").forEach(a => { a.href = "tel:" + CONFIG.telefono.replace(/\s/g, ""); a.textContent = CONFIG.telefono; });
document.querySelectorAll("[data-mail]").forEach(a => { a.href = "mailto:" + CONFIG.correo; a.textContent = CONFIG.correo; });
document.querySelectorAll("[data-wa]").forEach(a => a.href = "https://wa.me/" + CONFIG.whatsapp + "?text=" + encodeURIComponent("Hola, quisiera hacer un pedido en Oh Qué Bueno."));
document.querySelectorAll("[data-horario]").forEach(el => el.textContent = CONFIG.horario);
document.querySelectorAll("[data-social]").forEach(a => a.href = CONFIG[a.dataset.social] || "#");
document.querySelectorAll("[data-year]").forEach(el => el.textContent = new Date().getFullYear());

/* ---------- Menú móvil ---------- */
const btn = document.getElementById("menuBtn");
const menu = document.getElementById("mobileMenu");
btn?.addEventListener("click", () => {
  const open = menu.classList.toggle("hidden") === false;
  btn.setAttribute("aria-expanded", open);
});
menu?.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
  menu.classList.add("hidden"); btn.setAttribute("aria-expanded", "false");
}));

/* ---------- Cabecera que cambia al hacer scroll ---------- */
const header = document.getElementById("header");
const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 24);
onScroll(); window.addEventListener("scroll", onScroll, { passive: true });

/* ---------- Formulario → WhatsApp ---------- */
document.getElementById("pedidoForm")?.addEventListener("submit", e => {
  e.preventDefault();
  const f = new FormData(e.target);
  const msg = `Hola, soy ${f.get("nombre")}. ${f.get("mensaje")}`;
  window.open("https://wa.me/" + CONFIG.whatsapp + "?text=" + encodeURIComponent(msg), "_blank", "noopener");
});

/* ---------- Pestañas Misión / Visión / Valores ---------- */
const tabs = document.querySelectorAll("[role=tab]");
tabs.forEach(t => t.addEventListener("click", () => {
  tabs.forEach(x => { x.setAttribute("aria-selected", x === t); });
  document.querySelectorAll("[role=tabpanel]").forEach(p => p.hidden = p.id !== t.getAttribute("aria-controls"));
}));

/* ---------- Revelado suave del bloque de datos (una sola vez) ---------- */
const io = new IntersectionObserver(es => es.forEach(e => {
  if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
}), { threshold: .25 });
document.querySelectorAll(".reveal").forEach(el => io.observe(el));
