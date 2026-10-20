/* ===== Datos (par [es, en]) ===== */
const SPACES=[
  {n:['Salón con vistas','Living room with views'],s:['Chimenea · TV 70"','Fireplace · 70" TV'],t:['Sofás amplios, chimenea eléctrica, televisión de 70 pulgadas con Netflix y Prime Video, y ventanales que se abren al valle de Granada.','Roomy sofas, an electric fireplace, a 70-inch TV with Netflix and Prime Video, and big windows opening onto the Granada valley.'],i:['salon2','salon','salon4','salon5'],v:'video/salon2.mp4',vi:0},
  {n:['Cocina','Kitchen'],s:['Totalmente equipada','Fully equipped'],t:['Frigorífico doble, horno, microondas, lavavajillas, Nespresso, tostadora, batidora y arrocera. Aceite, sal y pimienta, y todo el menaje que hace falta para cocinar para un grupo.','Double fridge, oven, microwave, dishwasher, Nespresso, toaster, blender and rice cooker. Oil, salt and pepper, and all the kitchenware you need to cook for a group.'],i:['cocina','cocina2']},
  {n:['Comedor','Dining room'],s:['Para todos a la vez','Everyone at once'],t:['Mesas amplias junto a los ventanales, con luz natural y vistas, para comer todos juntos sin amontonarse.','Large tables by the windows, with natural light and views, so everyone can eat together without squeezing in.'],i:['comedor3','comedor','comedor2']},
  {n:['Porche y barbacoa','Porch & barbecue'],s:['Comer al aire libre','Dining outdoors'],t:['Mesa larga bajo el porche, barbacoa con parrilla, carbón y brochetas, tumbonas y hamaca. La hora de la comida se alarga sola.','A long table under the porch, a barbecue with grill, charcoal and skewers, sun loungers and a hammock. Lunch stretches on all by itself.'],i:['porche','porche3','barbacoa','porche2']},
  {n:['Jardín y juegos','Garden & games'],s:['Césped · canasta','Lawn · basketball hoop'],t:['Césped, canasta de baloncesto, casita y estructura de juegos infantiles y mesa de ping-pong junto a la piscina. Espacio para correr sin salir de casa.','Lawn, a basketball hoop, a playhouse and play structure for the little ones, and a ping-pong table by the pool. Room to run around without leaving home.'],i:['jardin','juegos','ninos','pingpong'],v:'video/jardin.mp4'},
  {n:['Sala de juegos','Games room'],s:['Para los días de lluvia','For rainy days'],t:['Una habitación interior con juguetes, libros y juegos de mesa para los más pequeños y para las tardes largas.','An indoor room with toys, books and board games for the little ones and for long afternoons.'],i:['salajuegos','juegosmesa']}
];
const ROOMS=[['dorm1',['Dormitorio con cama de matrimonio','Bedroom with a double bed']],['dorm2',['Dormitorio luminoso','Bright bedroom']],['dorm3',['Dormitorio con espejo y banco','Bedroom with mirror and bench']],['dorm4',['Dormitorio con ventana al jardín','Bedroom with garden window']],['dorm5',['Dormitorio','Bedroom']],['dorm6',['Dormitorio con escritorio','Bedroom with desk']],['dorm7',['Habitación con sofá cama','Room with sofa bed']],['bano1',['Baño con bañera','Bathroom with bathtub']],['bano2',['Baño con doble lavabo','Bathroom with double sink']],['bano3',['Baño con ducha sin escalones','Bathroom with step-free shower']]];
const AMEN=[
 {k:['Piscina y exterior','Pool & outdoors'],v:[[['Piscina privada de agua salada','Private saltwater pool'],['Abril a octubre · 24 h · con juguetes','April to October · 24 h · pool toys']],[['Jardín vallado','Fenced garden'],['Patio trasero con valla perimetral y césped','Back yard fully fenced, with lawn']],[['Comedor al aire libre','Outdoor dining']],[['Barbacoa','Barbecue'],['Parrilla, carbón y brochetas','Grill, charcoal and skewers']],[['Tumbonas y hamaca','Sun loungers & hammock']],[['Parque infantil al aire libre','Outdoor playground']],[['Mesa de ping-pong','Ping-pong table']],[['Aparcamiento gratis','Free parking'],['En la propiedad y en la calle','On the property and on the street']]]},
 {k:['Cocina','Kitchen'],v:[[['Cocina completa','Full kitchen']],[['Frigorífico-congelador doble','Double fridge-freezer']],[['Horno y microondas','Oven & microwave']],[['Lavavajillas','Dishwasher']],[['Nespresso y cafetera expreso','Nespresso & espresso machine']],[['Tostadora, batidora y arrocera','Toaster, blender & rice cooker']],[['Menaje completo','Complete kitchenware'],['Vajilla, cubiertos, copas, cazuelas y sartenes','Dishes, cutlery, glasses, pots and pans']],[['Aceite, sal, pimienta y café','Oil, salt, pepper & coffee']]]},
 {k:['Dentro de casa','Inside the house'],v:[[['Aire acondicionado split','Split air conditioning']],[['Calefacción central','Central heating']],[['Chimenea eléctrica','Electric fireplace']],[['Ventiladores de techo y portátiles','Ceiling & portable fans']],[['Lavadora y secadora','Washer & dryer'],['Gratis','Free']],[['Plancha y tendedero','Iron & drying rack']],[['Ropa de cama de algodón','Cotton bed linen'],['Almohadas y mantas extra','Extra pillows and blankets']],[['Cortinas opacas','Blackout curtains']],[['Toallas, jabón y papel higiénico','Towels, soap & toilet paper']],[['Gel, champú y secador de pelo','Shower gel, shampoo & hair dryer']],[['Bañera, bidé y agua caliente','Bathtub, bidet & hot water']],[['Armarios y cómodas','Wardrobes & drawers']]]},
 {k:['Familia y ocio','Family & leisure'],v:[[['TV HD de 70"','70" HD TV'],['Netflix, Prime Video y TV por cable','Netflix, Prime Video & cable TV']],[['Sala de juegos infantil','Kids\' games room']],[['Libros y juguetes','Books & toys'],['De 0 a 10 años y más','Ages 0 to 10 and up']],[['Cuna y parque de viaje','Crib & travel cot'],['Disponibles previa solicitud','Available on request']],[['Mesa de ping-pong','Ping-pong table']],[['Libros y material de lectura','Books & reading material']]]},
 {k:['Trabajo','Work'],v:[[['Wifi rápido de 106 Mbps','Fast 106 Mbps Wi-Fi'],['Verificado con test de velocidad · 4K y videollamadas','Speed-tested · 4K and video calls']],[['Zona de trabajo','Workspace'],['En una habitación con puerta','In a room with a door']],[['Conexión Ethernet','Ethernet connection']]]},
 {k:['Servicios y seguridad','Services & safety'],v:[[['Llegada autónoma','Self check-in'],['Caja de seguridad para llaves','Key lockbox']],[['Equipaje','Luggage'],['Se puede dejar antes o después','Can be left before or after']],[['Estancias largas','Long stays'],['28 días o más','28 days or more']],[['Se admiten mascotas','Pets welcome']],[['Detectores de humo y CO','Smoke & CO detectors']],[['Extintor y botiquín','Fire extinguisher & first-aid kit']],[['Aparcamiento accesible y ducha sin escalones','Accessible parking & step-free shower']],[['Entrada privada','Private entrance']]]}
];
const GAL=[['hero',['Fachada y jardín','Facade and garden']],['piscina',['Piscina desde arriba','Pool from above']],['piscina2',['Piscina y terraza','Pool and terrace']],['piscina-noche',['Piscina de noche','Pool at night']],['salon',['Salón','Living room']],['comedor3',['Comedor','Dining room']],['cocina',['Cocina','Kitchen']],['dorm1',['Dormitorio','Bedroom']],['porche',['Porche','Porch']],['jardin',['Jardín','Garden']],['atardecer',['Atardecer','Sunset']],['dorm3',['Dormitorio','Bedroom']],['pingpong',['Ping-pong','Ping-pong']],['piscina3',['Piscina','Pool']],['salon2',['Salón con chimenea','Living room with fireplace']],['bano2',['Baño','Bathroom']],['barbacoa',['Barbacoa','Barbecue']],['piscina-noche2',['Piscina iluminada','Illuminated pool']],['ninos',['Rincón de juegos','Play corner']],['vistas',['Jardín con vistas','Garden with views']],['salajuegos',['Sala de juegos','Games room']],['tumbonas',['Tumbonas','Sun loungers']],['fachada',['Entrada','Entrance']],['glicinia',['Glicinia en flor','Wisteria in bloom']]];
const TOUR=[[['La llegada','The arrival'],['Una calle tranquila y una casa luminosa que te recibe con sol.','A quiet street and a bright house that welcomes you with sunshine.']],[['La piscina','The pool'],['Agua salada, tumbonas y el valle de Granada de fondo.','Saltwater, sun loungers and the Granada valley beyond.']],[['El salón','The living room'],['Ventanales, chimenea y sitio de sobra para todos.','Big windows, a fireplace and room for everyone.']],[['El porche','The porch'],['Mesa larga, sombra y sobremesas que no acaban.','A long table, shade and lunches that never end.']],[['El atardecer','The sunset'],['Sierra Nevada se tiñe de naranja desde tu terraza.','Sierra Nevada turns orange from your terrace.']]];
const H1={es:[['Una'],['villa'],['a'],['los'],['pies'],['de'],['Sierra',1],['Nevada',1]],en:[['A'],['villa'],['at'],['the'],['foot'],['of'],['Sierra',1],['Nevada',1]]};
const BIG={es:'Más de mil metros de luz, jardín y sol para compartir mesa, piscina y atardeceres con todos los tuyos.',en:'Over a thousand square metres of light, garden and sunshine to share meals, pool and sunsets with everyone you love.'};

