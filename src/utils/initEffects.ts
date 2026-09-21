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

  /* ── cursor ── */
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
      const n = Math.min(90, Math.round(NW * NH / 20000)); 
      nodes = [];
      for (let i = 0; i < n; i++) nodes.push({ x: Math.random() * NW, y: Math.random() * NH, vx: (Math.random() - .5) * .25, vy: (Math.random() - .5) * .25 });
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
        nx.fillStyle = 'rgba(190,210,255,.35)'; 
        nx.beginPath(); 
        nx.arc(a.x, a.y, 1.3, 0, 6.283); 
        nx.fill();
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j], dx = a.x - b.x, dy = a.y - b.y, d = dx * dx + dy * dy;
          if (d < 19600) { 
            nx.strokeStyle = 'rgba(110,160,255,' + (0.14 * (1 - d / 19600)) + ')'; 
            nx.beginPath(); 
            nx.moveTo(a.x, a.y); 
            nx.lineTo(b.x, b.y); 
            nx.stroke(); 
          }
        }
        const mdx = a.x - mx, mdy = a.y - my, md = mdx * mdx + mdy * mdy;
        if (fine && md < 32400) { 
          nx.strokeStyle = 'rgba(47,155,255,' + (0.35 * (1 - md / 32400)) + ')'; 
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

  /* ── toolkit sphere ── */
  const words = ['HTML5', 'CSS3', 'JavaScript', 'React', 'Next.js', 'Three.js', 'Tailwind', 'Vite', 'Node.js', 'Express', 'Flask', 'MySQL', 'MongoDB', 'Java', 'Python', 'C', 'Git', 'GitHub'];
  const tkCount = document.getElementById('tkCount');
  if(tkCount) tkCount.textContent = words.length + ' technologies';
  
  const sc = document.getElementById('sphere') as HTMLCanvasElement;
  if (sc) {
    const sx = sc.getContext('2d');
    let SW = 0, pts: any[] = [];
    const n = words.length, ga = Math.PI * (3 - Math.sqrt(5));
    for (let i = 0; i < n; i++) { 
      const y = 1 - (i / (n - 1)) * 2, r = Math.sqrt(1 - y * y), th = ga * i; 
      pts.push({ w: words[i], x: Math.cos(th) * r, y: y, z: Math.sin(th) * r }); 
    }
    let ax = .0016, ay = .004, drag = false, lx = 0, ly = 0, sVisible = true;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    
    function ssize() { 
      const b = sc.getBoundingClientRect(); 
      SW = b.width; 
      sc.width = b.width * dpr; 
      sc.height = b.height * dpr; 
      if(sx) sx.setTransform(dpr, 0, 0, dpr, 0, 0); 
    }
    ssize(); 
    window.addEventListener('resize', ssize);
    
    sc.addEventListener('pointerdown', (e) => { drag = true; lx = e.clientX; ly = e.clientY; sc.setPointerCapture(e.pointerId); });
    sc.addEventListener('pointermove', (e) => { if (!drag) return; ay = (e.clientX - lx) * .0009; ax = -(e.clientY - ly) * .0009; lx = e.clientX; ly = e.clientY; });
    ['pointerup', 'pointercancel'].forEach((ev) => { sc.addEventListener(ev, () => { drag = false; }); });
    
    new IntersectionObserver((en) => { sVisible = en[0].isIntersecting; if (sVisible) sloop(); }).observe(sc);
    
    function rot(p: any, a: number, b: number) { 
      const ca = Math.cos(a), sa = Math.sin(a), cb = Math.cos(b), sb = Math.sin(b);
      const y1 = p.y * ca - p.z * sa, z1 = p.y * sa + p.z * ca; 
      p.y = y1; p.z = z1;
      const x2 = p.x * cb + p.z * sb, z2 = -p.x * sb + p.z * cb; 
      p.x = x2; p.z = z2; 
    }
    
    function sframe() {
      if(!sx) return;
      if (!drag) { ax += (.0012 - ax) * .02; ay += (.004 - ay) * .02; }
      const R = SW * .38, c = SW / 2;
      sx.clearRect(0, 0, SW, SW);
      pts.forEach((p) => { rot(p, reduce ? 0 : ax, reduce ? 0 : ay); });
      const sorted = pts.slice().sort((a, b) => a.z - b.z);
      sorted.forEach((p) => {
        const d = (p.z + 1) / 2, s = 11 + d * 15, al = .22 + d * .78;
        sx.font = '600 ' + s.toFixed(1) + 'px "JetBrains Mono",ui-monospace,monospace';
        sx.textAlign = 'center'; sx.textBaseline = 'middle';
        sx.fillStyle = d > .72 ? 'rgba(255,255,255,' + al + ')' : 'rgba(170,190,225,' + al + ')';
        sx.fillText(p.w, c + p.x * R, c + p.y * R);
      });
      sx.strokeStyle = 'rgba(110,160,255,.10)'; sx.lineWidth = 1; sx.beginPath(); sx.arc(c, c, R * 1.18, 0, 6.283); sx.stroke();
      sx.strokeStyle = 'rgba(110,160,255,.06)'; sx.beginPath(); sx.arc(c, c, R * 1.38, 0, 6.283); sx.stroke();
    }
    
    let srun = false;
    function sloop() { 
      if (srun) return; 
      srun = true; 
      (function step() { 
        if (!sVisible || reduce) { 
          srun = false; 
          if (reduce) sframe(); 
          return; 
        } 
        sframe(); 
        requestAnimationFrame(step); 
      })(); 
    }
    sloop();
  }

  /* ── three.js scene ── */
  const canvas = document.getElementById('scene') as HTMLCanvasElement;
  const THREE = (window as any).THREE;
  if (THREE && canvas) {
    const hero = document.querySelector('.hero');
    const fig = document.querySelector('.portrait');
    let renderer: any; 
    try { 
      renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true, antialias: true }); 
    } catch(e) { }
    
    if(renderer) {
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100); 
      camera.position.z = 9;
      const rig = new THREE.Group(); 
      scene.add(rig);
      
      const core = new THREE.Mesh(
        new THREE.IcosahedronGeometry(2.1, 1),
        new THREE.MeshStandardMaterial({ color: 0x2a4fd6, transparent: true, opacity: 0.22, flatShading: true, roughness: 0.25, metalness: 0.6 })
      ); 
      rig.add(core);
      
      const wire = new THREE.LineSegments(
        new THREE.EdgesGeometry(new THREE.IcosahedronGeometry(2.5, 1)),
        new THREE.LineBasicMaterial({ color: 0x4c8dff, transparent: true, opacity: 0.6 })
      ); 
      rig.add(wire);
      
      const ring = new THREE.Mesh(
        new THREE.TorusGeometry(3.4, 0.012, 8, 160),
        new THREE.MeshBasicMaterial({ color: 0xc07fd0, transparent: true, opacity: 0.8 })
      ); 
      ring.rotation.x = 1.15; 
      rig.add(ring);
      
      const ring2 = ring.clone(); 
      ring2.material = ring.material.clone(); 
      ring2.material.color.set(0x2f9bff); 
      ring2.material.opacity = 0.35; 
      ring2.scale.setScalar(1.22); 
      ring2.rotation.set(0.5, 0.4, 0); 
      rig.add(ring2);
      
      const pc = 380, pos = new Float32Array(pc * 3);
      for (let i = 0; i < pc; i++) {
        const r = 5 + Math.random() * 9, th = Math.random() * Math.PI * 2, ph = Math.acos(2 * Math.random() - 1);
        pos[i * 3] = r * Math.sin(ph) * Math.cos(th);
        pos[i * 3 + 1] = r * Math.sin(ph) * Math.sin(th);
        pos[i * 3 + 2] = r * Math.cos(ph) - 3;
      }
      const pg = new THREE.BufferGeometry(); 
      pg.setAttribute('position', new THREE.BufferAttribute(pos, 3));
      const points = new THREE.Points(pg, new THREE.PointsMaterial({ color: 0xbfd0ff, size: 0.03, transparent: true, opacity: 0.7 })); 
      scene.add(points);
      
      scene.add(new THREE.AmbientLight(0xffffff, 0.5));
      const l1 = new THREE.PointLight(0x4c8dff, 2.2, 30); 
      l1.position.set(-5, 4, 6); 
      scene.add(l1);
      
      const l2 = new THREE.PointLight(0xc07fd0, 1.8, 30); 
      l2.position.set(6, -3, 5); 
      scene.add(l2);

      function place() {
        if (!canvas) return;
        const w = canvas.clientWidth, h = canvas.clientHeight; 
        if (!w || !h) return;
        renderer.setSize(w, h, false); 
        camera.aspect = w / h; 
        camera.updateProjectionMatrix();
        const vh = 2 * 9 * Math.tan(22.5 * Math.PI / 180), vw = vh * camera.aspect;
        if (hero && fig) {
          const hr = hero.getBoundingClientRect(), fr = fig.getBoundingClientRect();
          const cx = (fr.left + fr.width / 2 - hr.left) / w, cy = (fr.top + fr.height / 2 - hr.top) / h;
          rig.position.x = (cx - 0.5) * vw; 
          rig.position.y = -(cy - 0.5) * vh;
          rig.scale.setScalar(w > 900 ? 0.82 : 0.6);
        }
      }
      window.addEventListener('resize', place); 
      place(); 
      setTimeout(place, 700); 
      setTimeout(place, 2200);

      let tmx = 0, tmy = 0, ttx = 0, tty = 0;
      window.addEventListener('pointermove', (e) => { 
        tmx = e.clientX / window.innerWidth - 0.5; 
        tmy = e.clientY / window.innerHeight - 0.5; 
      });
      
      let tvisible = true, clock = new THREE.Clock(), trunning = false;
      if (hero) {
        new IntersectionObserver((en) => { 
          tvisible = en[0].isIntersecting; 
          if (tvisible && !reduce) tloop(); 
        }).observe(hero);
      }
      
      function tframe() {
        const t = clock.getElapsedTime(); 
        ttx += (tmx - ttx) * 0.05; 
        tty += (tmy - tty) * 0.05;
        const s = Math.min(window.scrollY / window.innerHeight, 1.2);
        core.rotation.y = t * 0.18 + ttx * 1.2; 
        core.rotation.x = t * 0.1 + tty * 0.8 + s;
        wire.rotation.y = -t * 0.12 + ttx * 0.8; 
        wire.rotation.x = t * 0.06 + s * 0.6;
        ring.rotation.z = t * 0.2; 
        ring2.rotation.z = -t * 0.14;
        points.rotation.y = t * 0.02 + ttx * 0.2; 
        points.rotation.x = tty * 0.15;
        renderer.render(scene, camera);
      }
      
      function tloop() { 
        if (trunning) return; 
        trunning = true; 
        (function step() { 
          if (!tvisible) { 
            trunning = false; 
            return; 
          } 
          tframe(); 
          requestAnimationFrame(step); 
        })(); 
      }
      if (reduce) tframe(); else tloop();
    }
  }
};
