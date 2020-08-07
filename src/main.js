// Este es el punto de entrada de tu aplicacion
// importamos vistas
import { myFunction } from './lib/index.js';
// import { recover } from './lib/view/RecoverpassTemplate.js';
import { welcome } from './lib/view/welcomeTemplate.js';
// import { accountCreation } from './lib/view/register.js';
import { changeRoute } from './lib/router.js';

// document.getElementById('root').innerHTML = recover();
// document.getElementById('root').appendChild(login());
// document.getElementById('root').appendChild(accountCreation());

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
