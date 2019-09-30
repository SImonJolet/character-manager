import axios from "axios";
const api = "https://character-database.becode.xyz/";
axios
  .get(`${api}characters`)
  .then(function(response: any) {
    // handle success
    let result = response.data;
    // console.log(response);
    console.log(result);
    for (let i = 0; i < result.length; i++) {
      let name = result[i].name;
      let shortDescription = result[i].shortDescription;
      let image = result[i].image;
      console.log(name);
      console.log(shortDescription);

      let div = document.createElement("div");
      let content = document.createTextNode(
        `Bonjour, je suis ${name} et je me décris comme étant ${shortDescription}`
      );
      div.appendChild(content);
      var currentDiv = document.getElementById(`div1`);
      document.body.insertBefore(div, currentDiv);
    }
  })
  .catch(function(error: string) {
    // handle error
    console.log(error);
  });
