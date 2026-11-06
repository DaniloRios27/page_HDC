(() => {
  const toggle = document.querySelector(".menu-toggle");
  const menu = document.getElementById("mobile-menu");
  const header = document.querySelector(".site-header");

  if (toggle && menu && header) {
    const label = toggle.querySelector(".visually-hidden");

    function setOpen(open) {
      toggle.setAttribute("aria-expanded", String(open));
      menu.hidden = !open;
      if (label) label.textContent = open ? "Cerrar menú" : "Abrir menú";
    }

    toggle.addEventListener("click", () => {
      setOpen(menu.hidden);
    });

    menu.addEventListener("click", (event) => {
      if (event.target.closest("a")) setOpen(false);
    });

    document.addEventListener("click", (event) => {
      if (!menu.hidden && !header.contains(event.target)) setOpen(false);
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && !menu.hidden) {
        setOpen(false);
        toggle.focus();
      }
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 1023 && !menu.hidden) setOpen(false);
    });
  }

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const canObserve = "IntersectionObserver" in window;

  function splitHeading(element) {
    if (element.dataset.splitDone === "true" || element.children.length > 0) return;

    const text = element.textContent.trim().replace(/\s+/g, " ");
    if (!text) return;

    const words = text.split(" ");
    const fragment = document.createDocumentFragment();

    element.setAttribute("aria-label", text);
    element.textContent = "";

    words.forEach((word, index) => {
      const outer = document.createElement("span");
      const inner = document.createElement("span");

      outer.className = "split-word";
      outer.style.setProperty("--word-index", String(index));
      outer.setAttribute("aria-hidden", "true");
      inner.textContent = word;
      outer.appendChild(inner);
      fragment.appendChild(outer);

      if (index < words.length - 1) fragment.appendChild(document.createTextNode(" "));
    });

    element.appendChild(fragment);
    element.dataset.splitDone = "true";
  }

  function setupReveals() {
    const items = document.querySelectorAll("[data-reveal], [data-split]");
    if (!items.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
    );

    items.forEach((item) => {
      if (item.hasAttribute("data-split")) splitHeading(item);
      observer.observe(item);
    });
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

  function setupTilt() {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

    document.querySelectorAll("[data-tilt]").forEach((element) => {
      let frame = 0;
      let nextX = 0;
      let nextY = 0;

      function render() {
        frame = 0;
        element.style.setProperty("--tilt-x", `${nextX.toFixed(2)}deg`);
        element.style.setProperty("--tilt-y", `${nextY.toFixed(2)}deg`);
      }

      element.addEventListener("pointermove", (event) => {
        const rect = element.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - 0.5;
        const y = (event.clientY - rect.top) / rect.height - 0.5;
        nextX = -y * 5;
        nextY = x * 5;
        if (!frame) frame = window.requestAnimationFrame(render);
      });

      element.addEventListener("pointerleave", () => {
        nextX = 0;
        nextY = 0;
        if (!frame) frame = window.requestAnimationFrame(render);
      });
    });
  }

  if (canObserve && !reducedMotion) {
    setupReveals();
    setupTilt();
    document.documentElement.classList.add("reveal-ready");
  }

  setupProgress();
})();
