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
   
    <h2>Crea tu cuenta y accede a WiT</h2><br>
    
    <section class="registerForm">
      <form id="registerForm" >
        <p>Nombre</p>
        <input type="text" id="name" class="infoBox" autofocus required />
        <p>Correo Electrónico</p>
        <input type="email" id="email" class="infoBox" required/>
        <br>  
        <p>Contraseña</p>
        <input type="password" id="password" class="infoBox" required></input>
        <br><br><br> 
        <button type="submit" class="btnSignUp" id="createaccount" value="Crear Cuenta">Crear Cuenta</button>
        </form> 
        </section>
 </main>
    </div>
  `;
  divRegister.innerHTML = viewRegister;

  /* Variables desde ID */
  const names = divRegister.querySelector('#name');
  const mail = divRegister.querySelector('#email');
  const pass = divRegister.querySelector('#password');
  const formRegister = divRegister.querySelector('#registerForm');

  formRegister.addEventListener('submit', (e) => {
    e.preventDefault();
    // eslint-disable-next-line no-console
    console.log('estoy escuchando');
    const name = names.value;
    const email = mail.value;
    const password = pass.value;
    // const auth = new authentication();
    // eslint-disable-next-line no-console
    console.log(name, email, password);
    registerUser(email, password, name);
    formRegister.reset();
  });
  return divRegister;
};