const MEET=[['mesa-festiva',['Mesa puesta para una comida en grupo','Table set for a group meal']],['comedor',['Comedor con mesas redondas y vistas','Dining room with round tables and views']],['porche2',['Mesa larga bajo el porche','Long table under the porch']],['aperitivo',['Aperitivo junto a la piscina','Drinks by the pool']],['barbacoa2',['Cocina exterior y barbacoa','Outdoor kitchen and barbecue']],['paella',['Paella al aire libre','Paella outdoors']],['comedor4',['Comida familiar con vistas al valle','Family lunch with valley views']],['porche5',['Sobremesa en el porche','Lingering at the porch']],['rincon',['Rincón de sofás de mimbre','Wicker lounge corner']],['amigos',['Baloncesto entre amigos en el jardín','Friends playing basketball in the garden']]];
const MEET_TXT={
 eyebrow:['Familias y amigos','Families and friends'],
 h:['Para reunirse y <em>comer todos juntos</em>','To gather and <em>eat all together</em>'],
 lead:['Comida en las mesas redondas con vistas al valle, sobremesa bajo el porche, aperitivo junto a la piscina o barbacoa en el jardín. Cada momento tiene su sitio, y todos caben en la misma mesa.','Lunch at the round tables with valley views, lingering conversations under the porch, drinks by the pool or a barbecue in the garden. Every moment has its place, and everyone fits at the same table.'],
 feats:[[['Comer dentro','Eat indoors'],['Comedor con mesas amplias, cocina completa con horno y lavavajillas.','Dining room with large tables, a full kitchen with oven and dishwasher.']],[['Comer fuera','Eat outdoors'],['Mesa larga bajo el porche y comedor al aire libre.','A long table under the porch and outdoor dining.']],[['Barbacoa','Barbecue'],['Parrilla, carbón y brochetas, con cocina exterior.','Grill, charcoal and skewers, with an outdoor kitchen.']],[['Sobremesa','After-meal chat'],['Salones, tumbonas, hamaca y atardeceres sobre Sierra Nevada.','Lounges, sun loungers, a hammock and sunsets over Sierra Nevada.']]]
};
const $=(s,c=document)=>c.querySelector(s),$$=(s,c=document)=>[...c.querySelectorAll(s)];
const reduce=matchMedia('(prefers-reduced-motion:reduce)').matches;
const L=p=>I18N.lang==='en'?p[1]:p[0];
const img=(n,alt='',lazy=true)=>`<img src="img/${n}.jpg" alt="${alt}" ${lazy?'loading="lazy"':''} decoding="async">`;
const hasGsap=!!(window.gsap&&window.ScrollTrigger)&&!reduce;

