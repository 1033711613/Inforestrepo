/* ============================================
   InfoRestrepo v2 – Lógica principal
   UNAD · Proyecto de Grado 2026
   ============================================ */

/* ========== DATOS ========== */
const opportunities = [
  {
    id: 1, category: "laboral",
    title: "Auxiliar de Bodega y Logística",
    description: "Se requiere personal para manejo de inventarios, cargue y descargue de mercancía en almacén del sector Restrepo. Turnos rotativos. Contrato a término fijo.",
    entity: "Almacenes Restrepo S.A.S.",
    location: "Barrio Restrepo, Bogotá",
    date: "Cierre: 30 mayo 2026",
    requirements: "Bachillerato, experiencia mínima 6 meses en bodega, disponibilidad tiempo completo.",
    salary: "$1.400.000 + prestaciones",
    icon: "🏭", tag: "Tiempo completo", new: true
  },
  {
    id: 2, category: "educacion",
    title: "Curso Gratuito: Excel Básico e Intermedio",
    description: "El SENA Centro de Gestión Administrativa ofrece formación virtual en manejo de hojas de cálculo para mejorar competencias laborales. 80 horas certificadas.",
    entity: "SENA – Centro de Gestión Administrativa",
    location: "Virtual / Bogotá",
    date: "Inicio: 10 junio 2026",
    requirements: "Mayor de 18 años, acceso a computador e internet. Registro gratuito en plataforma SENA Sofía Plus.",
    salary: "Gratuito – Certificado SENA",
    icon: "📊", tag: "Virtual · Gratuito", new: true
  },
  {
    id: 3, category: "social",
    title: "Programa Familias en Acción – Inscripciones",
    description: "La Alcaldía Mayor de Bogotá abre inscripciones para el programa de transferencias monetarias condicionadas. Apoyo económico para familias con hijos en edad escolar.",
    entity: "Alcaldía Mayor de Bogotá – DPS",
    location: "CADE Restrepo, Bogotá",
    date: "Hasta: 15 junio 2026",
    requirements: "Familias en situación de vulnerabilidad con hijos menores de 18 años matriculados en colegios oficiales.",
    salary: "Subsidio mensual variable",
    icon: "🤝", tag: "Subsidio", new: false
  },
  {
    id: 4, category: "convocatoria",
    title: "Beca Jóvenes en Acción – SENA 2026",
    description: "Convocatoria para jóvenes entre 18 y 28 años interesados en acceder a apoyo económico mientras adelantan formación técnica o tecnológica en el SENA.",
    entity: "Prosperidad Social – Gobierno de Colombia",
    location: "Nacional / Bogotá D.C.",
    date: "Cierre: 5 julio 2026",
    requirements: "Jóvenes 18–28 años, matriculados en SENA, sin empleo formal, registrado en SISBEN.",
    salary: "Hasta $400.000 mensuales",
    icon: "🎓", tag: "Beca", new: true
  },
  {
    id: 5, category: "laboral",
    title: "Vendedor/a Externo – Sector Calzado",
    description: "Empresa del sector calzado del barrio Restrepo busca vendedores para puntos de venta. Actitud comercial, buena presentación y manejo básico de dinero.",
    entity: "Calzado Elegance Restrepo",
    location: "Calle 18 Sur, Restrepo",
    date: "Vacante inmediata",
    requirements: "Bachillerato, experiencia en ventas mínimo 3 meses, disponibilidad fines de semana.",
    salary: "$1.300.000 + comisiones",
    icon: "👟", tag: "Vendedor", new: false
  },
  {
    id: 6, category: "educacion",
    title: "Taller Gratuito: Emprendimiento Digital",
    description: "La Cámara de Comercio de Bogotá ofrece taller presencial para emprendedores del sur de Bogotá. Marketing digital, tienda online y redes sociales para negocios.",
    entity: "Cámara de Comercio de Bogotá",
    location: "Sede Sur, Bogotá",
    date: "25 y 26 de mayo 2026",
    requirements: "Emprendedores con negocio propio o en formación. Traer cédula y celular.",
    salary: "Gratuito – con refrigerio",
    icon: "💡", tag: "Presencial · Gratuito", new: true
  },
  {
    id: 7, category: "social",
    title: "Programa Mi Casa Ya – Vivienda VIS",
    description: "El Gobierno Nacional ofrece subsidio de tasa de interés para adquirir vivienda de interés social. Aplica para nuevos compradores con ingresos hasta 4 SMLV.",
    entity: "Ministerio de Vivienda – Colombia",
    location: "Nacional",
    date: "Programa permanente 2026",
    requirements: "No tener vivienda propia, ingresos hasta 4 SMLV, afiliado a caja de compensación.",
    salary: "Subsidio de tasa de interés",
    icon: "🏠", tag: "Vivienda", new: false
  },
  {
    id: 8, category: "laboral",
    title: "Operario/a de Corte – Industria del Cuero",
    description: "Fábrica de marroquinería ubicada en el sector Restrepo necesita operarios para área de corte de cuero. Capacitación inicial incluida. Lunes a sábado.",
    entity: "Marroquinería San José Ltda.",
    location: "Barrio Restrepo, Bogotá",
    date: "Vacante inmediata",
    requirements: "Experiencia en corte o conocimientos básicos en marroquinería. Disponibilidad inmediata.",
    salary: "$1.350.000 + auxilio transporte",
    icon: "✂️", tag: "Industria", new: false
  },
  {
    id: 9, category: "convocatoria",
    title: "Fondos de Desarrollo Local – Antonio Nariño",
    description: "La Alcaldía Local de Antonio Nariño abre convocatoria para organizaciones comunitarias que desarrollen proyectos de mejoramiento barrial, cultura y deporte.",
    entity: "Alcaldía Local Antonio Nariño",
    location: "Localidad Antonio Nariño, Bogotá",
    date: "Cierre: 20 junio 2026",
    requirements: "Organizaciones comunitarias o JAC con personería jurídica activa.",
    salary: "Hasta $30.000.000 por proyecto",
    icon: "📋", tag: "Fondo local", new: true
  },
  {
    id: 10, category: "educacion",
    title: "Inglés para el Trabajo – SENA Virtual",
    description: "Formación en inglés básico con enfoque laboral. Curso de 60 horas con certificación. Mejora tu perfil profesional y accede a mejores oportunidades.",
    entity: "SENA – Formación Virtual",
    location: "Virtual",
    date: "Apertura constante",
    requirements: "Mayor de 18 años, acceso a internet. Registro en www.senavirtual.edu.co",
    salary: "Gratuito – Certificado SENA",
    icon: "🌐", tag: "Virtual · Certificado", new: false
  },
  {
    id: 11, category: "social",
    title: "Subsidio de Desempleo – Caja de Compensación",
    description: "Si quedaste sin empleo, accede al subsidio de desempleo a través de las cajas de compensación familiar. Beneficio temporal mientras buscas trabajo.",
    entity: "Compensar / Colsubsidio",
    location: "Sedes Bogotá",
    date: "Solicitud permanente",
    requirements: "Haber cotizado mínimo 1 año en los últimos 3 años. Registro en caja de compensación.",
    salary: "Monto según cotización previa",
    icon: "💼", tag: "Apoyo económico", new: false
  },
  {
    id: 12, category: "convocatoria",
    title: "Premio Distrital al Emprendimiento Juvenil 2026",
    description: "La Secretaría de Desarrollo Económico de Bogotá reconoce los mejores proyectos de emprendimiento liderados por jóvenes bogotanos. Capital semilla y mentoría.",
    entity: "Secretaría de Desarrollo Económico – Bogotá",
    location: "Bogotá D.C.",
    date: "Postulaciones hasta: 30 junio 2026",
    requirements: "Jóvenes 18–30 años con proyecto de emprendimiento en etapa temprana o en operación.",
    salary: "Capital semilla hasta $15.000.000",
    icon: "🏆", tag: "Premio", new: true
  }
];

