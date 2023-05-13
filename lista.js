const verLista = async () => {
    try {
      const datos = await fetch("./lista.json");
      const listaContactos = await datos.json();
      const lista = document.querySelector("#lista");
      lista.innerHTML = "";
      listaContactos.forEach((dato) => {
        lista.innerHTML += `
          <div class="card" ">
            <ul class= "targeta" >
              <li class="nombre"> <p> Nombre </p>.....${dato.nombre} </li>
              <li class="telefono"> <p>Telefono</p>... ${dato.telefono}</li>
              <li class="email"> <p> email </p>......${dato.email}</li>
            </ul>
          </div>
        `;
      });
    } catch (error) {
      console.log(error);
    }
  };
  
  verLista();
  