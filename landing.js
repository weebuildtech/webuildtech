/* WeBuild Landing — motion & interactions */
(function () {
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- hero entrance ---------- */
  var hero = document.querySelector('.hero');
  window.addEventListener('load', function () {
    requestAnimationFrame(function () { hero.classList.add('loaded'); });
  });
  /* fallback if load already fired */
  if (document.readyState === 'complete') hero.classList.add('loaded');
  setTimeout(function () { hero.classList.add('loaded'); }, 900);
  /* depois da entrada o título deixa de recortar, para a caixa tracejada aparecer inteira */
  setTimeout(function () { hero.classList.add('settled'); }, reduced ? 0 : 2200);

  /* ---------- título anotado: acende uma dor por vez (fila → totem, planilha → sistema, cliente → WhatsApp + site) ---------- */
  var lines = [].slice.call(document.querySelectorAll('#hero-h .line'));
  var cur = -1, timer = null, heroVisible = true, started = false;
  function step() {
    if (cur >= 0) lines[cur].classList.remove('is-on');
    cur = (cur + 1) % lines.length;
    lines[cur].classList.add('is-on');
  }
  function play() {
    if (!started || timer || !heroVisible || document.hidden) return;
    timer = setInterval(step, reduced ? 4200 : 2800);
  }
  function pause() { clearInterval(timer); timer = null; }
  if (lines.length) {
    setTimeout(function () { started = true; step(); play(); }, reduced ? 0 : 1900);
    if ('IntersectionObserver' in window) {
      new IntersectionObserver(function (en) {
        heroVisible = en[0].isIntersecting;
        heroVisible ? play() : pause();
      }).observe(hero);
    }
    document.addEventListener('visibilitychange', function () { document.hidden ? pause() : play(); });
  }

  /* ---------- palco: hero preso enquanto Soluções sobe por cima ---------- */
  var heroBox = hero.querySelector('.container');
  function setHeroTop() {
    /* hero mais alto que a tela: prende mais acima, para o CTA aparecer antes de ser coberto */
    hero.style.setProperty('--hero-top', Math.min(0, window.innerHeight - hero.offsetHeight) + 'px');
  }
  setHeroTop();
  window.addEventListener('resize', setHeroTop);
  var stageTick = false;
  function onScrollStage() {
    if (reduced || stageTick) return;
    stageTick = true;
    requestAnimationFrame(function () {
      /* enquanto é coberto, o conteúdo recua: sobe um pouco, encolhe 4% e apaga */
      var p = Math.min(1, Math.max(0, window.scrollY / hero.offsetHeight));
      heroBox.style.transform = 'translateY(' + (-p * 60) + 'px) scale(' + (1 - p * 0.04) + ')';
      heroBox.style.opacity = String(Math.max(0, 1 - p * 1.3));
      stageTick = false;
    });
  }
  window.addEventListener('scroll', onScrollStage, { passive: true });
  onScrollStage();

  /* ---------- nav scrolled state ---------- */
  var nav = document.getElementById('nav');
  function onScrollNav() {
    nav.classList.toggle('scrolled', window.scrollY > 30);
  }
  window.addEventListener('scroll', onScrollNav, { passive: true });
  onScrollNav();

  /* ---------- scroll reveal with stagger ---------- */
  var io = !('IntersectionObserver' in window) ? null : new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (!en.isIntersecting) return;
      var el = en.target;
      var siblings = el.parentElement ? [].slice.call(el.parentElement.children).filter(function (c) {
        return c.classList && c.classList.contains('rv') && !c.classList.contains('in');
      }) : [el];
      var idx = Math.max(0, siblings.indexOf(el));
      setTimeout(function () { el.classList.add('in'); }, reduced ? 0 : Math.min(idx * 90, 360));
      io.unobserve(el);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  /* sem IntersectionObserver tudo entra revelado; o resto da IIFE tem que continuar rodando */
  document.querySelectorAll('.rv').forEach(function (el) {
    if (io) { io.observe(el); } else { el.classList.add('in'); }
  });

  /* ---------- parallax glows ---------- */
  if (!reduced) {
    var pEls = [].slice.call(document.querySelectorAll('[data-parallax]'));
    var ticking = false;
    function onScrollPar() {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(function () {
        var y = window.scrollY;
        pEls.forEach(function (el) {
          var f = parseFloat(el.getAttribute('data-parallax')) || 0;
          el.style.transform = 'translateY(' + (y * f) + 'px)';
        });
        ticking = false;
      });
    }
    window.addEventListener('scroll', onScrollPar, { passive: true });
  }

  /* ---------- smooth anchor offset ---------- */
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      var href = a.getAttribute('href');
      if (href.length > 1) {
        var el = document.querySelector(href);
        if (el) {
          e.preventDefault();
          var top = el.getBoundingClientRect().top + window.scrollY - 70;
          window.scrollTo({ top: top, behavior: reduced ? 'auto' : 'smooth' });
        }
      }
    });
  });
})();
