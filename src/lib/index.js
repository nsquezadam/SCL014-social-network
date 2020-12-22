/* eslint-disable no-const-assign */
/* eslint-disable no-alert */
/* eslint-disable no-console */
const auth = firebase.auth();
const fs = firebase.firestore();

// export const myFunction = () => {
//  // aqui tu codigo
//  console.log('Hola mundo!');

// };
// const user = firebase.auth().currentUser;


// export const stateAuth = () => {
//   // const user = firebase.auth().currentUser;
//   auth
//     .onAuthStateChanged((firebaseUser) => {
//       // eslint-disable-next-line no-console
//       console.log(firebaseUser);
//       // User is signed in.

//       if (firebaseUser) {
//         window.location.hash = '/home';
//         console.log(firebaseUser);
//         // ...
//       } else {
//         window.location.hash = '/welcome';
//         console.log(firebaseUser);
//         // User is signed out.
//         // ...
//       }
//       // console.log(user);
//     });
// };


/* Registro Usuarios con correo y password */
export const registerUser = (email, password) => {
  // const user = firebase.auth().currentUser;
  // console.log(nameUser, email, password);
  auth
    .createUserWithEmailAndPassword(email, password)
    .then((cred) => {
      console.log(cred.user);
      // window.location.hash('/#');
      cred.updateProfile({

        //   displayName: nameUser,
        // });
        // const configuration = {
        //   // url: 'https://iterationnqmwitsocialnetwork.web.app/',
        //   url: 'http://localhost:5000',
        // };
        // user.sendEmailVerification(configuration)
        //   .then(() => {
        //     // Email Verification sent!
        //     // [START_EXCLUDE]
        // alert(` Bienvenido ${nameUser} Correo de verificación enviado. Haz click en el link del correo y podras ingresar a WiT.`, 4000);
        //     // [END_EXCLUDE]
        //   })
        //   .catch((error) => {
        //     console.log(error.message);
        //     alert('Error', error.message, 4000);
        //   });
        // firebase.auth().signOut();
      });
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // [START_EXCLUDE]
      if (errorCode === 'auth/weak-password') {
        alert('La contraseña es muy débil.');
      } else {
        alert(errorMessage);
      }
      console.log(error);
      // [END_EXCLUDE]
    });
};

// login Google
export const logIn = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      // const token = result.credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // eslint-disable-next-line no-console
      console.log('estas logueado', user);
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
      // eslint-disable-next-line no-console
      console.log(errorCode, errorMessage, email, credential);
    });
};

/* Log In con Correo y Contraseña */
export const logInMail = (email, password) => {
  // eslint-disable-next-line no-console
  console.log(email, password);

  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((user) => {
      console.log('credenciales correctas', user);
      window.location.hash = '/home';
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


// Función para postear

export const post = (title, description) => {
  console.log(title, description);
  // const fs = firebase.firestore();

  const usuario = () => firebase.auth().currentUser;
  const user = usuario();

  fs.collection('post').add({
    email: user.email,
    name: user.displayName,
    title: title.title,
    post: description,
    date: new Date(),
    uid: user.uid,

  })
    .then((docRef) => {
      console.log('Document written with ID: ', docRef.id);
    })
    .catch((error) => {
      console.error('Error adding document: ', error);
    });
};

// Función para borrar post
// const fs = firebase.firestore();
const deletePost = (id) => {
  fs.collection('post').doc(id).delete();
};

// Función para mostrar Post

const setUpPost = (data) => {
  const showPost = document.getElementById('viewPost');
  if (data.length) {
    let viewP = '';
    data.forEach((doc) => {
      // infoPost.id = doc.id;
      // console.log(`${doc.id} => ${doc.data()}`);
      // const fechapost = new Date(doc.data().fecha);
      const templatePost = `
        <div class="viewPost">
        <div>
        <h5>${doc.data().title}</h5>
        <p>${doc.data().post}</p>
        </div>
        
        
        </div>
        `;
      viewP += templatePost;
    });
    showPost.innerHTML = viewP;
  } else {
    // showPost.innerHTML = '<p>Loguearse para ver post</p>';
  }
};

export const viewPost = () => {
  auth.onAuthStateChanged((user) => {
    if (user) {
      console.log('sigIn');
      fs.collection('posts')
        .get()
        .then((snapshot) => {
         setUpPost(snapshot.docs);
        });
      //   .get()
      //   .then((snapshot) => {
      //     setUpPost(snapshot);

      //   // const btnsDelete = showPost.querySelectorAll('.trash');
      //   // btnsDelete.forEach((btn) => {
      //   //   btn.addEventListener('click', async (e) => {
      //   //     console.log(e.target.dataset.id);
      //   //     await deletePost(e.target.dataset.id);
      //   // window.location.hash = "#/home";
      //   // location.reload();
      //   });
    } else {
      console.log('signOut');
      setUpPost([]);
    }
  });
};
// Función Log out

export const logOut = () => {
  firebase.auth().signOut().then(() => {
    // eslint-disable-next-line no-console
    console.log('logOut');
    alert('Vuelve pronto', 4000);
    window.location.hash = '#/welcome';
  })
    .catch((error) => {
      // eslint-disable-next-line no-console
      console.log(error);
      alert('Vuelve a intentarlo', 4000);
    });
  // eslint-disable-next-line eol-last
};