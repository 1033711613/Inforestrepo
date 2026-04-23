/* ============================================
   InfoRestrepo – Lógica principal
   UNAD · Proyecto de Grado 2026
   ============================================ */

/* ========== DATOS DE OPORTUNIDADES ========== */
const opportunities = [
  {
    id: 1,
    category: "laboral",
    title: "Auxiliar de Bodega y Logística",
    description: "Se requiere personal para manejo de inventarios, cargue y descargue de mercancía en almacén del sector Restrepo. Turnos rotativos. Se ofrece contrato a término fijo.",
    entity: "Almacenes Restrepo S.A.S.",
    location: "Barrio Restrepo, Bogotá",
    date: "Cierre: 30 mayo 2026",
    requirements: "Bachillerato, experiencia mínima 6 meses en bodega, disponibilidad de tiempo completo.",
    salary: "$1.400.000 + prestaciones",
    icon: "🏭",
    tag: "Tiempo completo",
    new: true
  },
  {
    id: 2,
    category: "educacion",
    title: "Curso Gratuito: Excel Básico e Intermedio",
    description: "El SENA Centro de Gestión Administrativa ofrece formación virtual en manejo de hojas de cálculo para mejorar competencias laborales. 80 horas certificadas.",
    entity: "SENA – Centro de Gestión Administrativa",
    location: "Virtual / Bogotá",
    date: "Inicio: 10 junio 2026",
    requirements: "Mayor de 18 años, acceso a computador e internet. Registro gratuito en plataforma SENA Sofía Plus.",
    salary: "Gratuito – Certificado SENA",
    icon: "📊",
    tag: "Virtual · Gratuito",
    new: true
  },
  {
    id: 3,
    category: "social",
    title: "Programa Familias en Acción – Inscripciones Abiertas",
    description: "La Alcaldía Mayor de Bogotá abre inscripciones para el programa de transferencias monetarias condicionadas. Apoyo económico para familias con hijos en edad escolar.",
    entity: "Alcaldía Mayor de Bogotá – DPS",
    location: "CADE Restrepo, Bogotá",
    date: "Inscripciones: hasta 15 junio 2026",
    requirements: "Familias en situación de vulnerabilidad con hijos menores de 18 años matriculados en colegios oficiales.",
    salary: "Subsidio mensual variable",
    icon: "🤝",
    tag: "Subsidio",
    new: false
  },
  {
    id: 4,
    category: "convocatoria",
    title: "Beca Jóvenes en Acción – SENA 2026",
    description: "Convocatoria para jóvenes entre 18 y 28 años interesados en acceder a apoyo económico mientras adelantan formación técnica o tecnológica en el SENA.",
    entity: "Prosperidad Social – Gobierno de Colombia",
    location: "Nacional / Bogotá D.C.",
    date: "Cierre: 5 julio 2026",
    requirements: "Jóvenes 18-28 años, matriculados en programa SENA, sin empleo formal, registrado en SISBEN.",
    salary: "Hasta $400.000 mensuales",
    icon: "🎓",
    tag: "Beca",
    new: true
  },
  {
    id: 5,
    category: "laboral",
    title: "Vendedor/a Externo – Sector Calzado",
    description: "Empresa del sector calzado del barrio Restrepo busca vendedores para puntos de venta. Se requiere actitud comercial, buena presentación y manejo básico de dinero.",
    entity: "Calzado Elegance Restrepo",
    location: "Calle 18 Sur, Restrepo",
    date: "Vacante inmediata",
    requirements: "Bachillerato, experiencia en ventas de 3 meses mínimo, disponibilidad fines de semana.",
    salary: "$1.300.000 + comisiones",
    icon: "👟",
    tag: "Vendedor",
    new: false
  },
  {
    id: 6,
    category: "educacion",
    title: "Taller Gratuito: Emprendimiento Digital",
    description: "La Cámara de Comercio de Bogotá ofrece taller presencial para emprendedores del sur de Bogotá. Aprende marketing digital, creación de tienda online y redes sociales para negocios.",
    entity: "Cámara de Comercio de Bogotá",
    location: "Sede Sur, Bogotá",
    date: "25 y 26 de mayo 2026",
    requirements: "Emprendedores con negocio propio o en formación. Traer cédula y cámara fotográfica o celular.",
    salary: "Gratuito – con refrigerio",
    icon: "💡",
    tag: "Presencial · Gratuito",
    new: true
  },
  {
    id: 7,
    category: "social",
    title: "Programa Mi Casa Ya – Vivienda VIS",
    description: "El Gobierno Nacional ofrece subsidio de tasa de interés para adquirir vivienda de interés social. Aplica para nuevos compradores con ingresos hasta 4 SMLV.",
    entity: "Ministerio de Vivienda – Colombia",
    location: "Nacional",
    date: "Programa permanente 2026",
    requirements: "No tener vivienda propia, ingresos hasta 4 SMLV, estar afiliado a caja de compensación.",
    salary: "Subsidio de tasa de interés",
    icon: "🏠",
    tag: "Vivienda",
    new: false
  },
  {
    id: 8,
    category: "laboral",
    title: "Operario/a de Corte – Industria del Cuero",
    description: "Fábrica de marroquinería ubicada en el sector Restrepo necesita operarios para área de corte de cuero. Se ofrece capacitación inicial. Horario de lunes a sábado.",
    entity: "Marroquinería San José Ltda.",
    location: "Barrio Restrepo, Bogotá",
    date: "Vacante inmediata",
    requirements: "Experiencia en corte o conocimientos básicos en marroquinería. Disponibilidad inmediata.",
    salary: "$1.350.000 + auxilio de transporte",
    icon: "✂️",
    tag: "Industria",
    new: false
  },
  {
    id: 9,
    category: "convocatoria",
    title: "Convocatoria: Fondos de Desarrollo Local – Antonio Nariño",
    description: "La Alcaldía Local de Antonio Nariño abre convocatoria para organizaciones comunitarias que quieran desarrollar proyectos de mejoramiento barrial, cultura y deporte.",
    entity: "Alcaldía Local Antonio Nariño",
    location: "Localidad Antonio Nariño, Bogotá",
    date: "Cierre: 20 junio 2026",
    requirements: "Organizaciones comunitarias o juntas de acción comunal con personería jurídica activa.",
    salary: "Hasta $30.000.000 por proyecto",
    icon: "📋",
    tag: "Fondo local",
    new: true
  },
  {
    id: 10,
    category: "educacion",
    title: "Inglés para el Trabajo – SENA Virtual",
    description: "Formación en inglés básico con enfoque laboral. Curso de 60 horas con certificación. Permite mejorar el perfil profesional y acceder a mejores oportunidades de empleo.",
    entity: "SENA – Formación Virtual",
    location: "Virtual",
    date: "Apertura constante",
    requirements: "Mayor de 18 años, acceso a internet. Registro en www.senavirtual.edu.co",
    salary: "Gratuito – Certificado SENA",
    icon: "🌐",
    tag: "Virtual · Certificado",
    new: false
  },
  {
    id: 11,
    category: "social",
    title: "Subsidio de Desempleo – Caja de Compensación",
    description: "Si quedaste sin empleo, puedes acceder al subsidio de desempleo a través de las cajas de compensación familiar. Beneficio temporal mientras buscas nuevo trabajo.",
    entity: "Compensar / Colsubsidio",
    location: "Sedes Bogotá",
    date: "Solicitud permanente",
    requirements: "Haber cotizado mínimo 1 año en los últimos 3 años. Registro en caja de compensación.",
    salary: "Monto según cotización previa",
    icon: "💼",
    tag: "Apoyo económico",
    new: false
  },
  {
    id: 12,
    category: "convocatoria",
    title: "Premio Distrital al Emprendimiento Juvenil 2026",
    description: "La Secretaría de Desarrollo Económico de Bogotá reconoce los mejores proyectos de emprendimiento liderados por jóvenes bogotanos. Ganadores reciben capital semilla y mentoría.",
    entity: "Secretaría de Desarrollo Económico – Bogotá",
    location: "Bogotá D.C.",
    date: "Postulaciones: hasta 30 junio 2026",
    requirements: "Jóvenes de 18 a 30 años con proyecto de emprendimiento en etapa temprana o en operación. Bogotanos.",
    salary: "Capital semilla hasta $15.000.000",
    icon: "🏆",
    tag: "Premio",
    new: true
  }
];

