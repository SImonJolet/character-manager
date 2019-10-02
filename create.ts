import axios from "axios";
const api = "https://character-database.becode.xyz";

document.getElementById("submitCreate").onclick = test => {
  test.preventDefault();
  let name = document.getElementById("nameForm").value;
  let shortDescription = document.getElementById("shortDescirptionCreate")
    .value;
  let description = document.getElementById("descriptionForm").value;
  let img = document.getElementById("file").files;
  console.log(img);
  axios
    .post(`${api}/characters`, {
      name: name,
      shortDescription: shortDescription,
      description: description
    })
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log(error);
    });
};
