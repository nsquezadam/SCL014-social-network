// login  con mail  y contraseña 
export const logIn =() => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        // ...
      }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
      
    const viewLogIn = `
    <h1>Bienvenida</h1>
    <p>
    <form id="logInForm">    
    <input type="mail" id="logIn-mail" class="infoBox" placeholder="Ingresa tu mail" required>
    <input type="password" id="logIn-password" class="infoBox" placeholder="Contraseña" required>
    <br><button type="submit" class="btnSignUp">Enviar</button>
    <p>Ingresa tu  
    
   `
 return viewLogin 
 };



