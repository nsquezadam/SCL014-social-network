/* Aqui van los post de los usuarios */
export const post = () => {
  const viewPost = `
    <header>
        <input type="image" src="images/witLogo.png">
        <input type="search" placeholder="Buscar">
    </header>
    <div class="container">
        <input type="image" src="images/icons/userPhoto.png">
        <input type="image" src="images/icons/iconHandJob.png" value="job" id="job"> /*Btn opcion Trabajo*/
        <input type="image" src="images/icons/iconHandLaptop.png" value="courses" id="courses"> /* Btn opcion Talleres/Webinar*/
        <textarea name="texto" rows="4" cols="40" placeholder="Escribe tú publicación"></textarea>
        <input type="submit" value="Publicar" id="post">
    </div>
    <nav>
        <ul>
            <li><a href="#/home"><img src="images/icons/iconHome.png" alt=""></a>Home</li>
            <li><a href="#/jobs"><img src="images/icons/iconBriefcase2.png" alt=""></a>Trabajo</li>
            <li><a href="#/post"><img src="images/icons/iconPlus.png" alt="">Post</a></li>
            <li><a href="#/courses"><img src="images/icons/iconLaptop1.png" alt="">Talleres</a></li>
            <li><a href="#/notifications"><img src="images/icons/iconBell2.png" alt="">Notificaciones</a></li>
        </ul>
    </nav>
  `;
  return viewPost;
};
