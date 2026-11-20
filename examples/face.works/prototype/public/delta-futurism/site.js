/* Delta Futurism · shared behaviour for every page (story, proposal, sources).
   Every block checks for its own elements, so a page without them does nothing. */
(function(){
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const clamp=(v,a,b)=>Math.max(a,Math.min(b,v));

  /* ---------- Develop: present held, future latent until the ownership line ---------- */
  const presents=[...document.querySelectorAll('[data-present]')];
  const latents=[...document.querySelectorAll('.latent')];
  let raf=0;
  function develop(){
    raf=0; const vh=innerHeight;
    presents.forEach(el=>{const r=el.getBoundingClientRect(); if(!r.height) return;
      const t=clamp((vh-r.top)/(vh+r.height),0,1); const h=reduce?.5:Math.sin(t*Math.PI)*.9+.05;
      el.style.setProperty('--h',h.toFixed(3));});
    latents.forEach(fig=>{
      const r=fig.getBoundingClientRect(); if(!r.height) return;
      const p=reduce?1:clamp((vh-r.top)/(vh*0.75),0,1);
      const scope=fig.closest('.fut,.card')||fig;
      const owns=scope.querySelector('.owns');
      let c=0;
      if(reduce) c=1;
      else if(owns){const o=owns.getBoundingClientRect(); c=clamp((vh*0.9-o.top)/(vh*0.25),0,1);}
      c=Math.min(c,p);
      fig.style.setProperty('--p',p.toFixed(3)); fig.style.setProperty('--c',c.toFixed(3));
      if(owns) owns.style.setProperty('--c',c.toFixed(3));
    });
  }
  addEventListener('scroll',()=>{if(!raf) raf=requestAnimationFrame(develop);},{passive:true});
  addEventListener('resize',develop);

  /* ---------- Swipe rows: arrow buttons on desktop, native swipe on phones ---------- */
  /* Every swipe row is a named, keyboard-reachable region: Tab to it, then the arrow keys scroll it (WCAG 2.1.1). */
  document.querySelectorAll('.swipe').forEach(row=>{
    row.setAttribute('tabindex','0');
    row.setAttribute('role','region');
    row.setAttribute('aria-label',(row.dataset.label||'Images')+' (scrolls sideways)');
  });
  /* Wide tables scroll sideways on phones: make each one a named, focusable region too */
  document.querySelectorAll('.scroll').forEach(box=>{
    const panel=box.closest('[role=tabpanel]'), tab=panel&&document.getElementById(panel.getAttribute('aria-labelledby'));
    box.setAttribute('tabindex','0'); box.setAttribute('role','region');
    box.setAttribute('aria-label',(tab?tab.textContent.trim():'Table')+' table (scrolls sideways)');
  });
  document.querySelectorAll('.swipe-wrap').forEach(w=>{
    const row=w.querySelector('.swipe'), prev=w.querySelector('[data-dir="-1"]'), next=w.querySelector('[data-dir="1"]');
    if(!row) return;
    const step=()=>{const c=row.firstElementChild; return c?c.getBoundingClientRect().width+parseFloat(getComputedStyle(row).columnGap||0):row.clientWidth;};
    const sync=()=>{ if(prev) prev.disabled=row.scrollLeft<4; if(next) next.disabled=row.scrollLeft+row.clientWidth>=row.scrollWidth-4; };
    [prev,next].forEach(b=>b&&b.addEventListener('click',()=>row.scrollBy({left:step()*Number(b.dataset.dir),behavior:reduce?'auto':'smooth'})));
    row.addEventListener('scroll',()=>{sync(); if(!raf) raf=requestAnimationFrame(develop);},{passive:true});
    addEventListener('resize',sync); sync();
  });

  /* ---------- Kinds of work picker (story page, The Turning Point) ---------- */
  const roles=[
    ['Meals','Feeding crews every day, from the first day of civil work.','A kitchen with a track record and the paperwork to bid on school, hospital and plant contracts.','B','Local food and hospitality'],
    ['Materials','Supplying gravel, concrete, fencing, fuel and parts close to the site.','A supplier on the approved list, with the insurance and paperwork to sell to the next plant.','C','Local suppliers'],
    ['Hauling','Moving aggregate, panels, cable reels and equipment.','Trucks, a safety record and standing customers.','C','Local suppliers'],
    ['Civil work','Roads, pads, drainage and trenching for buried cable.','Equipment, crews and a bid history for the next road, pad or plant job in the county.','C','Local suppliers'],
    ['Electrical','Wiring panels, inverters, cable and battery systems.','Licensed electricians who can maintain the plant and wire homes in the county.','A','Energy workforce'],
    ['Professional services','Surveying, safety, environmental checks, payroll and bookkeeping.','Local firms with a utility project on their record.','C','Local suppliers'],
    ['Site services','Fencing, mowing, security and cleanup.','A local firm the plant can hire for thirty years of upkeep.','C','Local suppliers']
  ];
  const rb=document.getElementById('roles'), rd=document.getElementById('r-during'), ra=document.getElementById('r-after'), rt=document.getElementById('r-to');
  function showRole(r){rd.textContent=r[1]; ra.textContent=r[2]; if(rt){rt.textContent=r[3]+' · '+r[4]+' →'; rt.href='proposal.html#ws-'+r[3].toLowerCase();}}
  if(rb&&rd&&ra){roles.forEach((r,i)=>{const b=document.createElement('button'); b.className='role'; b.type='button'; b.textContent=r[0]; b.setAttribute('aria-pressed',i===0);
    b.addEventListener('click',()=>{rb.querySelectorAll('.role').forEach(x=>x.setAttribute('aria-pressed','false')); b.setAttribute('aria-pressed','true'); showRole(r);}); rb.appendChild(b);});
    showRole(roles[0]);}

  /* ---------- Tools window (proposal): the tabs are the only navigation ---------- */
  document.querySelectorAll('[data-win]').forEach(win=>{
    const tabs=[...win.querySelectorAll('[data-tab]')], panels=[...win.querySelectorAll('[data-panel]')];
    const select=(t,focus)=>{
      tabs.forEach(x=>{const on=x===t; x.setAttribute('aria-selected',String(on)); x.tabIndex=on?0:-1;});
      panels.forEach(p=>p.hidden=(p.dataset.panel!==t.dataset.tab));
      if(focus) t.focus();
    };
    tabs.forEach((t,i)=>{
      t.addEventListener('click',()=>select(t,false));
      /* WAI-ARIA tabs pattern: Left/Right move between tabs, Home/End jump to the ends */
      t.addEventListener('keydown',e=>{
        const k={ArrowRight:i+1,ArrowLeft:i-1,Home:0,End:tabs.length-1}[e.key];
        if(k===undefined) return;
        e.preventDefault(); select(tabs[(k+tabs.length)%tabs.length],true);
      });
    });
  });

  /* ---------- The size of it (proposal): a small model. Every input is an assumption, labelled on the page ---------- */
  document.querySelectorAll('[data-model]').forEach(m=>{
    /* Food model (pass 2): bounded to the Arkansas Cypress build. Every input is an assumption to confirm with the contractor. */
    const inp=n=>m.querySelector('[name='+n+']'), v=n=>Number(inp(n).value);
    const fmt=n=>n>=1e6?'$'+(n/1e6).toFixed(1)+'M':'$'+Math.round(n/1e3)+'K';
    const show={workers:x=>x.toLocaleString('en-US'),eat:x=>x+'%',mpd:x=>x===1?'1 meal':x+' meals',months:x=>x===1?'1 month':x+' months',rate:x=>'$'+x,share:x=>x+'%'};
    const run=()=>{
      m.querySelectorAll('output[data-for]').forEach(o=>{const k=o.dataset.for; o.textContent=show[k]?show[k](v(k)):v(k);});
      const perDay=Math.round(v('workers')*v('eat')/100*v('mpd'));
      const days=Math.round(v('months')*21.7);
      const total=perDay*days*v('rate');
      m.querySelector('[data-out=perday]').textContent=perDay.toLocaleString('en-US');
      m.querySelector('[data-out=total]').textContent=fmt(total);
      m.querySelector('[data-out=local]').textContent=fmt(total*v('share')/100);
      m.querySelector('[data-out=math]').textContent=perDay.toLocaleString('en-US')+' meals a day × about '+days+' working days × $'+v('rate');
    };
    const presets=[...m.querySelectorAll('[data-set]')];
    presets.forEach(b=>b.addEventListener('click',()=>{
      const set=JSON.parse(b.dataset.set); Object.keys(set).forEach(k=>inp(k).value=set[k]);
      presets.forEach(x=>x.setAttribute('aria-pressed',String(x===b))); run();
    }));
    m.querySelectorAll('input').forEach(i=>i.addEventListener('input',()=>{presets.forEach(x=>x.setAttribute('aria-pressed','false')); run();}));
    run();
  });

  /* ---------- System demo (pass 2): pick a workstream, step through the six stages ---------- */
  document.querySelectorAll('[data-demo]').forEach(d=>{
    const data=JSON.parse(d.querySelector('script[type="application/json"]').textContent);
    const wsB=[...d.querySelectorAll('[data-ws]')], stB=[...d.querySelectorAll('[data-st]')];
    const panel=d.querySelector('.demo-panel'); let ws=data.default||'B', st=0;
    const esc=t=>String(t).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
    const draw=()=>{
      const w=data.ws[ws], x=w.steps[st];
      wsB.forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.ws===ws)));
      stB.forEach((b,i)=>{b.setAttribute('aria-selected',String(i===st)); b.tabIndex=i===st?0:-1;});
      panel.innerHTML='<div class="demo-art"><div class="rh"><span>'+esc(w.name)+'</span><span>'+esc(data.stepNames[st])+'</span></div><p class="demo-h">'+esc(x.h)+'</p><dl>'+x.f.map(r=>'<dt>'+esc(r[0])+'</dt><dd>'+esc(r[1])+'</dd>').join('')+'</dl></div><div class="demo-side"><span class="lab">What the partnership does</span><p>'+esc(x.we)+'</p><span class="lab">Who decides</span><p>'+esc(x.who)+'</p></div>';
      panel.classList.remove('flip'); void panel.offsetWidth; panel.classList.add('flip');
    };
    wsB.forEach(b=>b.addEventListener('click',()=>{ws=b.dataset.ws; draw();}));
    stB.forEach((b,i)=>{b.addEventListener('click',()=>{st=i; draw();});
      b.addEventListener('keydown',e=>{const n=e.key==='ArrowRight'?i+1:e.key==='ArrowLeft'?i-1:null; if(n===null) return; e.preventDefault(); st=(n+stB.length)%stB.length; draw(); stB[st].focus();});});
    draw();
  });

  develop();

  /* ---------- Filters: show ledger rows by state, update the headline total ---------- */
  document.querySelectorAll('.filters[data-filter-for]').forEach(g=>{
    const t=document.getElementById(g.dataset.filterFor); if(!t) return;
    const total=g.closest('section')&&g.closest('section').querySelector('[data-total]');
    g.querySelectorAll('button').forEach(b=>b.addEventListener('click',()=>{
      g.querySelectorAll('button').forEach(x=>x.setAttribute('aria-pressed',x===b));
      t.querySelectorAll('[data-s]').forEach(r=>{r.hidden=!(b.dataset.f==='all'||r.dataset.s===b.dataset.f);}); t.scrollLeft=0;
      if(total&&b.dataset.t) total.textContent=b.dataset.t;
    }));
  });

  /* ---------- Reveal on scroll (pass 2): blocks ease in, their children and bars in sequence ---------- */
  if(!reduce && 'IntersectionObserver' in window){
    const blocks='.part,.measure,.head,.sumup,.chart,.flow,.swipe-wrap,.ledger,.paths,.demo,.ww,.wk,.mp,.obj,.p5,.track,.asks,.family,.weekend,.close-c,.statement,.p-status,.next-step,.ask-contact,.model,.example,.put,figure.contact,.split > figure,.fut,.layers';
    const groups='.facts,.capture,.caps,.phases,.steps,.stayed,.gov,.idx,.pcards,.fork,.ladder,.roles-x,.meas-c,.imp';
    const io=new IntersectionObserver(es=>es.forEach(en=>{if(en.isIntersecting){en.target.classList.add('in');io.unobserve(en.target);}}),{rootMargin:'0px 0px -10% 0px',threshold:.05});
    document.querySelectorAll(blocks+','+groups).forEach(el=>{
      if(el.parentElement && el.parentElement.closest('.rv,.rv-kids')) return;
      if(el.matches(groups)){el.classList.add('rv-kids');[...el.children].forEach((c,i)=>c.style.setProperty('--i',Math.min(i,8)));}
      else el.classList.add('rv');
      el.querySelectorAll('.hbar,.cols > div,.dbars > div').forEach((b,i)=>b.style.setProperty('--b',i));
      io.observe(el);
    });
  }

  /* ---------- Tabs (pass 3): the working-with-us walkthrough ---------- */
  const wireTabs=w=>{
    const tabs=[...w.querySelectorAll('[role=tab]')], panels=[...w.querySelectorAll('[role=tabpanel]')];
    const uid='ww'+Math.random().toString(36).slice(2,7);
    /* pass 4: optional previous/next buttons and a "Step n of N" count ([data-steps]) */
    const count=w.querySelector('.wk-count'), steps=[...w.querySelectorAll('[data-step]')];
    let cur=0;
    const show=i=>{cur=i; tabs.forEach((t,j)=>{t.setAttribute('aria-selected',String(j===i)); t.tabIndex=j===i?0:-1;}); panels.forEach((p,j)=>{p.hidden=j!==i; if(j===i){p.classList.remove('flip'); void p.offsetWidth; p.classList.add('flip');}});
      if(count) count.textContent='Step '+(i+1)+' of '+tabs.length;
      steps.forEach(b=>{const d=Number(b.dataset.step); b.disabled=(d<0&&i===0)||(d>0&&i===tabs.length-1);});
      if(w.hasAttribute('data-steps')) tabs[i].scrollIntoView({block:'nearest',inline:'nearest',behavior:'auto'});};
    tabs.forEach((t,i)=>{t.id=uid+'-t'+i; panels[i].id=uid+'-p'+i; t.setAttribute('aria-controls',panels[i].id); panels[i].setAttribute('aria-labelledby',t.id);
      t.addEventListener('click',()=>show(i));
      t.addEventListener('keydown',e=>{const n={ArrowRight:i+1,ArrowLeft:i-1,Home:0,End:tabs.length-1}[e.key]; if(n===undefined) return; e.preventDefault(); const k=(n+tabs.length)%tabs.length; show(k); tabs[k].focus();});});
    steps.forEach(b=>b.addEventListener('click',()=>show(Math.max(0,Math.min(tabs.length-1,cur+Number(b.dataset.step))))));
    show(0);
  };
  document.querySelectorAll('[data-tabs]').forEach(wireTabs);

  /* ---------- Workstream sizing models (0.0.124): one source for the section 03 calculators ---------- */
  const BTS_MODELS={
    A:v=>{const build=v.peak*v.avg*29*v.wage*v.local, lt=v.perm*v.permlocal*v.permwage*30;
      return {build, lt, peakres:Math.round(v.peak*v.local), math:`${v.peak} at peak × ${pc(v.avg)} average crew × 29 months × ${usd(v.wage)} a month × ${pc(v.local)} local. Then ${v.perm} permanent jobs × ${pc(v.permlocal)} local × ${usd(v.permwage)} × 30 years.`};},
    B:v=>{const days=Math.round(v.months*21.7), meals=750*v.eat*days*v.rate, kitchens=meals*v.share, hotel=v.rooms*days*v.night;
      return {build:kitchens+hotel, kitchens, hotel, math:`${Math.round(750*v.eat)} meals a day × ${days} working days × ${usd(v.rate)} = ${money(meals)} in meals; ${pc(v.share)} cooked by county kitchens. Plus ${v.rooms} rooms × ${days} nights × ${usd(v.night)}.`};},
    C:v=>{const build=1.6e9*v.pool*v.win, yr=v.acres*v.veg+v.other, lt=yr*v.hold*30;
      return {build, lt, yr, math:`$1.6 billion × ${pc(v.pool)} site work × ${pc(v.win)} won locally. Upkeep: ${v.acres.toLocaleString()} acres × ${usd(v.veg)} + ${money(v.other)} a year, ${pc(v.hold)} held locally, for 30 years.`};},
    D:v=>({fam:v.fam, cost:v.fam*v.cost, math:`${v.fam} families × ${usd(v.cost)} each, paid to independent advisers.`}),
    E:v=>{const build=v.sites*v.cost, lt=v.sites*v.avoid*30;
      return {build, lt, math:`${v.sites} sites × ${usd(v.cost)}. Then ${v.sites} sites × ${usd(v.avoid)} outage cost avoided × 30 years.`};}
  };
  function money(x){return x>=1e6?'$'+(x/1e6).toFixed(1)+'M':x>=1e3?'$'+Math.round(x/1e3)+'K':'$'+Math.round(x);}
  function usd(x){return '$'+Math.round(x).toLocaleString();}
  function pc(x){return Math.round(x*100)+'%';}
  const FMT={pct:x=>x+'%',mo:x=>x+' mo',usd:x=>usd(x),num:x=>Number(x).toLocaleString()};
  const wireModel=m=>{
    const f=BTS_MODELS[m.dataset.model2]; if(!f) return;
    const ins=[...m.querySelectorAll('input[type=range]')], btns=[...m.querySelectorAll('[data-scn]')];
    const run=()=>{const v={};
      ins.forEach(i=>{const n=Number(i.value); v[i.name]=i.dataset.fmt==='pct'?n/100:n; const o=m.querySelector(`output[data-for="${i.name}"]`); if(o) o.textContent=FMT[i.dataset.fmt](n);});
      const r=f(v);
      m.querySelectorAll('[data-out]').forEach(o=>{const k=o.dataset.out; if(k==='math') o.textContent=r.math; else o.textContent=(k==='fam'||k==='peakres')?String(r[k]):money(r[k]);});};
    const scn=k=>{ins.forEach(i=>{i.value=i.dataset[k];}); btns.forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.scn===k))); run();};
    ins.forEach(i=>i.addEventListener('input',()=>{btns.forEach(b=>b.setAttribute('aria-pressed','false')); run();}));
    btns.forEach(b=>b.addEventListener('click',()=>scn(b.dataset.scn)));
    scn('t');
  };

  /* ---------- Workstream dialog: each card opens its demo and model ---------- */
  const dlg=document.getElementById('ws-dialog');
  if(dlg){
    const body=dlg.querySelector('.wsd-body'); let opener=null;
    const open=(key,btn)=>{const t=document.getElementById('tpl-'+key); if(!t) return;
      body.replaceChildren(t.content.cloneNode(true));
      body.querySelectorAll('[data-tabs]').forEach(wireTabs);
      body.querySelectorAll('[data-model2]').forEach(wireModel);
      opener=btn; dlg.showModal(); body.scrollTop=0; dlg.querySelector('[data-close]').focus();
      if(history.replaceState) history.replaceState(null,'','#ws-'+key.toLowerCase());};
    document.querySelectorAll('[data-open-ws]').forEach(b=>b.addEventListener('click',()=>open(b.dataset.openWs,b)));
    dlg.querySelector('[data-close]').addEventListener('click',()=>dlg.close());
    dlg.addEventListener('click',e=>{if(e.target===dlg) dlg.close();});
    dlg.addEventListener('close',()=>{if(dlg.open) return; body.replaceChildren(); if(history.replaceState) history.replaceState(null,'','#system'); if(opener) opener.focus();});
    const h=location.hash.match(/^#ws-([a-e])$/); if(h){const b=document.querySelector(`[data-open-ws="${h[1].toUpperCase()}"]`); if(b) open(h[1].toUpperCase(),b);}
  }
})();