/* ========== ESTADO GLOBAL ========== */
let currentCategory = "todos";
let currentSearch   = "";
let savedItems      = JSON.parse(localStorage.getItem("inforestrepo_saved") || "[]");

/* ========== INICIALIZACIÓN ========== */
document.addEventListener("DOMContentLoaded", () => {
  updateCounts();
  renderOpportunities(opportunities);
  updateTotalStat();
  initNavbar();
  initAnimations();
});

/* ========== NAVBAR ========== */
function initNavbar() {
  window.addEventListener("scroll", () => {
    const nav = document.getElementById("navbar");
    nav.classList.toggle("scrolled", window.scrollY > 20);

    // Update active link
    const sections = ["inicio", "oportunidades", "categorias", "estadisticas", "contacto"];
    sections.forEach(id => {
      const el = document.getElementById(id);
      const link = document.querySelector(`.nav-link[href="#${id}"]`);
      if (!el || !link) return;
      const rect = el.getBoundingClientRect();
      if (rect.top <= 100 && rect.bottom >= 100) {
        document.querySelectorAll(".nav-link").forEach(l => l.classList.remove("active"));
        link.classList.add("active");
      }
    });
  });
}

function toggleMenu() {
  const links = document.getElementById("navLinks");
  links.classList.toggle("open");
}

