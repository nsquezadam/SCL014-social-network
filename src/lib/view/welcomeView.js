export const login = () => {
  const divlogIn = document.createElement('div');
  const viewLogIn = `
  <h2>Bievenida a</h2>
  <div id="logoContainer">
  <img id="logo" src="imagenes/witLogo.png" alt=""> 
  </div>
  <h3>¡La red para mujeres en el mundo tech! </h3><br>
  <div class="containerForm">
      <form id="logInForm">  
      <input type="mail" id="logIn-mail" class="formControl" placeholder="Ingresa tu mail" required> <br><br>
      <input type="password" id="logIn-password" class="formControl" placeholder="Contraseña" required><br>
      <a id="linkRecover" href="#/recoverPassword">¿Olvidate tu contraseña?</a> <br>
      <br><button type="submit" class="btnSignUp">Enviar</button><br><br>
      <h4>o ingresa con tu Cuenta</h4>
      <img id="gmailLogo" src="imagenes/gmailLogo.png" alt=""><br>
      </div>`;
  divlogIn.innerHTML = viewLogIn;
  return divlogIn;
};
