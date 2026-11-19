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
    const inp=n=>m.querySelector('[name='+n+']'), v=n=>Number(inp(n).value);
    const fmt=n=>n>=1e6?'$'+(n/1e6).toFixed(1)+'M':'$'+Math.round(n/1e3)+'K';
    const run=()=>{
      const meals=v('meals'), days=v('days'), rate=v('rate'), share=v('share');
      m.querySelectorAll('output[data-for]').forEach(o=>{const k=o.dataset.for; o.textContent=k==='rate'?'$'+v(k):k==='share'?v(k)+'%':v(k).toLocaleString('en-US');});
      const total=meals*days*rate;
      m.querySelector('[data-out=total]').textContent=fmt(total);
      m.querySelector('[data-out=local]').textContent=fmt(total*share/100);
      m.querySelector('[data-out=math]').textContent=meals.toLocaleString('en-US')+' meals a day × '+days+' days × $'+rate;
    };
    const presets=[...m.querySelectorAll('[data-set]')];
    presets.forEach(b=>b.addEventListener('click',()=>{
      const set=JSON.parse(b.dataset.set); Object.keys(set).forEach(k=>inp(k).value=set[k]);
      presets.forEach(x=>x.setAttribute('aria-pressed',String(x===b))); run();
    }));
    m.querySelectorAll('input').forEach(i=>i.addEventListener('input',()=>{presets.forEach(x=>x.setAttribute('aria-pressed','false')); run();}));
    run();
  });

  develop();

  /* ---------- Filters: show ledger rows by state, update the headline total ---------- */
  document.querySelectorAll('.filters[data-filter-for]').forEach(g=>{
    const t=document.getElementById(g.dataset.filterFor); if(!t) return;
    const total=g.closest('section')&&g.closest('section').querySelector('[data-total]');
    g.querySelectorAll('button').forEach(b=>b.addEventListener('click',()=>{
      g.querySelectorAll('button').forEach(x=>x.setAttribute('aria-pressed',x===b));
      t.querySelectorAll('tbody tr').forEach(r=>{r.hidden=!(b.dataset.f==='all'||r.dataset.s===b.dataset.f);});
      if(total&&b.dataset.t) total.textContent=b.dataset.t;
    }));
  });
})();
