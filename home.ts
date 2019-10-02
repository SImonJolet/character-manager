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
      <button type="button" value=${el.id} class="btnDeleteFunct">Delete</button>`;
      elt.querySelector(
        ".btnEdit"
      ).innerHTML = `<a href="./edit.html?id=${el.id}"><button>Edit</button></a>`;

      target.appendChild(elt);
    };
    result.forEach(displayHero);
    const bts = document.querySelectorAll(".btnDeleteFunct");
    console.log(bts);
    bts.forEach(el => {
      el.addEventListener("click", () => {
        const id: string = (<HTMLInputElement>el).value;
        console.log(id);
        if (confirm("Are you sure ?? I mean, for real ?"))
          axios.delete(`${api}/characters/${id}`).then(function(response: any) {
            document.location.reload(true);
          });
      });
    });
  })
  .catch(function(error: string) {
    // handle error
    console.log(error);
  });
