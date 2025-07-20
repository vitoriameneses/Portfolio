// Reaplica a animação quando os elementos entram na tela
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
      observer.unobserve(entry.target);
    }
  });
});

document.querySelectorAll('.fade-in').forEach(el => {
  observer.observe(el);
});