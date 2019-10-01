import axios from "axios";
const api = "https://character-database.becode.xyz";
axios
  .get(`${api}/characters`)
  .then(function(response: any) {
    // handle success
    let result = response.data;

    const tpl = document.querySelector("#tpl-hero");
    const target = document.querySelector("#target");

    const displayHero = el => {
      const elt = tpl.cloneNode(true).content;

      elt.querySelector(".name").innerHTML = el.name;
      elt.querySelector(".shortDescription").innerHTML = el.shortDescription;
      elt.querySelector("img").src = `data:image/png;base64,${el.image}`;

      // elt.querySelector(".powers").innerHTML = el.abilities.join(", ");

      target.appendChild(elt);
    };
    result.forEach(displayHero);
  })
  .catch(function(error: string) {
    // handle error
    console.log(error);
  });
