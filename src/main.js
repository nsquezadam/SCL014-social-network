// Este es el punto de entrada de tu aplicacion
// import { post } from './lib/controllers/firebasecontroller';
import { myFunction } from './lib/index.js';
// import { logIn } from './lib/controllers/firebasecontroller.js';
import { welcome } from './lib/view/welcome.js';
import { changeRoute } from './lib/router.js';

const init = () => {
 document.getElementById('root').appendChild(welcome());
  window.addEventListener('hashchange', () => {
    changeRoute(window.location.hash);
    myFunction();
    // eslint-disable-next-line no-console
    console.log(window.location.hash);
   
  });
};
window.addEventListener('load', init);
