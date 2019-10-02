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

    const displayHero = el => {
      const elt = tpl.cloneNode(true).content;
      console.log(el.id);

      // async function deleteHero(id: string) {
      //   console.log("Do you want to delete it ?");
      //   await axios.delete(el);
      // }
      // console.log(deleteHero);

      // const edit = () => {};

      elt.querySelector(".name").innerHTML = el.name;
      elt.querySelector(".shortDescription").innerHTML = el.shortDescription;
      elt.querySelector("img").src = `data:image/png;base64,${el.image}`;
      // elt.querySelector("#open").onClick = function() {
      //   openHero(el.id);
      //   console.log(el.id);
      // };
      // elt.querySelector("#delete").onClick = function() {
      //   deleteHero(el.id);
      // };
      // elt.querySelector(".powers").innerHTML = el.abilities.join(", ");

      // elt.getElementById("open").onclick = () => {
      //   return open(el);
      // };

      // let open = el => {
      //   const tplsingleChar = document.querySelector("#tpl-singleChar");

      // };

      target.appendChild(elt);
    };
    result.forEach(displayHero);
  })
  .catch(function(error: string) {
    // handle error
    console.log(error);
  });
