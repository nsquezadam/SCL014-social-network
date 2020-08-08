export const register = () => {
  const divPersonalData = document.createElement('div');
  const viewAccount = `
  <div class="containerLogIn">
  <div id="logoContainer"> 
  <img src="images/witLogo.png" alt="Logo">
  </div>
  <h2>Crea tu cuenta y accede a WiT</h2>
  <br> <br>
  <form class="signUpForm">
  <label for="name">Nombre Completo</label><br>
  <input type="text" id="name" class="infoBox" required></input>
  <br> <br>
  <label for="email">Correo Electrónico</label><br>
  <input type="email" id="email" class="infoBox" required></input>
  <br> <br>
  <label for="birthdate">Fecha de Nacimiento</label><br>
  <input type="date" id="birthdate" class="infoBox" required></input>
  <br> <br>
  <label for="password">Contraseña</label><br>
  <input type="password" id="password" class="infoBox" required></input>
  <br> <br>
  <label for="password">Confirmar Contraseña</label>
  <br>
  <input type="password" id="password" class="infoBox" required></input>
  <br> <br>
  <input type="checkbox" id="conditions" required> Acepto condiciones de uso y reglas de comunidad </input>
  <br> <br>
  <input type="submit" id="createaccount" value="Crear Cuenta"></input>
  </form>
  </div>
  `;
  divPersonalData.innerHTML = viewAccount;
  return divPersonalData;
};
