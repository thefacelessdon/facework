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
    const groups='.facts,.capture,.caps,.phases,.steps,.stayed,.gov,.idx,.pcards,.fork,.ladder,.roles-x,.meas-c,.imp,.xgrid,.fpath';
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
};
    tabs.forEach((t,i)=>{t.id=uid+'-t'+i; panels[i].id=uid+'-p'+i; t.setAttribute('aria-controls',panels[i].id); panels[i].setAttribute('aria-labelledby',t.id);
      t.addEventListener('click',()=>show(i));
      t.addEventListener('keydown',e=>{const n={ArrowRight:i+1,ArrowLeft:i-1,Home:0,End:tabs.length-1}[e.key]; if(n===undefined) return; e.preventDefault(); const k=(n+tabs.length)%tabs.length; show(k); tabs[k].focus();});});
    steps.forEach(b=>b.addEventListener('click',()=>show(Math.max(0,Math.min(tabs.length-1,cur+Number(b.dataset.step))))));
    show(0);
  };
  document.querySelectorAll('[data-tabs]').forEach(wireTabs);

  /* ---------- Built to Stay impact model (0.0.126): single point values, one source for every number on the page.
     Each workstream has facts (one value) and levers (a value without a program and one with Built to Stay).
     "Without" is what the county keeps anyway; "added" is with minus without. Ripple (local re-spending) applies
     to private dollars only, never to tax. Today's dollars, not discounted. ---------- */
  /* our staffing model: crew on site by month, July 2026 to November 2028 (replace with Wanzek's resource-loaded schedule) */
  const CURVE=[53,115,154,175,158,189,220,304,403,515,596,665,742,771,775,757,723,648,593,505,393,319,243,189,140,89,67,56,35];
  const PM=CURVE.reduce((a,b)=>a+b,0), PEAK=Math.max(...CURVE), COST=1601500000;
  const IN=(n,l,fmt,min,max,step,a,b)=>({n,l,fmt,min,max,step,base:a,prog:b===undefined?a:b,lever:b!==undefined});
  const BTS={
    A:{name:'Energy Workforce', inputs:[
        IN('local','Share of build work done by county residents','pct',0,80,1,12,30),
        IN('pl','Permanent plant jobs held by county residents','pct',0,100,5,40,70),
        IN('stay','Residents still in the trade after the build','pct',0,100,5,35,55),
        IN('pay','Monthly craft pay','usd',4000,9000,100,6700),
        IN('away','Out-of-county workers who stay in the county','pct',0,100,5,50),
        IN('perday','What each of them spends in the county a working day','usd',0,150,5,75),
        IN('perm','Permanent plant jobs','num',5,20,1,12),
        IN('pw','Permanent pay a year','usd',50000,120000,1000,86000),
        IN('gain','Yearly pay gain over their old work','usd',0,30000,500,12000),
        IN('yrs','Years that gain lasts','num',1,30,1,10)],
      parts:v=>[
        {l:'Wages to county residents',w:'build',x:PM*v.local*v.pay,f:`${num(PM)} worker-months × ${pc(v.local)} county residents × ${usd(v.pay)}`},
        {l:'Spending by out-of-county crews',w:'build',x:PM*(1-v.local)*v.away*v.perday*25,f:`${num(PM*(1-v.local))} out-of-county worker-months × ${pc(v.away)} staying here × ${usd(v.perday)} × 25 days`},
        {l:'Plant jobs held by residents',w:'after',x:v.perm*v.pl*v.pw*30,f:`${num(v.perm)} jobs × ${pc(v.pl)} held locally × ${usd(v.pw)} × 30 years`},
        {l:'Residents still in the trade',w:'after',x:PEAK*v.local*v.stay*v.gain*v.yrs,f:`${num(PEAK*v.local)} residents at peak × ${pc(v.stay)} still in the trade × ${usd(v.gain)} more a year × ${num(v.yrs)} years`}]},
    C:{name:'Local Suppliers', inputs:[
        IN('win','Share of site purchases won by county firms','pct',0,60,1,10,20),
        IN('hold','Share of upkeep held by county firms','pct',0,100,5,25,60),
        IN('firms','County firms leaving with a contract record','num',0,40,1,3,12),
        IN('pool','Site work and purchases as a share of the build','pct',1,10,0.5,5),
        IN('acres','Acres kept up','num',1000,3500,50,2750),
        IN('veg','Vegetation upkeep per acre a year','usd',100,400,1,232),
        IN('other','Fences, roads, drainage and security a year','usd',0,1000000,25000,375000),
        IN('follow','New work a year per firm','usd',0,800000,10000,150000),
        IN('yrs','Years it lasts','num',1,30,1,10)],
      parts:v=>[
        {l:'Site purchases won by county firms',w:'build',x:COST*v.pool*v.win,f:`$1.6 billion × ${pc(v.pool)} site work and purchases × ${pc(v.win)} won locally`},
        {l:'Upkeep held by county firms',w:'after',x:(v.acres*v.veg+v.other)*v.hold*30,f:`(${num(v.acres)} acres × ${usd(v.veg)} + ${money(v.other)}) a year × ${pc(v.hold)} held locally × 30 years`},
        {l:'New work won by firms with a record',w:'after',x:v.firms*v.follow*v.yrs,f:`${num(v.firms)} firms × ${money(v.follow)} a year × ${num(v.yrs)} years`}]},
    B:{name:'Crew Meals', inputs:[
        IN('share','Share of crew meals cooked by county kitchens','pct',0,100,5,5,80),
        IN('kit','County kitchens leaving with a catering record','num',0,10,1,0,3),
        IN('take','Workers who buy lunch','pct',0,100,5,45),
        IN('lunch','Lunch price','usd',8,20,1,13),
        IN('bfast','Workers who buy breakfast','pct',0,100,5,20),
        IN('cat','New catering a year per kitchen','usd',0,300000,5000,75000),
        IN('yrs','Years it lasts','num',1,30,1,10)],
      parts:v=>{const rev=PM*22*(v.take*v.lunch+v.bfast*7)+PM*15; return [
        {l:'Meals cooked by county kitchens',w:'build',x:rev*v.share,f:`${num(PM*22*v.take)} lunches at ${usd(v.lunch)} + ${num(PM*22*v.bfast)} breakfasts at $7 + ${num(PM)} monthly safety meals at $15 = ${money(rev)}, × ${pc(v.share)} cooked in the county`},
        {l:'Catering won after the build',w:'after',x:v.kit*v.cat*v.yrs,f:`${num(v.kit)} kitchens × ${money(v.cat)} a year × ${num(v.yrs)} years`}];}},
    E:{name:'Community Resilience', inputs:[
        IN('sites','Clinics, shelters or churches with solar and battery backup','num',0,20,1,0,5),
        IN('cost','Cost per site, installed by county electricians','usd',30000,250000,5000,100000)],
      parts:v=>[{l:'Backup power installed (grant-funded)',w:'build',x:v.sites*v.cost,f:`${num(v.sites)} sites × ${usd(v.cost)}`}]},
    J:{name:'Jefferson Power Station', build:true, inputs:[
        IN('local','Share of build work done by county residents','pct',0,80,1,12,30),
        IN('win','Share of site purchases won by county firms','pct',0,60,1,10,20),
        IN('pl','Permanent plant jobs held by county residents','pct',0,100,5,40,70),
        IN('cost','Approved cost','usd',1e9,2e9,5e7,1.5e9),
        IN('pool','Site work and purchases as a share of the build','pct',1,10,0.5,5),
        IN('pay','Monthly craft pay','usd',4000,9000,100,6700),
        IN('away','Out-of-county workers who stay in the county','pct',0,100,5,50),
        IN('perday','What each of them spends in the county a working day','usd',0,150,5,75),
        IN('perm','Permanent plant jobs','num',5,40,1,22),
        IN('pw','Permanent pay a year','usd',50000,120000,1000,86000)],
      parts:v=>[
        {l:'Wages to county residents',w:'build',x:PM*v.local*v.pay,f:`${num(PM)} worker-months (same staffing shape as Cypress) × ${pc(v.local)} county residents × ${usd(v.pay)}`},
        {l:'Spending by out-of-county crews',w:'build',x:PM*(1-v.local)*v.away*v.perday*25,f:`${num(PM*(1-v.local))} out-of-county worker-months × ${pc(v.away)} staying here × ${usd(v.perday)} × 25 days`},
        {l:'Site purchases won by county firms',w:'build',x:v.cost*v.pool*v.win,f:`${money(v.cost)} × ${pc(v.pool)} × ${pc(v.win)} won locally`},
        {l:'Plant jobs held by residents',w:'after',x:v.perm*v.pl*v.pw*30,f:`${num(v.perm)} jobs × ${pc(v.pl)} held locally × ${usd(v.pw)} × 30 years`}]},
    D:{name:'Landowner Prosperity', inputs:[IN('fam','Families with a written plan','num',0,60,1,2,18)], count:true,
      parts:v=>[{l:'Families with a written plan',w:'count',x:v.fam,f:`${num(v.fam)} families. We count plans, never lease income.`}]}
  };
  const TAX={y1:9.6e6, end:.2, mills:57.35, school:47.7, state:25, offset:.98, county:9.65, sales:8.8e6};
  function money(x){const a=Math.abs(x);return a>=1e7?'$'+Math.round(x/1e6)+'M':a>=1e6?'$'+(x/1e6).toFixed(1)+'M':a>=1e3?'$'+Math.round(x/1e3)+'K':'$'+Math.round(x);}
  function usd(x){return '$'+Math.round(x).toLocaleString('en-US');}
  function pc(x){return Math.round(x*100)+'%';}
  function num(x){return Math.round(x).toLocaleString('en-US');}
  const vals=(c,which,over={})=>Object.fromEntries(c.inputs.map(i=>{const raw=(over[i.n]!==undefined&&(which==='prog'||!i.lever))?over[i.n]:i[which]; return [i.n, i.fmt==='pct'?raw/100:raw];}));
  const sum=(ps,w)=>ps.filter(p=>p.w===w).reduce((a,p)=>a+p.x,0);
  /* one workstream: without, with, and the difference */
  const runWS=(k,over={})=>{const c=BTS[k], b=c.parts(vals(c,'base',over)), p=c.parts(vals(c,'prog',over));
    return {base:b, prog:p, add:{build:sum(p,'build')-sum(b,'build'), after:sum(p,'after')-sum(b,'after'), count:sum(p,'count')-sum(b,'count')},
      tot:{bb:sum(b,'build'),ba:sum(b,'after'),pb:sum(p,'build'),pa:sum(p,'after')}};};
  /* the whole county: plant baseline (without a program, plus taxes) and what Built to Stay adds, with ripple */
  const runAll=(over={},ripple=.30)=>{const R=Object.fromEntries(Object.keys(BTS).map(k=>[k,runWS(k,over[k]||{})]));
    let bb=0,ba=0,ab=0,aa=0; for(const k in R){bb+=R[k].tot.bb; ba+=R[k].tot.ba; ab+=R[k].add.build; aa+=R[k].add.after;}
    const tax=30*(TAX.y1+TAX.y1*TAX.end)/2, rip=1+ripple;
    const base={build:bb*rip+TAX.sales, after:ba*rip+tax}, adds={build:ab*rip, after:aa*rip};
    const A0=R.A.base, A1=R.A.prog, C0=R.C.base, C1=R.C.prog;
    const cents=(a,c)=>(a[0].x+a[1].x+c[0].x)*rip/COST*100;
    return {R, base, adds, tax, rip,
      total:base.build+base.after+adds.build+adds.after,
      taxDistrict:tax*TAX.school/TAX.mills - tax*TAX.state/TAX.mills*TAX.offset, taxCounty:tax*TAX.county/TAX.mills,
      cents:{base:cents(A0,C0), prog:cents(A1,C1)},
      res:{base:PEAK*vals(BTS.A,'base').local, prog:PEAK*vals(BTS.A,'prog',over.A||{}).local},
      jps:(R.J.add.build+R.J.add.after)*rip, jbase:(R.J.tot.bb+R.J.tot.ba)*rip};
  };
  window.BTS_MODEL={BTS,CURVE,PM,PEAK,TAX,runWS,runAll,money};
  /* without / with bars, single values */
  const bars=rows=>{const max=Math.max(...rows.flatMap(r=>[r.b,r.p]))*1.05||1, w=v=>(v/max*100).toFixed(2)+'%', f=rows.fmt||money;
    const one=(lab,v,cls)=>`<div class="rb ${cls}"><span class="rb-l">${lab}</span><span class="rb-t"><i style="left:0;width:${w(v)}"></i></span><span class="rb-v">${f(v)}</span></div>`;
    return rows.map(r=>`<div class="rb-g"><p class="rb-h">${r.t}</p>${one('Without a program',r.b,'b')}${one('With Built to Stay',r.p,'p')}</div>`).join('');};
  /* staffing curve chart (crew meals panel) */
  const curveSVG=()=>{const W=580,H=150,bw=W/CURVE.length, mx=PEAK;
    const rects=CURVE.map((v,i)=>`<rect x="${(i*bw+1).toFixed(1)}" y="${(H-v/mx*(H-18)).toFixed(1)}" width="${(bw-2).toFixed(1)}" height="${(v/mx*(H-18)).toFixed(1)}"${v===PEAK?' class="pk"':''}></rect>`).join('');
    return `<svg viewBox="0 0 ${W} ${H+18}" role="img" aria-label="Crew on site by month: rising from 53 in July 2026 to a peak of ${PEAK} in September 2027, then falling to 35 by November 2028.">${rects}<text x="0" y="${H+14}">Jul 2026</text><text x="${(14*bw).toFixed(0)}" y="${H+14}" text-anchor="middle">Peak ${PEAK} · Sep 2027</text><text x="${W}" y="${H+14}" text-anchor="end">Nov 2028</text></svg>`;};
  document.querySelectorAll('[data-curve]').forEach(el=>{el.innerHTML=curveSVG();});
  /* section 04 */
  const fillAll=M=>{
    const S={'total':money(M.total),'base':money(M.base.build+M.base.after),'base.build':money(M.base.build),'base.after':money(M.base.after),
      'adds':money(M.adds.build+M.adds.after),'adds.build':money(M.adds.build),'adds.after':money(M.adds.after),
      'tax':money(M.tax),'tax.district':money(M.taxDistrict),'tax.county':money(M.taxCounty),
      'cents.base':M.cents.base.toFixed(1)+'¢','cents.prog':M.cents.prog.toFixed(1)+'¢','res.base':num(M.res.base),'res.prog':num(M.res.prog),
      'jps':money(M.jps),'cy':money(M.adds.build+M.adds.after-M.jps),'res.both':num(M.res.prog*2)};
    document.querySelectorAll('[data-sum]').forEach(el=>{if(S[el.dataset.sum]!==undefined) el.textContent=S[el.dataset.sum];});
    document.querySelectorAll('[data-fc]').forEach(el=>{el.innerHTML=bars([
      {t:'During the build, 2026–2028',b:M.base.build,p:M.base.build+M.adds.build},
      {t:'The 30 years after',b:M.base.after,p:M.base.after+M.adds.after}]);});
  };
  fillAll(runAll());
  const FMT={pct:x=>x+'%',mo:x=>x+' mo',usd:x=>usd(x),num:x=>num(x)};
  const lab=(i,k)=>`<label class="${i.lever?'lev':'fx'}"><span>${i.l} <output data-for="${k}"></output></span>${i.lever?`<i class="lev-t">Without a program: ${FMT[i.fmt](i.base)}</i>`:''}<input type="range" name="${k}" min="${i.min}" max="${i.max}" step="${i.step}" data-fmt="${i.fmt}" value="${i.prog}"></label>`;
  /* section 04 calculator: the six levers that move the county number */
  document.querySelectorAll('[data-model-all]').forEach(m=>{
    const L=[['A','local'],['C','win'],['C','hold'],['C','firms'],['A','stay']].map(([k,n])=>({k,n,i:BTS[k].inputs.find(x=>x.n===n)}));
    const rip={l:'Local re-spending: each $1 kept creates this much more',fmt:'num',min:0,max:60,step:5,prog:30,lever:false,n:'ripple'};
    m.querySelector('.in').innerHTML='<p class="in-h">What Built to Stay moves (with the program)</p>'+L.map(x=>lab(x.i,x.k+'.'+x.n)).join('')+'<p class="in-h">How far it spreads</p>'+lab({...rip,l:'Local re-spending per $1 kept (cents)'},'ripple');
    const ins=[...m.querySelectorAll('input')];
    const run=()=>{const over={}; let ripple=.3;
      ins.forEach(i=>{const o=m.querySelector(`output[data-for="${i.name}"]`); if(o) o.textContent=FMT[i.dataset.fmt](Number(i.value));
        if(i.name==='ripple') ripple=Number(i.value)/100; else {const [k,n]=i.name.split('.'); (over[k]||(over[k]={}))[n]=Number(i.value); if(i.name==='A.local'||i.name==='C.win') (over.J||(over.J={}))[n]=Number(i.value);}});
      const M=runAll(over,ripple); fillAll(M);};
    ins.forEach(i=>i.addEventListener('input',run));
    const r=m.querySelector('[data-reset]'); if(r) r.addEventListener('click',()=>{ins.forEach(i=>{const [k,n]=i.name.split('.'); i.value=i.name==='ripple'?30:BTS[k].inputs.find(x=>x.n===n).prog;}); run();});
    run();
  });
  /* section 03 calculators: one per workstream */
  const wireModel=m=>{const key=m.dataset.model2, c=BTS[key]; if(!c) return;
    const box=m.querySelector('.in');
    box.innerHTML='<p class="in-h">What Built to Stay moves</p>'+c.inputs.filter(i=>i.lever).map(i=>lab(i,i.n)).join('')+(c.inputs.some(i=>!i.lever)?'<p class="in-h">Our assumptions</p>'+c.inputs.filter(i=>!i.lever).map(i=>lab(i,i.n)).join(''):'');
    const ins=[...box.querySelectorAll('input')];
    const run=()=>{const over={}; ins.forEach(i=>{over[i.name]=Number(i.value); const o=box.querySelector(`output[data-for="${i.name}"]`); if(o) o.textContent=FMT[i.dataset.fmt](Number(i.value));});
      const r=runWS(key,over), out=m.querySelector('.out');
      const head=c.count?`<span class="lab dim">More families with a written plan</span><div class="big">${num(r.add.count)}</div>`
        :`<span class="lab dim">Added during the build</span><div class="big">+${money(r.add.build)}</div>`+(r.tot.pa||r.tot.ba?`<span class="lab dim">Added in the 30 years after</span><div class="big sm">+${money(r.add.after)}</div>`:'');
      const rows=r.prog.map((p,ix)=>{const b=r.base[ix].x, f=c.count?num:money; return `<li><b>${p.l}</b><span class="wv">${f(b)} → ${f(p.x)}</span><span class="wf">${p.f}</span></li>`;}).join('');
      out.innerHTML=head+`<ul class="parts"><li class="ph"><b>Line</b><span class="wv">Without → with</span></li>${rows}</ul><p class="note">Before local re-spending. Section 04 adds it and the plant’s taxes.</p>`;};
    ins.forEach(i=>i.addEventListener('input',run));
    const rb=m.querySelector('[data-reset]'); if(rb) rb.addEventListener('click',()=>{ins.forEach(i=>{i.value=c.inputs.find(x=>x.n===i.name).prog;}); run();});
    run();
  };

  /* ---------- Workstream explorer (0.0.125): five tiles are tabs; the picked workstream's walkthrough and
     calculator render inline below them, in page flow. No dialog, no scroll-inside-a-box. ---------- */
  const wsx=document.querySelector('[data-wsx]');
  if(wsx){
    const tabs=[...wsx.querySelectorAll('[role=tab]')], panel=wsx.querySelector('[role=tabpanel]');
    const sel=(i,opts={})=>{const t=tabs[i], k=t.dataset.ws, tpl=document.getElementById('tpl-'+k); if(!tpl) return;
      tabs.forEach((x,j)=>{x.setAttribute('aria-selected',String(j===i)); x.tabIndex=j===i?0:-1;});
      panel.setAttribute('aria-labelledby',t.id);
      panel.replaceChildren(tpl.content.cloneNode(true));
      panel.querySelectorAll('[data-tabs]').forEach(wireTabs);
      panel.querySelectorAll('[data-model2]').forEach(wireModel);
      panel.querySelectorAll('[data-curve]').forEach(el=>{el.innerHTML=curveSVG();});
      if(opts.focus) t.focus();
      if(opts.user && history.replaceState) history.replaceState(null,'','#ws-'+k.toLowerCase());
      if(opts.reveal){const top=wsx.getBoundingClientRect().top; if(top<0||top>innerHeight*.6) wsx.scrollIntoView({block:'start'});}};
    tabs.forEach((t,i)=>{
      t.addEventListener('click',()=>sel(i,{user:true}));
      t.addEventListener('keydown',e=>{const n={ArrowRight:i+1,ArrowDown:i+1,ArrowLeft:i-1,ArrowUp:i-1,Home:0,End:tabs.length-1}[e.key]; if(n===undefined) return; e.preventDefault(); sel((n+tabs.length)%tabs.length,{focus:true,user:true});});});
    const h=location.hash.match(/^#ws-([a-e])$/), hi=h?tabs.findIndex(t=>t.dataset.ws===h[1].toUpperCase()):-1;
    sel(hi>=0?hi:0,{reveal:hi>=0});
  }
})();
