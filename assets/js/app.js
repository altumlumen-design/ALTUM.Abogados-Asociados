/* =========================================================
   Interacciones del sitio: menú, carrusel, filtros, modales,
   contadores, detalles dinámicos y formulario.
   ========================================================= */
const $ = (selector, scope=document) => scope.querySelector(selector);
const $$ = (selector, scope=document) => [...scope.querySelectorAll(selector)];

function cfg(){ return window.SITE_CONFIG; }
function areaById(id){ return window.AREAS.find(a => a.id === id) || window.AREAS[0]; }
function postById(id){ return window.POSTS.find(p => p.id === id) || window.POSTS[0]; }
function newsById(id){ return window.NEWS.find(p => p.id === id) || window.NEWS[0]; }
function eventById(id){ return window.EVENTS.find(e => e.id === id) || window.EVENTS[0]; }
function getParam(name){ return new URLSearchParams(location.search).get(name); }
function initialsFromName(name){ return name.split(' ').filter(Boolean).slice(0,2).map(x=>x[0]).join('').toUpperCase(); }
function waLink(text='Hola, solicito asesoría legal.'){ return `https://wa.me/${cfg().whatsapp}?text=${encodeURIComponent(text)}`; }

function applyConfig(){
  document.title = document.title.replaceAll('Altum Abogados', cfg().shortName);
  $$('[data-firm]').forEach(el => el.textContent = cfg().firmName);
  $$('[data-short]').forEach(el => el.textContent = cfg().shortName);
  $$('[data-phone]').forEach(el => el.textContent = cfg().phone);
  $$('[data-email]').forEach(el => el.textContent = cfg().email);
  $$('[data-address]').forEach(el => el.textContent = cfg().address);
  $$('[data-wa]').forEach(el => el.setAttribute('href', waLink(el.dataset.wa || 'Hola, solicito asesoría legal.')));
  $$('[data-map]').forEach(el => el.setAttribute('href', cfg().mapUrl));
}

function headerBehavior(){
  const header = $('.site-header');
  const update = () => header && header.classList.toggle('scrolled', window.scrollY > 24);
  window.addEventListener('scroll', update); update();
  const page = document.body.dataset.page;
  $$(`.nav-links a[data-nav], .mobile-panel a[data-nav]`).forEach(a => { if(a.dataset.nav === page) a.classList.add('active'); });
}

function mobileMenu(){
  const panel = $('.mobile-panel');
  $('.menu-toggle')?.addEventListener('click', () => panel.classList.add('open'));
  $('.close-menu')?.addEventListener('click', () => panel.classList.remove('open'));
  $$('.mobile-panel a').forEach(a => a.addEventListener('click', () => panel.classList.remove('open')));
}

function preloader(){
  const loader = $('.preloader');
  setTimeout(() => loader?.classList.add('hidden'), 450);
}

function revealOnScroll(){
  const items = $$('.reveal');
  if(!items.length) return;
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => { if(e.isIntersecting){ e.target.classList.add('visible'); io.unobserve(e.target); } });
  }, {threshold:.16});
  items.forEach(i => io.observe(i));
}

function heroSlider(){
  const slides = $$('.slide');
  const dots = $$('.dot');
  if(!slides.length) return;
  let index = 0;
  const show = (i) => {
    index = i % slides.length;
    slides.forEach((s, k) => s.classList.toggle('active', k === index));
    dots.forEach((d, k) => d.classList.toggle('active', k === index));
  };
  dots.forEach((d,k) => d.addEventListener('click', () => show(k)));
  setInterval(() => show(index + 1), 6500);
}

function counters(){
  const nums = $$('.stat-number[data-count]');
  if(!nums.length) return;
  const animate = (el) => {
    const target = +el.dataset.count;
    const suffix = el.dataset.suffix || '';
    const duration = 1200;
    const start = performance.now();
    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      el.textContent = Math.round(target * progress) + suffix;
      if(progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => { if(e.isIntersecting){ animate(e.target); io.unobserve(e.target); } });
  }, {threshold:.5});
  nums.forEach(n => io.observe(n));
}

