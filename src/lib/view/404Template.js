
export const viewPage404 = () => {
  const divView404 = document.createElement('div');
  divView404.className = ('back404');
  const viewErrorPage = `
  <p>UPPPSSSSS  ACA NO HAY NADA</p>
  <button id="btnBack"class="btnBackPr">Volver</button>
 `;
  divView404.innerHTML = viewErrorPage;
  const backbutton = divView404.querySelector('#btnBack');
  backbutton.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('vamos de vuelta');
    window.location.hash = '#/welcome';
    window.location.reload();
    // eslint-disable-next-line no-alert
    // alert('Intentalo de Nuevo');
  });

  return divView404;
};
