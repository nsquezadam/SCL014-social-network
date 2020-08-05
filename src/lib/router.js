// nos traemos las  constante de las views
import { recover } from './view/recoverPassword.js';
import { logIn } from './view/welcomeView.js';
import { accountCreation } from './view/register.js';

const showView = (hash) => {
  const containerRoot = document.getElementById('root');
  containerRoot.innerHTML = recover();
  switch (hash) {
    case '#/':
      containerRoot.appendChild(logIn());
      break;
    case '#/personajes':
      containerRoot.appendChild(accountCreation());
      break;
    default:
      containerRoot.innerHTML = `
          <h2>no existe</h2>`;
      break;
  }
};
export const changeRoute = (hash) => {
  if (hash === '#/') {
    return showView(hash);
  } if (hash === '#/creacioncuenta') {
    return showView(hash);
  }
  return showView(hash);
};
