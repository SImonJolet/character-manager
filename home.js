"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var api = "https://character-database.becode.xyz";
axios_1["default"]
    .get(api + "/characters")
    .then(function (response) {
    // handle success
    var result = response.data;
    console.log(result);
    var tpl = document.querySelector("#tpl-hero");
    var target = document.querySelector("#target");
    var displayHero = function (el) {
        var elt = tpl.cloneNode(true).content;
        console.log(el.id);
        //   async function deleteHero(id: string) {
        //     console.log("Do you want to delete it ?");
        //     await axios.delete(el);
        //   }
        //   console.log(deleteHero);
        //   const edit = () => {};
        elt.querySelector(".name").innerHTML = el.name;
        elt.querySelector(".shortDescription").innerHTML = el.shortDescription;
        elt.querySelector("img").src = "data:image/png;base64," + el.image;
        // elt.querySelector("#open").onClick = function() {
        //   openHero(el.id);
        //   console.log(el.id);
        // };
        // elt.querySelector("#delete").onClick = function() {
        //   deleteHero(el.id);
        // };
        // elt.querySelector(".powers").innerHTML = el.abilities.join(", ");
        // elt.getElementById("open").onclick = () => {
        //   return open(el);
        // };
        // let open = el => {
        //   const tplsingleChar = document.querySelector("#tpl-singleChar");
        // };
        target.appendChild(elt);
    };
    result.forEach(displayHero);
})["catch"](function (error) {
    // handle error
    console.log(error);
});
