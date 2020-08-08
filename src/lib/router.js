// nos traemos las  constante de las views
import { recover } from './view/recoverPassTemplate.js';
import { welcome } from './view/welcomeTemplate.js';
import { register } from './view/signUpTemplate.js';
import { home } from './view/homeTemplate.js';
import { post } from './view/postTemplate.js';


const showTemplate = (hash) => {
  const containerRoot = document.getElementById('root');
  containerRoot.innerHTML = '';
  switch (hash) {
    case '':
      containerRoot.appendChild(welcome());
      break;
    case '#/recoverPassTemplate':
      containerRoot.appendChild(recover());
      break;
    case '#/signUpTemplate':
      containerRoot.appendChild(register());
      break;
    case '#/homeTemplate':
      containerRoot.appendChild(home());
      break;
    case '#/postTemplate':
      containerRoot.appendChild(post());
      break;
    default:
      containerRoot.innerHTML = `
            <h2>Aca no hay nada solo una nebulosa negra</h2>`;
      break;
  }
};
// se hace el ruteo de todas las paginas  a travez de hash
export const changeRoute = (hash) => {
  if (hash === '#/') {
    return showTemplate(hash);
  } if (hash === '#/welcomeTemplate') {
    return showTemplate(hash);
  } if (hash === '#/recoverPassTemplate') {
    return showTemplate(hash);
  } if (hash === '#/signUpTemplate') {
    return showTemplate(hash);
  } if (hash === '#/homeTemplate') {
    return showTemplate(hash);
  } if (hash === '#/postTemplate') {
    return showTemplate(hash);
  }
  return showTemplate(hash);
};