/* ===== Vídeos: solo se muestran si el archivo existe. Los de Veo traen barras negras si la foto no es 16:9: se detectan y se recorta el encuadre ===== */
function fitVideo(v){
  const b=v._box;if(!b)return;
  const sl=v.parentElement,W=sl.clientWidth,H=sl.clientHeight;if(!W||!H)return;
  const ar=(v.videoHeight/v.videoWidth)||9/16;
  const Vw=Math.max(W/b.w,H/(b.h*ar)),Vh=Vw*ar;
  Object.assign(v.style,{width:Vw+'px',height:Vh+'px',left:(W/2-b.cx*Vw)+'px',top:(H/2-b.cy*Vh)+'px',right:'auto',bottom:'auto',objectFit:'fill'});
}
function detectBars(v){
  try{
    const c=document.createElement('canvas');c.width=320;c.height=180;const x=c.getContext('2d',{willReadFrequently:true});
    x.drawImage(v,0,0,320,180);const d=x.getImageData(0,0,320,180).data;
    const lum=i=>(d[i]+d[i+1]+d[i+2])/3;
    const col=cx=>{let s=0;for(let y=0;y<180;y++)s+=lum((y*320+cx)*4);return s/180};
    const row=ry=>{let s=0;for(let x=0;x<320;x++)s+=lum((ry*320+x)*4);return s/320};
    let x0=0,x1=319,y0=0,y1=179;
    while(x0<160&&col(x0)<6)x0++;while(x1>160&&col(x1)<6)x1--;
    while(y0<90&&row(y0)<6)y0++;while(y1>90&&row(y1)<6)y1--;
    const w=(x1-x0+1)/320,h=(y1-y0+1)/180;
    if(w<.45||h<.45||(w>.97&&h>.97))return null;
    return{w,h,cx:(x0+x1+1)/640,cy:(y0+y1+1)/360};
  }catch(e){return null}
}
function initVideo(v){
  v.addEventListener('loadeddata',()=>{v._box=detectBars(v);fitVideo(v)},{once:true});
  v.addEventListener('canplay',()=>{v._ok=true;if(!v.dataset.lazyshow)v.classList.add('on');v.dispatchEvent(new Event('vready'));if(!v.dataset.lazyshow)v.play().catch(()=>{})},{once:true});
  if(v.dataset.end)v.addEventListener('timeupdate',()=>{ // tramo de un vídeo: se repite o se queda en el último fotograma
    if(v.currentTime>=+v.dataset.end){if('once' in v.dataset)v.pause();else v.currentTime=0}
  });
  v.src=v.dataset.src;
}
$$('video[data-src]').forEach(initVideo);
addEventListener('resize',()=>$$('video[data-src]').forEach(fitVideo));

/* ===== Nav / menú / progreso / barra de reserva ===== */
const nav=$('#nav'),bar=$('#bar'),book=$('#book');
function onScroll(){
  const y=scrollY,h=document.documentElement.scrollHeight-innerHeight;
  bar.style.transform=`scaleX(${h?y/h:0})`;
  nav.classList.toggle('solid',y>innerHeight*.6||document.body.classList.contains('menu-open'));
  book.classList.toggle('show',y>innerHeight*.9&&y<h-innerHeight*.9);
}
addEventListener('scroll',onScroll,{passive:true});onScroll();
const menu=$('#menu'),burger=$('#burger');
function toggleMenu(o){
  const open=o??!menu.classList.contains('open');
  menu.classList.toggle('open',open);document.body.classList.toggle('menu-open',open);
  burger.setAttribute('aria-expanded',open);onScroll();
}
burger.onclick=()=>toggleMenu();
$$('.menu a').forEach(a=>a.onclick=()=>toggleMenu(false));

/* ===== Titular del hero y frase grande (se reconstruyen al cambiar de idioma) ===== */
let bigTween=null;
function renderH1(anim){
  $('#h1').innerHTML=H1[I18N.lang].map(([w,em])=>`<span class="w"><span>${em?`<em style="color:#ffd2b3">${w}</em>`:w}</span></span>`).join(' ');
  if(anim&&hasGsap)gsap.from('#h1 .w>span',{yPercent:110,duration:1.1,ease:'power4.out',stagger:.07,delay:.2});
}
function renderBig(){
  const big=$('#bigtext');
  if(bigTween){bigTween.scrollTrigger&&bigTween.scrollTrigger.kill();bigTween.kill();bigTween=null}
  big.innerHTML=BIG[I18N.lang].split(' ').map(w=>`<span>${w}</span>`).join(' ');
  if(hasGsap)bigTween=gsap.to('#bigtext span',{opacity:1,stagger:.1,ease:'none',scrollTrigger:{trigger:'#bigtext',start:'top 80%',end:'bottom 45%',scrub:true}});
  else $$('#bigtext span').forEach(s=>s.style.opacity=1);
}

