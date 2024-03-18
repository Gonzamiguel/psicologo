const psychologists = [
    {
      name: "Santiago Miguel",
      phone: "+54 9 2645032484",
      address: "Sergio Boggian 4188 oeste",
      img : "../imagenes/mujer-carnet.jpg"
    },
    {
      name: "Santiago Miguel",
      phone: "+54 9 2645032484",
      address: "Sergio Boggian 4188 oeste",
      img : "../imagenes/hombre-carnet.jpg"
    },
    {
      name: "Santiago Miguel",
      phone: "+54 9 2645032484",
      address: "Sergio Boggian 4188 oeste",
      img : "../imagenes/mujer-carnet.jpg"
    },
    {
      name: "Santiago Miguel",
      phone: "+54 9 2645032484",
      address: "Sergio Boggian 4188 oeste",
      img : "../imagenes/hombre-carnet.jpg"
    },
  ];

  const renderPsychologists = (psychologists) => {
    const cardContainer = document.getElementById("cardContainer");
    const fragment = document.createDocumentFragment();
    const cardTemplate = document.getElementById("cardTemplate");

    psychologists.forEach((element) => {
   

      const clone = cardTemplate.content.cloneNode(true);
      clone.querySelector("h3").textContent = element.name;
      clone.querySelectorAll("p")[0].textContent =  element.phone;
      clone.querySelectorAll("p")[1].textContent = element.address;
      clone.querySelector('img').src = element.img
      fragment.appendChild(clone);
    });

    cardContainer.appendChild(fragment);

  };

  renderPsychologists(psychologists);