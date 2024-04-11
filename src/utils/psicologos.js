
const psicologos = [
  {
    name: "Santiago Miguel",
    phone: "+54 9 2645032484",
    address: "Sergio Boggian 4188 oeste",
    img : "../imagenes/santiej.jpeg",
    sexoProfesional: "masculino",
    tipoTerapia: "adultos"
  },
  {
    name: "Sofia Christensen",
    phone: "+54 9 2645670300",
    address: "Gral. Paz Oeste 2311",
    img : "../imagenes/sofiej.jpeg",
    sexoProfesional: "femenino", 
    tipoTerapia: "adolescentes"  
  },
];




// Selecciona el contenedor de tarjetas
const cardsContainer = document.getElementById('cardsContainer');

// Itera sobre el array de psicologos
psicologos.forEach(psicologo => {
  // Crea un elemento div para la tarjeta
  const card = document.createElement('div');
  card.classList.add('bg-white', 'p-6', 'rounded-lg', 'shadow-md');

  // Crea el contenido de la tarjeta
  const content = `
  <div class="p-6 shadow-lg rounded-md">
    <img class="object-cover object-center w-full mb-8" src=${psicologo.img} alt="blog">
    <h3 class="flex justify-center text-xl font-semibold leading-none tracking-tighter text-neutral-600 mt-7">
      ${psicologo.name}</h3>
    <div class="flex space-x-4 mb-3 mt-3">
      <span class="material-symbols-outlined" style="color: #9742D9; font-size: 32px;">
        call
      </span>
      <p class="text-[16px] leading-7 font-light">${psicologo.phone}</p>
    </div>
    <div class="flex space-x-4">
      <span class="material-symbols-outlined" style="color: #9742D9; font-size: 32px;">
        home
      </span>
      <p class="text-[16px] leading-7 font-light">${psicologo.address}</p>
    </div>
    <div class="flex justify-center items-center mt-5">
      <button class="text-white inline-flex items-center justify-center h-6 md:h-8 md:px-3 px-1 md:mr-6 font-medium tracking-wider rounded shadow-md bg-[#7326E2] hover:text-[#7326E2] hover:bg-gray-200 font-besley">Ver mas</button>
    </div>
  </div>
  `;

  // Agrega el contenido a la tarjeta
  card.innerHTML = content;

  // Agrega la tarjeta al contenedor de tarjetas
  cardsContainer.appendChild(card);
});


// Obtener los elementos DOM
const botonBuscar = document.getElementById('botonBuscar');
const selectSexo = document.getElementById('sexoProfesional');
const selectTipoTerapia = document.getElementById('tipoTerapia');

// Agregar evento de clic al botón de búsqueda
botonBuscar.addEventListener('click', () => {
  // Obtener los valores seleccionados
  const sexoSeleccionado = selectSexo.value;
  const tipoTerapiaSeleccionado = selectTipoTerapia.value;


 // Filtrar los psicólogos según los valores seleccionados
const psicologosFiltrados = psicologos.filter(psicologo => {
  const sexoLowerCase = sexoSeleccionado.toLowerCase();
  const tipoTerapiaLowerCase = tipoTerapiaSeleccionado.toLowerCase();
  if (
    (sexoSeleccionado === 'indistinto' || psicologo.sexoProfesional.toLowerCase() === sexoLowerCase) &&
    (tipoTerapiaSeleccionado === 'Seleccione' || psicologo.tipoTerapia.toLowerCase() === tipoTerapiaLowerCase)
  ) {
    return true;
  }
  return false;
});



  // Limpiar el contenedor de tarjetas
  cardsContainer.innerHTML = '';
  

  // Crear y agregar nuevas tarjetas para los psicólogos filtrados
  psicologosFiltrados.forEach((psicologo, index) => {
    const card = document.createElement('div');
    card.classList.add('bg-white', 'p-6', 'rounded-lg', 'shadow-md');


    const content = `
    <div class="p-6 shadow-lg rounded-md">
      <img class="object-cover object-center w-full mb-8" src=${psicologo.img} alt="blog">
      <h3 class="flex justify-center text-xl font-semibold leading-none tracking-tighter text-neutral-600 mt-7">
        ${psicologo.name}</h3>
      <div class="flex space-x-4 mb-3 mt-3">
        <span class="material-symbols-outlined" style="color: #9742D9; font-size: 32px;">
          call
        </span>
        <p class="text-[16px] leading-7 font-light">${psicologo.phone}</p>
      </div>
      <div class="flex space-x-4">
        <span class="material-symbols-outlined" style="color: #9742D9; font-size: 32px;">
          home
        </span>
        <p class="text-[16px] leading-7 font-light">${psicologo.address}</p>
      </div>
      <div class="flex justify-center items-center mt-5">
        <button  class="text-white verMasBtn inline-flex items-center justify-center h-6 md:h-8 md:px-3 px-1 md:mr-6 font-medium tracking-wider rounded shadow-md bg-[#7326E2] hover:text-[#7326E2] hover:bg-gray-200 font-besley">Ver mas</button>
      </div>
    </div>
    `;
    card.innerHTML = content;
    cardsContainer.appendChild(card);
  });
  
});

cardsContainer.addEventListener('click', (event) => {
  if (event.target.classList.contains('verMasBtn')) {
    // Obtener el índice del psicólogo
    const psicologoIndex = event.target.dataset.index;
    // Redirigir a la página de detalles del psicólogo con el índice como parámetro
    window.location.href = `detalle_psicologo.html?index=${psicologoIndex}`;
  }
});