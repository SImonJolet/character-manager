import axios from "axios";
const api = "https://character-database.becode.xyz";

axios
  .get(`${api}/characters`)
  .then(function(response: any) {
    // handle success
    let result = response.data;
    console.log(result);

    const tpl = document.querySelector("#tpl-hero");
    const target = document.querySelector("#target");
    function deleteHero(id: string) {
      console.log("caca");

      console.log(id);
    }
    const displayHero = (el: any) => {
      const elt = tpl!.cloneNode(true).content;
      console.log(el.id);

      elt.querySelector(".name").innerHTML = el.name;
      elt.querySelector(".shortDescription").innerHTML = el.shortDescription;
      elt.querySelector("img").src = `data:image/png;base64,${el.image}`;

      elt.querySelector(".btnOpen").innerHTML = `
      <a href="./characters.html?id=${el.id}" target="_blank"><button type="button" id="btnOpen">Open</button></a>
     `;
      elt.querySelector(".btnDelete").innerHTML = `
      <button type="button" id="btnDelete" onClick="deleteHero(${el.id})">Delete</button>`;
      elt.querySelector(
        ".btnEdit"
      ).innerHTML = `<a href="./edit.html?id=${el.id}"><button>Edit</button></a>`;

      target.appendChild(elt);
    };
    result.forEach(displayHero);
  })
  .catch(function(error: string) {
    // handle error
    console.log(error);
  });
