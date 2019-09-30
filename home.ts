// import axios from 'axios';
import axios from "axios";

axios
  .get("https://character-database.becode.xyz/characters")
  .then(function(response) {
    // handle success
    let result = response.data;
    // console.log(response);
    console.log(result);
  })
  .catch(function(error) {
    // handle error
    console.log(error);
  });
