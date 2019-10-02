import axios from "axios";
const api = "https://character-database.becode.xyz";
axios
  .get(`${api}/characters`)
  .then(function(response: any) {
    // handle success
    let result = response.data;
    // console.log(response);
    console.log(result);
    let template: string;
    result.forEach(element => {
      template += `<div id="simon">${element.name}</div>`;
document.
    });
  })
  .catch(function(error: string) {
    // handle error
    console.log(error);
  });
