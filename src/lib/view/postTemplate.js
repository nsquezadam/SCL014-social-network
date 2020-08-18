import { post } from '../index.js';

/* Aquí se crean las publicaciones */

export const createPost = () => {
  const divCreatePost = document.createElement('div');
  const viewCreatePost = `
  <header class="postHeader">
  <div id="logoPost">
      <a href="#/"><img  id="logo1"src="imagenes/witLogo1.png" alt="logo"></a>
  </div>
  <div class="search">
      <input id="search" type="search" placeholder="Buscar">
  </div>
  <div>
      <input type="image" id="exit" src="imagenes/iconos/iconLogout1.png"/>
  </div>
</header>
<nav class="icons">
  <a href="#/" class="iconbox"><img src="imagenes/iconos/iconHome.png" alt="Home" class="icon"></a>
  <a href="" class="iconbox"><img src="imagenes/iconos/iconBriefcase2.png" alt="Trabajos" class="icon"></a>
  <a  class="iconbox"><img id="newPost" src="imagenes/iconos/iconPlus.png" alt="Post" class="icon"></a>
  <a href="" class="iconbox"><img src="imagenes/iconos/iconLaptop1.png" alt="Cursos" class="icon"></a>
  <a href="" class="iconbox"><img src="imagenes/iconos/iconBell1.png" alt="Notificaciones" class="icon"></a>
</nav>
<main class="postsUser">
  <div id="userPost" class="userPost">
      <div class="select">
          <div class="imageUser">
              <img id="photo" src="imagenes/iconos/userPhoto.png" alt="Foto">
          </div>
          <div class="postAsk">
              <h5>¿Qué quieres compartir?</h5>
          </div>
          <div class="postSelection">
              <div class="jobPost">
                  <input type="image" id="job" src="imagenes/iconos/iconHandJob.png" alt="Trabajo">
              </div>
              <div class="coursesPost">
                  <input type="image" id="courses" src="imagenes/iconos/iconHandLaptop.png" alt="Cursos">
              </div>
          </div>
      </div>
      <form class="postForm" id="postForm">
          <div>
              <input type="text" name="Title" id="postTitle" class="postTitle" placeholder="Título">
          </div>
          <div>
              <textarea id="description" class="description" rows="3" placeholder="Descripción"></textarea>
          </div>
          <button type="submit" id="btnPost" class="btnPost"> Publicar </button>
      </form>
  </div>
</main>
`;
  divCreatePost.innerHTML = viewCreatePost;
  /* Ocultar imagen background */
  const body = document.querySelector('body');
  body.style.backgroundImage = 'none';
  // Aplicar la función post
  const form = divCreatePost.querySelector('#postForm');
  form.addEventListener('submit', (e) => {
    console.log('form');
    e.preventDefault();
    // Vamos a declarar el valor de las variables
    const title = divCreatePost.querySelector('#postTitle').value;
    const description = divCreatePost.querySelector('#description').value;
    // console.log(title, description);
    // Vamos a llamar a la función y le vamos a entregar las variables descritas
    post(title, description);
    /* Al apretar btn publicar, desaparezca container para hacer post */
    // divCreatePost.querySelector('#userPost').style.display = 'none';
    window.location.hash = '#/home';
  });
  return divCreatePost;
};
