import {
  registerUser,
} from '../index.js';

/* creacion de nueva cuenta con  mail -contraseña */

export const register = () => {
  const divRegister = document.createElement('div');
  const viewRegister = `
  <header>
  <div id="logoContainer">
      <img id="logo" src="imagenes/witLogo1.png" alt="logo">
  </div>
</header>
<main class="mainRegister">
  <h2>Crea tu cuenta y accede a WiT</h2>
  <br>
  <section class="registerForm">
      <form id="registerForm">
          <p>Nombre</p>
          <input type="text" id="name" class="infoBox" required autofocus></input>
          <p>Correo Electrónico</p>
          <input type="email" id="email" class="infoBox" required></input>
          <br> <br>
          <p>Contraseña</p>
          <input type="password" id="password" class="infoBox" required></input>
          <br> <br>
          <button class ="btnSignUp" type="submit" id="createaccount" value="Crear Cuenta">Crear Cuenta</button>
      </form>
  </section>
</main>
  `;
  divRegister.innerHTML = viewRegister;

  /* Variables desde ID */
  const name = divRegister.querySelector('#name');
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
    registerUser(nameUser, email, password);
    formRegister.reset();
  });
  return divRegister;
};