/* ========== ESTADO ========== */
let currentCategory = "todos";
let currentSearch   = "";
let savedItems      = JSON.parse(localStorage.getItem("inforestrepo_saved") || "[]");

/* ========== INIT ========== */
document.addEventListener("DOMContentLoaded", () => {
  updateCounts();
  renderOpportunities(opportunities);
  animateTotalCounter();
  initNavbar();
  initScrollAnimations();
});

/* ========== NAVBAR ========== */
function initNavbar() {
  window.addEventListener("scroll", () => {
    document.getElementById("navbar").classList.toggle("scrolled", window.scrollY > 30);
    updateActiveLink();
  });
}

function updateActiveLink() {
  const sections = ["inicio","categorias","oportunidades","estadisticas","contacto"];
  sections.forEach(id => {
    const el   = document.getElementById(id);
    const link = document.querySelector(`.nav-link[href="#${id}"]`);
    if (!el || !link) return;
    const rect = el.getBoundingClientRect();
    if (rect.top <= 120 && rect.bottom >= 120) {
      document.querySelectorAll(".nav-link").forEach(l => l.classList.remove("active"));
      link.classList.add("active");
    }
  });
}

function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("open");
}

/* ========== COUNTS ========== */
function updateCounts() {
  ["todos","laboral","educacion","social","convocatoria"].forEach(cat => {
    const n = cat === "todos"
      ? opportunities.length
      : opportunities.filter(o => o.category === cat).length;
    const el = document.getElementById(`count-${cat}`);
    if (el) el.textContent = n;
  });
}

