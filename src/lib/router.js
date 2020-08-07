// nos traemos las  constante de las views
import { recover } from './view/recoverPassTemplate.js';
import { welcome } from './view/welcomeTemplate.js';
import { accountCreation } from './view/register.js';


const showTemplate = (hash) => {
  const containerRoot = document.getElementById('root');
  containerRoot.innerHTML = welcome();
  switch (hash) {
    case '#/':
      containerRoot.appendChild(welcome());
      break;
    case '#/welcomeTemplate':
      containerRoot.appendChild(welcome());
      break;
    case '#/register':
      containerRoot.appendChild(accountCreation());
      break;
    case '#/recoverPassTemplate':
      containerRoot.appendChild(recover());
      break;
    default:
      containerRoot.innerHTML = `
            <h2>no existe</h2>`;
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
  } if (hash === '#/register') {
    return showTemplate(hash);
  }
  return showTemplate(hash);
};
