"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var api = "https://character-database.becode.xyz";
axios_1["default"]
    .get(api + "/characters")
    .then(function (response) {
    // handle success
    var result = response.data;
    var tpl = document.querySelector("#tpl-hero");
    var target = document.querySelector("#target");
    var displayHero = function (el) {
        var elt = tpl.cloneNode(true).content;
        elt.querySelector(".name").innerHTML = el.name;
        elt.querySelector(".shortDescription").innerHTML = el.shortDescription;
        // elt.querySelector(".powers").innerHTML = el.abilities.join(", ");
        target.appendChild(elt);
    };
    result.forEach(displayHero);
})["catch"](function (error) {
    // handle error
    console.log(error);
});