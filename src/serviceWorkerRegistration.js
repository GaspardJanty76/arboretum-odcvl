// serviceWorkerRegistration.js

// Vérifie si le navigateur supporte les Service Workers
const isLocalhost = Boolean(
    window.location.hostname === 'localhost' ||
      window.location.hostname === '[::1]' ||
      window.location.hostname === '127.0.0.1'
  );
  
  export function register() {
    if ('serviceWorker' in navigator) {
      // Enregistrement du service worker
      window.addEventListener('load', () => {
        const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`;
  
        if (isLocalhost) {
          // Vérifie si le service worker est bien actif en localhost
          checkValidServiceWorker(swUrl);
        } else {
          // Enregistre le service worker
          registerValidSW(swUrl);
        }
      });
    }
  }
  
  function registerValidSW(swUrl) {
    navigator.serviceWorker
      .register(swUrl)
      .then((registration) => {
        console.log('Service Worker enregistré : ', registration);
      })
      .catch((error) => {
        console.error('L\'enregistrement du Service Worker a échoué : ', error);
      });
  }
  
  function checkValidServiceWorker(swUrl) {
    // Vérifie si le service worker existe à l'URL spécifiée
    fetch(swUrl)
      .then((response) => {
        if (
          response.status === 404 ||
          response.headers.get('content-type')?.indexOf('javascript') === -1
        ) {
          // Si le service worker n'est pas trouvé, supprime-le
          navigator.serviceWorker.ready.then((registration) => {
            registration.unregister();
          });
        } else {
          // Enregistre un service worker valide
          registerValidSW(swUrl);
        }
      })
      .catch(() => {
        console.log(
          'Aucun service worker trouvé. L\'application fonctionne hors ligne en mode de développement.'
        );
      });
  }
  