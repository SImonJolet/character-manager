import axios from "axios";
const api = "https://character-database.becode.xyz";
axios
  .get(`${api}/characters`)
  .then(function(response: any) {
    // handle success
    let result = response.data;
    // console.log(response);
    console.log(result);

    const template = document.querySelector("#tpl-hero");
    const target = document.querySelector("#target");
    result.forEach(element => {
      const displayHero = element => {
        const elt = template.cloneNode(true).content;
      };
    });
  })
  .catch(function(error: string) {
    // handle error
    console.log(error);
  });
