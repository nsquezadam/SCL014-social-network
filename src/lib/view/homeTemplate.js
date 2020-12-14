import {
  logOut,
  viewPost,
} from '../index.js';

/* Aquí las publicaciones (TimeLine) Muro */

export const home = () => {
  const divHome = document.createElement('div');
  const viewHome = `
  <header class="postHeader">
  <div id="logoPost">
      <a href="#/"><img  id="logo1"src="imagenes/witLogo.svg" alt="logo"></a>
  </div>
  <div class="search">
      <input id="search" type="search" placeholder="Buscar">
  </div>
  <nav class="icons">

   <a href="#/" class="iconbox"><img src="imagenes/iconos/iconHome.png" alt="Home"  class="icon"></a>
   <a class="iconbox"><img src="imagenes/iconos/iconBriefcase2.png" alt="Trabajos" id="brief" class="icon"></a>
   <a class="iconbox"><img id="newPost" src="imagenes/iconos/iconPlus.png" alt="Post" class="icon"></a>
   <a class="iconbox"><img src="imagenes/iconos/iconLaptop1.png" alt="Cursos"id="learning" class="icon"></a>

   <a href="" class="iconbox"><img src="imagenes/iconos/iconLogout1.png" id ="exit" alt="exit" class="icon"></a>
 </nav>
</header>

<main class="postsUser">
  <div  id="viewPost"> </div>
</main>
`;
  divHome.innerHTML = viewHome;
  /* Ocultar imagen background */
  const body = document.querySelector('body');
  body.style.backgroundImage = 'none';
  /* Para que con el icono más, se puede ver container para hacer post */
  const postWrite = divHome.querySelector('#newPost');
  postWrite.addEventListener('click', () => {
    // e.preventDefault();
    // divHome.querySelector('#userPost').style.display = 'block';
    window.location.hash = '#/post';
  });

  // Declaramos variable para Log out
  const exit = divHome.querySelector('#exit');
  // Definimos el evento
  exit.addEventListener('click', (e) => {
    e.preventDefault();
    logOut();
  });
  viewPost();
  return divHome;
  // eslint-disable-next-line eol-last
};