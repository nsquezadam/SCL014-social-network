/* eslint-disable no-trailing-spaces */
// aqui exportaras las funciones que necesites

export const myFunction = () => {
  // aqui tu codigo
  // console.log ('Hola mundo!');
};
// FUNCION OBSERVADOR  

export const stateAuth = () => {
  firebase.auth().onAuthStateChanged((user) => {
    // console.log(user);
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
  firebase.auth().signInWithPopup(provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const token = result.credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      console.log('estas logueado');
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

/* Log In con Correo y Contraseña */
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

export const registerUser = (nameUser, email, password) => {
  console.log(nameUser, email, password);
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((result) => {
      result.user.updateProfile({
        displayName: nameUser,
      });
      const configuration = {
        url: 'https://jeniffergenoves.github.io/SCL014-social-network/src/#/home',
      };
      firebase.auth().currentUser.sendEmailVerification(configuration)
        .then(() => {
          // Email Verification sent!
          // [START_EXCLUDE]
          alert('Correo de verificación enviado. Haz click en el link del correo y podras ingresar a WiT.');
          // [END_EXCLUDE]
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

// Función para postear
/* 
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



// Función para borrar post 
const fs = firebase.firestore();
const deletePost = (id) => fs.collection('post').doc(id).delete();

// Función para mostrar Post


export const viewPost = () => {
  const fs = firebase.firestore();
  fs.collection('post').onSnapshot((querySnapshot) => {
    const showPost = document.getElementById('viewPost');
    showPost.innerHTML = ' ';
    querySnapshot.forEach((doc) => {
      const infoPost = doc.data();
      infoPost.id = doc.id;
      // console.log(`${doc.id} => ${doc.data()}`);
      //const fechapost = new Date(doc.data().fecha);  
      const templatePost = `
        <div class="viewPost">
        <div class="imageUser">
          <img id="photo" src="imagenes/iconos/iconUser.png" alt="Foto">
          <p>${doc.data().name}</p>
        </div>
        <div class ="postForm">
          <div>
            <p id="title" class="postTitle" >${doc.data().title}</p>
          </div>
          <div>
            <p id="textPost" class="description" >${doc.data().post}</p>
          </div>
          <div class="boxIconPost">
        <div>
            <p id="textPost" class="date"> ${doc.data().fecha.toDate()}</p>
          </div>
        <div>
        <input type="image"  id="trash" class="trash" data-id=${infoPost.id} src="imagenes/iconos/iconTrash1.png" alt="Like">
        </div>  
        <div>
          <input type="image" id="heartLikes" class="heartLikes" src="imagenes/iconos/IconHeart.png" alt="Like">
        </div>
        </div>
        
        </div>
       
        `;
      showPost.innerHTML += templatePost;

      const btnsDelete = showPost.querySelectorAll('.trash');
      btnsDelete.forEach((btn) => {
        btn.addEventListener('click', async (e) => {
          console.log(e.target.dataset.id);
          await deletePost(e.target.dataset.id);
          // window.location.hash = "#/home";
          // location.reload();
        });
      });
      // return showPost;
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
//



// post opcion 2 
export const post = (title, description) => {
  console.log(title, description);
  const fs = firebase.firestore();
  const usuario = () => firebase.auth().currentUser;
  const user = usuario();
  fs.collection('post').doc().set({
    email: user.email,
    name: user.displayName,
    title: title,
    post: description,
    fecha: new Date(),
    uid: user.uid,
  });
};
// const fs = firebase.firestore();


export const getPosts = () => {
  const fs = firebase.firestore();
  fs.collection('post').get();
};

const onGetPost = (callback) => fs.collection('post').onSnapshot(callback);

const deletePosts = (id) => fs.collection('post').doc(id).delete();

const getPost = (id) => fs.collection('post').doc(id).get();

export const updatePost = (id, updatedPost) => fs.collection('post').doc(id).update(updatedPost);


export const viewPost = () => {
  onGetPost((querySnapshot) => {
    const showPost = document.getElementById('viewPost');
    const formP = document.querySelector('#postForm');
    showPost.innerHTML = '';
    querySnapshot.forEach((doc) => {
      const post = doc.data();
      post.id = doc.id;
      // console.log(post);
      showPost.innerHTML += 
      `<div class="viewPost">
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
        </div
        <div class="boxIconPost">
        <div>
            <p id="textPost" class="date"> ${doc.data().fecha.toDate()}</p>
          </div>
          <div>
        <input type="image" id="edit" class="edit" data-id=${post.id} src="imagenes/iconos/iconEdit.png" alt="Like">
        </div>  
        <div>
        <input type="image" id="trash" class="trash"  data-id=${post.id} src="imagenes/iconos/iconTrash1.png" alt="Like">
        </div>  
        <div>
          <input type="image" id="heartLikes" class="heartLikes" src="imagenes/iconos/IconHeart.png" alt="Like">
        </div>
        </div>`;
      const btnsDelete = showPost.querySelectorAll('.trash');
      // console.log(btnDelete);
      btnsDelete.forEach((btn) => {
        btn.addEventListener('click', async (e) => {
          // e.targe ara recoger datos  y data set propriedad para buscra id 
          console.log(e.target.dataset.id);
          await deletePosts(e.target.dataset.id);
        });
      });
      
      const formP = document.querySelector('#postForm');
      const btnsEdit = showPost.querySelectorAll('.edit');
      btnsEdit.forEach((btn) => {
        btn.addEventListener('click', async (e) => {
          let editStatus = false;
          let id = '';
          try {
            // console.log(e.target.dataset.id);
            const doc = await getPost(e.target.dataset.id);
            document.querySelector('#userPost').style.display = 'block';
            // console.log(doc.data());
            // ahora  llevamos al formulario los dato 
            const post1 = doc.data();
            editStatus = true;
            id = doc.id;

            formP.postTitle.value = post1.title;
            formP.description.value = post1.post;
            formP.btnPost.innerText = 'Guardar';
          } catch (error) {
            console.log(error);
          }
        });
      });
    });
  });

};
