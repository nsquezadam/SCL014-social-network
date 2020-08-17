/* eslint-disable no-trailing-spaces */
// aqui exportaras las funciones que necesites

export const myFunction = () => {
  // aqui tu codigo
  // console.log ('Hola mundo!');
};


// login Google
export const logIn = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth()
    .signInWithPopup(provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const token = result.credential.accessToken;
      // The signed-in user info.
      const user = result.user;

      // eslint-disable-next-line no-console
      console.log('estas logueado');
      // eslint-disable-next-line no-alert
      alert(`Bienvenido ${result.user.displayName}!!`, 4000);
      // document.getElementById('containerBackima').style.display = 'none';
      window.location.hash = '#/home';

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
export const stateAuth = () => {
  firebase.auth().onAuthStateChanged((user) => {
    // console.log(user);

  });
};

/* Log In con Correo y Contraseña se modifica mensaje y se agrega avatar */

export const logInMail = (email, password) => {
  console.log(email, password);
  firebase.auth()
    .signInWithEmailAndPassword(email, password)
    .then((result) => {
      if (result.user.emailVerified) {
        // eslint-disable-next-line no-alert
        alert(`Bienvenido ${result.user.displayName}`, 5000);
        // eslint-disable-next-line no-undef
        window.location.hash = '#/home';
        // eslint-disable-next-line no-undef
        // $('#photo').attr('src', '../imagenes/iconos/iconUser.png');
      } else {
        firebase.auth().signOut();
        // eslint-disable-next-line no-alert
        alert('Por favor realiza la verificacion de la cuenta', 5000);
      }
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // [START_EXCLUDE]
      if (errorCode === 'auth/wrong-password') {
        alert('Contraseña erronea.');
      } else {
        alert(errorMessage);
      }
      console.log(error);
      // document.getElementById('quickstart-sign-in').disabled = false;
      // [END_EXCLUDE]
    });
};

/* Registro Usuarios con correo y password */
/* modificado agregue nombre */

export const registerUser = (email, password, name) => {
  // console.log(email, password, name);
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((result) => {
      result.user.updateProfile({
        displayName: name,
      });
      const configuration = {
        url: 'http://localhost:5000/',
      };
      result.user.sendEmailVerification(configuration)
        .catch((error) => {
          // eslint-disable-next-line no-console
          console.error(error);
          alert(error.message, 4000);
        });
      firebase.auth().signOut();
      window.location.hash = '#/';

      // eslint-disable-next-line no-alert
      alert(`Bienvenido ${name}, debes realizar el proceso de verificacion`, 4000);
    })
    // .catch((error) => {
    //   // eslint-disable-next-line no-console
    //   console.error(error);
    //   // eslint-disable-next-line no-alert
    //   alert(error.message, 4000)
    //     // eslint-disable-next-line no-shadow
    .catch((error) => {
      // Handle Errors here;
      const errorCode = error.code;
      const errorMessage = error.message;
      // [START_EXCLUDE]
      if (errorCode === 'auth/weak-password') {
        // eslint-disable-next-line no-alert
        alert('La contraseña es muy débil.');
      } else {
        // eslint-disable-next-line no-alert
        alert(errorMessage);
      }
      // eslint-disable-next-line no-console
      console.log(error);
      // [END_EXCLUDE]
    });
};
export const posts = (title, description) => {
  console.log(title, description);
  const fs = firebase.firestore();
  const usuario = () => firebase.auth().currentUser;
  const user = usuario();
  fs.collection('posts').add({
    email: user.email, 
    name: user.displayName,
    titulo: title,
    post: description,
    uid: user.uid,
    fecha: new Date(),
 })
    .then((docRef) => {
      console.log('Document written with ID: ', docRef.id);
})
    .catch((error) => {
    console.error('Error adding document: ', error);
});
};
/*
expor const postView = () => {
  const fs = firebase.firestore();
  fs.collection('posts').get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        //console.log(`${doc.id} => ${doc.data().name}`);
        const viewed = documen.getElementByID('div');

    });
});

} */