/* ========== COUNTS ========== */
function updateCounts() {
  const cats = ["todos", "laboral", "educacion", "social", "convocatoria"];
  cats.forEach(cat => {
    const count = cat === "todos"
      ? opportunities.length
      : opportunities.filter(o => o.category === cat).length;
    const el = document.getElementById(`count-${cat}`);
    if (el) el.textContent = count;
  });
}

function updateTotalStat() {
  const el = document.getElementById("totalOps");
  if (el) {
    let n = 0;
    const interval = setInterval(() => {
      n++;
      el.textContent = n;
      if (n >= opportunities.length) clearInterval(interval);
    }, 60);
  }
}

/* ========== FILTER & SEARCH ========== */
function filterCategory(cat) {
  currentCategory = cat;
  currentSearch   = "";
  const searchInput = document.getElementById("searchInput");
  const heroSearch  = document.getElementById("heroSearch");
  if (searchInput) searchInput.value = "";
  if (heroSearch)  heroSearch.value  = "";

  document.querySelectorAll(".category-card").forEach(c => {
    c.classList.toggle("active", c.dataset.cat === cat);
  });

  applyFilters();

  // Scroll to opportunities
  document.getElementById("oportunidades").scrollIntoView({ behavior: "smooth", block: "start" });
}

function searchOpportunities(val) {
  currentSearch = val.trim().toLowerCase();
  // Sync both search inputs
  const si = document.getElementById("searchInput");
  const hs = document.getElementById("heroSearch");
  if (si && si.value !== val) si.value = val;
  if (hs && hs.value !== val) hs.value = val;
  applyFilters();
}

function applyFilters() {
  let filtered = opportunities;

  if (currentCategory !== "todos") {
    filtered = filtered.filter(o => o.category === currentCategory);
  }

  if (currentSearch) {
    filtered = filtered.filter(o =>
      o.title.toLowerCase().includes(currentSearch) ||
      o.description.toLowerCase().includes(currentSearch) ||
      o.entity.toLowerCase().includes(currentSearch) ||
      o.tag.toLowerCase().includes(currentSearch)
    );
  }

  renderOpportunities(filtered);
}

function sortOpportunities(val) {
  let filtered = getFiltered();
  if (val === "nombre") filtered.sort((a, b) => a.title.localeCompare(b.title));
  if (val === "categoria") filtered.sort((a, b) => a.category.localeCompare(b.category));
  renderOpportunities(filtered);
}

function getFiltered() {
  let f = opportunities;
  if (currentCategory !== "todos") f = f.filter(o => o.category === currentCategory);
  if (currentSearch) f = f.filter(o =>
    o.title.toLowerCase().includes(currentSearch) ||
    o.description.toLowerCase().includes(currentSearch)
  );
  return f;
}

function resetFilters() {
  currentCategory = "todos";
  currentSearch   = "";
  document.querySelectorAll(".category-card").forEach(c => c.classList.toggle("active", c.dataset.cat === "todos"));
  const si = document.getElementById("searchInput");
  if (si) si.value = "";
  renderOpportunities(opportunities);
}

/* ========== RENDER ========== */
function renderOpportunities(list) {
  const grid   = document.getElementById("oppsGrid");
  const noRes  = document.getElementById("noResults");

  if (!grid) return;

  if (list.length === 0) {
    grid.innerHTML = "";
    noRes.classList.remove("hidden");
    return;
  }
  noRes.classList.add("hidden");

  grid.innerHTML = list.map((o, i) => `
    <div class="opp-card" style="animation-delay: ${i * 0.06}s" onclick="openDetail(${o.id})">
      <div class="opp-card-header">
        <span class="opp-badge badge-${o.category}">${categoryLabel(o.category)}</span>
        <button class="opp-save ${savedItems.includes(o.id) ? 'saved' : ''}"
          onclick="toggleSave(event, ${o.id})"
          title="${savedItems.includes(o.id) ? 'Guardado' : 'Guardar'}">
          <i class="${savedItems.includes(o.id) ? 'fas' : 'far'} fa-bookmark"></i>
        </button>
      </div>
      <div class="opp-card-body">
        <div class="opp-icon">${o.icon}</div>
        <h3>${o.title}</h3>
        <p>${o.description.substring(0, 120)}...</p>
        <div class="opp-meta">
          <span><i class="fas fa-map-marker-alt"></i>${o.location}</span>
          <span><i class="fas fa-calendar-alt"></i>${o.date}</span>
          ${o.new ? '<span><i class="fas fa-star"></i>Nuevo</span>' : ''}
        </div>
      </div>
      <div class="opp-card-footer">
        <span class="opp-entity"><i class="fas fa-building" style="margin-right:5px;color:var(--blue-bright)"></i>${o.entity}</span>
        <button class="btn-detail" onclick="openDetail(${o.id}); event.stopPropagation()">Ver más</button>
      </div>
    </div>
  `).join("");
}