/* ===== Espacios ===== */
const sp=(function(){
  const list=$('#spList'),view=$('#spView');
  const dots=document.createElement('div');dots.className='sp-dots';dots.id='spDots';view.appendChild(dots);
  let cur=0,idx=0,timer;
  const phs=SPACES.map((s,i)=>{const d=document.createElement('div');d.className='ph'+(i?'':' on');d.innerHTML=img(s.i[0],'',i>0)+(s.v?`<video data-src="${s.v}" data-lazyshow="1" muted loop playsinline preload="auto"></video>`:'')+`<div class="info"><h3 style="margin-bottom:6px"></h3><p></p></div>`;view.insertBefore(d,dots);const v=$('video',d);if(v){v.addEventListener('vready',()=>syncVid());initVideo(v)}return d});
  function syncVid(){ // el vídeo solo se ve en su diapositiva (vi, por defecto la primera)
    phs.forEach((p,j)=>{const v=$('video',p);if(!v)return;const on=j===cur&&idx===(SPACES[j].vi||0)&&v._ok;v.classList.toggle('on',on);if(on)v.play().catch(()=>{});else v.pause()});
  }
  function render(){
    list.innerHTML=SPACES.map((s,i)=>`<button role="tab" data-i="${i}" class="${i===cur?'on':''}">${L(s.n)}<small>${L(s.s)}</small></button>`).join('');
    phs.forEach((p,i)=>{$('h3',p).textContent=L(SPACES[i].n);$('p',p).textContent=L(SPACES[i].t);$('img',p).alt=L(SPACES[i].n)});
    renderDots();
  }
  function renderDots(){dots.innerHTML=SPACES[cur].i.map((_,k)=>`<i class="${k===idx?'on':''}" data-k="${k}"></i>`).join('')}
  function show(i,k=0){
    cur=i;idx=k;
    $$('button',list).forEach((b,j)=>b.classList.toggle('on',j===i));
    phs.forEach((p,j)=>p.classList.toggle('on',j===i));
    const im=$('img',phs[i]);im.src=`img/${SPACES[i].i[k]}.jpg`;im.loading='eager';
    renderDots();syncVid();restart();
  }
  function restart(){clearInterval(timer);if(reduce)return;timer=setInterval(()=>show(cur,(idx+1)%SPACES[cur].i.length),(idx===(SPACES[cur].vi||0)&&SPACES[cur].v)?8000:4500)}
  list.onclick=e=>{const b=e.target.closest('button');if(b)show(+b.dataset.i)};
  dots.onclick=e=>{const d=e.target.closest('i');if(d)show(cur,+d.dataset.k)};
  restart();
  return{render};
})();

/* ===== Carrusel de dormitorios ===== */
const car=(function(){
  const tr=$('#carTrack');
  function render(){tr.innerHTML=ROOMS.map(([n,c],i)=>`<figure data-g="room" data-i="${i}">${img(n,L(c))}<figcaption>${L(c)}</figcaption></figure>`).join('')}
  const step=()=>Math.min(innerWidth*.78,440)+20;
  $('#prev').onclick=()=>tr.scrollBy({left:-step(),behavior:'smooth'});
  $('#next').onclick=()=>tr.scrollBy({left:step(),behavior:'smooth'});
  return{render};
})();

/* ===== Comodidades ===== */
const am=(function(){
  const tabs=$('#amTabs'),chips=$('#amChips');let cur=0;
  function renderChips(){chips.innerHTML=AMEN[cur].v.map(([a,b],i)=>`<div class="chip" style="animation-delay:${i*40}ms"><i>✦</i><div>${L(a)}${b?`<small>${L(b)}</small>`:''}</div></div>`).join('')}
  function render(){tabs.innerHTML=AMEN.map((c,i)=>`<button role="tab" data-i="${i}" class="${i===cur?'on':''}">${L(c.k)}</button>`).join('');renderChips()}
  tabs.onclick=e=>{const b=e.target.closest('button');if(!b)return;cur=+b.dataset.i;$$('button',tabs).forEach(x=>x.classList.toggle('on',x===b));renderChips()};
  return{render};
})();

/* ===== Galería + visor ===== */
const gal=(function(){
  const lb=$('#lb'),li=$('img',lb),lp=$('p',lb);let set='gal',k=0;
  const sets={gal:GAL,room:ROOMS,meet:MEET};
  function render(){$('#mason').innerHTML=GAL.map(([n,c],i)=>`<figure data-g="gal" data-i="${i}">${img(n,L(c))}</figure>`).join('')}
  function paint(){const[n,c]=sets[set][k];li.src=`img/${n}.jpg`;li.alt=L(c);lp.textContent=`${L(c)} · ${k+1}/${sets[set].length}`}
  function open(s,i){set=s;k=i;paint();lb.classList.add('open');document.body.style.overflow='hidden'}
  function go(d){k=(k+d+sets[set].length)%sets[set].length;paint()}
  function close(){lb.classList.remove('open');document.body.style.overflow=''}
  document.addEventListener('click',e=>{const f=e.target.closest('figure[data-g]');if(f)open(f.dataset.g,+f.dataset.i)});
  $('.x',lb).onclick=close;$('.pv',lb).onclick=()=>go(-1);$('.nx',lb).onclick=()=>go(1);
  lb.onclick=e=>{if(e.target===lb)close()};
  addEventListener('keydown',e=>{if(!lb.classList.contains('open'))return;if(e.key==='Escape')close();if(e.key==='ArrowLeft')go(-1);if(e.key==='ArrowRight')go(1)});
  return{render,repaint:()=>lb.classList.contains('open')&&paint()};
})();

