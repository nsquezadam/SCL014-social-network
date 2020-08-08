export const recover = () => {
  const divRecover = document.createElement('div');
  const viewRecover = `
  <div>
  <div id="logoContainer">
  <img id="logo" src="imagenes/witLogo.png" alt="logo"> 
  </div>
  <h3>Escribe tú correo electrónico y te enviaremos un link para reestablecer tu contraseña</h3>
  <br> <br>
  <input type="email" id="email" class="infoBox" required></input>
  <br> <br>
  <input type="submit" id="resendpass" value="Enviar"></input>
  </div>`;
  divRecover.innerHTML = viewRecover;
  return divRecover;
};