function categoryLabel(cat) {
  const map = { laboral: "Laboral", educacion: "Educación", social: "Social", convocatoria: "Convocatoria" };
  return map[cat] || cat;
}

/* ========== SAVE / BOOKMARK ========== */
function toggleSave(event, id) {
  event.stopPropagation();
  if (savedItems.includes(id)) {
    savedItems = savedItems.filter(s => s !== id);
    showToast("Oportunidad eliminada de guardados");
  } else {
    savedItems.push(id);
    showToast("✅ Oportunidad guardada exitosamente");
  }
  localStorage.setItem("inforestrepo_saved", JSON.stringify(savedItems));
  applyFilters(); // re-render to update icons
}

/* ========== DETAIL MODAL ========== */
function openDetail(id) {
  const o = opportunities.find(op => op.id === id);
  if (!o) return;

  const content = document.getElementById("detailContent");
  content.innerHTML = `
    <div class="detail-header">
      <div class="detail-badge">
        <span class="opp-badge badge-${o.category}">${categoryLabel(o.category)}</span>
        ${o.new ? '<span class="opp-badge" style="background:#fef3c7;color:#92400e;margin-left:8px">✨ Nuevo</span>' : ''}
      </div>
      <div style="font-size:2.5rem;margin:12px 0">${o.icon}</div>
      <h2>${o.title}</h2>
      <p class="detail-entity"><i class="fas fa-building" style="color:var(--blue-bright);margin-right:6px"></i>${o.entity}</p>
    </div>
    <div class="detail-meta">
      <div class="detail-meta-item"><i class="fas fa-map-marker-alt"></i><span>${o.location}</span></div>
      <div class="detail-meta-item"><i class="fas fa-calendar-alt"></i><span>${o.date}</span></div>
      <div class="detail-meta-item"><i class="fas fa-tag"></i><span>${o.tag}</span></div>
      <div class="detail-meta-item"><i class="fas fa-dollar-sign"></i><span>${o.salary}</span></div>
    </div>
    <div class="detail-section">
      <h4>Descripción</h4>
      <p>${o.description}</p>
    </div>
    <div class="detail-section">
      <h4>Requisitos</h4>
      <p>${o.requirements}</p>
    </div>
    <div class="detail-actions">
      <button class="btn-primary" onclick="showToast('✅ Solicitud de interés registrada')">
        <i class="fas fa-paper-plane"></i> Aplicar / Más info
      </button>
      <button class="btn-outline" onclick="toggleSave(event, ${o.id}); this.innerHTML = '<i class=\\'fas fa-bookmark\\'></i> Guardado'">
        <i class="${savedItems.includes(o.id) ? 'fas' : 'far'} fa-bookmark"></i> 
        ${savedItems.includes(o.id) ? 'Guardado' : 'Guardar'}
      </button>
    </div>
  `;

  openModal("detailModal");
}

/* ========== MODAL HELPERS ========== */
function openModal(id) {
  document.getElementById(id).classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeModal(id) {
  document.getElementById(id).classList.remove("open");
  document.body.style.overflow = "";
}

function closeModalOutside(event, id) {
  if (event.target === document.getElementById(id)) closeModal(id);
}

function switchModal(closeId, openId) {
  closeModal(closeId);
  setTimeout(() => openModal(openId), 150);
}

/* ========== FORM HANDLERS ========== */
function handleLogin(event) {
  event.preventDefault();
  showToast("✅ Sesión iniciada correctamente (modo demo)");
  closeModal("loginModal");
}

function handleRegister(event) {
  event.preventDefault();
  showToast("✅ Cuenta creada exitosamente (modo demo)");
  closeModal("registerModal");
}

function submitContact(event) {
  event.preventDefault();
  showToast("✅ ¡Sugerencia enviada! Gracias por contribuir a tu comunidad");
  event.target.reset();
}

/* ========== TOAST ========== */
function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 3200);
}

/* ========== SCROLL ANIMATIONS ========== */
function initAnimations() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity    = "1";
        entry.target.style.transform  = "translateY(0)";
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll(".category-card, .stat-card, .contact-item").forEach(el => {
    el.style.opacity   = "0";
    el.style.transform = "translateY(24px)";
    el.style.transition = "opacity 0.5s ease, transform 0.5s ease";
    observer.observe(el);
  });
}

/* ========== KEYBOARD ESC ========== */
document.addEventListener("keydown", e => {
  if (e.key === "Escape") {
    ["loginModal", "registerModal", "detailModal"].forEach(id => closeModal(id));
  }
});
