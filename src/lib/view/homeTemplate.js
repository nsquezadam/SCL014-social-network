/* Aquí las publicaciones (TimeLine) Muro */

export const home = () => {
  const divHome = document.createElement('div');
  const viewHome = `
 <div class="home">
  <header>
  <div id="logoContainer">
  <input  id="logo1" type="image" src="../imagenes/witLogo1.png">
  </div>
  <div class="search">
  <input id="search" type="search" placeholder="Buscar">
  </div>
  </header>
   <div class="containerRedaccionPost">
   <div class="select">
   <div class = "jobpost">
   <input id="job" type="image" src="../imagenes/iconos/iconHandJob.png" value="job" >
 </div>
 <div class="coursespost">
 <input id="courses" type="image" src="../imagenes/iconos/iconHandLaptop.png" value="courses" >
 </div>
   </div>
   
    <div class= "container_description">
      <textarea class="textArea"name="" id="description" cols="auto" rows="auto"></textarea>
    </div
  </div>
  <div class="icons">
  <div class="iconbox"><a href=""><img src="../imagenes/iconos/iconHome.png" alt="home" class="icon"></a></div>
  <div class="iconbox"><a href=""><img src="../imagenes/iconos/iconBriefcase2.png" alt="job" class="icon"></a></div>
  <div class="iconbox"><a href=""><img src="../imagenes/iconos/iconPlus.png" alt="post" class="icon"></a></div>
  <div class="iconbox"><a href=""><img src="../imagenes/iconos/iconLaptop1.png" alt="curses" class="icon" id="lapIcon"></a></div>
  <div class="iconbox"><a href=""><img src="../imagenes/iconos/iconBell1.png" alt="alert" class="icon"></a></div>
</div>
  
</div>

    `;
  divHome.innerHTML = viewHome;
  return divHome;
};
