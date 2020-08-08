export const register = () => {
  const divPersonalData = document.createElement('div');
  const viewAccount = `
  <div class="containerLogIn">
  <div id="logoContainer"> 
  <img src="images/witLogo.png" alt="Logo">
  </div>
  <h1>Crea tu cuenta y accede a WiT</h1>
  <br> <br>
  <p>Nombre Completo</p>
  <input type="text" id="name" class="infoBox" required></input>
  <br> <br>
  <p>Correo Electrónico</p>
  <input type="email" id="email" class="infoBox" required></input>
  <br> <br>
  <p>Fecha de Nacimiento</p>
  <input type="date" id="birthdate" class="infoBox" required></input>
  <br> <br>
  <p>Contraseña</p>
  <input type="password" id="password" class="infoBox" required></input>
  <br> <br>
  <p>Confirmar Contraseña</p>
  <input type="password" id="password" class="infoBox" required></input>
  <br> <br>
  
  <input type="checkbox" id="conditions" required> Acepto condiciones de uso y reglas de comunidad </input>
  <br> <br>
  <input type="submit" id="createaccount" value="Crear Cuenta"></input>
  </div>
  `;
  divPersonalData.innerHTML = viewAccount;
  return divPersonalData;
};
