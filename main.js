const capa = document.querySelector(".capa");

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;

  const progress = Math.min(scrollY / window.innerHeight, 1);

  const scale = 1 - progress * 0.3;
  const opacity = 1 - progress;
  const translateY = progress * -150;

  capa.style.transform = `
    scale(${scale})
    translateY(${translateY}px)
  `;

  capa.style.opacity = opacity;
});