import { logOut, viewPost } from '../index.js';

/* Aquí las publicaciones (TimeLine) Muro */

export const home = () => {
  const divHome = document.createElement('div');
  const viewHome = `
  <header class="postHeader">
  <div id="logoPost">
      <a href="#/"><img  id="logo1"src="imagenes/witLogo1.png" alt="logo"></a>
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
    const title = divHome.querySelector('#postTitle');
    divHome.querySelector('#userPost').style.display = 'block';
    title.focus();
  });
  // stateAuth();
  // Aplicar la función post
  let editStatus = false;
  let id = '';
  const form = divHome.querySelector('#postForm');
  form.addEventListener('submit', async (e) => {
    console.log('form');
    e.preventDefault();
    const title = divHome.querySelector('#postTitle').value;
    const description = divHome.querySelector('#description').value;
    try {
      if (!editStatus) {
        await post(title, description);
      } else {
        await updatePost(id, {
          title: title.value,
          post: description.value,
        });
        editStatus = false;
        id = '';
        form.btnPost.innerText = 'Publicar';
      }

      divHome.querySelector('#userPost').style.display = 'none';
      form.reset();
    } catch (error) {
      console.log(error);
      // Vamos a declarar el valor de las variables

      // console.log(title, description);
      // Vamos a llamar a la función y le vamos a entregar las variables descritas
      // post(title, description);

      /* Al apretar btn publicar, desaparezca container para hacer post */
    }
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
};