// aqui exportaras las funciones que necesites

export const myFunction = () => {
  // aqui tu codigo
  // console.log ('Hola mundo!');
};

// login Google
export const logIn = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const token = result.credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      console.log('estas logueado');
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      const credential = error.credential;
      // ...
    });
};

/* Log In con Correo y Contraseña */
export const logInMail = (email, password) => {
  console.log(email, password);
  firebase.auth().signInWithEmailAndPassword(email, password).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // [START_EXCLUDE]
    if (errorCode === 'auth/wrong-password') {
      alert('Wrong password.');
    } else {
      alert(errorMessage);
    }
    console.log(error);
    document.getElementById('quickstart-sign-in').disabled = false;
    // [END_EXCLUDE]
  });
};

/* Registro Usuarios con correo y password */

export const registerUser = (email, password) => {
  console.log(email, password);
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(() => {
      firebase.auth().currentUser.sendEmailVerification()
        .then(() => {
        // Email Verification sent!
        // [START_EXCLUDE]
          alert('Email Verification Sent!');
        // [END_EXCLUDE]
        });
    })
    .catch((error) => {
    // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // [START_EXCLUDE]
      if (errorCode === 'auth/weak-password') {
        alert('The password is too weak.');
      } else {
        alert(errorMessage);
      }
      console.log(error);
      // [END_EXCLUDE]
    });
};
