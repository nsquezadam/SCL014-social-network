/* Nos va a dar la ruta, llamamos componentes que queremos ir mostrando */

import { welcome } from './view/welcome.js';
import { recover } from './view/recoverpass.js';
import { register } from './view/signUp.js';
import { home } from './view/home.js';
import { post } from './view/postTemplate.js';

/* Exportamos una constante que nos va cambiando las rutas, al cual le pasaremos el hash */


const showTemplate = (hash) => {
  const containerRoot = document.querySelector('#root');
  containerRoot.innerHTML = '';

  switch (hash) {
    case '#/':
      containerRoot.appendChild(welcome());
      break;
    case '#/signUp':
      containerRoot.appendChild(register());
      break;
    case '#/home':
      containerRoot.appendChild(home());
      break;
    case '#/recoverpass':
      containerRoot.appendChild(recover());
      break;
    case '#/post':
      containerRoot.appendChild(post());
      break;
    default:
      containerRoot.innerHTML = '<h2>Aca no hay nada, solo una nebulosa negra</h2>';
  }
};


export const changeRoute = (hash) => {
  if (hash === '#/') {
    return showTemplate(hash);
  } if (hash === '#/welcome') {
    return showTemplate(hash);
  } if (hash === '#/home') {
    return showTemplate(hash);
  } if (hash === '#/signUp') {
    return showTemplate(hash);
  } if (hash === '#/recoverPass') {
    return showTemplate(hash);
  } if (hash === '#/post') {
    return showTemplate(hash);
  }
  return showTemplate(hash);
};
