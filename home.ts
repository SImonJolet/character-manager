// import axios from 'axios';
import axios from "axios"

axios.get('https://character-database.becode.xyz/characters')
  .then(function (response) {
    // handle success
    let result = response.data;

    const tpl = document.querySelector("#tpl-hero");
    const target = document.querySelector("#target");
  
    const displayHero = el => {
      const elt = tpl.cloneNode(true).content;
  
      elt.querySelector(".name").innerHTML = el.name;
      elt.querySelector(".shortDescription").innerHTML = el.shortDescription;
  
      // elt.querySelector(".powers").innerHTML = el.abilities.join(", ");
  
      target.appendChild(elt);
    };
    result.forEach(displayHero);

  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })