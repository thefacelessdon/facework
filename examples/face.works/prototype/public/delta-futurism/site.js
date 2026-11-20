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

  /* ---------- Built to Stay forecast (0.0.124): the one source for the section 03 calculators and the section 04 totals.
     Every input is a triangle: [low, most likely, high]. Facts are the same with or without the program; levers
     have a "base" (no program) and a "prog" (with Built to Stay) triangle. Each run draws the facts once and
     scores both cases, so shared unknowns cancel in the difference. Seeded, so the page shows the same numbers every load. */
  const RUNS=4000, SEED=20261120;
  const BTS={
    A:{facts:{peak:[700,750,800],avg:[.35,.45,.55],wage:[5000,6500,8000],perm:[10,12,15],pw:[70860,86000,101120]},
       levers:{local:{base:[.05,.11,.20],prog:[.20,.35,.55]},pl:{base:[.2,.4,.6],prog:[.5,.7,.9]}},
       m:{build:(f,l)=>f.peak*f.avg*29*f.wage*l.local, lt:(f,l)=>f.perm*l.pl*f.pw*30, peakres:(f,l)=>f.peak*l.local},
       math:(f,l,b)=>`Most likely: ${num(f.peak)} at peak × ${pc(f.avg)} average crew × 29 months × ${usd(f.wage)} a month × local hire (${pc(l.local)} with the program, ${pc(b.local)} without). Then ${num(f.perm)} permanent jobs × ${pc(l.pl)} held locally (${pc(b.pl)} without) × ${usd(f.pw)} × 30 years.`},
    B:{facts:{eat:[.3,.45,.6],months:[6,7.5,9],rate:[12,14,16],rooms:[60,130,200]},
       levers:{share:{base:[0,.05,.15],prog:[.3,.5,.7]}},
       m:{build:(f,l)=>750*f.eat*f.months*21.7*f.rate*l.share}, same:{hotel:f=>f.rooms*f.months*21.7*110},
       math:(f,l,b)=>`Most likely: ${num(750*f.eat)} meals a day × ${num(f.months*21.7)} working days × ${usd(f.rate)} = ${money(750*f.eat*f.months*21.7*f.rate)} in meals, ${pc(l.share)} cooked by county kitchens with the program, ${pc(b.share)} without. Hotel nights: ${num(f.rooms)} rooms × ${num(f.months*21.7)} nights × $110.`},
    C:{facts:{pool:[.03,.04,.05],acres:[2500,2750,3000],veg:[184,232,281],other:[150e3,375e3,600e3]},
       levers:{win:{base:[.03,.08,.15],prog:[.10,.20,.35]},hold:{base:[.10,.25,.40],prog:[.40,.60,.85]}},
       m:{build:(f,l)=>1.6e9*f.pool*l.win, lt:(f,l)=>(f.acres*f.veg+f.other)*l.hold*30},
       math:(f,l,b)=>`Most likely: $1.6 billion × ${pc(f.pool)} site work × share won by county firms (${pc(l.win)} with the program, ${pc(b.win)} without). Upkeep: ${num(f.acres)} acres × ${usd(f.veg)} + ${money(f.other)} a year, share held locally (${pc(l.hold)} with, ${pc(b.hold)} without), for 30 years.`},
    D:{facts:{cost:[2500,5000,7500]}, levers:{fam:{base:[0,2,5],prog:[8,18,30]}},
       m:{plans:(f,l)=>l.fam}, count:true,
       math:(f,l,b)=>`Most likely: ${num(l.fam)} families with a written plan with the program, ${num(b.fam)} without. At about ${usd(f.cost)} a family for independent advisers, that is ${money(l.fam*f.cost)}.`},
    E:{facts:{cost:[50e3,100e3,153e3],avoid:[7898,11500,15106]}, levers:{sites:{base:[0,0,2],prog:[2,5,10]}},
       m:{build:(f,l)=>l.sites*f.cost, lt:(f,l)=>l.sites*f.avoid*30, sites:(f,l)=>l.sites},
       math:(f,l,b)=>`Most likely: ${num(l.sites)} sites with the program (${num(b.sites)} without) × ${usd(f.cost)} each. Then each site avoids one outage a year at about ${usd(f.avoid)}, for 30 years.`}
  };
  function money(x){const a=Math.abs(x);return a>=1e7?'$'+Math.round(x/1e6)+'M':a>=1e6?'$'+(x/1e6).toFixed(1)+'M':a>=1e3?'$'+Math.round(x/1e3)+'K':'$'+Math.round(x);}
  function usd(x){return '$'+Math.round(x).toLocaleString('en-US');}
  function pc(x){return Math.round(x*100)+'%';}
  function num(x){return Math.round(x).toLocaleString('en-US');}
  const rng=seed=>()=>{seed=seed+0x6D2B79F5|0;let t=Math.imul(seed^seed>>>15,1|seed);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296;};
  const tri=(r,[a,m,b])=>{const u=r(); if(b<=a) return a; const F=(m-a)/(b-a); return u<F?a+Math.sqrt(u*(b-a)*(m-a)):b-Math.sqrt((1-u)*(b-a)*(b-m));};
  const pctl=(xs,p)=>{const s=Float64Array.from(xs).sort(); return s[Math.min(s.length-1,Math.floor(p*s.length))];};
  const P=xs=>({lo:pctl(xs,.1),mid:pctl(xs,.5),hi:pctl(xs,.9)});
  const mode=o=>Object.fromEntries(Object.entries(o).map(([k,v])=>[k,(v.prog||v)[1]]));
  const modeBase=o=>Object.fromEntries(Object.entries(o).map(([k,v])=>[k,v.base[1]]));
  /* one run of every workstream; returns per-workstream metrics for both cases */
  const draw=(rs,cfgs)=>{const out={}; for(const [k,c] of Object.entries(cfgs)){const r=rs[k];
      const f={}, lb={}, lp={}; for(const [n,t] of Object.entries(c.facts)) f[n]=tri(r,t);
      for(const [n,t] of Object.entries(c.levers)){lb[n]=tri(r,t.base); lp[n]=tri(r,t.prog);}
      const o={}; for(const [n,fn] of Object.entries(c.m)) o[n]={base:fn(f,lb),prog:fn(f,lp)};
      for(const [n,fn] of Object.entries(c.same||{})) o[n]={same:fn(f)};
      out[k]=o;} return out;};
  const forecast=(cfgs,runs=RUNS)=>{/* one random stream per workstream, so a calculator and section 04 agree */
    const r=Object.fromEntries(Object.keys(cfgs).map(k=>[k,rng(SEED+k.charCodeAt(0))])), acc={};
    const push=(k,v)=>(acc[k]||(acc[k]=[])).push(v);
    for(let i=0;i<runs;i++){const d=draw(r,cfgs); let tb=0,tl=0,bb=0,bl=0;
      for(const [k,o] of Object.entries(d)) for(const [n,v] of Object.entries(o)){
        if('same' in v){push(k+'.'+n,v.same); continue;}
        push(k+'.'+n+'.base',v.base); push(k+'.'+n+'.prog',v.prog); push(k+'.'+n+'.diff',v.prog-v.base);
        if(n==='build'){tb+=v.prog;bb+=v.base;} if(n==='lt'){tl+=v.prog;bl+=v.base;}}
      push('all.build.prog',tb);push('all.build.base',bb);push('all.build.diff',tb-bb);
      push('all.lt.prog',tl);push('all.lt.base',bl);push('all.lt.diff',tl-bl);
      push('all.total.prog',tb+tl);push('all.total.base',bb+bl);push('all.total.diff',tb+tl-bb-bl);}
    return Object.fromEntries(Object.entries(acc).map(([k,v])=>[k,P(v)]));};
  window.BTS_FORECAST={config:BTS,forecast,money};
  const fmtV=(k,x)=>/plans|sites|peakres/.test(k)?num(x):money(x);
  const rangeTxt=(k,p)=>`8 in 10 runs: ${fmtV(k,p.lo)} to ${fmtV(k,p.hi)}`;
  /* range bars: without vs with, P10–P90 band, P50 mark */
  const bars=(rows)=>{const max=Math.max(...rows.flatMap(r=>[r.base.hi,r.prog.hi]))*1.08||1, x=v=>(v/max*100).toFixed(2)+'%';
    const one=(lab,p,cls)=>`<div class="rb ${cls}"><span class="rb-l">${lab}</span><span class="rb-t"><i style="left:${x(p.lo)};width:calc(${x(p.hi)} - ${x(p.lo)})"></i><b style="left:${x(p.mid)}"></b></span><span class="rb-v">${fmtV(rows.key||'',p.mid)}</span><span class="sr">most likely ${fmtV(rows.key||'',p.mid)}; 8 in 10 runs between ${fmtV(rows.key||'',p.lo)} and ${fmtV(rows.key||'',p.hi)}</span></div>`;
    return rows.map(r=>`<div class="rb-g">${r.title?`<p class="rb-h">${r.title}</p>`:''}${one('Without a program',r.base,'b')}${one('With Built to Stay',r.prog,'p')}</div>`).join('');};
  /* section 04: fill [data-sum] and the chart from the default forecast */
  const S=forecast(BTS);
  document.querySelectorAll('[data-sum]').forEach(el=>{const [k,kind]=el.dataset.sum.split('|'); const p=S[k]; if(!p) return;
    el.textContent=kind==='r'?`${fmtV(k,p.lo)} to ${fmtV(k,p.hi)}`:fmtV(k,p.mid);});
  document.querySelectorAll('[data-fc]').forEach(el=>{el.innerHTML=bars([
    {title:'During the build',base:S['all.build.base'],prog:S['all.build.prog']},
    {title:'Over 30 years',base:S['all.lt.base'],prog:S['all.lt.prog']},
    {title:'Both together',base:S['all.total.base'],prog:S['all.total.prog']}]);});
  /* section 03 calculators: each slider sets the most likely value of one input */
  const wireModel=m=>{const key=m.dataset.model2, base=BTS[key]; if(!base) return;
    const ins=[...m.querySelectorAll('input[type=range]')];
    const toVal=i=>Number(i.value)/(i.dataset.fmt==='pct'?100:1), toSlider=(i,v)=>{i.value=String(i.dataset.fmt==='pct'?Math.round(v*100):v);};
    const FMT={pct:x=>x+'%',mo:x=>x+' mo',usd:x=>usd(x),num:x=>num(x)};
    const reset=()=>ins.forEach(i=>{const n=i.name, t=base.facts[n]||base.levers[n].prog; toSlider(i,t[1]);});
    const run=()=>{const c={facts:{},levers:{},m:base.m,same:base.same};
      ins.forEach(i=>{const n=i.name, v=toVal(i), o=m.querySelector(`output[data-for="${n}"]`); if(o) o.textContent=FMT[i.dataset.fmt](Number(i.value));
        const t=base.facts[n]||base.levers[n].prog, tt=[Math.min(t[0],v),v,Math.max(t[2],v)];
        if(base.facts[n]) c.facts[n]=tt; else c.levers[n]={base:base.levers[n].base,prog:tt};});
      for(const n in base.facts) if(!c.facts[n]) c.facts[n]=base.facts[n];
      for(const n in base.levers) if(!c.levers[n]) c.levers[n]=base.levers[n];
      const F=forecast({[key]:c});
      m.querySelectorAll('[data-out]').forEach(o=>{const k=o.dataset.out;
        if(k==='math'){o.textContent=base.math(mode(c.facts),mode(c.levers),modeBase(c.levers)); return;}
        if(k==='bars'){const rows=[]; if(F[key+'.build.base']) rows.push({title:'During the build',key:'',base:F[key+'.build.base'],prog:F[key+'.build.prog']});
          if(F[key+'.lt.base']) rows.push({title:'Over 30 years',base:F[key+'.lt.base'],prog:F[key+'.lt.prog']});
          if(F[key+'.plans.base']) {const r={title:'Families with a written plan',base:F[key+'.plans.base'],prog:F[key+'.plans.prog']}; rows.push(r); rows.key='plans';}
          o.innerHTML=bars(rows); return;}
        const [n,kind]=k.split('|'), counts=/peakres|sites/.test(n), p=counts?F[key+'.'+n+'.prog']:(F[key+'.'+n+'.diff']||F[key+'.'+n]); if(!p) return;
        o.textContent=kind==='r'?rangeTxt(n,p):((F[key+'.'+n+'.diff']&&!counts&&n!=='plans')?'+':'')+fmtV(n,p.mid);});};
    ins.forEach(i=>i.addEventListener('input',run));
    const rb=m.querySelector('[data-reset]'); if(rb) rb.addEventListener('click',()=>{reset();run();});
    reset(); run();
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
