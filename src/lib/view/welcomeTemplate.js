export const welcome = () => {
  const divWelcome = document.createElement('div');
  const viewWelcome = `
  <header>
  <h2>Bievenida a</h2>
  <div id="logoContainer">
  <img id="logo" src="imagenes/witLogo.png" alt="logo"> 
  </div>
  <h3>¡La red para mujeres en el mundo tech! </h3><br>
  </header>
  <main>
  <div class="containerForm">
      <form id="logInForm">  
      <input type="mail" id="logIn-mail" class="infoBox" placeholder="Ingresa tu mail" required> <br><br>
      <input type="password" id="logIn-password" class="infoBox" placeholder="Contraseña" required><br>
      <a id="linkRecover" href= "#/recoverPassTemplate">¿Olvidate tu contraseña?</a> <br>
      <br><button type="submit" class="btnSignUp">Enviar</button><br><br>
  </div>
  <div>
    <h4>o ingresa con tu Cuenta</h4>
    <input  id="gmailLogo" type="image" src ="imagenes/gmailLogo.png" name="" value=""><br><br>
  </div>
  <div class="containerLinkRegister">
    <a id="linkRecover" href="#/register">Si no tienes cuenta registraste</a> <br>
  </div>      
  </main>`;
  divWelcome.innerHTML = viewWelcome;
  return divWelcome;
};
