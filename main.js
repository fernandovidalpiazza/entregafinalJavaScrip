class Contacto {
  constructor(nombre, telefono, email) {
    this.nombre = nombre;
    this.telefono = telefono;
    this.email = email;
  }
}

let listaContactos = [];


function agregarContacto(event) {
  event.preventDefault();
  const nombre = document.querySelector('#nombre').value;
  const telefono = document.querySelector('#telefono').value;
  const email = document.querySelector('#email').value;
  const contacto = new Contacto(nombre, telefono, email);
  listaContactos.push(contacto);
  renderizarLista();
  document.querySelector('#formularioContacto').reset();
}


function eliminarContacto(index) {
  listaContactos.splice(index, 1);
  renderizarLista();
}


function editarContacto(index) {
  const contacto = listaContactos[index];
  const card = document.getElementById(`card-${index}`);
  const nombre = card.querySelector('.nombre').textContent;
  const telefono = card.querySelector('.telefono').textContent;
  const email = card.querySelector('.email').textContent;
  card.innerHTML = `
    <form onsubmit="guardarEdicion(${index}); return false;">
      <input type="text" value="${nombre}" name="nombre" required />
      <input type="text" value="${telefono}" name="telefono" required />
      <input type="email" value="${email}" name="email" required />
      <button type="submit">Guardar</button>
      <button type="button" onclick="renderizarLista();">Cancelar</button>
    </form>
  `;
}


function guardarEdicion(index) {
  const card = document.getElementById(`card-${index}`);
  const nombre = card.querySelector('input[name="nombre"]').value;
  const telefono = card.querySelector('input[name="telefono"]').value;
  const email = card.querySelector('input[name="email"]').value;
  listaContactos[index].nombre = nombre;
  listaContactos[index].telefono = telefono;
  listaContactos[index].email = email;
  renderizarLista();
}


function renderizarLista() {
  const lista = document.querySelector('#listaContactos');
  lista.innerHTML = '';
  listaContactos.forEach((contacto, index) => {
    const item = document.createElement('div');
    item.classList.add('contacto');
    item.id = `card-${index}`;
    item.innerHTML = `
      <h2 class="nombre">${contacto.nombre}</h2>
      <p class="telefono">Teléfono: ${contacto.telefono}</p>
      <p class="email">Email: ${contacto.email}</p>
      <button   onclick="eliminarContacto(${index})">Eliminar</button>
      
      <button id="contacto"   onclick="editarContacto(${index})">Editar</button>
    `;
   
    lista.appendChild(item);
  });
}



  






document.querySelector('#formularioContacto').addEventListener('submit', agregarContacto);