/* ===== Reunirse y comer ===== */
const meet=(function(){
  const el=$('#meet');
  const cls=['a','b','c','d','e','f'];
  function render(){
    el.innerHTML=`<div class="meet-head reveal"><div><p class="eyebrow">${L(MEET_TXT.eyebrow)}</p><h2>${L(MEET_TXT.h)}</h2></div><p class="lead">${L(MEET_TXT.lead)}</p></div>
    <div class="meet-grid">${MEET.slice(0,6).map(([n,c],i)=>`<figure class="mt ${cls[i]}" data-g="meet" data-i="${i}">${img(n,L(c))}<figcaption>${L(c)}</figcaption></figure>`).join('')}</div>
    <div class="meet-feats">${MEET_TXT.feats.map(([t,d])=>`<div class="mf"><b>${L(t)}</b><span>${L(d)}</span></div>`).join('')}</div>`;
    $$('.reveal',el).forEach(e=>{e.style.opacity=1;e.style.transform='none'});
    const a=$('.mt.a',el);if(a){const v=document.createElement('video');v.dataset.src='video/mesa.mp4';v.muted=v.loop=v.playsInline=true;v.preload='auto';a.insertBefore(v,a.querySelector('figcaption'));initVideo(v)} // vídeo de la mesa (se muestra solo si existe el archivo)
    if(hasGsap)gsap.from($$('.mt',el),{y:40,opacity:0,duration:.9,stagger:.08,scrollTrigger:{trigger:$('.meet-grid',el),start:'top 88%'}});
  }
  return{render};
})();

/* ===== Contadores y recorrido (dependen del idioma) ===== */
const counters=$$('[data-n]'),counted=new WeakSet();
function showCounter(el){el.textContent=I18N.num(+el.dataset.n)+(el.dataset.plus?'+':'')}
const cap=$('#cap'),dotsT=$$('.tour .prog i');
function paintCap(){const i=+(cap.dataset.i||0);$('h3',cap).textContent=L(TOUR[i][0]);$('p',cap).textContent=L(TOUR[i][1]);dotsT.forEach((d,j)=>d.classList.toggle('on',j===i))}

