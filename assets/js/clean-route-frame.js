
(function(){
  const frame=document.getElementById('route-frame');
  const status=document.getElementById('route-status');
  const srcBase=document.documentElement.dataset.src || '../index.html';
  const withQuery=document.documentElement.dataset.query === 'true';
  const src=srcBase + (withQuery ? window.location.search : '');
  frame.src=src;
  frame.addEventListener('load',()=>{
    status.style.display='none';
    try{
      const doc=frame.contentDocument;
      if(!doc) return;
      document.title=doc.title || document.title;
      let base=doc.querySelector('base[data-clean-top]');
      if(!base){
        base=doc.createElement('base');
        base.setAttribute('data-clean-top','1');
        doc.head.prepend(base);
      }
      base.target='_top';
      // rewrite .html links inside iframe as a second safety layer
      const map={
        'index.html':'../',
        'firma.html':'../firma/',
        'areas.html':'../areas/',
        'equipo.html':'../equipo/',
        'publicaciones.html':'../publicaciones/',
        'noticias.html':'../noticias/',
        'eventos.html':'../eventos/',
        'contacto.html':'../contacto/',
        'area-detalle.html':'../area/',
        'publicacion-detalle.html':'../publicacion/',
        'noticia-detalle.html':'../noticia/',
        'evento-detalle.html':'../evento/'
      };
      [...doc.querySelectorAll('a[href]')].forEach(a=>{
        const raw=a.getAttribute('href');
        if(!raw || raw.startsWith('http') || raw.startsWith('mailto:') || raw.startsWith('tel:') || raw.startsWith('#')) return;
        const m=raw.match(/^([^?#]+)(.*)$/);
        if(!m) return;
        const file=m[1], tail=m[2]||'';
        if(map[file]) a.setAttribute('href', map[file]+tail);
      });
    }catch(e){}
  });
})();
