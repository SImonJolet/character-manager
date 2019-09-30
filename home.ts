import axios from "axios";
const api = "https://character-database.becode.xyz/";
axios
  .get(`${api}characters`)
  .then(function(response: any) {
    // handle success
    let result = response.data;
    // console.log(response);
    console.log(result);
    console.log(result[1].description);
    for (let i = 0; i < result.length; i++) {
      console.log(
        `Je suis ${result[i].name}, je me décris comme étant ${result[i].shortDescription}`
      );
    }
  })
  .catch(function(error: string) {
    // handle error
    console.log(error);
  });
