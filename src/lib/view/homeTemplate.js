/* Aquí las publicaciones (TimeLine) Muro */

export const home = () => {
  const viewHome = `
  <header>
    <input type="image" src="images/witLogo.png">
      <input type="search" placeholder="Buscar">
  </header>
  <div class="container">
    <div class = "jobpost">
      <img src="images/icons/userPhoto.png" alt="">
      <input type="image" src="images/icons/iconHandJob.png" value="job" id="job">
      <textarea name="" id="" cols="30" rows="10"></textarea>
    </div>
    <div class ="like">
        <input type="image" src="images/icons/iconFullHeart.png">
    </div>
    <div class="coursespost">
      <img src="images/icons/iconUser.png" alt="">
      <input type="image" src="images/icons/iconHandLaptop.png" value="courses" id="courses">
      <textarea name="texto" rows="4" cols="40" placeholder="Escribe tú publicación"></textarea>
    </div>
    <div class ="like">
    <input type="image" src="images/icons/iconFullHeart.png">
   </div>
</div>
  <nav>
      <ul>
        <li><a href="#/home"><img src="images/icons/iconHome.png" alt=""></a>Home</li>
        <li><a href="#/jobs"><img src="images/icons/iconBriefcase2.png" alt=""></a>Trabajo</li>
        <li><a href="#/post"><img src="images/icons/iconPlus.png" alt="">Post</a></li>
        <li><a href="#/courses"><img src="images/icons/iconLaptop1.png" alt="">Talleres</a></li>
        <li><a href="#/notifications"><img src="images/icons/iconBell2.png" alt="">Notificaciones</a></li>
      </ul>
  </nav
    `;
  return viewHome;
};
