import { logIn, logInMail, stateAuth } from '../index.js';

export const welcome = () => {
  const divWelcome = document.createElement('div');
  const viewWelcome = `
  <header>
  <div id="logoContainer">
      <img id="logo" src="imagenes/witLogo1.png" alt="logo">
  </div>
</header>
<main class="welcome">
  <h4>Bienvenida a</h4>
  <h5>¡La red para mujeres en el mundo tech! </h5>

  <section class="containerForm">
      <form id="logInForm">
          <input type="mail" id="logIn-mail" class="infoBox" placeholder="Ingresa tu mail" required> <br><br>
          <input type="password" id="logIn-password" class="infoBox" placeholder="Contraseña" required>
          <div class="linkRecover">
              <a id="linkRecover" href="#/recoverpass"><br>
          </div>
          <h5>¿Olvidaste tu contraseña?</h5>
          </a>
          <br><button type="submit" class="btnSignUp">Ingresar</button><br>
      </form>
      <div>
          <h5>o ingresa con tu Cuenta</h5>
          <input id="gmailLogo" type="image" src="imagenes/gmailLogo.png" name="" value="">
      </div>
      <div class="containerRegister">
          <h5>Si no tienes cuenta <a href="#/SignUp">Registrate</a> </h5><br>
      </div>
  </section>
</main>`;
  divWelcome.innerHTML = viewWelcome;
  /* Elementos  asociados a Login Gmail */
  const gmail = divWelcome.querySelector('#gmailLogo');

  gmail.addEventListener('click', () => {
    logIn();
  });

  /* Elementos y eventos asocieados a login con correo */
  const mail = divWelcome.querySelector('#logIn-mail');
  const pass = divWelcome.querySelector('#logIn-password');
  const form = divWelcome.querySelector('#logInForm');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    // eslint-disable-next-line no-console
    console.log('estoy escuchando');
    const email = mail.value;
    const password = pass.value;
    logInMail(email, password);
    stateAuth();
  });

  return divWelcome;
};
