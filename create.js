"use strict";
exports.__esModule = true;
var api = "https://character-database.becode.xyz";
document.getElementById("submitCreate").onclick = function (test) {
    test.preventDefault();
    var name = document.getElementById("nameForm").value;
    var shortDescription = document.getElementById("shortDescirptionCreate").value;
    var img = document.getElementById("file").files;
    console.log(img);
    // axios.post(`${api}/characters`, {
    //     name: name,
    //     shortDescription: shortDescription,
    //   })
    //   .then(function (response) {
    //     console.log(response);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
};
