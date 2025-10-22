document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".about-photo, .about-content");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animationPlayState = "running";
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  elements.forEach(el => {
    el.style.animationPlayState = "paused";
    observer.observe(el);
  });
});
