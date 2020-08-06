// nos traemos las  constante de las views
import { recover } from './view/recoverPassword.js';
import { welcome } from './view/welcomeView.js';
import { accountCreation } from './view/register.js';


const showTemplate = (hash) => {
  const containerRoot = document.getElementById('root');
  containerRoot.innerHTML = welcome();
  switch (hash) {
    case '#/':
      containerRoot.appendChild(welcome());
      break;
    case '#/welcomeView':
      containerRoot.appendChild(welcome());
      break;
    case '#/register':
      containerRoot.appendChild(accountCreation());
      break;
    case '#/recoverPassword':
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
  } if (hash === '#/welcomeView') {
    return showTemplate(hash);
  } if (hash === '#/recoverPassword') {
    return showTemplate(hash);
  } if (hash === '#/register') {
    return showTemplate(hash);
  }
  return showTemplate(hash);
};