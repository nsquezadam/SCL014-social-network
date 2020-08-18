/* Aquí las publicaciones (TimeLine) Muro */
import { posts, logout } from '../index.js';

export const home = () => {
  const divHome = document.createElement('div');
  const viewHome = `
  <header class="postHeader" >
  <div class="logoPost">
  <a href="#/"><img id="logo1" src="../imagenes/witLogo1.png"></a>
  </div>
  <div class="search">
  <input id="search" type="search" placeholder="Buscar"/>
  </div>
  <div>
  <input id="exit" type="image" src="../imagenes/iconos/iconLogout1.png"/>
  </div>
 
  </header> 
  <nav class="icons">
  <a class="iconbox" href=""><img src="../imagenes/iconos/iconHome.png" alt="home" class="icon"></a>
  <a class="iconbox" href=""><img src="../imagenes/iconos/iconBriefcase2.png" alt="job" class="icon"></a>
  <a class="iconbox" ><img type="button" id="newPost" src="../imagenes/iconos/iconPlus.png" alt="post" class="icon"></a>
  <a class="iconbox" href=""><img src="../imagenes/iconos/iconLaptop1.png" alt="curses" class="icon" id="lapIcon"></a>
  <a class="iconbox" href=""><img src="../imagenes/iconos/iconBell1.png" alt="alert" class="icon"></a>
  </nav>
  <main class="postsUser">
  <div id="userPost" class="userPost">
  <div class="select">
  <div class="imageUser" >
  <img id="photo"src="../imagenes/iconos/userPhoto.png"  alt="photo">
  </div>
  <div class="postAsk">
  <h5>¿Que Quieres Compartir?</h5>
  </div>
  <div class="postSelection">
  <div class = "jobpost">
  <input id="job" type="image" src="../imagenes/iconos/iconHandJob.png" />
  </div>
  <div class="coursespost">
  <input id="courses" type="image" src="../imagenes/iconos/iconHandLaptop.png" />
  </div>
  </div>
</div>
<form id="postForm" class="postForm">
<div>
<input type="text" name="title" id="postTitle" class="postTitle" placeholder="Titulo"/>
</div>
<div>
<textarea class="description" id="description" rows="3" placeholder="Descripcion"></textarea>
</div>

<button type="submit" id="btnPost" class="btnPost">Enviar</button>
</form>
</div>

<div id="viewPost" class="viewPost">
<div class="imageUser" >
<img id="photo"src="../imagenes/iconos/userPhoto.png"  alt="photo">
</div>
<div>
<p id="title" class="postTitle"></p>
</div>
<div>
<p id="textPost" class="description"></p>
<div >
<input id="heartikes" type="image" src="../imagenes/iconos/IconHeart.png" />
</div>
</div>  
</div>


</main>

    `;
  divHome.innerHTML = viewHome;
  const body = document.querySelector('body');
  body.style.backgroundImage = 'none';
  // captura de  datos
  const postWrite = divHome.querySelector('#newPost');
  postWrite.addEventListener('click', (e) => {
    e.preventDefault();
    divHome.querySelector('#userPost').style.display = 'block';
  });
  const form = divHome.querySelector('#postForm');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('datos');
    const title = divHome.querySelector('#postTitle').value;
    const description = divHome.querySelector('#description').value;
    console.log(title, description);
    posts(title, description);
  });

  const logOut = divHome.querySelector('#exit');
  logOut.addEventListener('click', () => {
    //e.preventDefault();
   logout();
  });

  return divHome;
};
