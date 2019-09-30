import axios from "axios";
const api = "https://character-database.becode.xyz";
axios
  .get(`${api}/characters`)
  .then(function(response: any) {
    // handle success
    let result = response.data;
    // console.log(response);
    console.log(result);
    for (let i = 0; i < result.length; i++) {
      //boucle dans laquelle, pour chaque item de mon tableau result, je vais aller chercher des données
      let name = result[i].name;
      let shortDescription = result[i].shortDescription;
      let image = result[i].image;
      //Je definis mes constantes pour chaque item
      console.log(name);
      console.log(shortDescription);

      let div = document.createElement(`div`);
      //Create a container div

      let containerh1 = document.createElement("h1");
      //Create a H1 container

      let contentName = document.createTextNode(`Name: ${name} `);
      containerh1.appendChild(contentName);
      //Put the contentName in the h1 container

      div.appendChild(containerh1);
      //Connect the h1 container to the div container

      let containerh2 = document.createElement("h2");
      //Create a h2 container

      let contentDescription = document.createTextNode(
        `What am I ? : ${shortDescription}`
      );
      containerh2.appendChild(contentDescription);
      //Put the contentDescription in the h2 container

      div.appendChild(containerh2);
      //Connect the h2 container with the div container

      let currentDiv = document.getElementById(`div1`);
      // ???
      document.body.insertBefore(div, currentDiv);
      // Indicate where insert the new container inthe DOM
    }
  })
  .catch(function(error: string) {
    // handle error
    console.log(error);
  });
