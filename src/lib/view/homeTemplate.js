/* Aquí las publicaciones (TimeLine) Muro */

export const home = () => {
  const divHome = document.createElement('div');
  const viewHome = `
  <header class="postHeader">
  <div id="logoPost">
      <a href="#/"><img src="imagenes/witLogo1.png" alt="logo"></a>
  </div>
  <div class="search">
      <input id="search" type="search" placeholder="Buscar">
  </div>
  <div>
      <input type="image" id="exit" src="imagenes/iconos/iconLogout1.png">
  </div>
</header>
<nav class="icons">
  <a href="#/" class="iconbox"><img src="imagenes/iconos/iconHome.png" alt="Home" class="icon"></a>
  <a href="" class="iconbox"><img src="imagenes/iconos/iconBriefcase2.png" alt="Trabajos" class="icon"></a>
  <a href="#/" class="iconbox"><img src="imagenes/iconos/iconPlus.png" alt="Post" class="icon"></a>
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
  <div class="viewPost" id="viewPost">
      <div class="imageUser">
          <img id="photo" src="imagenes/iconos/userPhoto.png" alt="Foto">
      </div>
      <div>
          <p id="title" class="postTitle"></p>
      </div>
      <div>
          <p id="textPost" class="description"></p>
      </div>
      <div>
          <input type="image" id="heartLikes" src="imagenes/iconos/IconHeart.png" alt="Like">
      </div>
  </div>
</main>
`;
  divHome.innerHTML = viewHome;
  return divHome;
};
