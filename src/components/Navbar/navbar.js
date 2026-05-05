export function initNavbar() {
  let timer = null;

  function mettreAJour() {
    // Si on est tout en haut → navbar toujours visible, aucun timer
    if (window.scrollY === 0) {
      clearTimeout(timer);
      document.body.classList.remove('navbar-cachee');
      return; // on s'arrête là, pas de timer à lancer
    }

    // Sinon (on a scrollé) → affiche la navbar puis la cache après 2s
    document.body.classList.remove('navbar-cachee');
    clearTimeout(timer);
    timer = setTimeout(() => {
      document.body.classList.add('navbar-cachee');
    }, 2000);
  }

  // Hover en haut : garde la navbar visible
  function gererEntree() {
    clearTimeout(timer);
    document.body.classList.remove('navbar-cachee');
  }

  // Souris quitte la zone du haut : relance le timer (sauf si on est en haut)
  function gererSortie() {
    if (window.scrollY === 0) return; // en haut → on ne cache pas
    timer = setTimeout(() => {
      document.body.classList.add('navbar-cachee');
    }, 2000);
  }

  const detecteur = document.querySelector('.navbar-detecteur');

  window.addEventListener('scroll', mettreAJour);

  if (detecteur) {
    detecteur.addEventListener('mouseenter', gererEntree);
    detecteur.addEventListener('mouseleave', gererSortie);
  }

  return function cleanup() {
    window.removeEventListener('scroll', mettreAJour);
    clearTimeout(timer);
    if (detecteur) {
      detecteur.removeEventListener('mouseenter', gererEntree);
      detecteur.removeEventListener('mouseleave', gererSortie);
    }
  };
}
