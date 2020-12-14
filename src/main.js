// Este es el punto de entrada de tu aplicacion
import { myFunction } from './lib/index.js';
// import { logIn } from './lib/controllers/firebasecontroller.js';
import { welcome } from './lib/view/WelcomeTemplate.js';
import { changeRoute } from './lib/router.js';

const init = () => {
 document.getElementById('root').appendChild(welcome());
  window.addEventListener('hashchange', () => {
    myFunction();
    // eslint-disable-next-line no-console
    console.log(window.location.hash);
    changeRoute(window.location.hash);
  });
};
window.addEventListener('load', init);
