// ============================================================
// scrollAnimations.js
// Ajoute la classe "visible" aux éléments quand ils entrent
// dans le viewport → déclenche les animations CSS
// ============================================================

export function initScrollAnimations() {

  // IntersectionObserver = surveille quand un élément
  // devient visible dans la fenêtre du navigateur
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // L'élément est visible → on ajoute "visible"
          entry.target.classList.add('visible');
          // On arrête de surveiller cet élément (animation une seule fois)
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15,  // se déclenche quand 15% de l'élément est visible
      rootMargin: '0px 0px -60px 0px' // légèrement avant le bord bas
    }
  );

  // On observe tous les éléments qui ont la classe "animate"
  const elements = document.querySelectorAll('.animate');
  elements.forEach((el) => observer.observe(el));

  // Nettoyage
  return () => observer.disconnect();
}
