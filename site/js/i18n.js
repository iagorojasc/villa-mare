/* i18n mínimo: ES es el idioma base (el HTML). window.EN mapea "innerHTML en español" -> "innerHTML en inglés". */
(function(){
  const EN=window.EN||{},blocks=[],attrs=[];
  const norm=s=>s.replace(/\s+/g,' ').trim();
  const SKIP=new Set(['SCRIPT','STYLE','IFRAME','NOSCRIPT','SVG']);
  function walk(el){
    if(SKIP.has(el.tagName.toUpperCase())||el.hasAttribute('data-dyn')||el.hasAttribute('data-noi18n'))return;
    ['alt','aria-label'].forEach(a=>{const v=el.getAttribute(a);if(v&&v.trim()&&!el.hasAttribute('data-lang-btn'))attrs.push({el,a,es:v})});
    const direct=[...el.childNodes].some(n=>n.nodeType===3&&n.textContent.trim());
    if(direct){blocks.push({el,es:el.innerHTML,key:norm(el.innerHTML)});return}
    [...el.children].forEach(walk);
  }
  const metas=[['meta[name=description]','content'],['meta[property="og:title"]','content'],['meta[property="og:description"]','content']].map(([s,a])=>{const el=document.querySelector(s);return el&&{el,a,es:el.getAttribute(a)}}).filter(Boolean);
  const title={es:document.title};
  walk(document.body);

  const I=window.I18N={lang:'es',
    L:(es,en)=>I.lang==='en'?en:es,
    num:n=>n.toLocaleString(I.lang==='en'?'en-US':'es-ES'),
    keys(){return[...new Set([...blocks.map(b=>b.key),...attrs.map(a=>norm(a.es)),norm(title.es),...metas.map(m=>norm(m.es))])]},
    set(lang,save=true){
      I.lang=lang;document.documentElement.lang=lang;
      blocks.forEach(b=>{b.el.innerHTML=lang==='en'&&EN[b.key]!=null?EN[b.key]:b.es});
      attrs.forEach(x=>x.el.setAttribute(x.a,lang==='en'&&EN[norm(x.es)]!=null?EN[norm(x.es)]:x.es));
      metas.forEach(m=>m.el.setAttribute(m.a,lang==='en'&&EN[norm(m.es)]!=null?EN[norm(m.es)]:m.es));
      document.title=lang==='en'&&EN[norm(title.es)]!=null?EN[norm(title.es)]:title.es;
      if(save)try{localStorage.setItem('lang',lang)}catch(e){}
      document.querySelectorAll('[data-lang-btn]').forEach(b=>b.setAttribute('aria-pressed',lang==='en'));
      window.dispatchEvent(new Event('langchange'));
    }
  };
  document.querySelectorAll('[data-lang-btn]').forEach(b=>b.addEventListener('click',()=>I.set(I.lang==='en'?'es':'en')));
  let l=null;
  try{l=new URLSearchParams(location.search).get('lang')||localStorage.getItem('lang')}catch(e){}
  if(!l)l=(navigator.language||'es').toLowerCase().startsWith('es')?'es':'en';
  window.__initLang=l==='en'?'en':'es';
})();
