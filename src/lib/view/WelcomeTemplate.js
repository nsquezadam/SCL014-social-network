export const welcome = () => {
  /* const divWelcome = document.createElement('div') */
  const viewWelcome = `
    <<h2>Bievenida a</h2>
    <div id="logoContainer">
    <img id="logo" src="images/witLogo.png" alt="logo"> 
    </div>
    <h3>¡La red para mujeres en el mundo tech! </h3><br>
    <div class="containerForm">
      <form id="logInForm">  
        <input type="mail" id="logIn-mail" class="infoBox" placeholder="Ingresa tu mail" required> <br><br>
        <input type="password" id="logIn-password" class="infoBox" placeholder="Contraseña" required><br>
        <a id="linkRecover" href="#/recoverpassTemplate">¿Olvidate tu contraseña?</a> <br>
        <br><button type="submit" class="btnSignUp">Enviar</button><br><br>
        <h4>o ingresa con tu Cuenta</h4>
        <input id="gmailLogo" type="image" src ="imagenes/gmailLogo.png" name="" value="">
    </div>`;
  // divWelcome.innerHTML = viewWelcome;
  return viewWelcome;
};
