(() => {
  const cfg = window.SITE_CONFIG || {};
  const $ = (s, c=document) => c.querySelector(s);
  const $$ = (s, c=document) => [...c.querySelectorAll(s)];
  const escapeHtml = (v='') => String(v).replace(/[&<>'"]/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#039;','"':'&quot;'}[m]));
  const param = name => new URLSearchParams(location.search).get(name);

  function hydrateConfig(){
    $$('[data-firm]').forEach(el=>el.textContent=cfg.firmName || 'ALTUM Abogados & Asociados');
    $$('[data-short]').forEach(el=>el.textContent=cfg.shortName || 'ALTUM Abogados & Asociados');
    $$('[data-phone]').forEach(el=>el.textContent=cfg.phone || '');
    $$('[data-email]').forEach(el=>el.textContent=cfg.email || '');
    $$('[data-address]').forEach(el=>el.textContent=cfg.address || 'Lima, Perú');
    $$('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());
    $$('[data-wa]').forEach(el=>{
      const text = encodeURIComponent(el.dataset.waText || 'Hola, quisiera realizar una consulta con ALTUM Abogados & Asociados.');
      el.href = `https://wa.me/${cfg.whatsapp}?text=${text}`;
      el.target='_blank'; el.rel='noopener noreferrer';
    });
    $$('[data-mail]').forEach(el=>el.href=`mailto:${cfg.email}`);
    $$('[data-corporate]').forEach(el=>el.href=cfg.corporateUrl);
    $$('[data-training]').forEach(el=>el.href=cfg.trainingUrl);
  }

  function nav(){
    const header=$('.site-header');
    const toggle=$('.menu-toggle');
    const drawer=$('.mobile-drawer');
    const close=$('.drawer-close');
    const overlay=$('.drawer-overlay');
    const open=()=>{drawer?.classList.add('open'); overlay?.classList.add('open'); document.body.classList.add('menu-open'); toggle?.setAttribute('aria-expanded','true')};
    const shut=()=>{drawer?.classList.remove('open'); overlay?.classList.remove('open'); document.body.classList.remove('menu-open'); toggle?.setAttribute('aria-expanded','false')};
    toggle?.addEventListener('click',open); close?.addEventListener('click',shut); overlay?.addEventListener('click',shut);
    $$('.mobile-drawer a').forEach(a=>a.addEventListener('click',shut));
    const onScroll=()=>header?.classList.toggle('scrolled',scrollY>18);
    addEventListener('scroll',onScroll,{passive:true}); onScroll();
  }

  function reveal(){
    const els=$$('[data-reveal]');
    if(!('IntersectionObserver' in window)){els.forEach(e=>e.classList.add('is-visible'));return;}
    const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('is-visible');io.unobserve(e.target)}}),{threshold:.12,rootMargin:'0px 0px -30px'});
    els.forEach(el=>io.observe(el));
  }

  const arrow=`<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h13M14 7l5 5-5 5" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

  function practiceCard(p, compact=false){
    return `<article class="practice-card ${compact?'compact':''}" data-reveal>
      <a href="area-detalle.html?id=${encodeURIComponent(p.id)}" aria-label="Ver ${escapeHtml(p.title)}">
        <div class="practice-media"><img src="${escapeHtml(p.image)}" alt="" loading="lazy" decoding="async"><span class="practice-number">${escapeHtml(p.number)}</span></div>
        <div class="practice-copy"><small>${escapeHtml(p.group)}</small><h3>${escapeHtml(p.title)}</h3><p>${escapeHtml(p.excerpt)}</p><span class="text-link">Ver experiencia ${arrow}</span></div>
      </a></article>`;
  }

  function renderPractices(){
    $$('[data-render="practices"]').forEach(box=>{
      let data=[...(window.PRACTICES||[])];
      const group=box.dataset.group;
      if(group) data=data.filter(p=>p.group===group);
      const limit=Number(box.dataset.limit||0); if(limit) data=data.slice(0,limit);
      box.innerHTML=data.map(p=>practiceCard(p, box.dataset.compact==='true')).join('');
    });
  }

  function renderPracticeIndex(){
    const box=$('[data-practice-index]'); if(!box) return;
    const practices=window.PRACTICES||[];
    box.innerHTML=practices.map(p=>`<a class="practice-index-row" href="area-detalle.html?id=${encodeURIComponent(p.id)}" data-group="${escapeHtml(p.group)}" data-search="${escapeHtml((p.title+' '+p.group+' '+p.focus.join(' ')).toLowerCase())}">
      <span>${escapeHtml(p.number)}</span><strong>${escapeHtml(p.title)}</strong><small>${escapeHtml(p.group)}</small>${arrow}</a>`).join('');
    const search=$('#practiceSearch');
    const filters=$$('[data-practice-filter]');
    let active='all';
    const apply=()=>{
      const q=(search?.value||'').trim().toLowerCase();
      $$('.practice-index-row',box).forEach(row=>{
        const okGroup=active==='all'||row.dataset.group===active;
        const okQ=!q||(row.dataset.search||'').includes(q);
        row.hidden=!(okGroup&&okQ);
      });
    };
    search?.addEventListener('input',apply);
    filters.forEach(btn=>btn.addEventListener('click',()=>{active=btn.dataset.practiceFilter;filters.forEach(x=>x.classList.toggle('active',x===btn));apply()}));
  }

  function renderSectors(){
    const box=$('[data-render="sectors"]'); if(!box) return;
    box.innerHTML=(window.SECTORS||[]).map((s,i)=>`<article class="sector-item" data-reveal><span>0${i+1}</span><h3>${escapeHtml(s.title)}</h3><p>${escapeHtml(s.text)}</p></article>`).join('');
  }

  function teamCard(m){
    return `<article class="team-card" data-reveal><div class="team-photo"><img src="${escapeHtml(m.photo)}" alt="${escapeHtml(m.name)}" loading="lazy" decoding="async"></div><div class="team-copy"><small>${escapeHtml(m.role)}</small><h3>${escapeHtml(m.name)}</h3><p>${escapeHtml(m.area)}</p><button class="team-more" type="button" data-team="${escapeHtml(m.id)}">Ver perfil ${arrow}</button></div></article>`;
  }
  function renderTeam(){
    $$('[data-render="team"]').forEach(box=>{
      const limit=Number(box.dataset.limit||0); let data=[...(window.STAFF||[])]; if(limit)data=data.slice(0,limit);
      box.innerHTML=data.map(teamCard).join('');
    });
    document.addEventListener('click',e=>{const btn=e.target.closest('[data-team]');if(btn)openTeam(btn.dataset.team)});
  }
  function openTeam(id){
    const m=(window.STAFF||[]).find(x=>x.id===id); const modal=$('#teamModal'); if(!m||!modal)return;
    $('[data-modal-photo]',modal).src=m.photo; $('[data-modal-photo]',modal).alt=m.name;
    $('[data-modal-role]',modal).textContent=m.role; $('[data-modal-name]',modal).textContent=m.name; $('[data-modal-area]',modal).textContent=m.area; $('[data-modal-bio]',modal).textContent=m.bio;
    $('[data-modal-credentials]',modal).innerHTML=(m.credentials||[]).map(c=>`<li>${escapeHtml(c)}</li>`).join('');
    modal.showModal();
  }
  document.addEventListener('click',e=>{if(e.target.matches('[data-modal-close]'))e.target.closest('dialog')?.close()});

  function insightCard(p){return `<article class="insight-card" data-reveal><a href="publicacion-detalle.html?id=${encodeURIComponent(p.id)}"><small>${escapeHtml(p.category)}</small><h3>${escapeHtml(p.title)}</h3><p>${escapeHtml(p.excerpt)}</p><span class="text-link">Leer análisis ${arrow}</span></a></article>`}
  function renderInsights(){
    $$('[data-render="insights"]').forEach(box=>{let data=[...(window.INSIGHTS||[])];const limit=Number(box.dataset.limit||0);if(limit)data=data.slice(0,limit);box.innerHTML=data.map(insightCard).join('')});
  }
  function renderUpdates(){
    $$('[data-render="updates"]').forEach(box=>{box.innerHTML=(window.LEGAL_UPDATES||[]).map(n=>`<article class="update-row" data-reveal><small>${escapeHtml(n.category)}</small><h3>${escapeHtml(n.title)}</h3><p>${escapeHtml(n.excerpt)}</p></article>`).join('')});
  }
  function renderEvents(){
    $$('[data-render="events"]').forEach(box=>{box.innerHTML=(window.EVENTS||[]).map(e=>`<article class="event-card" data-reveal><div class="event-image"><img src="${escapeHtml(e.image)}" alt="" loading="lazy"></div><div><small>${escapeHtml(e.status)} · ${escapeHtml(e.date)}</small><h3>${escapeHtml(e.title)}</h3><p>${escapeHtml(e.excerpt)}</p><a class="text-link" href="evento-detalle.html?id=${encodeURIComponent(e.id)}">Ver actividad ${arrow}</a></div></article>`).join('')});
  }

  function detailPractice(){
    const root=$('[data-area-detail]'); if(!root)return;
    const p=(window.PRACTICES||[]).find(x=>x.id===param('id')) || (window.PRACTICES||[])[0]; if(!p)return;
    document.title=`${p.title} | ALTUM Abogados & Asociados`;
    $('[data-detail-number]',root).textContent=p.number; $('[data-detail-group]',root).textContent=p.group; $('[data-detail-title]',root).textContent=p.title; $('[data-detail-excerpt]',root).textContent=p.excerpt;
    const img=$('[data-detail-image]',root); img.src=p.image; img.alt=p.title;
    $('[data-detail-focus]',root).innerHTML=p.focus.map(x=>`<li>${escapeHtml(x)}</li>`).join('');
    $('[data-detail-services]',root).innerHTML=p.details.map((x,i)=>`<article class="service-detail" data-reveal><span>0${i+1}</span><h3>${escapeHtml(x.title)}</h3><p>${escapeHtml(x.text)}</p></article>`).join('');
  }

  function detailInsight(){
    const root=$('[data-insight-detail]');if(!root)return;
    const p=(window.INSIGHTS||[]).find(x=>x.id===param('id')) || (window.INSIGHTS||[])[0];if(!p)return;
    document.title=`${p.title} | ALTUM Abogados & Asociados`;
    $$('[data-insight-category]',root).forEach(el=>el.textContent=p.category); $('[data-insight-title]',root).textContent=p.title; $('[data-insight-excerpt]',root).textContent=p.excerpt; $('[data-insight-body]',root).textContent=p.body; $('[data-insight-author]',root).textContent=p.author;
  }
  function detailUpdate(){
    const root=$('[data-update-detail]');if(!root)return;
    const n=(window.LEGAL_UPDATES||[]).find(x=>x.id===param('id')) || (window.LEGAL_UPDATES||[])[0];if(!n)return;
    $$('[data-update-category]',root).forEach(el=>el.textContent=n.category); $('[data-update-title]',root).textContent=n.title; $('[data-update-excerpt]',root).textContent=n.excerpt;
  }
  function detailEvent(){
    const root=$('[data-event-detail]');if(!root)return;
    const e=(window.EVENTS||[]).find(x=>x.id===param('id')) || (window.EVENTS||[])[0];if(!e)return;
    $$('[data-event-status]',root).forEach(el=>el.textContent=e.status); $('[data-event-date]',root).textContent=e.date; $('[data-event-title]',root).textContent=e.title; $('[data-event-excerpt]',root).textContent=e.excerpt;
    const img=$('[data-event-image]',root);img.src=e.image;img.alt=e.title;
  }

  function contactForm(){
    const form=$('#contactForm'); if(!form)return;
    form.addEventListener('submit',e=>{
      e.preventDefault();
      const fd=new FormData(form);
      const name=(fd.get('nombre')||'').toString().trim(); const matter=(fd.get('asunto')||'Consulta legal').toString().trim(); const phone=(fd.get('telefono')||'').toString().trim(); const msg=(fd.get('mensaje')||'').toString().trim();
      if(!name||!msg){$('#formNotice').textContent='Completa tu nombre y una breve descripción de la consulta.';return;}
      const subject=encodeURIComponent(`Consulta web - ${matter}`);
      const body=encodeURIComponent(`Nombre: ${name}\nTeléfono: ${phone}\n\nConsulta:\n${msg}`);
      location.href=`mailto:${cfg.email}?subject=${subject}&body=${body}`;
    });
  }

  function activeNav(){
    const page=document.body.dataset.page;
    $$(`[data-nav="${page}"]`).forEach(a=>a.classList.add('active'));
  }

  hydrateConfig(); nav(); activeNav(); renderPractices(); renderPracticeIndex(); renderSectors(); renderTeam(); renderInsights(); renderUpdates(); renderEvents(); detailPractice(); detailInsight(); detailUpdate(); detailEvent(); contactForm(); reveal();
})();