function areaCard(area){
  return `<article class="card area-card image-${area.image} reveal">
    <div class="inner">
      <small>${area.kicker}</small>
      <h3>${area.title}</h3>
      <p>${area.excerpt}</p>
      <a class="link-arrow" href="area-detalle.html?id=${area.id}">Ver detalle</a>
    </div>
  </article>`;
}
function renderAreas(limit){
  const target = $('[data-render="areas"]');
  if(!target) return;
  target.innerHTML = window.AREAS.slice(0, limit || window.AREAS.length).map(areaCard).join('');
  revealOnScroll();
}
function renderAreaDetail(){
  const target = $('[data-render="area-detail"]');
  if(!target) return;
  const area = areaById(getParam('id'));
  $('[data-page-title]').textContent = area.title;
  $('[data-page-kicker]').textContent = area.kicker;
  target.innerHTML = `<div class="detail-layout">
    <article class="detail-content">
      <p class="eyebrow">${area.kicker}</p>
      <h2>${area.title}</h2>
      <p>${area.excerpt}</p>
      ${area.details.map(d => `<h3>${d.title}</h3><p>${d.text}</p>`).join('')}
    </article>
    <aside class="sidebar-card">
      <h3>Solicita una evaluación</h3>
      <p>Podemos revisar el caso, ordenar documentación y proponer una estrategia inicial.</p>
      <ul>${window.AREAS.slice(0,5).map(a => `<li><a href="area-detalle.html?id=${a.id}">${a.title}</a></li>`).join('')}</ul>
      <a class="btn btn-primary" data-wa href="${waLink('Hola, solicito asesoría en ' + area.title)}">Solicitar asesoría</a>
    </aside>
  </div>`;
}

function renderPosts(type='posts'){
  const target = $(`[data-render="${type}"]`);
  if(!target) return;
  const source = type === 'news' ? window.NEWS : window.POSTS;
  const detailPage = type === 'news' ? 'noticia-detalle.html' : 'publicacion-detalle.html';
  const categories = ['Todos', ...new Set(source.map(p => p.type))];
  const filterWrap = $('[data-filters]');
  const search = $('[data-search]');
  let active = 'Todos';
  const drawFilters = () => {
    if(filterWrap) filterWrap.innerHTML = categories.map(c => `<button class="filter-btn ${c===active?'active':''}" data-filter="${c}">${c}</button>`).join('') + (search ? '' : '');
    $$('[data-filter]').forEach(btn => btn.addEventListener('click', () => { active = btn.dataset.filter; draw(); }));
  };
  const draw = () => {
    drawFilters();
    const q = (search?.value || '').toLowerCase();
    const items = source.filter(p => (active === 'Todos' || p.type === active) && (!q || (p.title + p.excerpt + p.type).toLowerCase().includes(q)));
    target.innerHTML = items.length ? items.map(p => `<article class="card post-card reveal">
      <div class="post-meta"><span>${p.type}</span><span>•</span><span>${p.date}</span></div>
      <h3>${p.title}</h3>
      <p>${p.excerpt}</p>
      <a class="link-arrow" href="${detailPage}?id=${p.id}">${type==='news'?'Descargar / ver':'Ver detalle'}</a>
    </article>`).join('') : `<div class="empty-state">No se encontraron resultados</div>`;
    revealOnScroll();
  };
  search?.addEventListener('input', draw);
  draw();
}
function renderPublicationDetail(kind='post'){
  const target = $('[data-render="publication-detail"]');
  if(!target) return;
  const item = kind === 'news' ? newsById(getParam('id')) : postById(getParam('id'));
  $('[data-page-title]').textContent = item.title;
  $('[data-page-kicker]').textContent = item.type;
  target.innerHTML = `<div class="detail-layout">
    <article class="detail-content">
      <p class="eyebrow">${item.type} · ${item.date}</p>
      <h2>${item.title}</h2>
      <p>${item.excerpt}</p>
      <h3>Desarrollo</h3>
      <p>${item.body || 'Ficha editable para ampliar contenido, adjuntar archivo, agregar sumilla o colocar enlace de descarga.'}</p>
    </article>
    <aside class="sidebar-card">
      <h3>${kind==='news'?'Biblioteca legal':'Publicaciones recientes'}</h3>
      <p>Actualiza estos contenidos desde <strong>assets/js/data.js</strong>.</p>
      <a class="btn btn-primary" href="${kind==='news'?'noticias.html':'publicaciones.html'}">Volver al listado</a>
    </aside>
  </div>`;
}

