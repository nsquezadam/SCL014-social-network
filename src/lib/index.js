/* eslint-disable no-trailing-spaces */
// aqui exportaras las funciones que necesites

export const myFunction = () => {
  // aqui tu codigo
  // console.log ('Hola mundo!');
};
// FUNCION OBSERVADOR  

export const stateAuth = () => {
  firebase.auth().onAuthStateChanged((user) => {
    console.log(user);
    //User is signed in.
    if (user) {
      window.location.hash = '#/home';
      // ...
    } else {
      window.location.hash = '#/';
      // User is signed out.
      // ...
    }
    // console.log(user);

  });
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

/* Log In con Correo y Contraseña se modifica mensaje y se agrega avatar */

export const logInMail = (email, password) => {
  console.log(email, password);
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(() => {
      window.location.hash = '#/home';
      // document.getElementById('containerBackima').style.display = 'none';
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
      document.getElementById('quickstart-sign-in').disabled = false;
      // [END_EXCLUDE]
    });
};

/* Registro Usuarios con correo y password */
/* modificado agregue nombre */

export const registerUser = (nameUser, email, password) => {
  console.log(nameUser, email, password);
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((result) => {
      result.user.updateProfile({
        displayName: nameUser,
      });
      const configuration = {
        url: 'http://localhost:5000/',
      };
      firebase.auth().currentUser.sendEmailVerification(configuration)
        .then(() => {
          // Email Verification sent!
          // [START_EXCLUDE]
          alert('Correo de verificación enviado. Haz click en el link del correo y podras ingresar a WiT.');
          // [END_EXCLUDE]
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
      // Handle Errors here.
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

// Función para postear

export const post = (title, description) => {
console.log(title, description);
  const fs = firebase.firestore();
  const usuario = () => firebase.auth().currentUser;
  const user = usuario();
  // 
  fs.collection('post').add({
    email: user.email,
    name: user.displayName,
    title: title,
    post: description,
    fecha: new Date(),
    uid: user.uid,

  })
    .then((docRef) => {
      console.log('Document written with ID: ', docRef.id);
    })
    .catch((error) => {
      console.error('Error adding document: ', error);
    });
};

// Función para mostrar Post

export const viewPost = () => {

  const fs = firebase.firestore();
  fs.collection('post').get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      // console.log(`${doc.id} => ${doc.data()}`);
      const showPost = document.getElementById('viewPost');
      //const fechapost = new Date(doc.data().fecha);  
      const templatePost = `
        <div class="viewPost">
        <div class="imageUser">
          <img id="photo" src="imagenes/iconos/userPhoto.png" alt="Foto">
          <p>${doc.data().name}</p>
        </div>
        <div class ="postForm">
          <div>
            <p id="title" class="postTitle" >${doc.data().title}</p>
          </div>
          <div>
            <p id="textPost" class="description" >${doc.data().post}</p>
          </div>
        </div>
        
         
        <div class="boxIconPost">
        <div>
            <p id="textPost" class="date"> ${doc.data().fecha.toDate()}</p>
          </div>
        <div>
        <input type="image" id="trash" class="trash" src="imagenes/iconos/iconTrash1.png" alt="Like">
        </div>  
        <div>
          <input type="image" id="heartLikes" src="imagenes/iconos/IconHeart.png" alt="Like">
        </div>
        </div>
       
        `;
      showPost.innerHTML += templatePost;
    });
});
};

// Función Log out

export const logOut = () => {

  firebase.auth().signOut().then(() => {
    console.log('logOut');
    alert('Vuelve pronto', 4000);
    window.location.hash = '#/';

  })
  .catch((error) => {
    alert('Vuelve a intentarlo', 4000);
  });
};
