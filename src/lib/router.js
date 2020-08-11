/* Nos va a dar la ruta, llamamos componentes que queremos ir mostrando */

import { welcome } from './view/WelcomeTemplate.js';
import { recover } from './view/RecoverpassTemplate.js';
import { register } from './view/SignUpTemplate.js';
import { home } from './view/homeTemplate.js';
import { post } from './view/postTemplate.js';

/* Exportamos una constante que nos va cambiando las rutas, al cual le pasaremos el hash */
const showTemplate = (hash) => {
  const containerRoot = document.getElementById('root');
  containerRoot.innerHTML = '';

  switch (hash) {
    case '#/':
      containerRoot.appendChild(welcome());
      break;
    case '#/SignUpTemplate':
      containerRoot.appendChild(register());
      break;
    case '#/homeTemplate':
      containerRoot.appendChild(home());
      break;
    case '#/RecoverpassTemplate':
      containerRoot.appendChild(recover());
      break;
    case '#/postTemplate':
      containerRoot.appendChild(post());
      break;
    default:
      containerRoot.innerHTML = '<h2>Aca no ha nada solo una nebulosa negra</h2>';
  }
};


export const changeRoute = (hash) => {
  if (hash === '#/') {
    return showTemplate(hash);
  } if (hash === '#/WelcomeTemplate') {
    return showTemplate(hash);
  } if (hash === '#/homeTemplate') {
    return showTemplate(hash);
  } if (hash === '#/SignUpTemplate') {
    return showTemplate(hash);
  } if (hash === '#/RecoverPassTemplate') {
    return showTemplate(hash);
  } if (hash === '#/postTemplate') {
    return showTemplate(hash);
  }
  return showTemplate(hash);
};
