export const personajes = () => {
  const divPersonajes = document.createElement('div');
  const viewHome = `
  <h3>Hola Flanders</h3>`;
  divPersonajes.innerHTML = viewHome;
  return divPersonajes;
};
