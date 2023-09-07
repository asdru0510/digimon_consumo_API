//seleccionamos donde insertar lista
const digimonLista = document.querySelector("#listaDigimones");

//seleccionamos deonde insertar carta digimon
const cartaDigimon = document.querySelector("#cartaDigimon");

//iniciamos Fetch
fetch("https://digimon-api.vercel.app/api/digimon")
  .then((response) => response.json())
  .then((data) => {
    //iteramos en la data
    data.forEach((digimon) => {
      //agregamos una constante que crea un elemento de lista (li) por cada digimon
      const digimonItem = document.createElement("li");
      //Le agregamos el nombre del digimon a la li
      digimonItem.textContent = digimon.name;
      // Insertamos el digimon en la lista en el html
      digimonLista.appendChild(digimonItem);

      // colocamos un evento esperando un click en el li para enviar la data y crear una carta
      digimonItem.addEventListener("click", () => {
        //insertamos carta en html
        cartaDigimon.innerHTML = `
            <img src="${digimon.img}" class="card-img-top" id="imgDigimon" alt="${digimon.name}">
        <div class="card-body">
          <h5 class="card-title" id="nombreDigi">${digimon.name}</h5>
          <p class="card-text">Nivel del digimon: ${digimon.level}</p>          
        `;
      });
    });
  });
