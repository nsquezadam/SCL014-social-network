// nos traemos las  constante de las views
import { menu } from './view/templateMenu.js';
import { home, signUp } from './view/templateHome.js';
import { personajes } from './view/templatePersonajes.js';

export const changeRoute = (hash) => {
  if (hash === '#/') {
    return showTemplate(hash);
  } if (hash === '#/personajes') {
    return showTemplate(hash);
  }
  return showTemplate(hash);
};
const showTemplate = (hash) => {
  const containerRoot = document.getElementById('root');
  containerRoot.innerHTML = menu();
  switch (hash) {
    case '#/':
      containerRoot.appendChild(home());
      break;
    case '#/personajes':
      containerRoot.appendChild(personajes());
      break;
    default:
      containerRoot.innerHTML = `
          <h2>no existe</h2>`;
      break;
  }
};
