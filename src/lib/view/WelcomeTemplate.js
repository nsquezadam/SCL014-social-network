import {
  logIn,
  logInMail,


 
} from '../index.js';

export const welcome = () => {
  const divWelcome = document.createElement('div');
  divWelcome.className = ('bodyWelcome');
  const viewWelcome = `
  <header>
  <div id="logoContainer">
  <img id="logoprin" src="imagenes/witLogo.svg" alt="logo">
  </div>
  </header>
  <main class="welcome">
  <h4>Bienvenida a</h4>
  <h5>¡La red para mujeres en el mundo tech! </h5>
  <section class="containerForm">
  <h5>Ingreso</h5>
      <form id="logInForm">
          <input type="mail" name="mail" id="logIn-mail" class="infoBox" placeholder="Ingresa tu mail" required>
          <input type="password" name="password" id="logIn-password" class="infoBox" placeholder="Contraseña" required>
          <div class="linkRecover">
              <a id="linkRecover" href="#/recoverpass"><br>
          </div>
          <h6>¿Olvidaste tu contraseña?</h6>
          </a>
          <br><button type="submit" class="btnSignIN">Ingresar</button><br>
      </form>
      <div class="containerGmailSign">
          <h6>o ingresa con tu Cuenta</h6>
          <input id="gmailLogo" type="image" src="imagenes/gmailLogo.png" name="" value="">
      </div>
      <div class="containerRegister">
          <h6>Si no tienes cuenta <a href="#/SignUp">Registrate</a> </h6><br>
      </div>
  </section>
</main>`;
  divWelcome.innerHTML = viewWelcome;

  // stateAuth();
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
    // stateAuth();
  });

  return divWelcome;
  // eslint-disable-next-line eol-last
};