function renderTeam(){
  const target = $('[data-render="team"]');
  if(!target) return;
  target.innerHTML = window.STAFF.map(p => `<article class="team-card reveal" data-staff="${p.id}">
    <div class="avatar">${p.image || initialsFromName(p.name)}</div>
    <div class="team-info"><h3>${p.name}</h3><p>${p.role}</p><p>${p.area}</p></div>
  </article>`).join('');
  $$('[data-staff]').forEach(card => card.addEventListener('click', () => openStaff(card.dataset.staff)));
  revealOnScroll();
}
function openStaff(id){
  const p = window.STAFF.find(x => x.id === id);
  const modal = $('#staff-modal');
  if(!p || !modal) return;
  $('.modal-avatar', modal).textContent = p.image || initialsFromName(p.name);
  $('.modal-info', modal).innerHTML = `<h3>${p.name}</h3><p><strong>${p.role}</strong></p><p>${p.area}</p><h4>Idiomas:</h4><div class="tag-list">${p.languages.map(x=>`<span class="tag">${x}</span>`).join('')}</div><h4>Biografía:</h4><p>${p.bio}</p><h4>Formación / enfoque:</h4><div class="tag-list">${p.education.map(x=>`<span class="tag">${x}</span>`).join('')}</div>`;
  modal.classList.add('open');
}
function staffModal(){
  const modal = $('#staff-modal');
  if(!modal) return;
  $('.modal-close', modal)?.addEventListener('click', () => modal.classList.remove('open'));
  modal.addEventListener('click', e => { if(e.target === modal) modal.classList.remove('open'); });
  document.addEventListener('keydown', e => { if(e.key === 'Escape') modal.classList.remove('open'); });
}

function renderEvents(){
  const target = $('[data-render="events"]');
  if(!target) return;
  target.innerHTML = window.EVENTS.map(e => `<article class="card post-card reveal">
    <div class="post-meta"><span>${e.status}</span><span>•</span><span>${e.date}</span></div>
    <h3>${e.title}</h3><p>${e.excerpt}</p>
    <a class="link-arrow" href="evento-detalle.html?id=${e.id}">Ver detalle</a>
  </article>`).join('');
  revealOnScroll();
}
function renderEventDetail(){
  const target = $('[data-render="event-detail"]');
  if(!target) return;
  const e = eventById(getParam('id'));
  $('[data-page-title]').textContent = e.title;
  $('[data-page-kicker]').textContent = e.date;
  target.innerHTML = `<div class="event-hero-card">
    <div class="post-meta"><span>${e.status}</span><span>•</span><span>${e.hours}</span></div>
    <h2>${e.title}</h2>
    <p>${e.excerpt}</p>
    <div class="benefits">${e.benefits.map(b=>`<div class="benefit">✓ ${b}</div>`).join('')}</div>
  </div>
  <section class="section"><div class="wrap detail-layout">
    <article class="detail-content">
      <h3>Certificación</h3><p>${e.certification}</p>
      <h3>Fechas y duración</h3><ul>${e.schedule.map(x=>`<li>${x}</li>`).join('')}</ul>
      <h3>Temario</h3><ul>${e.topics.map(x=>`<li>${x}</li>`).join('')}</ul>
      <h3>Ponentes</h3><ul>${e.speakers.map(x=>`<li>${x}</li>`).join('')}</ul>
      <h3>Costo</h3><p>${e.price}</p>
    </article>
    <aside class="sidebar-card"><h3>Inscríbete vía WhatsApp</h3><p>Solicita información, medios de pago y confirmación de vacante.</p><a class="btn btn-primary" href="${waLink(e.whatsappText)}">Inscribirme</a></aside>
  </div></section>`;
}

function contactForm(){
  const form = $('#contact-form');
  const modal = $('#success-modal');
  if(!form) return;
  form.addEventListener('submit', e => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(form).entries());
    if(!data.nombre || !data.telefono || !data.email){
      alert('Completa nombres, teléfono y correo electrónico.');
      return;
    }
    modal?.classList.add('open');
    form.reset();
  });
  modal?.addEventListener('click', e => { if(e.target === modal || e.target.matches('[data-close]')) modal.classList.remove('open'); });
}

