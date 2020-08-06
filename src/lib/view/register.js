export const accountCreation = () => {
  const divPersonalData = document.createElement('div');
  const viewAccount = `
    <div id="logoContainer">
    <img id="logo" src="imagenes/witLogo.png" alt="logo"> 
    </div>
    <div class="boxContainer">
      <form>
      <input type="text" name="" placeholder="Nombre Completo">   
      <label for="dateBirth">Fecha de Nacimiento:</label>
      <input type="date" id="dateBirth" name="date birth"
        min="1900-01-01" max="2018-12-31"> 
      <input type="mail" id="logIn-mail" class="formControl" placeholder="Correo Electronico" require>
      <input type="password" id="logIn-password" class="formControl" placeholder="Contraseña" required>
      </form>
    </div>`;
  divPersonalData.innerHTML = viewAccount;
  return divPersonalData;
};
