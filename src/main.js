// Este es el punto de entrada de tu aplicacion
// importamos vistas
import { myFunction } from './lib/index.js';
//import { recover } from './lib/view/recoverPassword.js';
import { login } from './lib/view/welcomeView.js';
//import { accountCreation } from './lib/view/register.js';

// import { accountCreation } from './lib/view/register.js';
// import { changeRoute } from './lib/router.js';

myFunction();

// document.getElementById('root').innerHTML = recover();
document.getElementById('root').appendChild(login());
document.getElementById('root').appendChild(accountCreation());

// const init =  ()
