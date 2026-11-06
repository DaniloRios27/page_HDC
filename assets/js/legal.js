(() => {
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const canObserve = "IntersectionObserver" in window;

  function setupReveals() {
    const items = document.querySelectorAll(".legal-reveal");
    if (!items.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -5% 0px" }
    );

    items.forEach((item) => observer.observe(item));
    document.documentElement.classList.add("reveal-ready");
  }

  function setupProgress() {
    const bar = document.querySelector(".scroll-progress span");
    if (!bar) return;

    let frame = 0;

    function update() {
      frame = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const progress = max > 0 ? Math.min(window.scrollY / max, 1) : 0;
      bar.style.setProperty("--progress", progress.toFixed(4));
    }

    function schedule() {
      if (frame) return;
      frame = window.requestAnimationFrame(update);
    }

    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
  }

  function setupToc() {
    const links = Array.from(document.querySelectorAll(".legal-toc a[href^='#']"));
    if (!links.length || !canObserve) return;

    const map = new Map();
    links.forEach((link) => {
      const section = document.getElementById(link.getAttribute("href").slice(1));
      if (section) map.set(section, link);
    });

    if (!map.size) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          links.forEach((link) => link.classList.remove("is-active"));
          const active = map.get(entry.target);
          if (active) active.classList.add("is-active");
        });
      },
      { rootMargin: "-12% 0px -72% 0px", threshold: 0 }
    );

    map.forEach((_, section) => observer.observe(section));
  }

  if (canObserve && !reducedMotion) setupReveals();
  setupProgress();
  setupToc();
})();
