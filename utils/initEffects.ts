export const initEffects = () => {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const fine = window.matchMedia('(hover:hover) and (pointer:fine)').matches;
  const root = document.documentElement;
  const body = document.body;
  root.classList.add('js');

  /* ── loader ── */
  const loader = document.getElementById('loader');
  const cnt = document.getElementById('loadCount');
  const bar = document.getElementById('loadBar');
  
  function pad(n: number) { return ('00' + n).slice(-3); }
  function reveal() { 
    if (loader) loader.classList.add('done'); 
    body.classList.add('ready'); 
    setTimeout(() => { if(loader) loader.style.display = 'none'; }, 1000); 
  }

  if (reduce) { 
    body.classList.add('ready'); 
    if(loader) loader.style.display = 'none'; 
  } else {
    const t0 = performance.now();
    const dur = 1700;
    function tick(now: number) {
      const p = Math.min(1, (now - t0) / dur);
      const e = 1 - Math.pow(1 - p, 3);
      if (cnt) cnt.textContent = pad(Math.round(e * 100)); 
      if (bar) bar.style.width = (e * 100) + '%';
      if (p < 1) requestAnimationFrame(tick); 
      else setTimeout(reveal, 200);
    }
    tick(performance.now());
  }

  /* ── cursor & parallax ── */
  const cur = document.getElementById('cur');
  const curDot = document.getElementById('curDot');
  let mx = innerWidth / 2, my = innerHeight / 2, cx = mx, cy = my;
  
  if (fine && !reduce && cur && curDot) {
    body.classList.add('has-cur');
    const handlePointerMove = (e: PointerEvent) => { 
      mx = e.clientX; 
      my = e.clientY; 
      curDot.style.transform = `translate(${mx}px,${my}px)`; 
    };
    window.addEventListener('pointermove', handlePointerMove);
    
    document.querySelectorAll('a,button').forEach((el) => {
      el.addEventListener('pointerenter', () => { cur.classList.add('big'); });
      el.addEventListener('pointerleave', () => { cur.classList.remove('big'); });
    });

    function follow() { 
      cx += (mx - cx) * .16; 
      cy += (my - cy) * .16; 
      cur!.style.transform = `translate(${cx}px,${cy}px)`; 
      requestAnimationFrame(follow); 
    }
    follow();
  }

  /* ── reveal on scroll ── */
  const els = document.querySelectorAll('.rv');
  if ('IntersectionObserver' in window && !reduce) {
    const io = new IntersectionObserver((en) => { 
      en.forEach((x) => { 
        if (x.isIntersecting) { 
          x.target.classList.add('in'); 
          io.unobserve(x.target); 
        } 
      }); 
    }, { rootMargin: '0px 0px -8% 0px', threshold: .08 });
    els.forEach((el) => { io.observe(el); });
  } else { 
    els.forEach((el) => { el.classList.add('in'); }); 
  }

  /* ── network background ── */
  const nc = document.getElementById('net') as HTMLCanvasElement;
  if (nc) {
    const nx = nc.getContext('2d');
    let nodes: any[] = [], NW = 0, NH = 0, dpr = Math.min(window.devicePixelRatio || 1, 2);
    
    function nsize() {
      NW = innerWidth; 
      NH = innerHeight; 
      nc.width = NW * dpr; 
      nc.height = NH * dpr; 
      if(nx) nx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const n = Math.min(20, Math.round(NW * NH / 60000)); 
      nodes = [];
      for (let i = 0; i < n; i++) {
        const isBlue = Math.random() > 0.8;
        nodes.push({ 
          x: Math.random() * NW, 
          y: Math.random() * NH, 
          vx: (Math.random() - .5) * .1, 
          vy: (Math.random() - .5) * .1,
          r: isBlue ? 1.5 : 1.0,
          c: isBlue ? 'rgba(47,155,255,0.4)' : 'rgba(255,255,255,0.2)'
        });
      }
    }
    nsize(); 
    window.addEventListener('resize', nsize);
    
    function ndraw() {
      if(!nx) return;
      nx.clearRect(0, 0, NW, NH);
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        if (!reduce) { 
          a.x += a.vx; a.y += a.vy; 
          if (a.x < 0 || a.x > NW) a.vx *= -1; 
          if (a.y < 0 || a.y > NH) a.vy *= -1; 
        }
        nx.fillStyle = a.c; 
        nx.beginPath(); 
        nx.arc(a.x, a.y, a.r, 0, 6.283); 
        nx.fill();

        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j], dx = a.x - b.x, dy = a.y - b.y, d = dx * dx + dy * dy;
          if (d < 30000) { 
            nx.strokeStyle = 'rgba(255,255,255,' + (0.02 * (1 - d / 30000)) + ')'; 
            nx.beginPath(); 
            nx.moveTo(a.x, a.y); 
            nx.lineTo(b.x, b.y); 
            nx.stroke(); 
          }
        }
        const mdx = a.x - mx, mdy = a.y - my, md = mdx * mdx + mdy * mdy;
        if (fine && md < 40000) { 
          nx.strokeStyle = 'rgba(47,155,255,' + (0.06 * (1 - md / 40000)) + ')'; 
          nx.beginPath(); 
          nx.moveTo(a.x, a.y); 
          nx.lineTo(mx, my); 
          nx.stroke(); 
        }
      }
      if (!reduce && !document.hidden) requestAnimationFrame(ndraw);
    }
    ndraw();
    document.addEventListener('visibilitychange', () => { if (!document.hidden && !reduce) ndraw(); });
  }

  /* ── toolkit sphere removed ── */

  /* ── 3D scene removed for performance ── */
};
