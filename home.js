var axios = require("axios");
var api = "https://character-database.becode.xyz/";
// async function getPerso() {
//     let result = await axios.get(`https://character-database.becode.xyz/characters`);
//   console.log(result);
//   const array = result.data;
//   console.log(array);
//   array.forEach((element: { name: string }) => {
//     console.log(`${element.name}`);
//   });
// }
axios
    .get(api + "/characters")
    .then(function (response) {
    console.log(response);
})["catch"](function (error) {
    console.log(error);
});