/* ===== Reserva directa: calendario + precio + solicitud por WhatsApp/email ===== */
const BK=(function(){
  const cfg=window.VILLA||{contact:{},seasons:[]};
  const calEl=$('#bkCal'),formEl=$('#bkForm');
  const pad=n=>String(n).padStart(2,'0');
  const iso=d=>d.getFullYear()+'-'+pad(d.getMonth()+1)+'-'+pad(d.getDate());
  const parse=s=>{const[y,m,d]=s.split('-').map(Number);return new Date(y,m-1,d)};
  const addDays=(d,n)=>{const x=new Date(d);x.setDate(x.getDate()+n);return x};
  const today=new Date(new Date().setHours(0,0,0,0));
  const loc=()=>I18N.lang==='en'?'en-GB':'es-ES';
  const isDev=['localhost','127.0.0.1',''].includes(location.hostname);
  let blocked=new Set(),updated=null,start=null,end=null,view=new Date(today.getFullYear(),today.getMonth(),1),limit=null;

  fetch((cfg.availabilityUrl||'data/availability.json')+'?v='+Math.floor(Date.now()/600000)).then(r=>r.json()).then(j=>{
    updated=j.updated||null;
    (j.booked||[]).forEach(([a,b])=>{for(let d=parse(a),e=parse(b);d<e;d=addDays(d,1))blocked.add(iso(d))});
    renderCal();renderSum();
  }).catch(()=>{});

  const cap1=t=>t.charAt(0).toUpperCase()+t.slice(1);
  const fmt=d=>new Intl.DateTimeFormat(loc(),{weekday:'short',day:'numeric',month:'short',year:'numeric'}).format(d);
  const money=n=>new Intl.NumberFormat(loc(),{style:'currency',currency:cfg.currency||'EUR',maximumFractionDigits:0}).format(n);
  const free=d=>d>=today&&!blocked.has(iso(d));
  function firstBlockedFrom(d){for(let x=new Date(d),i=0;i<800;x=addDays(x,1),i++)if(blocked.has(iso(x)))return x;return addDays(d,800)}
  function seasonFor(d){
    const md=pad(d.getMonth()+1)+'-'+pad(d.getDate());
    return (cfg.seasons||[]).find(s=>s.from<=s.to?(md>=s.from&&md<=s.to):(md>=s.from||md<=s.to))||null;
  }
  function quote(){
    if(!start||!end)return null;
    const n=Math.round((end-start)/864e5),per=new Map();let sub=0,priced=true;
    for(let i=0;i<n;i++){
      const day=addDays(start,i),se=seasonFor(day),wk=day.getDay()===5||day.getDay()===6;
      const price=se&&(wk&&se.weekendNightly>0?se.weekendNightly:se.nightly);
      if(!(price>0)){priced=false;continue}
      const k=L([se.name.es,se.name.en])+'|'+price;
      const o=per.get(k)||{name:L([se.name.es,se.name.en]),price,count:0};o.count++;per.set(k,o);sub+=price;
    }
    const se0=seasonFor(start),minN=se0&&se0.minNights||1,clean=cfg.cleaningFee>0?cfg.cleaningFee:0;
    const g=guests(),xg=cfg.extraGuest||{free:99,perNight:0},extraN=Math.max(0,g-xg.free),extra=extraN*xg.perNight*n;
    const pct=((cfg.stayDiscounts||[]).filter(([m])=>n>=m).pop()||[0,0])[1],disc=Math.round(sub*pct/100);
    return{n,per:[...per.values()],sub,clean,extraN,extra,pct,disc,total:sub-disc+extra+clean,priced,minN};
  }
  function guests(){const el=formEl.querySelector('#bkG');return Math.max(1,parseInt(el&&el.value,10)||2)}

  /* calendario */
  function monthHTML(m){
    const first=new Date(m.getFullYear(),m.getMonth(),1),days=new Date(m.getFullYear(),m.getMonth()+1,0).getDate();
    const off=(first.getDay()+6)%7;
    const dow=[...Array(7)].map((_,i)=>new Intl.DateTimeFormat(loc(),{weekday:'narrow'}).format(new Date(2024,0,1+i)));
    let h=`<div class="cal-m"><h4>${cap1(new Intl.DateTimeFormat(loc(),{month:'long',year:'numeric'}).format(first))}</h4><div class="cal-g">`+dow.map(x=>`<div class="dow">${x}</div>`).join('')+'<span class="e"></span>'.repeat(off);
    for(let i=1;i<=days;i++){
      const d=new Date(m.getFullYear(),m.getMonth(),i),k=iso(d);
      let dis=false,cls=[];
      if(start&&!end){dis=!(d<=start?free(d):(d<=limit));if(d<=start&&!free(d))dis=true}
      else dis=!free(d);
      if(blocked.has(k))cls.push('bk-d');
      if(start&&end&&d>start&&d<end)cls.push('rng');
      if(start&&iso(d)===iso(start))cls.push('sel','s',...(end?[]:['e']));
      if(end&&iso(d)===iso(end))cls.push('sel','e');
      if(k===iso(today))cls.push('today');
      h+=`<button type="button" data-d="${k}" class="${cls.join(' ')}" ${dis?'disabled':''} aria-label="${fmt(d)}">${i}</button>`;
    }
    return h+'</div></div>';
  }
  function renderCal(){
    const two=matchMedia('(min-width:701px)').matches;
    const maxView=new Date(today.getFullYear(),today.getMonth()+18,1);
    const upd=updated?new Intl.DateTimeFormat(loc(),{day:'numeric',month:'long',hour:'2-digit',minute:'2-digit'}).format(new Date(updated)):null;
    calEl.innerHTML=`<div class="card"><div class="cal-head"><button type="button" id="calPrev" aria-label="${L(['Mes anterior','Previous month'])}" ${view<=new Date(today.getFullYear(),today.getMonth(),1)?'disabled':''}>←</button><b style="font-family:var(--serif);font-weight:300;font-size:1.3rem">${L(['Elige tus fechas','Choose your dates'])}</b><button type="button" id="calNext" aria-label="${L(['Mes siguiente','Next month'])}" ${view>=maxView?'disabled':''}>→</button></div>
    <div class="cal-months">${monthHTML(view)}${two?monthHTML(new Date(view.getFullYear(),view.getMonth()+1,1)):''}</div>
    <div class="cal-legend"><span><i style="background:var(--terra)"></i>${L(['Tu selección','Your selection'])}</span><span><i style="background:var(--sand)"></i>${L(['Disponible','Available'])}</span><span><i style="background:#fff;box-shadow:inset 0 0 0 1px #c8bcab"></i><s>${L(['No disponible','Unavailable'])}</s></span></div>
    <p class="cal-note">${upd?L(['Disponibilidad actualizada el ','Availability updated on '])+upd+'.':''}${!updated&&isDev?'<span class="devnote" style="display:block">'+L(['Prototipo: la disponibilidad aún no está sincronizada (ver tools/LEEME.md). Ahora todo aparece libre.','Prototype: availability is not synced yet (see tools/LEEME.md). Everything shows as free for now.'])+'</span>':''}</p></div>`;
    $('#calPrev').onclick=()=>{view=new Date(view.getFullYear(),view.getMonth()-1,1);renderCal()};
    $('#calNext').onclick=()=>{view=new Date(view.getFullYear(),view.getMonth()+1,1);renderCal()};
  }
  calEl.addEventListener('click',e=>{
    const b=e.target.closest('button[data-d]');if(!b||b.disabled)return;
    const d=parse(b.dataset.d);
    if(!start||end||d<=start){start=d;end=null;limit=firstBlockedFrom(d)}
    else end=d;
    renderCal();renderSum();
  });
  addEventListener('resize',()=>renderCal());

  /* formulario */
  function renderForm(){
    const v=id=>(formEl.querySelector('#'+id)||{}).value;
    const keep={n:v('bkName'),e:v('bkEmail'),t:v('bkTel'),g:v('bkG')||2,m:v('bkMsg')};
    const hasWa=!!cfg.contact.whatsapp,hasMail=!!cfg.contact.email;
    formEl.innerHTML=`<div class="card"><h3>${L(['Tu solicitud','Your request'])}</h3><div class="sum" id="bkSum"></div>
    <label class="fld">${L(['Nombre','Name'])}<input id="bkName" autocomplete="name" value="${keep.n||''}"></label>
    <div class="two"><label class="fld">Email<input id="bkEmail" type="email" autocomplete="email" value="${keep.e||''}"></label><label class="fld">${L(['Teléfono','Phone'])}<input id="bkTel" type="tel" autocomplete="tel" value="${keep.t||''}"></label></div>
    <label class="fld">${L(['Nº de huéspedes','Number of guests'])}<input id="bkG" type="number" min="1" max="${cfg.maxGuests||20}" value="${keep.g}"></label>
    <label class="fld">${L(['Mensaje (opcional)','Message (optional)'])}<textarea id="bkMsg" rows="3" placeholder="${L(['Cuéntanos si vienes con niños, mascotas, celebración familiar…','Tell us if you travel with children, pets, a family gathering…'])}">${keep.m||''}</textarea></label>
    <div class="acts">${hasWa||isDev?`<button type="button" class="btn" data-send="wa" ${hasWa?'':'disabled style="opacity:.5"'}>${L(['Solicitar por WhatsApp','Request via WhatsApp'])}</button>`:''}${hasMail||isDev?`<button type="button" class="btn ghost" data-send="mail" ${hasMail?'':'disabled style="opacity:.5"'}>${L(['Enviar por email','Send by email'])}</button>`:''}</div>
    <p class="msg" id="bkMsgOut" role="status"></p>
    <p class="fine">${L(['Sin pagos online: te respondemos con la disponibilidad confirmada y los pasos para reservar. Tus datos solo se usan para contestarte.','No online payment: we reply with confirmed availability and the steps to book. Your details are only used to answer you.'])}</p>
    ${!hasWa&&!hasMail&&isDev?'<p class="devnote">'+L(['Prototipo: añade tu WhatsApp y/o email en js/config.js para activar el envío.','Prototype: add your WhatsApp and/or email in js/config.js to enable sending.'])+'</p>':''}</div>`;
    renderSum();
  }
  function renderSum(){
    const el=$('#bkSum');if(!el)return;
    if(!start){el.innerHTML=`<span class="none">${L(['Selecciona tu fecha de llegada en el calendario.','Select your arrival date on the calendar.'])}</span>`;return}
    if(!end){el.innerHTML=`<div class="row2"><span>${L(['Llegada','Arrival'])}</span><b>${fmt(start)}</b></div><span class="none">${L(['Ahora elige la fecha de salida.','Now choose your departure date.'])}</span>`;return}
    const q=quote();let h=`<div class="row2"><span>${L(['Llegada','Arrival'])}</span><b>${fmt(start)}</b></div><div class="row2"><span>${L(['Salida','Departure'])}</span><b>${fmt(end)}</b></div><div class="row2"><span>${L(['Estancia','Stay'])}</span><b>${q.n} ${L(q.n===1?['noche','night']:['noches','nights'])}</b></div>`;
    if(q.n<q.minN)h+=`<div class="warn">${L(['Estancia mínima en esas fechas: ','Minimum stay on those dates: '])}${q.minN} ${L(['noches','nights'])}.</div>`;
    if(q.priced){
      h+=q.per.map(p=>`<div class="row2"><span>${p.count} × ${money(p.price)} · ${p.name}</span><span>${money(p.count*p.price)}</span></div>`).join('');
      if(q.disc)h+=`<div class="row2"><span>${L(['Descuento por estancia','Length-of-stay discount'])} (−${q.pct} %)</span><span>−${money(q.disc)}</span></div>`;
      if(q.extra)h+=`<div class="row2"><span>${q.extraN} ${L(q.extraN===1?['huésped adicional','extra guest']:['huéspedes adicionales','extra guests'])} × ${money(cfg.extraGuest.perNight)} × ${q.n} ${L(['noches','nights'])}</span><span>${money(q.extra)}</span></div>`;
      h+=`<div class="row2"><span>${L(['Gastos de limpieza','Cleaning fee'])}</span><span>${q.clean?money(q.clean):L(['Sin coste','Free'])}</span></div>`;
      h+=`<div class="row2 tot"><span>${L(['Total estimado','Estimated total'])}</span><span>${money(q.total)}</span></div><div class="none" style="font-size:.78rem;margin-top:6px">${L(['Precio orientativo: te confirmamos el importe final al responder.','Indicative price: we confirm the final amount when we reply.'])}</div>`;
    }else h+=`<div class="none" style="margin-top:6px">${L(['Te enviaremos el presupuesto para estas fechas.','We will send you a quote for these dates.'])}</div>`;
    el.innerHTML=h;
  }
  function send(kind){
    const g=id=>formEl.querySelector('#'+id).value.trim(),out=$('#bkMsgOut');
    const fields=['bkName','bkEmail','bkTel','bkG'].map(id=>formEl.querySelector('#'+id).closest('.fld'));fields.forEach(f=>f.classList.remove('bad'));
    const q=quote(),err=[];
    if(!q)err.push(L(['Elige las fechas de llegada y salida.','Choose your arrival and departure dates.']));
    else if(q.n<q.minN)err.push(L(['La estancia no alcanza el mínimo de noches.','The stay is shorter than the minimum nights.']));
    if(!g('bkName')){err.push(L(['Escribe tu nombre.','Enter your name.']));fields[0].classList.add('bad')}
    if(!/^\S+@\S+\.\S+$/.test(g('bkEmail'))&&g('bkTel').replace(/\D/g,'').length<7){err.push(L(['Indica un email o un teléfono válido.','Provide a valid email or phone.']));fields[1].classList.add('bad');fields[2].classList.add('bad')}
    const gu=+g('bkG');if(!(gu>=1&&gu<=(cfg.maxGuests||20))){err.push(L(['Revisa el número de huéspedes.','Check the number of guests.']));fields[3].classList.add('bad')}
    if(err.length){out.textContent=err[0];return}
    out.textContent='';
    const lines=[L(['Hola, quisiera reservar Villa Mare.','Hello, I would like to book Villa Mare.']),
      `${L(['Llegada','Arrival'])}: ${fmt(start)}`,`${L(['Salida','Departure'])}: ${fmt(end)} (${q.n} ${L(['noches','nights'])})`,`${L(['Huéspedes','Guests'])}: ${gu}`];
    if(q.priced)lines.push(`${L(['Total estimado','Estimated total'])}: ${money(q.total)}`);
    lines.push(`${L(['Nombre','Name'])}: ${g('bkName')}`);if(g('bkEmail'))lines.push(`Email: ${g('bkEmail')}`);if(g('bkTel'))lines.push(`${L(['Teléfono','Phone'])}: ${g('bkTel')}`);
    if(g('bkMsg'))lines.push('',g('bkMsg'));
    const text=lines.join('\n');
    if(kind==='wa')window.open(`https://wa.me/${cfg.contact.whatsapp}?text=${encodeURIComponent(text)}`,'_blank','noopener');
    else location.href=`mailto:${cfg.contact.email}?subject=${encodeURIComponent(L(['Solicitud de reserva · Villa Mare','Booking request · Villa Mare']))}&body=${encodeURIComponent(text)}`;
    out.textContent=L(['Gracias. Se ha abierto tu mensaje: envíalo para completar la solicitud.','Thanks. Your message is open: send it to complete the request.']);
  }
  formEl.addEventListener('click',e=>{const b=e.target.closest('[data-send]');if(b&&!b.disabled)send(b.dataset.send)});
  formEl.addEventListener('input',e=>{if(e.target.id==='bkG')renderSum()});
  return{render(){renderCal();renderForm()},select(a,b){start=parse(a);end=b?parse(b):null;limit=firstBlockedFrom(start);renderCal();renderSum()}};
})();