function animateTotalCounter() {
  const el = document.getElementById("totalOps");
  if (!el) return;
  let n = 0;
  const interval = setInterval(() => {
    n++;
    el.textContent = n;
    if (n >= opportunities.length) clearInterval(interval);
  }, 80);
}

/* ========== FILTERS ========== */
function filterCategory(cat) {
  currentCategory = cat;
  currentSearch   = "";
  ["searchInput","heroSearch"].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.value = "";
  });
  document.querySelectorAll(".category-card").forEach(c => {
    c.classList.toggle("active", c.dataset.cat === cat);
  });
  applyFilters();
  document.getElementById("oportunidades").scrollIntoView({ behavior: "smooth", block: "start" });
}

function searchOpportunities(val) {
  currentSearch = val.trim().toLowerCase();
  ["searchInput","heroSearch"].forEach(id => {
    const el = document.getElementById(id);
    if (el && el.value !== val) el.value = val;
  });
  applyFilters();
}

function applyFilters() {
  let filtered = opportunities;
  if (currentCategory !== "todos") filtered = filtered.filter(o => o.category === currentCategory);
  if (currentSearch) filtered = filtered.filter(o =>
    o.title.toLowerCase().includes(currentSearch) ||
    o.description.toLowerCase().includes(currentSearch) ||
    o.entity.toLowerCase().includes(currentSearch) ||
    o.tag.toLowerCase().includes(currentSearch)
  );
  renderOpportunities(filtered);
}

function sortOpportunities(val) {
  let filtered = getFiltered();
  if (val === "nombre")    filtered.sort((a,b) => a.title.localeCompare(b.title));
  if (val === "categoria") filtered.sort((a,b) => a.category.localeCompare(b.category));
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
  document.querySelectorAll(".category-card").forEach(c =>
    c.classList.toggle("active", c.dataset.cat === "todos")
  );
  ["searchInput","heroSearch"].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.value = "";
  });
  renderOpportunities(opportunities);
}

/* ========== RENDER ========== */
const catLabel = { laboral:"Laboral", educacion:"Educación", social:"Social", convocatoria:"Convocatoria" };

