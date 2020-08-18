/* Nos va a dar la ruta, llamamos componentes que queremos ir mostrando */

import { welcome } from './view/WelcomeTemplate.js';
import { recover } from './view/RecoverpassTemplate.js';
import { register } from './view/SignUpTemplate.js';
import { home } from './view/homeTemplate.js';
import { createPost } from './view/postTemplate.js';

/* Exportamos una constante que nos va cambiando las rutas, al cual le pasaremos el hash */
const showTemplate = (hash) => {
  const containerRoot = document.getElementById('root');
  containerRoot.innerHTML = '';

  switch (hash) {
    case '#/':
      containerRoot.appendChild(welcome());
      break;
    case '#/SignUp':
      containerRoot.appendChild(register());
      break;
    case '#/home':
      containerRoot.appendChild(home());
      break;
    case '#/Recoverpass':
      containerRoot.appendChild(recover());
      break;
    case '#/post':
      containerRoot.appendChild(createPost());
      break;
    default:
      containerRoot.innerHTML = '<h2>Aca no hay nada, solo una nebulosa negra</h2>';
  }
};


export const changeRoute = (hash) => {
  if (hash === '#/') {
    return showTemplate(hash);
  } if (hash === '#/Welcome') {
    return showTemplate(hash);
  } if (hash === '#/home') {
    return showTemplate(hash);
  } if (hash === '#/SignUp') {
    return showTemplate(hash);
  } if (hash === '#/RecoverPass') {
    return showTemplate(hash);
  } if (hash === '#/post') {
    return showTemplate(hash);
  }
  return showTemplate(hash);
};
