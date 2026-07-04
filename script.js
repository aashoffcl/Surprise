  // scroll reveal
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('show'); } });
  }, { threshold:0.15 });
  document.querySelectorAll('.fade-in').forEach(el=>io.observe(el));

  // rail dots
  const chapters = document.querySelectorAll('.chapter');
  const railDots = document.getElementById('railDots');
  chapters.forEach((ch,i)=>{
    const dot = document.createElement('div');
    dot.className='rail-dot';
    dot.dataset.idx=i;
    dot.addEventListener('click',()=>ch.scrollIntoView({behavior:'smooth'}));
    railDots.appendChild(dot);
  });
  const dots = document.querySelectorAll('.rail-dot');
  const chIO = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      const idx = [...chapters].indexOf(e.target);
      if(e.isIntersecting){ dots.forEach(d=>d.classList.remove('active')); dots[idx].classList.add('active'); }
    });
  }, { threshold:0.5 });
  chapters.forEach(ch=>chIO.observe(ch));