function renderOpportunities(list) {
  const grid  = document.getElementById("oppsGrid");
  const noRes = document.getElementById("noResults");
  if (!grid) return;

  if (list.length === 0) {
    grid.innerHTML = "";
    noRes.classList.remove("hidden");
    return;
  }
  noRes.classList.add("hidden");

  grid.innerHTML = list.map((o, i) => `
    <div class="opp-card" style="animation-delay:${i * 0.07}s" onclick="openDetail(${o.id})">
      <div class="opp-card-top top-${o.category}"></div>
      <div class="opp-card-inner">
        <div class="opp-card-header">
          <span class="opp-badge badge-${o.category}">${catLabel[o.category]}</span>
          <button class="opp-save ${savedItems.includes(o.id) ? 'saved' : ''}"
            onclick="toggleSave(event,${o.id})"
            title="${savedItems.includes(o.id) ? 'Guardado' : 'Guardar'}">
            <i class="${savedItems.includes(o.id) ? 'fas' : 'far'} fa-bookmark"></i>
          </button>
        </div>
        <div class="opp-icon-wrap wrap-${o.category}">
          ${o.icon}
          ${o.new ? '<span class="opp-new-badge">Nuevo</span>' : ''}
        </div>
        <h3>${o.title}</h3>
        <p>${o.description.substring(0,115)}...</p>
        <div class="opp-meta">
          <span class="opp-meta-item"><i class="fas fa-map-marker-alt"></i>${o.location}</span>
          <span class="opp-meta-item"><i class="fas fa-calendar-alt"></i>${o.date}</span>
          <span class="opp-meta-item"><i class="fas fa-tag"></i>${o.tag}</span>
        </div>
        <div class="opp-card-footer">
          <span class="opp-entity"><i class="fas fa-building"></i>${o.entity}</span>
          <button class="btn-detail" onclick="openDetail(${o.id});event.stopPropagation()">
            Ver más <i class="fas fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </div>
  `).join("");
}

/* ========== SAVE ========== */
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
  applyFilters();
}

/* ========== DETAIL MODAL ========== */
function openDetail(id) {
  const o = opportunities.find(op => op.id === id);
  if (!o) return;
  document.getElementById("detailContent").innerHTML = `
    <div class="opp-card-top top-${o.category}" style="margin:-44px -44px 24px;height:8px;border-radius:24px 24px 0 0"></div>
    <div class="detail-header">
      <div class="detail-badge">
        <span class="opp-badge badge-${o.category}">${catLabel[o.category]}</span>
        ${o.new ? '<span class="opp-badge" style="background:#dbeafe;color:#1e40af">✨ Nuevo</span>' : ''}
      </div>
      <div style="font-size:3rem;margin:14px 0 10px">${o.icon}</div>
      <h2>${o.title}</h2>
      <p class="detail-entity"><i class="fas fa-building"></i>${o.entity}</p>
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
      <button class="btn-outline" onclick="toggleSave(event,${o.id})">
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
  setTimeout(() => openModal(openId), 160);
}

/* ========== FORMS ========== */
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
  setTimeout(() => toast.classList.remove("show"), 3400);
}

/* ========== SCROLL ANIMATIONS ========== */
function initScrollAnimations() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity   = "1";
        entry.target.style.transform = "translateY(0)";
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll(".category-card, .stat-card, .contact-item").forEach((el, i) => {
    el.style.opacity    = "0";
    el.style.transform  = "translateY(28px)";
    el.style.transition = `opacity 0.55s ease ${i * 0.07}s, transform 0.55s ease ${i * 0.07}s`;
    observer.observe(el);
  });
}

/* ========== KEYBOARD ========== */
document.addEventListener("keydown", e => {
  if (e.key === "Escape")
    ["loginModal","registerModal","detailModal"].forEach(id => closeModal(id));
});
