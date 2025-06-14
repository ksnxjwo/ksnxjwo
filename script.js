
const faders = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, { threshold: 0.1 });

faders.forEach(fade => observer.observe(fade));


if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}
window.addEventListener('load', () => {
  window.scrollTo(0, 0);
});