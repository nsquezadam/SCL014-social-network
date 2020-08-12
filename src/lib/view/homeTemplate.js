/* Aquí las publicaciones (TimeLine) Muro */

export const home = () => {
  const divHome = document.createElement('div');
  const viewHome = `
  <div id="containerBackima">
      <img id ="backIma" src="../imagenes/backgroundFull.png" alt="">
  </div>
  <header>
  <div id="logoContainer">
  <input  id="logo type="image" src="imagenes/witLogo1.png">
  </div>
  <input id="search" type="search" placeholder="Buscar">
  
  <nav>
      <ul>
        <li><a href="#/home"><img src="../imagenes/iconos/iconHome.png" alt=""></a>Home</li>
        <li><a href="#/jobs"><img src="../imagenes/iconos/iconBriefcase2.png" alt=""></a>Trabajo</li>
        <li><a href="#/post"><img src="images/icons/iconPlus.png" alt="">Post</a></li>
        <li><a href="#/courses"><img src="images/icons/iconLaptop1.png" alt="">Talleres</a></li>
        <li><a href="#/notifications"><img src="images/icons/iconBell2.png" alt="">Notificaciones</a></li>
      </ul>
      </nav
  </header>
  
  
  <div class="container">
    <div class = "jobpost">
      <img src="imagenes/icons/userPhoto.png" alt="">
      <input id="job" type="image" src="imagenes/icons/iconHandJob.png" value="job" >
      <textarea name="" id="" cols="30" rows="10"></textarea>
    </div>
    <div class ="like">
        <input id="like" type="image" src="images/icons/iconFullHeart.png">
    </div>
    <div class="coursespost">
      <img src="images/icons/iconUser.png" alt="">
      <input id="courses" type="image" src="images/icons/iconHandLaptop.png" value="courses" >
      <textarea name="texto" rows="4" cols="40" placeholder="Escribe tú publicación"></textarea>
    </div>
    <div class ="like">
    <input type="image" src="images/icons/iconFullHeart.png">
   </div>
</div>
  
    `;
  divHome.innerHTML = viewHome;
  return divHome;
};