/* ===== Cambio de idioma ===== */
let started=false;
function renderAll(first){
  renderH1(first);renderBig();sp.render();car.render();am.render();gal.render();gal.repaint();meet.render();BK.render();paintCap();
  counters.forEach(el=>{if(counted.has(el)||!hasGsap)showCounter(el)});
  if(hasGsap&&!first)ScrollTrigger.refresh();
}
window.addEventListener('langchange',()=>{renderAll(!started);started=true});

/* ===== Animaciones GSAP ===== */
function initMotion(){
  if(!hasGsap){$$('.reveal').forEach(e=>{e.style.opacity=1;e.style.transform='none'});return}
  gsap.registerPlugin(ScrollTrigger);
  gsap.from('.hero .eyebrow,.hero .sub,.hero .cta,.badge',{opacity:0,y:24,duration:1,ease:'power3.out',stagger:.12,delay:.7});
  gsap.to('#heroMedia',{scale:1.18,ease:'none',scrollTrigger:{trigger:'.hero',start:'top top',end:'bottom top',scrub:true}});
  gsap.to('.hero .txt',{y:-80,opacity:0,ease:'none',scrollTrigger:{trigger:'.hero',start:'30% top',end:'bottom top',scrub:true}});
  counters.forEach(el=>{
    const o={v:0},n=+el.dataset.n,plus=el.dataset.plus?'+':'';
    gsap.to(o,{v:n,duration:1.6,ease:'power2.out',scrollTrigger:{trigger:el,start:'top 90%',once:true},onUpdate:()=>el.textContent=I18N.num(Math.round(o.v))+plus,onComplete:()=>counted.add(el)});
  });
  // Recorrido fijado: cada plano entra con zoom y cambia el texto
  const layers=$$('.tour .layer');
  const tl=gsap.timeline({scrollTrigger:{trigger:'.tour',start:'top top',end:'+=420%',scrub:.6,pin:true,
    onUpdate:s=>{const i=Math.min(layers.length-1,Math.floor(s.progress*layers.length*.999));if(cap.dataset.i!=i){cap.dataset.i=i;paintCap();gsap.fromTo(cap,{y:24,opacity:0},{y:0,opacity:1,duration:.6})}}}});
  layers.forEach((l,i)=>{
    tl.fromTo($('.slot',l),{scale:1.12},{scale:1,duration:1,ease:'none'},i);
    if(i>0)tl.fromTo(l,{opacity:0,clipPath:'inset(12% 8% 12% 8% round 24px)'},{opacity:1,clipPath:'inset(0% 0% 0% 0% round 0px)',duration:.45,ease:'power2.out'},i-.1);
  });
  $$('.reveal').forEach(el=>gsap.to(el,{opacity:1,y:0,duration:1,ease:'power3.out',scrollTrigger:{trigger:el,start:'top 88%'}}));
  $$('.row .media img').forEach(im=>gsap.fromTo(im,{scale:1.25,yPercent:-6},{scale:1.05,yPercent:6,ease:'none',scrollTrigger:{trigger:im.parentElement,start:'top bottom',end:'bottom top',scrub:true}}));
  gsap.from('.score .num',{scale:.7,opacity:0,duration:1.4,ease:'power3.out',scrollTrigger:{trigger:'.score',start:'top 70%'}});
  gsap.from('.cat',{y:30,opacity:0,stagger:.08,duration:.8,scrollTrigger:{trigger:'.cats',start:'top 85%'}});
  gsap.from('.quote',{y:50,opacity:0,stagger:.15,duration:1,scrollTrigger:{trigger:'.quotes',start:'top 85%'}});
  gsap.from('.mason figure',{y:40,opacity:0,duration:.8,stagger:.04,scrollTrigger:{trigger:'#mason',start:'top 85%'}});
  gsap.to('.final .slot img',{yPercent:12,ease:'none',scrollTrigger:{trigger:'.final',start:'top bottom',end:'bottom top',scrub:true}});
}

