import {
  registerUser,
} from '../index.js';

/* creacion de nueva cuenta con  mail -contraseña */

export const register = () => {
  const divRegister = document.createElement('div');
  divRegister.className = ('bodyWelcome');
  const viewRegister = `
  <header>
  <div id="logoContainer">
      <img id="logoprin" src="imagenes/witLogo.svg" alt="logo">
  </div>
</header>
<main class="signUP">
  <h5>Crea tu cuenta y accede a WiT</h5>
  
  <section class="containerFormSignUP">
  <h6>Registro</h6>
      <form id="registerForm">
          <label for="name">Nombre</label>
          <input type="text" id="name" class="infoBox" required autofocus></input>
          <label for="lastName">Apellido</label>
          <input type="text" id="lastName" class="infoBox" required autofocus></input>
          <label for="email">Correo Electrónico</label>
          <input type="email" id="email" class="infoBox" required></input>
          <label for="password">Contraseña</label>
          <input type="password" id="password" class="infoBox" required></input>
          <button class ="btnSignUp" type="submit" id="createaccount" value="Crear Cuenta">Crear Cuenta</button>
      </form>
  </section>
</main>
  `;
  divRegister.innerHTML = viewRegister;

  /* Variables desde ID */
  const name = divRegister.querySelector('#name');
  const lastName = divRegister.querySelector('#lastName');
  const mail = divRegister.querySelector('#email');
  const pass = divRegister.querySelector('#password');
  const formRegister = divRegister.querySelector('#registerForm');

  formRegister.addEventListener('submit', (e) => {
    e.preventDefault();
    // eslint-disable-next-line no-console
    console.log('estoy escuchando');
    const email = mail.value;
    const password = pass.value;
    const nameUser = name.value;
    const lastNameUser = lastName.value;
    registerUser(email, password, nameUser, lastNameUser);
    formRegister.reset();
  });
  return divRegister;
  // eslint-disable-next-line eol-last
};