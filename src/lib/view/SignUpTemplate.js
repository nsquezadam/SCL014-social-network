import {
  registerUser,
} from '../index.js';

/* creacion de nueva cuenta con  mail -contraseña */

export const register = () => {
  const divRegister = document.createElement('div');
  const viewRegister = `
    <div class="containerLogIn">
    <div id="logoContainer">
    <img id="logo" src="imagenes/witLogo.png" alt="logo"> 
    </div>
    <h2>Crea tu cuenta y accede a WiT</h2>
    <br> <br>
    <div>
      <form id="registerForm">
        <p>Correo Electrónico</p>
        <input type="email" id="email" class="infoBox" required></input>
        <br> <br>
        <p>Contraseña</p>
        <input type="password" id="password" class="infoBox" required></input>
        <br> <br>
        <button type="submit" id="createaccount" value="Crear Cuenta">Crear Cuenta</button>
        </form> 
    </div>

    </div>
  `;
  divRegister.innerHTML = viewRegister;

  /* Variables desde ID */
  const mail = divRegister.querySelector('#email');
  const pass = divRegister.querySelector('#password');
  const formRegister = divRegister.querySelector('#registerForm');

  formRegister.addEventListener('submit', (e) => {
    e.preventDefault();
    // eslint-disable-next-line no-console
    console.log('estoy escuchando');
    const email = mail.value;
    const password = pass.value;
    registerUser(email, password);
  });
  return divRegister;
};