/* ===== Mapa: solo una zona aproximada (círculo de 400 m de diámetro), sin marcador ni zoom detallado ===== */
(function(){
  const el=$('#map'),LF=window.L;if(!el||!LF||!LF.map)return;
  const c=(window.VILLA&&VILLA.mapCenter)||[37.11145,-3.59272];
  const map=LF.map(el,{center:c,zoom:15,minZoom:12,maxZoom:16,scrollWheelZoom:true,zoomControl:true});
  LF.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png',{maxZoom:16,attribution:'© <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap</a>'}).addTo(map);
  LF.circle(c,{radius:200,color:'#c8643b',weight:2,fillColor:'#c8643b',fillOpacity:.22,interactive:false}).addTo(map);
  new IntersectionObserver((es,o)=>{if(es[0].isIntersecting){map.invalidateSize();o.disconnect()}}).observe(el);
})();

/* ===== Enlace activo en el menú ===== */
const links=$$('nav ul a');
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)links.forEach(a=>a.classList.toggle('on',a.getAttribute('href')==='#'+e.target.id))}),{rootMargin:'-45% 0px -50% 0px'});
links.forEach(a=>{const t=$(a.getAttribute('href'));if(t)io.observe(t)});

/* ===== Arranque: traduce el HTML estático y dispara renderAll ===== */
initMotion();
I18N.set(window.__initLang,false);