function init(){
  applyConfig();
  preloader();
  headerBehavior();
  mobileMenu();
  heroSlider();
  counters();
  revealOnScroll();
  renderAreas(document.body.dataset.page === 'inicio' ? 6 : undefined);
  renderAreaDetail();
  renderPosts('posts');
  renderPosts('news');
  renderPublicationDetail(document.body.dataset.page === 'noticia-detalle' ? 'news' : 'post');
  renderTeam();
  staffModal();
  renderEvents();
  renderEventDetail();
  contactForm();
}

document.addEventListener('DOMContentLoaded', init);

/* =========================================================
   CAPA ARTÍSTICA V2 — INTERACCIONES TRANSVERSALES
   ========================================================= */
(function(){
  function q(sel, root=document){ return root.querySelector(sel); }
  function qa(sel, root=document){ return [...root.querySelectorAll(sel)]; }

  function injectMotionLayer(){
    if(!q('.scroll-progress')){
      const bar = document.createElement('div');
      bar.className = 'scroll-progress';
      document.body.prepend(bar);
    }
    if(!q('.cursor-aura')){
      const aura = document.createElement('div');
      aura.className = 'cursor-aura';
      document.body.appendChild(aura);
    }
  }

  function progressBar(){
    const bar = q('.scroll-progress');
    if(!bar) return;
    const update = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      const pct = max > 0 ? (doc.scrollTop / max) * 100 : 0;
      bar.style.width = pct + '%';
    };
    window.addEventListener('scroll', update, {passive:true});
    update();
  }

  function pointerAura(){
    const aura = q('.cursor-aura');
    if(!aura || matchMedia('(pointer: coarse)').matches) return;
    document.body.classList.add('has-pointer');
    let x = innerWidth/2, y = innerHeight/2, tx=x, ty=y;
    window.addEventListener('mousemove', e => { tx = e.clientX; ty = e.clientY; }, {passive:true});
    const loop = () => {
      x += (tx - x) * .12;
      y += (ty - y) * .12;
      aura.style.left = x + 'px';
      aura.style.top = y + 'px';
      requestAnimationFrame(loop);
    };
    loop();
  }

  function parallaxHero(){
    const art = q('.hero-art');
    const pillar = q('.hero-art .pillar');
    if(!art) return;
    let ticking = false;
    const update = () => {
      const y = window.scrollY || 0;
      art.style.transform = `translateY(${y * .08}px) scale(1.03)`;
      if(pillar) pillar.style.setProperty('--y', `${y * .04}px`);
      ticking = false;
    };
    window.addEventListener('scroll', () => {
      if(!ticking){ requestAnimationFrame(update); ticking = true; }
    }, {passive:true});
    update();
  }

  function splitHeroTitles(){
    qa('.hero h1').forEach(h => {
      if(h.dataset.split) return;
      const words = h.textContent.trim().split(/\s+/);
      h.innerHTML = words.map(w => `<span class="word">${w}</span>`).join(' ');
      h.dataset.split = 'true';
    });
  }

  function buttonRipples(){
    qa('.btn').forEach(btn => {
      btn.addEventListener('click', e => {
        const rect = btn.getBoundingClientRect();
        const ripple = document.createElement('span');
        const size = Math.max(rect.width, rect.height);
        ripple.className = 'ripple';
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = (e.clientX - rect.left - size/2) + 'px';
        ripple.style.top = (e.clientY - rect.top - size/2) + 'px';
        btn.appendChild(ripple);
        setTimeout(() => ripple.remove(), 700);
      });
    });
  }

  function tiltCards(){
    if(matchMedia('(pointer: coarse)').matches) return;
    qa('.area-card,.post-card,.team-card,.form-card,.contact-card').forEach(card => {
      card.addEventListener('mousemove', e => {
        const r = card.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - .5;
        const y = (e.clientY - r.top) / r.height - .5;
        card.style.transform = `perspective(900px) rotateX(${y * -4}deg) rotateY(${x * 4}deg) translateY(-6px)`;
      });
      card.addEventListener('mouseleave', () => { card.style.transform = ''; });
    });
  }

  function externalTargetSafety(){
    qa('a[target="_blank"]').forEach(a => {
      if(!a.rel) a.rel = 'noopener noreferrer';
    });
  }

  function initArt(){
    injectMotionLayer();
    splitHeroTitles();
    progressBar();
    pointerAura();
    parallaxHero();
    buttonRipples();
    tiltCards();
    externalTargetSafety();
  }

  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initArt);
  else initArt();
})();
