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
        elt.querySelector(".name").innerHTML = el.name;
        elt.querySelector(".shortDescription").innerHTML = el.shortDescription;
        elt.querySelector("img").src = "data:image/png;base64," + el.image;
        elt.querySelector(".btnOpen").innerHTML = "\n      <a href=\"./characters.html?id=" + el.id + "\"><button type=\"button\" id=\"btnOpen\">Open</button></a>\n     ";
        elt.querySelector(".btnDelete").innerHTML = "\n      <a href=\"#\"><button type=\"button\" id=\"btnDelete\">Delete</button></a>";
        elt.querySelector(".btnEdit").innerHTML = "<a href=\"./edit.html?id=" + el.id + "\"><button>Edit</button></a>";
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
