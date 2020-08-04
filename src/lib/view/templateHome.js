export const home = () => {
  const divHome = document.createElement('div');
  const viewHome = `
<h1>Hola Mundorijillo</h1>`;
  divHome.innerHTML = viewHome;
  return divHome;
};
export const signUp = () => {
  const divSignUp = document.createElement('div');
  const viewSignUP = `
    <section class="logIn">
    <form id="logInForm">    
    <input type="mail" id="logIn-mail" class="formControl" placeholder="Ingresa tu mail" required>
    <input type="password" id="logIn-password" class="formControl" placeholder="Contraseña" required>
    <br><button type="submit" class="btnSignUp">Enviar</button>
    </section>
    `;
  divSignUp.innerHTML = viewSignUP;
  return divSignUp;
};
