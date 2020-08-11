export const configFirebase = () => {
  const firebaseConfig = {
    apiKey: 'AIzaSyCTVFA4XYzKt4JTTHOReEfx6iVAUl5Rsf4',
    authDomain: 'ejerusuarios.firebaseapp.com',
    databaseURL: 'https://ejerusuarios.firebaseio.com',
    projectId: 'ejerusuarios',
    storageBucket: 'ejerusuarios.appspot.com',
    messagingSenderId: '313356639932',
    appId: '1:313356639932:web:96d033526da02806cd7ab9',
    measurementId: 'G-XERF4RW8YV',
  };
    // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  // firebase.analytics();
};
export const auth = firebase.auth();
// firebase.analytics();
export const fs = firebase.firestore();

// LOG IN  INGRESO FIBASE CON MAIL  -CONTRASEÑA
// 1º Capturar element html del formulario log in
// 2º capturar evento de formulario submit
// 3º detener   el reinicio del formulario por defecto
// 4ª capturar valores de mail -password  html

// const formLogIn = document.querySelector('#logInForm');
export const formLogin = (mail, password) => {
  // formLogIn.addEventListener('submit', (e) => {
  // e.preventDefault();
  // const logInMail = document.querySelector('#logIn-mail').value;
  // const logInPassword = document.querySelector('#logIn-password').value;
  // se entrega  informacion para que firebase  pueda comprobarlo se crea metodo con 2  parametros correo y contraseña
  /* metodo de firebase signInWithEmailAndPassword  y luego cuando firebase
  toma los dato te devuelve la respuesta  y y la capturamos con user credential*/
  auth
    .signInWithEmailAndPassword(mail, password)
    .then(userCredential => {
      console.log('log in')
    })
});


