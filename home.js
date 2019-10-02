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
    function deleteHero(id) {
        console.log("caca");
        console.log(id);
    }
    var displayHero = function (el) {
        var elt = tpl.cloneNode(true).content;
        console.log(el.id);
        elt.querySelector(".name").innerHTML = el.name;
        elt.querySelector(".shortDescription").innerHTML = el.shortDescription;
        elt.querySelector("img").src = "data:image/png;base64," + el.image;
        elt.querySelector(".btnOpen").innerHTML = "\n      <a href=\"./characters.html?id=" + el.id + "\" target=\"_blank\"><button type=\"button\" id=\"btnOpen\">Open</button></a>\n     ";
        elt.querySelector(".btnDelete").innerHTML = "\n      <button type=\"button\" id=\"btnDelete\" onClick=\"deleteHero(" + el.id + ")\">Delete</button>";
        elt.querySelector(".btnEdit").innerHTML = "<a href=\"./edit.html?id=" + el.id + "\"><button>Edit</button></a>";
        target.appendChild(elt);
    };
    result.forEach(displayHero);
})["catch"](function (error) {
    // handle error
    console.log(error);
});
